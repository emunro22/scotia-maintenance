import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import AreaMap from '@/components/AreaMap';
import Breadcrumbs from '@/components/Breadcrumbs';
import FaqList from '@/components/FaqList';
import JsonLd from '@/components/JsonLd';
import QuoteSection from '@/components/QuoteSection';
import Reveal from '@/components/Reveal';
import SpecialismGrid from '@/components/SpecialismGrid';
import { areas, getArea } from '@/lib/areas';
import { getService } from '@/lib/services';
import { breadcrumbSchema, faqSchema, localBusinessSchema } from '@/lib/schema';
import { canonical, site } from '@/lib/site';

type Params = { area: string };

export function generateStaticParams(): Params[] {
  return areas.map((area) => ({ area: area.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { area: slug } = await params;
  const area = getArea(slug);
  if (!area) return {};

  const url = canonical(`/areas/${area.slug}`);
  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      url,
      type: 'article',
      images: [
        { url: area.image, width: 1200, height: 900, alt: area.imageAlt },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: area.metaTitle,
      description: area.metaDescription,
      images: [area.image],
    },
  };
}

export default async function AreaPage({ params }: { params: Promise<Params> }) {
  const { area: slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const url = canonical(`/areas/${area.slug}`);
  const crumbs = [
    { name: 'Home', href: '/' },
    { name: 'Areas covered', href: '/areas' },
    { name: area.name, href: `/areas/${area.slug}` },
  ];

  const localBusiness = {
    ...localBusinessSchema(),
    '@id': `${url}#business`,
    name: `${site.name} - ${area.name}`,
    description: `Landscaping and garden maintenance in ${area.name}, ${area.region}.`,
    url,
    areaServed: [{ '@type': 'City', name: area.name }],
  };

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: canonical(c.href) }))),
          localBusiness,
          faqSchema(area.faqs),
        ]}
      />

      <div className="container-page pt-6">
        <Breadcrumbs items={crumbs} />
      </div>

      <section className="container-page grid items-start gap-10 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-12">
        <Reveal>
          <p className="eyebrow">{area.region}</p>
          <h1 className="mt-2 text-[2.2rem] leading-[1.1] sm:text-[2.9rem]">
            Landscaping and garden maintenance in {area.name}
          </h1>
          <p className="copy mt-5 max-w-prose text-[1.1rem]">{area.intro}</p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={site.phoneHref} className="btn-navy">
              Call {site.phone}
            </a>
            <Link href="#quote" className="btn-outline">
              Get a free quote
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="group overflow-hidden rounded-card border border-stone">
            <Image
              src={area.image}
              alt={area.imageAlt}
              width={1200}
              height={900}
              priority
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </Reveal>
      </section>

      <section className="container-page grid gap-12 py-8 lg:grid-cols-[1fr_320px] lg:gap-16">
        <div>
          <div className="copy max-w-prose">
            {area.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 rounded-card border border-stone bg-mist p-6">
            <h2 className="text-[1.25rem]">Travelling to {area.name}</h2>
            <p className="copy mt-3">{area.travel}</p>
          </div>

          <h2 className="mt-14 text-2xl sm:text-3xl">
            Landscaping services available in {area.name}
          </h2>
          <ul className="mt-6 grid gap-px overflow-hidden rounded-card border border-stone bg-stone sm:grid-cols-2">
            {area.services.map((serviceSlug) => {
              const service = getService(serviceSlug);
              if (!service) return null;
              return (
                <li key={service.slug} className="bg-white">
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex h-full flex-col p-6 transition-colors hover:bg-mist"
                  >
                    <h3 className="text-[1.15rem] group-hover:text-blue-brand">
                      {service.name} in {area.name}
                    </h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/75">
                      {service.shortDescription}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>

          <h2 className="mt-14 text-2xl sm:text-3xl">
            Every service we cover in {area.name}
          </h2>
          <p className="copy mt-4 max-w-prose">
            The headings above are the main routes into the work. This is the full list of what
            Scotia Maintenance takes on in {area.name} and the surrounding streets, all of it
            handled by our own team rather than passed to a subcontractor.
          </p>
          <div className="mt-8">
            <SpecialismGrid areaName={area.name} />
          </div>

          <h2 className="mt-14 text-2xl sm:text-3xl">Where Scotia Maintenance works in {area.name}</h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {area.landmarks.map((place) => (
              <li
                key={place}
                className="rounded-card border border-stone bg-white px-3.5 py-2 text-[0.9rem] text-ink/75"
              >
                {place}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <AreaMap query={area.mapQuery} title={`Map of ${area.name}, Scotland`} />
          </div>

          <h2 className="mt-14 text-2xl sm:text-3xl">
            {area.name} landscaping questions
          </h2>
          <div className="mt-6">
            <FaqList faqs={area.faqs} />
          </div>
        </div>

        <aside className="lg:sticky lg:top-24">
          <div className="rounded-card border border-navy/15 bg-navy p-6 text-white">
            <h2 className="text-[1.2rem] text-white">Book a visit in {area.name}</h2>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-white/75">
              Seven days a week, 8am to 4pm. Quotes are free and given after seeing the garden.
            </p>
            <a href={site.phoneHref} className="btn-primary mt-5 w-full">
              Call {site.phone}
            </a>
            <Link href="#quote" className="btn-ghost-light mt-3 w-full">
              Send an enquiry
            </Link>
            <p className="mt-5 border-t border-white/15 pt-4 text-sm text-white/70">
              <a href={`mailto:${site.email}`} className="break-all underline underline-offset-4 hover:text-cyan-light">
                {site.email}
              </a>
            </p>
          </div>

          <div className="mt-6 rounded-card border border-stone p-6">
            <h2 className="text-[1.1rem]">Nearby areas covered</h2>
            <ul className="mt-4 space-y-2.5 text-[0.95rem]">
              {area.nearby.map((nearbySlug) => {
                const nearby = getArea(nearbySlug);
                if (!nearby) return null;
                return (
                  <li key={nearby.slug}>
                    <Link href={`/areas/${nearby.slug}`} className="text-blue-brand hover:underline">
                      Landscaping in {nearby.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <p className="mt-5 border-t border-stone pt-4 text-[0.95rem]">
              <Link href="/areas" className="font-semibold text-navy hover:text-blue-brand">
                All areas covered
              </Link>
            </p>
          </div>
        </aside>
      </section>

      <QuoteSection
        source={`area-${area.slug}`}
        heading={`Request a quote in ${area.name}`}
        intro={`Send a few details about the garden and Scotia Maintenance will get back to you to arrange a visit in ${area.name}.`}
      />
    </>
  );
}
