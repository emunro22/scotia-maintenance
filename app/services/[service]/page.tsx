import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import FaqList from '@/components/FaqList';
import JsonLd from '@/components/JsonLd';
import QuoteSection from '@/components/QuoteSection';
import Reveal from '@/components/Reveal';
import { areas, getArea } from '@/lib/areas';
import { getService, services } from '@/lib/services';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema';
import { canonical, site } from '@/lib/site';

type Params = { service: string };

export function generateStaticParams(): Params[] {
  return services.map((service) => ({ service: service.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const url = canonical(`/services/${service.slug}`);
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url,
      type: 'article',
      images: [{ url: service.image, width: 1200, height: 900, alt: service.imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.image],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const url = canonical(`/services/${service.slug}`);
  const crumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: service.name, href: `/services/${service.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: canonical(c.href) }))),
          serviceSchema({
            name: service.name,
            description: service.shortDescription,
            url,
            areaNames: areas.map((a) => a.name),
          }),
          faqSchema(service.faqs),
        ]}
      />

      <div className="container-page pt-6">
        <Breadcrumbs items={crumbs} />
      </div>

      <section className="container-page grid items-start gap-10 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-12">
        <Reveal>
          <p className="eyebrow">Scotia Maintenance services</p>
          <h1 className="mt-2 text-[2.2rem] leading-[1.1] sm:text-[2.9rem]">{service.name}</h1>
          <p className="copy mt-5 max-w-prose text-[1.1rem]">{service.intro}</p>

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
              src={service.image}
              alt={service.imageAlt}
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
            {service.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          <h2 className="mt-14 text-2xl sm:text-3xl">What you get</h2>
          <ul className="mt-6 grid gap-x-10 gap-y-7 sm:grid-cols-2">
            {service.benefits.map((benefit) => (
              <li key={benefit.title}>
                <h3 className="text-[1.1rem]">{benefit.title}</h3>
                <p className="mt-2 text-[0.975rem] leading-relaxed text-ink/75">{benefit.text}</p>
              </li>
            ))}
          </ul>

          <h2 className="mt-14 text-2xl sm:text-3xl">What to expect</h2>
          <ul className="mt-6 divide-y divide-stone border-y border-stone">
            {service.expect.map((item) => (
              <li key={item} className="flex gap-4 py-4">
                <span aria-hidden="true" className="mt-1 shrink-0 text-cyan-brand">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M3.5 9.5l3.5 3.5 7.5-8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-[1rem] leading-relaxed text-ink/85">{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-14 text-2xl sm:text-3xl">Areas covered for {service.name.toLowerCase()}</h2>
          <p className="copy mt-4 max-w-prose">
            {service.name} is available across all twenty towns Scotia Maintenance covers,
            including the areas below.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {service.relatedAreas.map((areaSlug) => {
              const area = getArea(areaSlug);
              if (!area) return null;
              return (
                <li key={area.slug}>
                  <Link
                    href={`/areas/${area.slug}`}
                    className="inline-block rounded-card border border-stone bg-white px-4 py-2.5 text-[0.95rem] text-navy transition-colors hover:border-blue-brand hover:text-blue-brand"
                  >
                    {service.name} in {area.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="mt-5 text-[0.95rem]">
            <Link href="/areas" className="font-semibold text-blue-brand hover:underline">
              See all twenty areas covered
            </Link>
          </p>

          <h2 className="mt-14 text-2xl sm:text-3xl">{service.name} questions</h2>
          <div className="mt-6">
            <FaqList faqs={service.faqs} />
          </div>
        </div>

        <aside className="lg:sticky lg:top-24">
          <div className="rounded-card border border-navy/15 bg-navy p-6 text-white">
            <h2 className="text-[1.2rem] text-white">Arrange {service.name.toLowerCase()}</h2>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-white/75">
              Seven days a week, 8am to 4pm across Glasgow and the surrounding towns.
            </p>
            <a href={site.phoneHref} className="btn-primary mt-5 w-full">
              Call {site.phone}
            </a>
            <Link href="#quote" className="btn-ghost-light mt-3 w-full">
              Send an enquiry
            </Link>
          </div>

          <div className="mt-6 rounded-card border border-stone p-6">
            <h2 className="text-[1.1rem]">Other services</h2>
            <ul className="mt-4 space-y-2.5 text-[0.95rem]">
              {services
                .filter((s) => s.slug !== service.slug)
                .map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="text-blue-brand hover:underline">
                      {s.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </aside>
      </section>

      <QuoteSection
        source={`service-${service.slug}`}
        heading={`Ask about ${service.name.toLowerCase()}`}
        intro="Send a few details about the garden and where you are, and Scotia Maintenance will get back to you to arrange a visit."
      />
    </>
  );
}
