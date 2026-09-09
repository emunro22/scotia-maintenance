import type { Review } from '@/lib/reviews';
import StarRating from './StarRating';

type Props = {
  review: Review;
  /** Clamp long reviews to a fixed height so a grid of cards stays even. */
  clamp?: boolean;
};

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}

export default function ReviewCard({ review, clamp }: Props) {
  return (
    <figure className="flex h-full flex-col rounded-card border border-stone bg-white p-6">
      <StarRating rating={review.rating} />

      <blockquote className={`mt-4 flex-1 text-[0.975rem] leading-relaxed text-ink/85`}>
        <p className={clamp ? 'line-clamp-6' : undefined}>{review.text}</p>
      </blockquote>

      <figcaption className="mt-5 flex items-center gap-3 border-t border-stone pt-4">
        {review.photoUrl ? (
          // Google requires author attribution to be shown as supplied, so the
          // avatar is loaded straight from Google rather than through next/image.
          <img
            src={review.photoUrl}
            alt=""
            width={36}
            height={36}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="h-9 w-9 shrink-0 rounded-full object-cover"
          />
        ) : (
          <span
            aria-hidden="true"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-mist text-[0.8rem] font-semibold text-navy"
          >
            {initials(review.author)}
          </span>
        )}

        <span className="min-w-0">
          <span className="block truncate text-[0.95rem] font-semibold text-navy">
            {review.authorUrl ? (
              <a
                href={review.authorUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="hover:text-blue-brand hover:underline"
              >
                {review.author}
              </a>
            ) : (
              review.author
            )}
          </span>
          <span className="block text-[0.85rem] text-ink/55">
            {review.displayDate}
            {review.source === 'google' && ' · Google'}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
