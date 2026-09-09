import type { CSSProperties } from 'react';
import type { Review } from '@/lib/reviews';
import ReviewCard from './ReviewCard';

/** Roughly how long each card takes to cross the viewport. */
const SECONDS_PER_CARD = 9;

type Props = {
  reviews: Review[];
};

/**
 * Continuously drifting row of review cards.
 *
 * The set is rendered twice so the animation can loop seamlessly: the track
 * travels exactly one set width and restarts, which reads as an endless row.
 * The duplicate is hidden from assistive tech and taken out of the tab order.
 *
 * Motion is pure CSS, so this stays a server component. It pauses on hover and
 * on keyboard focus, and stops entirely under prefers-reduced-motion.
 */
export default function ReviewMarquee({ reviews }: Props) {
  if (reviews.length === 0) return null;

  const style = {
    '--marquee-duration': `${reviews.length * SECONDS_PER_CARD}s`,
  } as CSSProperties;

  const renderSet = (duplicate: boolean) => (
    <ul
      className="marquee-set"
      aria-hidden={duplicate || undefined}
      inert={duplicate || undefined}
    >
      {reviews.map((review) => (
        <li key={review.id} className="w-[290px] shrink-0 sm:w-[340px]">
          <ReviewCard review={review} clamp />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee" style={style}>
      <div className="marquee-track">
        {renderSet(false)}
        {renderSet(true)}
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent sm:w-16"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent sm:w-16"
      />
    </div>
  );
}
