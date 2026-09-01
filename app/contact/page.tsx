import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactForm from '@/components/ContactForm';
import JsonLd from '@/components/JsonLd';
import { areasAlphabetical } from '@/lib/areas';
import { breadcrumbSchema } from '@/lib/schema';
import { canonical, site } from '@/lib/site';

const title = 'Contact Scotia Maintenance | Landscaping Quotes';
const description =
  'Contact Scotia Maintenance for landscaping and garden maintenance across Glasgow and surrounding areas. Call 07766 636189 or send an enquiry for a free quote.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonical('/contact') },
  openGraph: {
    title,
    description,
    url: canonical('/contact'),
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: 'Contact Scotia Maintenance' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: [site.ogImage] },
};

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Contact', href: '/contact' },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: canonical(c.href) })))} />

      <div className="container-page pt-6">
        <Breadcrumbs items={crumbs} />
      </div>

      <section className="container-page py-8 lg:py-12">
        <h1 className="max-w-3xl text-[2.2rem] leading-[1.1] sm:text-[3rem]">
          Contact Scotia Maintenance
        </h1>
        <p className="copy mt-5 max-w-prose text-[1.1rem]">
          Call for the quickest answer, or send an enquiry and Scotia Maintenance will get back
          to you to arrange a visit. Quotes are free and given after seeing the garden.
        </p>
      </section>

      <section className="container-page grid gap-12 pb-16 lg:grid-cols-[1fr_360px] lg:gap-16">
        <div className="rounded-card border border-stone p-6 sm:p-8">
          <h2 className="text-2xl">Send an enquiry</h2>
          <p className="copy mt-3 max-w-prose">
            Fields marked with an asterisk are required. A phone number and email address both
            help, since some questions are quicker to sort out with a call.
          </p>
          <div className="mt-8">
            <ContactForm source="contact-page" />
          </div>

          <div className="mt-10 border-t border-stone pt-8">
            <h2 className="text-[1.25rem]">What to include</h2>
            <p className="copy mt-3 max-w-prose">
              The more detail in the message, the more useful the first reply will be. It helps
              to know roughly how big the garden is, what condition it is currently in, and
              whether you are after a one-off job or regular visits through the season. If
              something specific has gone wrong — a lawn that stays waterlogged, a hedge that has
              got out of hand, a slope that has become difficult to manage — mention it, because
              those problems often decide what the right approach is.
            </p>
            <p className="copy mt-4 max-w-prose">
              Access is worth flagging too. Gardens reached only through a close, a shared lane
              or a narrow side gate limit what can be brought in and taken out, which changes how
              a larger job is best staged. It is far better to know that in advance than to
              discover it on the day.
            </p>
            <p className="copy mt-4 max-w-prose">
              Every quote follows a visit to the property. A price given over the phone or from a
              photograph is a guess, because levels, ground conditions and the amount of
              clearance needed are not visible until the garden has been seen. There is no charge
              for the visit and no obligation to go ahead.
            </p>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-card border border-navy/15 bg-navy p-6 text-white">
            <h2 className="text-[1.2rem] text-white">Call directly</h2>
            <a
              href={site.phoneHref}
              className="mt-2 block font-display text-3xl font-bold text-white hover:text-cyan-light"
            >
              {site.phone}
            </a>
            <p className="mt-3 text-[0.95rem] text-white/75">
              Monday to Sunday, 8:00am to 4:00pm.
            </p>
            <a href={site.phoneHref} className="btn-primary mt-5 w-full">
              Call Scotia Maintenance
            </a>
          </div>

          <div className="rounded-card border border-stone p-6">
            <h2 className="text-[1.1rem]">Email</h2>
            <p className="mt-2 text-[0.95rem]">
              <a href={`mailto:${site.email}`} className="break-all text-blue-brand hover:underline">
                {site.email}
              </a>
            </p>

            <h2 className="mt-6 text-[1.1rem]">Opening hours</h2>
            <dl className="mt-2 space-y-1 text-[0.95rem] text-ink/80">
              <div className="flex justify-between gap-4">
                <dt>Monday to Sunday</dt>
                <dd>8:00am – 4:00pm</dd>
              </div>
            </dl>

            <h2 className="mt-6 text-[1.1rem]">Where we work</h2>
            <p className="mt-2 text-[0.95rem] text-ink/75">
              Scotia Maintenance is a service-area business covering customers&rsquo; properties
              across Glasgow and the surrounding towns rather than operating from a public
              premises.
            </p>
          </div>

          <div className="rounded-card border border-stone p-6">
            <h2 className="text-[1.1rem]">Areas covered</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-[0.9rem]">
              {areasAlphabetical.map((area) => (
                <li key={area.slug}>
                  <Link href={`/areas/${area.slug}`} className="text-blue-brand hover:underline">
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-stone pt-4 text-[0.9rem]">
              <Link href="/services" className="font-semibold text-navy hover:text-blue-brand">
                Browse all services
              </Link>
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
