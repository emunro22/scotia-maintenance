import { NextResponse } from 'next/server';
import { Resend } from 'resend';

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

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
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
      { error: 'Too many enquiries from this connection. Please call 07766 636189 instead.' },
      { status: 429 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || 'scottyboi1981@gmail.com';
  const from = process.env.CONTACT_FROM_EMAIL || 'Scotia Maintenance <onboarding@resend.dev>';

  if (!apiKey) {
    console.error('RESEND_API_KEY is not set; enquiry was not sent.');
    return NextResponse.json(
      { error: 'Enquiries are temporarily unavailable. Please call 07766 636189.' },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);

  const text = [
    `New website enquiry: ${source}`,
    '',
    `Name:    ${name}`,
    `Phone:   ${phone}`,
    `Email:   ${email}`,
    `Source:  ${source}`,
    '',
    'Message:',
    message || '(no message provided)',
  ].join('\n');

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#14181d;line-height:1.6">
      <h2 style="color:#0e2a52;margin:0 0 4px">New website enquiry</h2>
      <p style="margin:0 0 20px;color:#5b6470">Page: ${escapeHtml(source)}</p>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse">
        <tr><td style="padding:4px 24px 4px 0;color:#5b6470">Name</td><td><strong>${escapeHtml(name)}</strong></td></tr>
        <tr><td style="padding:4px 24px 4px 0;color:#5b6470">Phone</td><td><a href="tel:${escapeHtml(phone.replace(/\s/g, ''))}">${escapeHtml(phone)}</a></td></tr>
        <tr><td style="padding:4px 24px 4px 0;color:#5b6470">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
      </table>
      <h3 style="color:#0e2a52;margin:24px 0 6px">Message</h3>
      <p style="white-space:pre-wrap;margin:0">${escapeHtml(message || '(no message provided)')}</p>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Website enquiry from ${name} (${source})`,
      text,
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'The enquiry could not be sent. Please call 07766 636189.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact route failure:', err);
    return NextResponse.json(
      { error: 'The enquiry could not be sent. Please call 07766 636189.' },
      { status: 500 },
    );
  }
}
