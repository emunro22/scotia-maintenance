import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import ReviewCard from '@/components/ReviewCard';
import Reveal from '@/components/Reveal';
import StarRating from '@/components/StarRating';
import QuoteSection from '@/components/QuoteSection';
import { getAllReviews } from '@/lib/reviews';
import { breadcrumbSchema } from '@/lib/schema';
import { canonical, site } from '@/lib/site';

const title = 'Customer Reviews | Scotia Maintenance, Glasgow';
const description =
  'Read reviews left by Scotia Maintenance customers across Glasgow, Renfrewshire and Dunbartonshire, pulled directly from the business listing on Google.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonical('/reviews') },
  openGraph: {
    title,
    description,
    url: canonical('/reviews'),
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: 'Scotia Maintenance customer reviews' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: [site.ogImage] },
};

// Must be a literal for Next.js to statically analyse it.
// Keep in step with REVIEWS_REVALIDATE_SECONDS in lib/reviews.ts.
export const revalidate = 86400;

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Reviews', href: '/reviews' },
];

export default async function ReviewsPage() {
  const { reviews, rating, totalRatings, googleMapsUri, writeReviewUri } = await getAllReviews();

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: canonical(c.href) })))} />

      <div className="container-page pt-6">
        <Breadcrumbs items={crumbs} />
      </div>

      <section className="container-page py-8 lg:py-12">
        <Reveal>
          <p className="eyebrow">Reputation</p>
          <h1 className="mt-3 max-w-3xl text-[2.2rem] leading-[1.1] sm:text-[3rem]">
            What customers say about Scotia Maintenance
          </h1>

          {rating !== null && totalRatings ? (
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
              <span className="flex items-baseline gap-2">
                <span className="font-display text-[2.4rem] leading-none text-navy">
                  {rating.toFixed(1)}
                </span>
                <StarRating rating={rating} size={20} decorative />
              </span>
              <span className="text-[1.05rem] text-ink/75">
                Based on {totalRatings} {totalRatings === 1 ? 'rating' : 'ratings'} on{' '}
                <a
                  href={googleMapsUri}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-brand hover:underline"
                >
                  Google
                </a>
              </span>
            </div>
          ) : null}

          <p className="copy mt-5 max-w-prose text-[1.1rem]">
            Reviews are taken directly from the Scotia Maintenance listing on Google and refresh
            automatically. Nothing on this page is written by the business.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={writeReviewUri}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-navy"
            >
              Leave a review
            </a>
            <Link href="/contact" className="btn-outline">
              Get a free quote
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="container-page pb-8">
        {reviews.length > 0 ? (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, i) => (
              <Reveal as="li" key={review.id} delay={0.04 * (i % 3)} className="h-full">
                <ReviewCard review={review} />
              </Reveal>
            ))}
          </ul>
        ) : (
          <Reveal>
            <div className="rounded-card border border-dashed border-stone bg-mist/60 p-8 text-center">
              <p className="copy mx-auto max-w-prose">
                No reviews have been published here yet. If Scotia Maintenance has recently worked
                on your garden, a review on Google is genuinely appreciated and will appear on this
                page automatically.
              </p>
              <a
                href={writeReviewUri}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-navy mt-6"
              >
                Leave a review on Google
              </a>
            </div>
          </Reveal>
        )}

        {reviews.length > 0 && (
          <p className="mt-8 max-w-prose text-[0.95rem] leading-relaxed text-ink/60">
            Google publishes a limited set of reviews through its API, so the listing on{' '}
            <a
              href={googleMapsUri}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-brand hover:underline"
            >
              Google Maps
            </a>{' '}
            remains the complete record.
          </p>
        )}
      </section>

      <QuoteSection
        source="reviews"
        heading="Get a free quote"
        intro="Tell Scotia Maintenance where you are and what the garden needs. Enquiries are answered directly, and quotes follow a visit so the price reflects the actual job."
      />
    </>
  );
}
