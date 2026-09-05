'use client';

import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';

type Props = {
  /** Identifies the page the enquiry came from, e.g. "homepage", "area-paisley". */
  source: string;
  /** Optional context line pre-filled into the message field. */
  placeholder?: string;
};

type Errors = Partial<Record<'name' | 'phone' | 'email' | 'form', string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phonePattern = /^[0-9+()\s-]{9,}$/;

export default function ContactForm({ source, placeholder }: Props) {
  const router = useRouter();
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const startedAt = useRef(Date.now());

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get('name') || '').trim(),
      phone: String(data.get('phone') || '').trim(),
      email: String(data.get('email') || '').trim(),
      message: String(data.get('message') || '').trim(),
      source: String(data.get('source') || 'website'),
      company: String(data.get('company') || ''),
      elapsed: Date.now() - startedAt.current,
    };

    const nextErrors: Errors = {};
    if (payload.name.length < 2) nextErrors.name = 'Enter your name so we know who to contact.';
    if (!phonePattern.test(payload.phone)) nextErrors.phone = 'Enter a phone number we can reach you on.';
    if (!emailPattern.test(payload.email)) nextErrors.email = 'Enter a valid email address.';

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const first = form.querySelector<HTMLElement>('[aria-invalid="true"]');
      first?.focus();
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => ({}))) as { error?: string };
        setErrors({
          form:
            body.error ||
            'The enquiry could not be sent. Please try again, or call 07766 636189.',
        });
        setSubmitting(false);
        return;
      }

      router.push('/thank-you');
    } catch {
      setErrors({
        form: 'The enquiry could not be sent. Check your connection, or call 07766 636189.',
      });
      setSubmitting(false);
    }
  }

  const fieldClass =
    'mt-1.5 w-full rounded-card border border-navy/20 bg-white px-4 py-3 text-[1rem] text-ink placeholder:text-ink/35 focus:border-blue-brand focus:outline-none focus:ring-2 focus:ring-cyan-brand/40 aria-[invalid=true]:border-red-600';

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <input type="hidden" name="source" value={source} />

      {/* Honeypot: hidden from people, tempting to bots. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {errors.form && (
        <p role="alert" className="rounded-card border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800">
          {errors.form}
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-navy">
            Your name <span className="text-red-700">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={fieldClass}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-sm text-red-700">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-navy">
            Phone number <span className="text-red-700">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            className={fieldClass}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1.5 text-sm text-red-700">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-semibold text-navy">
          Email address <span className="text-red-700">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={fieldClass}
        />
        {errors.email && (
          <p id="email-error" className="mt-1.5 text-sm text-red-700">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-semibold text-navy">
          What do you need done?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={fieldClass}
          placeholder={
            placeholder ||
            'A short description of the garden and the work: size, condition and where you are.'
          }
        />
      </div>

      <button type="submit" disabled={submitting} className="btn-primary w-full disabled:opacity-70 sm:w-auto">
        {submitting ? 'Sending your enquiry…' : 'Send enquiry'}
      </button>

      <p className="text-sm text-ink/60">
        Enquiries go straight to Scotia Maintenance. Details are used to reply to you and are
        never sold or shared, see the{' '}
        <a href="/privacy-policy" className="text-blue-brand underline underline-offset-4">
          privacy policy
        </a>
        .
      </p>
    </form>
  );
}
