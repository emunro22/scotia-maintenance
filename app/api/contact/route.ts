import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import {
  customerConfirmationHtml,
  customerConfirmationText,
  ownerNotificationHtml,
  ownerNotificationText,
  type Enquiry,
} from '@/lib/email';
import { site } from '@/lib/site';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type Payload = {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  source?: string;
  company?: string;
  elapsed?: number;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phonePattern = /^[0-9+()\s-]{9,}$/;

/**
 * Where enquiries are delivered. Deliberately separate from `site.email`, which
 * is the address published across the site: this one is never rendered.
 * Override with CONTACT_TO_EMAIL.
 */
const ENQUIRY_RECIPIENT = 'scott.davidson4@icloud.com';

/** Must be an address on a domain verified in Resend. Override with CONTACT_FROM_EMAIL. */
const ENQUIRY_SENDER = `${site.name} <enquiries@scotiamaintenance.com>`;

/** Very small in-memory throttle. Resets on cold start; a deterrent, not a guarantee. */
const recent = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function rateLimited(key: string): boolean {
  const now = Date.now();
  const hits = (recent.get(key) || []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  recent.set(key, hits);
  return hits.length > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: 'Enquiry could not be read. Please try again.' }, { status: 400 });
  }

  const name = (body.name || '').trim();
  const phone = (body.phone || '').trim();
  const email = (body.email || '').trim();
  const message = (body.message || '').trim();
  const source = (body.source || 'website').trim().slice(0, 60);

  // Honeypot: hidden field completed, or the form submitted implausibly fast.
  if ((body.company || '').trim() !== '' || (typeof body.elapsed === 'number' && body.elapsed < 1500)) {
    return NextResponse.json({ ok: true });
  }

  if (name.length < 2 || !phonePattern.test(phone) || !emailPattern.test(email)) {
    return NextResponse.json(
      { error: 'Please check your name, phone number and email address.' },
      { status: 422 },
    );
  }

  if (message.length > 4000) {
    return NextResponse.json({ error: 'That message is too long to send.' }, { status: 422 });
  }

  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown';

  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: `Too many enquiries from this connection. Please call ${site.phone} instead.` },
      { status: 429 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || ENQUIRY_RECIPIENT;
  const from = process.env.CONTACT_FROM_EMAIL || ENQUIRY_SENDER;

  if (!apiKey) {
    console.error('RESEND_API_KEY is not set; enquiry was not sent.');
    return NextResponse.json(
      { error: `Enquiries are temporarily unavailable. Please call ${site.phone}.` },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const enquiry: Enquiry = { name, phone, email, message, source, receivedAt: new Date() };

  // The notification to Scotia Maintenance is the one that must land. If it
  // fails the customer is told, so nobody is left believing an enquiry arrived.
  try {
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `New enquiry from ${name} (${source})`,
      text: ownerNotificationText(enquiry),
      html: ownerNotificationHtml(enquiry),
    });

    if (error) {
      console.error('Resend error sending owner notification:', error);
      return NextResponse.json(
        { error: `The enquiry could not be sent. Please call ${site.phone}.` },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error('Contact route failure sending owner notification:', err);
    return NextResponse.json(
      { error: `The enquiry could not be sent. Please call ${site.phone}.` },
      { status: 500 },
    );
  }

  // The customer acknowledgement is a courtesy: a failure here is logged but
  // never surfaced, because the enquiry itself has already been delivered.
  try {
    const { error } = await resend.emails.send({
      from,
      to: [email],
      replyTo: to,
      subject: `We have got your enquiry, ${name.trim().split(/\s+/)[0]}`,
      text: customerConfirmationText(enquiry),
      html: customerConfirmationHtml(enquiry),
    });

    if (error) {
      console.error('Resend error sending customer confirmation:', error);
    }
  } catch (err) {
    console.error('Contact route failure sending customer confirmation:', err);
  }

  return NextResponse.json({ ok: true });
}
