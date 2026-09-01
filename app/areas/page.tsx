import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import QuoteSection from '@/components/QuoteSection';
import Reveal from '@/components/Reveal';
import { areasAlphabetical } from '@/lib/areas';
import { breadcrumbSchema } from '@/lib/schema';
import { canonical, site } from '@/lib/site';

const title = 'Areas Covered | Landscaping Across Glasgow & the West';
const description =
  'Scotia Maintenance covers 20 towns across Glasgow, Renfrewshire, Dunbartonshire and Inverclyde for landscaping and garden maintenance. Call 07766 636189.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonical('/areas') },
  openGraph: {
    title,
    description,
    url: canonical('/areas'),
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: 'Scotia Maintenance service areas' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: [site.ogImage] },
};

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Areas covered', href: '/areas' },
];

export default function AreasPage() {
  const byRegion = areasAlphabetical.reduce<Record<string, typeof areasAlphabetical>>((acc, area) => {
    (acc[area.region] ||= []).push(area);
    return acc;
  }, {});

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: canonical(c.href) })))} />

      <div className="container-page pt-6">
        <Breadcrumbs items={crumbs} />
      </div>

      <section className="container-page py-8 lg:py-12">
        <Reveal>
          <p className="eyebrow">Coverage area</p>
          <h1 className="mt-3 max-w-3xl text-[2.2rem] leading-[1.1] sm:text-[3rem]">
            Landscaping and garden maintenance across twenty towns
          </h1>
          <p className="copy mt-5 max-w-prose text-[1.1rem]">
            Scotia Maintenance travels across Glasgow, Renfrewshire, West and East
            Dunbartonshire, South Lanarkshire and Inverclyde. Each area page explains what the
            gardens are like there and what the work usually involves.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={site.phoneHref} className="btn-navy">
              Call {site.phone}
            </a>
            <Link href="/contact" className="btn-outline">
              Get a free quote
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="container-page space-y-12 pb-8">
        {Object.entries(byRegion).map(([region, list]) => (
          <Reveal key={region}>
            <h2 className="text-2xl">{region}</h2>
            <ul className="mt-5 grid gap-px overflow-hidden rounded-card border border-stone bg-stone sm:grid-cols-2 lg:grid-cols-3">
              {list.map((area) => (
                <li key={area.slug} className="bg-white">
                  <Link
                    href={`/areas/${area.slug}`}
                    className="group flex h-full flex-col p-6 transition-colors hover:bg-mist"
                  >
                    <h3 className="text-[1.2rem] group-hover:text-blue-brand">
                      Landscaping in {area.name}
                    </h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/75">
                      {area.landmarks.slice(0, 3).join(', ')} and the surrounding streets.
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </section>

      <QuoteSection
        source="areas-hub"
        heading="Not sure if you are covered?"
        intro="Send your address and a short description of the garden, or call 07766 636189 and ask. Scotia Maintenance works seven days a week, 8am to 4pm."
      />
    </>
  );
}
