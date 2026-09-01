import type { Metadata } from 'next';
import Link from 'next/link';
import { areasAlphabetical } from '@/lib/areas';
import { services } from '@/lib/services';
import { canonical, site } from '@/lib/site';

const title = 'Enquiry Received | Scotia Maintenance';
const description =
  'Your enquiry has reached Scotia Maintenance. For anything urgent, call 07766 636189 between 8am and 4pm, seven days a week.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonical('/thank-you') },
  robots: { index: false, follow: true },
  openGraph: { title, description, url: canonical('/thank-you'), images: [{ url: site.ogImage, width: 1200, height: 630, alt: 'Scotia Maintenance' }] },
  twitter: { card: 'summary_large_image', title, description, images: [site.ogImage] },
};

export default function ThankYouPage() {
  return (
    <section className="container-page py-16 lg:py-24">
      <div className="max-w-2xl">
        <p className="eyebrow">Enquiry received</p>
        <h1 className="mt-2 text-[2.2rem] leading-[1.1] sm:text-[3rem]">
          Thanks — your enquiry has come through
        </h1>
        <p className="copy mt-5 text-[1.1rem]">
          Scotia Maintenance has your details and will get back to you to arrange a visit and a
          free quote. Enquiries are answered during working hours, Monday to Sunday between
          8:00am and 4:00pm.
        </p>

        <div className="mt-8 rounded-card border border-navy/15 bg-navy p-6 text-white sm:p-8">
          <h2 className="text-[1.25rem] text-white">Need an answer sooner?</h2>
          <p className="mt-2 text-[0.975rem] text-white/75">
            Calling is always the quickest way to get something arranged.
          </p>
          <a href={site.phoneHref} className="btn-primary mt-5">
            Call {site.phone}
          </a>
          <p className="mt-4 text-sm text-white/70">
            Or email{' '}
            <a href={`mailto:${site.email}`} className="break-all underline underline-offset-4 hover:text-cyan-light">
              {site.email}
            </a>
          </p>
        </div>

        <div className="mt-12 border-t border-stone pt-8">
          <h2 className="text-[1.35rem]">What happens next</h2>
          <p className="copy mt-3 max-w-prose">
            Your enquiry goes straight to Scotia Maintenance by email, along with the page you
            sent it from so the reply has the right context. You will normally hear back within
            working hours to arrange a time to look at the garden.
          </p>
          <p className="copy mt-4 max-w-prose">
            Every quote follows a visit to the property. Access, levels, ground conditions and
            the amount of clearance needed all change what a job involves, and none of that is
            reliably visible from a description or a photograph. Seeing the space first means the
            price reflects the actual work rather than a guess. There is no charge for the visit
            and no obligation to go ahead with anything.
          </p>
          <p className="copy mt-4 max-w-prose">
            If the work is seasonal — a hedge that needs cut at a particular point in the year,
            or a lawn that is too soft to work on yet — that will be explained rather than
            squeezed into the first available slot. Scotia Maintenance works Monday to Sunday
            between 8:00am and 4:00pm, so weekend visits are straightforward to arrange.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-[1.15rem]">While you are here</h2>
            <ul className="mt-3 space-y-2 text-[0.95rem]">
              {services.slice(0, 4).map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="text-blue-brand hover:underline">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[1.15rem]">Areas covered</h2>
            <ul className="mt-3 space-y-2 text-[0.95rem]">
              {areasAlphabetical.slice(0, 4).map((area) => (
                <li key={area.slug}>
                  <Link href={`/areas/${area.slug}`} className="text-blue-brand hover:underline">
                    Landscaping in {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/areas" className="font-semibold text-navy hover:text-blue-brand">
                  All twenty areas
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
