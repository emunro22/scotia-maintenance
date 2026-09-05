import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { canonical, site } from '@/lib/site';

const title = 'Terms & Conditions | Scotia Maintenance';
const description =
  'The terms on which Scotia Maintenance provides landscaping and garden maintenance services, covering quotes, access, payment, cancellation and liability.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonical('/terms') },
  openGraph: {
    title,
    description,
    url: canonical('/terms'),
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: 'Scotia Maintenance' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: [site.ogImage] },
};

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Terms', href: '/terms' },
];

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: canonical(c.href) })))} />

      <div className="container-page pt-6">
        <Breadcrumbs items={crumbs} />
      </div>

      <section className="container-page py-8 lg:py-12">
        <h1 className="max-w-3xl text-[2.2rem] leading-[1.1] sm:text-[3rem]">
          Terms and conditions
        </h1>
        <p className="mt-4 text-sm text-ink/60">Last updated: 1 September 2026</p>
      </section>

      <section className="container-page pb-16">
        <div className="copy max-w-prose">
          <p>
            These terms apply to landscaping, garden maintenance and related outdoor work
            provided by Scotia Maintenance to domestic customers across Glasgow and the
            surrounding areas. They also cover use of this website.
          </p>

          <h2 className="mt-12 text-2xl">1. Quotes</h2>
          <p className="mt-4">
            Quotes are provided after visiting the property, because access, levels, ground
            conditions and the amount of clearance required all affect the work involved. Any
            figure discussed before a visit is an indication only and is not binding.
          </p>
          <p>
            A quote covers the work described in it. If additional work is identified once the
            job is underway (for example buried debris, unstable retaining structures, drainage
            problems or ground conditions that were not visible beforehand), this will be raised
            with you and priced separately before it is carried out.
          </p>
          <p>
            Unless stated otherwise, a quote remains valid for 30 days.
          </p>

          <h2 className="mt-12 text-2xl">2. Booking and scheduling</h2>
          <p className="mt-4">
            Work is scheduled by agreement. Scotia Maintenance works Monday to Sunday between
            8:00am and 4:00pm. Garden work depends heavily on weather and ground conditions, and
            visits may need to be rescheduled where conditions would make the work unsafe or
            would damage the garden, for example cutting a saturated lawn, or working at height
            in high wind. Where a visit is rescheduled, you will be told as soon as reasonably
            possible and an alternative arranged.
          </p>

          <h2 className="mt-12 text-2xl">3. Access and site conditions</h2>
          <p className="mt-4">
            You are responsible for providing safe access to the areas where work is to be
            carried out, including access through gates, closes, shared paths or side entrances.
            Please make sure pets are kept safely indoors, and that vehicles are moved where
            access or parking is needed.
          </p>
          <p>
            Before work begins, please point out anything that is not obvious: buried services,
            irrigation or lighting cables, private drainage, septic systems, boundary lines in
            dispute, and any planting that must not be cut or removed. Scotia Maintenance cannot
            accept responsibility for damage to unmarked underground services or to items that
            were not identified.
          </p>

          <h2 className="mt-12 text-2xl">4. Boundaries, trees and permissions</h2>
          <p className="mt-4">
            You confirm that you own the property or are authorised to instruct work on it, and
            that any work instructed is within your boundary. Where work affects a shared
            boundary, hedge or wall, it is your responsibility to obtain your neighbour&rsquo;s
            agreement.
          </p>
          <p>
            You are also responsible for telling Scotia Maintenance if any tree on the property
            is protected by a Tree Preservation Order or is located within a conservation area,
            or if any consent is required before work is carried out. Work of that kind will not
            proceed until the necessary permissions are in place.
          </p>
          <p>
            Care is taken to avoid disturbing nesting birds. Where active nesting is found in a
            hedge or tree, that section of work will be postponed until nesting has finished, in
            line with wildlife protection law.
          </p>

          <h2 className="mt-12 text-2xl">5. Waste</h2>
          <p className="mt-4">
            Green waste arising from the work is removed as part of the job unless the quote
            states otherwise. Removal of non-garden waste, building materials, rubble or items
            already on site is not included unless it has been specifically quoted for.
          </p>

          <h2 className="mt-12 text-2xl">6. Payment</h2>
          <p className="mt-4">
            Payment terms are agreed at the time of quoting. Unless stated otherwise, payment for
            completed work is due within 7 days of the invoice date. Larger landscaping projects
            may be invoiced in stages, and where materials are ordered specifically for a job a
            deposit may be required in advance.
          </p>
          <p>
            Regular maintenance visits are invoiced on the basis agreed at the outset, whether
            per visit, monthly or seasonally.
          </p>

          <h2 className="mt-12 text-2xl">7. Cancellation</h2>
          <p className="mt-4">
            Please give at least 48 hours&rsquo; notice to cancel or reschedule a booked visit.
            Cancellation at shorter notice may be charged where the time cannot be filled or
            where materials have already been ordered.
          </p>
          <p>
            Regular maintenance arrangements can be ended by either side with reasonable notice.
            There is no minimum contract term.
          </p>
          <p>
            Where you are a consumer and a contract for work was agreed away from business
            premises, you have a statutory right to cancel within 14 days. If you ask for work to
            begin within that period and then cancel, you may be charged for the work already
            carried out.
          </p>

          <h2 className="mt-12 text-2xl">8. Plants and living material</h2>
          <p className="mt-4">
            Plants, turf and other living material are affected by weather, soil, exposure,
            watering and general aftercare once work is complete. Suitable species are chosen for
            the conditions and planted properly, and aftercare guidance is given, but no
            guarantee can be offered that any specific plant will establish or survive.
          </p>

          <h2 className="mt-12 text-2xl">9. Standard of work and problems</h2>
          <p className="mt-4">
            Work is carried out with reasonable care and skill. If you are not satisfied with
            something, please raise it as soon as possible, ideally within 14 days of the work
            being completed, so it can be looked at and put right where appropriate. Nothing in
            these terms affects your statutory rights as a consumer under the Consumer Rights Act
            2015.
          </p>

          <h2 className="mt-12 text-2xl">10. Liability</h2>
          <p className="mt-4">
            Scotia Maintenance does not exclude or limit liability for death or personal injury
            caused by negligence, for fraud, or for anything else that cannot lawfully be
            excluded. Subject to that, liability in connection with the work is limited to the
            value of the work carried out, and does not extend to indirect or consequential loss.
          </p>

          <h2 className="mt-12 text-2xl">11. Website content</h2>
          <p className="mt-4">
            The content of this website is provided for general information about the services
            offered. Descriptions of typical work, local conditions and timescales are general
            guidance rather than a commitment about any particular garden, and specific advice is
            given only after seeing the property.
          </p>

          <h2 className="mt-12 text-2xl">12. Governing law</h2>
          <p className="mt-4">
            These terms are governed by the law of Scotland, and any dispute will be subject to
            the jurisdiction of the Scottish courts.
          </p>

          <p className="mt-10">
            Questions about these terms can be raised on{' '}
            <a href={site.phoneHref}>{site.phone}</a>, by email at{' '}
            <a href={`mailto:${site.email}`}>{site.email}</a>, or through the{' '}
            <Link href="/contact">contact page</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
