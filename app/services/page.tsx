import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import QuoteSection from '@/components/QuoteSection';
import Reveal from '@/components/Reveal';
import SpecialismGrid from '@/components/SpecialismGrid';
import { services } from '@/lib/services';
import { breadcrumbSchema } from '@/lib/schema';
import { canonical, site } from '@/lib/site';

const title = 'Landscaping & Garden Services | Scotia Maintenance';
const description =
  'Landscaping, garden maintenance, lawn care, planting and outdoor maintenance across Glasgow and surrounding areas. Call Scotia Maintenance on 07766 636189.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonical('/services') },
  openGraph: {
    title,
    description,
    url: canonical('/services'),
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: 'Scotia Maintenance services' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: [site.ogImage] },
};

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: canonical(c.href) })))} />

      <div className="container-page pt-6">
        <Breadcrumbs items={crumbs} />
      </div>

      <section className="container-page py-8 lg:py-12">
        <Reveal>
          <p className="eyebrow">Every service</p>
          <h1 className="mt-3 max-w-3xl text-[2.2rem] leading-[1.1] sm:text-[3rem]">
            Landscaping and garden services across Glasgow and the west
          </h1>
          <p className="copy mt-5 max-w-prose text-[1.1rem]">
            Everything from a regular grass cut to reshaping a garden that has stopped working.
            Each service is available across all twenty towns Scotia Maintenance covers, seven
            days a week from 8am to 4pm.
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

      <section className="container-page pb-8">
        <ul className="grid gap-8 sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal
              as="li"
              key={service.slug}
              delay={0.05 * (i % 2)}
              className="group overflow-hidden rounded-card border border-stone transition-all duration-300 hover:-translate-y-1 hover:border-cyan-brand/40 hover:shadow-[0_20px_40px_-24px_rgba(14,42,82,0.35)]"
            >
              <Link href={`/services/${service.slug}`} className="block">
                <div className="overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    width={1200}
                    height={900}
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-[1.35rem] group-hover:text-blue-brand">{service.name}</h2>
                  <p className="mt-3 text-[0.975rem] leading-relaxed text-ink/75">
                    {service.shortDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[0.9rem] font-semibold text-blue-brand">
                    More about {service.navLabel.toLowerCase()}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
                      <path d="M2 7h10M8 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="container-page py-14 sm:py-16">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow">Everything covered</p>
            <h2 className="mt-3 text-3xl sm:text-[2.4rem]">The full list of what we do</h2>
            <p className="copy mt-4">
              The six headings above are where the detail sits. Underneath each one is the
              specific work it covers, from turfing and drainage through to stonemasonry and
              retaining walls. If something you need is on this list, it is work Scotia
              Maintenance takes on directly rather than passes to someone else.
            </p>
          </div>
        </Reveal>

        <div className="mt-12">
          <SpecialismGrid />
        </div>
      </section>

      <QuoteSection
        source="services-hub"
        heading="Ask about any of these services"
        intro="Describe the garden and where you are, and Scotia Maintenance will get back to you to arrange a visit and a free quote."
      />
    </>
  );
}
