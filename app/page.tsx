import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import BeforeAfter from '@/components/BeforeAfter';
import CoverageBand from '@/components/CoverageBand';
import FaqList from '@/components/FaqList';
import HeroSlideshow from '@/components/HeroSlideshow';
import JsonLd from '@/components/JsonLd';
import QuoteSection from '@/components/QuoteSection';
import ReviewsSection from '@/components/ReviewsSection';
import Reveal from '@/components/Reveal';
import { services } from '@/lib/services';
import { faqSchema } from '@/lib/schema';
import { site, canonical } from '@/lib/site';
import { heroSlideshow, transformations, workGallery } from '@/lib/gallery';

export const metadata: Metadata = {
  title: 'Landscaping Glasgow & West Scotland | Scotia Maintenance',
  description:
    'Professional landscaping and garden maintenance across Glasgow and surrounding areas. Contact Scotia Maintenance on 07766 636189 for a quote.',
  alternates: { canonical: canonical('/') },
  openGraph: {
    title: 'Landscaping Glasgow & West Scotland | Scotia Maintenance',
    description:
      'Landscaping and garden maintenance across Glasgow, Renfrewshire and Dunbartonshire. Seven days a week, 8am to 4pm.',
    url: canonical('/'),
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: 'Scotia Maintenance landscaping' }],
  },
};

// Refresh daily so Google reviews stay current.
// Keep in step with REVIEWS_REVALIDATE_SECONDS in lib/reviews.ts.
export const revalidate = 86400;

const homeFaqs = [
  {
    question: 'What areas does Scotia Maintenance cover?',
    answer:
      'Scotia Maintenance covers Glasgow, Paisley, Renfrew, Erskine, Bishopton, Linwood, Johnstone, Houston, Bridge of Weir, Langbank, Inchinnan, Clydebank, Bearsden, Milngavie, Dumbarton, Old Kilpatrick, Bowling, Kilmacolm, Rutherglen and East Kilbride.',
  },
  {
    question: 'How do I get a quote for landscaping or garden maintenance?',
    answer:
      'Call 07766 636189 or send an enquiry through the contact form. Quotes are given after seeing the garden, because levels, access and the condition of the ground make a real difference to what the work involves.',
  },
  {
    question: 'What are your working hours?',
    answer:
      'Scotia Maintenance works Monday to Sunday, 8:00am to 4:00pm, including weekends.',
  },
  {
    question: 'Do you take on one-off jobs as well as regular maintenance?',
    answer:
      'Yes. One-off clearance, tidy-ups and landscaping projects are all available, and there is no requirement to set up a recurring arrangement.',
  },
  {
    question: 'Do you take the garden waste away?',
    answer:
      'Yes. Clearing arisings and green waste is part of the job, so cuttings and clippings are not left behind at the end of a visit.',
  },
];

const stats = [
  { label: 'Open every day', value: '7 days, 8am–4pm' },
  { label: 'Towns covered', value: '20 across the west' },
  { label: 'Quotes', value: 'Free, after a visit' },
];

const serviceIconPaths: Record<string, string> = {
  landscaping: 'M2.5 14.5l4.5-6 3.5 4 3-4.5 5 6.5M2.5 14.5h15',
  'garden-maintenance': 'M10 2.5v6.2M10 8.7a3.3 3.3 0 11-.01 0M6 15.5c1-2 2.4-3 4-3s3 1 4 3',
  'lawn-maintenance': 'M4 15.5c1.5-4 1.5-8-1-11.5M9.5 15.5c1.2-4.8 1.2-9 0-13.5M15 15.5c1.5-4 1.5-8-1-11.5',
  'garden-improvements': 'M12 3l3 3-6.5 6.5-3.3.8.8-3.3L12.5 3zM3 17h6',
  planting: 'M10 17V9.5M10 9.5C10 6 7.5 4 4 4c0 3.7 2.5 5.5 6 5.5zM10 9.5c0-2.8 2-4.6 5-4.6.2 3-1.9 4.6-5 4.6z',
  'outdoor-maintenance': 'M2.5 13.5h1.8l1-6.5h6l1.6 6.5h2.6M6.5 13.5v2M12.5 13.5v2M2.5 13.5a2 2 0 104 0M11.5 13.5a2 2 0 104 0',
};

