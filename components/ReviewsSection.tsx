import Link from 'next/link';
import { getGoogleReviews } from '@/lib/reviews';
import { site } from '@/lib/site';
import ReviewCard from './ReviewCard';
import Reveal from './Reveal';
import StarRating from './StarRating';

/**
 * How many of Google's reviews to show on the homepage. Google returns at most
 * five, so anything above five simply shows all of them.
 */
const HOME_REVIEW_COUNT = 3;

export default async function ReviewsSection() {
  const { reviews, rating, totalRatings, googleMapsUri, writeReviewUri } =
    await getGoogleReviews();

  const featured = reviews.slice(0, HOME_REVIEW_COUNT);

  return (
    <section className="py-16 sm:py-20">
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow">Reputation</p>
            <h2 className="mt-3 text-3xl sm:text-[2.4rem]">Customer reviews</h2>

            {rating !== null && totalRatings ? (
              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
                <StarRating rating={rating} size={18} decorative />
                <p className="text-[1.05rem] text-ink/85">
                  <span className="font-semibold text-navy">{rating.toFixed(1)}</span> from{' '}
                  <a
                    href={googleMapsUri}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-brand hover:underline"
                  >
                    {totalRatings} Google {totalRatings === 1 ? 'review' : 'reviews'}
                  </a>
                </p>
              </div>
            ) : null}

            <p className="copy mt-4">
              {featured.length > 0
                ? 'Reviews left by customers on Google, pulled straight from the Scotia Maintenance listing and updated automatically.'
                : 'Scotia Maintenance is listed on Google as a landscaper covering Glasgow and the surrounding towns. Verified customer reviews are published here as they are collected, and nothing is shown until it is genuine.'}
            </p>
          </div>
        </Reveal>

        {featured.length > 0 ? (
          <>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((review, i) => (
                <Reveal as="li" key={review.id} delay={0.05 * i} className="h-full">
                  <ReviewCard review={review} clamp />
                </Reveal>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/reviews" className="btn-outline">
                Read all reviews
              </Link>
              <a
                href={writeReviewUri}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Leave a review on Google
              </a>
            </div>
          </>
        ) : (
          <>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[1, 2, 3].map((slot, i) => (
                <Reveal key={slot} delay={0.05 * i}>
                  <div className="rounded-card border border-dashed border-stone bg-mist/60 p-6">
                    <p className="text-[0.95rem] leading-relaxed text-ink/55">
                      Space reserved for a verified customer review.
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <p className="mt-6 text-[0.95rem] text-ink/70">
              Recently had work done?{' '}
              <a href={site.phoneHref} className="font-semibold text-blue-brand hover:underline">
                Call {site.phone}
              </a>{' '}
              to leave feedback.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