function ServiceIcon({ slug }: { slug: string }) {
  const d = serviceIconPaths[slug];
  if (!d) return null;
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d={d} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-deep">
        <div className="absolute inset-0">
          <HeroSlideshow slides={heroSlideshow} />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-navy-deep/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/55 to-transparent" />
        </div>

        <div className="container-page relative py-20 sm:py-28 lg:py-36">
          <Reveal>
            <p className="eyebrow inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-cyan-light backdrop-blur-sm">
              Landscaping &amp; garden maintenance · Glasgow &amp; the West
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-6 max-w-2xl text-[2.5rem] leading-[1.06] text-white sm:text-[3.4rem] lg:text-[3.9rem]">
              Gardens rebuilt and kept that way, <span className="text-cyan-light">across Glasgow</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-[1.15rem] leading-relaxed text-white/80">
              Scotia Maintenance is a local landscaper covering Glasgow, Renfrewshire,
              Dunbartonshire and the towns in between. Garden maintenance, landscaping,
              lawns, planting and outdoor work, seven days a week, 8am to 4pm.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Get a free quote
              </Link>
              <a href={site.phoneHref} className="btn-ghost-light">
                Call {site.phone}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.22}>
          <div className="relative border-t border-white/10 bg-navy/60 backdrop-blur-sm">
            <div className="container-page grid grid-cols-1 divide-y divide-white/10 py-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {stats.map((stat) => (
                <div key={stat.label} className="px-1 py-3 sm:px-8 sm:py-0">
                  <dt className="text-sm text-white/55">{stat.label}</dt>
                  <dd className="mt-1 font-display text-xl font-semibold text-white">{stat.value}</dd>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow">What we do</p>
              <h2 className="mt-3 text-3xl sm:text-[2.4rem]">What Scotia Maintenance does</h2>
              <p className="copy mt-4">
                From a fortnightly grass cut to reshaping a garden that has stopped working,
                the range covers the whole of a domestic outdoor space.
              </p>
            </div>
          </Reveal>

          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal
                as="li"
                key={service.slug}
                delay={0.05 * (i % 3)}
                className="group h-full overflow-hidden rounded-card border border-stone bg-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-brand/40 hover:shadow-[0_20px_40px_-24px_rgba(14,42,82,0.35)]"
              >
                <Link href={`/services/${service.slug}`} className="flex h-full flex-col p-6 sm:p-7">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-mist text-navy transition-colors group-hover:bg-navy group-hover:text-cyan-light">
                    <ServiceIcon slug={service.slug} />
                  </span>
                  <h3 className="mt-5 text-[1.3rem] group-hover:text-blue-brand">{service.name}</h3>
                  <p className="mt-3 flex-1 text-[0.975rem] leading-relaxed text-ink/75">
                    {service.shortDescription}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[0.9rem] font-semibold text-blue-brand">
                    More about {service.navLabel.toLowerCase()}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
                      <path d="M2 7h10M8 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Transformations */}
      <section className="bg-navy-deep py-16 text-white sm:py-24">
        <div className="container-page">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow text-cyan-light">Real projects</p>
              <h2 className="mt-3 text-3xl text-white sm:text-[2.4rem]">Recent transformations</h2>
              <p className="mt-4 text-[1.0625rem] leading-relaxed text-white/70">
                Two of our own jobs, start to finish. Drag the slider to see what changed.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-10">
            {transformations.map((pair, i) => (
              <Reveal key={pair.id} delay={0.08 * i}>
                <div className="[&_h3]:text-white [&_p]:text-white/70">
                  <BeforeAfter pair={pair} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-mist py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <div>
              <p className="eyebrow">Why Scotia Maintenance</p>
              <h2 className="mt-3 text-3xl sm:text-[2.4rem]">Why choose Scotia Maintenance</h2>
              <p className="copy mt-4">
                A local landscaping and maintenance service covering a wide area across
                Glasgow and the surrounding towns, available seven days a week.
              </p>
              <Link href="/about" className="btn-outline mt-7">
                About the business
              </Link>
            </div>
          </Reveal>

          <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {[
              {
                title: 'Seven days a week',
                text: 'Work is carried out Monday to Sunday between 8am and 4pm, so visits are not limited to weekdays.',
              },
              {
                title: 'A genuinely wide coverage area',
                text: 'Twenty towns from Kilmacolm to East Kilbride, so there is no need to find someone different for a second property.',
              },
              {
                title: 'Priced after seeing the garden',
                text: 'Quotes follow a visit, because access, levels and ground conditions change what a job actually involves.',
              },
              {
                title: 'Waste taken away',
                text: 'Cuttings, clippings and clearance waste are removed as part of the work rather than bagged and left.',
              },
              {
                title: 'Regular or one-off',
                text: 'Ongoing maintenance on a set rhythm, or a single clearance before a sale, a viewing or an event.',
              },
              {
                title: 'Built for Scottish conditions',
                text: 'Drainage, exposure and a long wet growing season are planned for rather than discovered later.',
              },
            ].map((item, i) => (
              <Reveal as="li" key={item.title} delay={0.04 * (i % 3)}>
                <div className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-brand/15 text-cyan-brand">
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M2.5 7.5l3 3 6-7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-[1.15rem]">{item.title}</h3>
                    <p className="mt-2 text-[0.975rem] leading-relaxed text-ink/75">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Project imagery */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow">Finished work</p>
                <h2 className="mt-3 text-3xl sm:text-[2.4rem]">The kind of work involved</h2>
                <p className="copy mt-4 max-w-prose">
                  Rebuilt patios, gravel gardens, managed hedging and planting chosen to hold up in
                  a west of Scotland winter.
                </p>
              </div>
            </div>
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {workGallery.map((image, i) => (
              <Reveal
                as="li"
                key={image.src}
                delay={0.04 * (i % 4)}
                className="group overflow-hidden rounded-card border border-stone"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={900}
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CoverageBand />

      <ReviewsSection />

      {/* FAQ */}
      <section className="pb-16 sm:pb-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.7fr_1fr] lg:gap-16">
          <Reveal>
            <h2 className="text-3xl sm:text-[2.4rem]">Common questions</h2>
          </Reveal>
          <FaqList faqs={homeFaqs} />
        </div>
      </section>

      <QuoteSection
        source="homepage"
        heading="Get a free quote"
        intro="Tell Scotia Maintenance where you are and what the garden needs. Enquiries are answered directly, and quotes follow a visit so the price reflects the actual job."
      />
    </>
  );
}
