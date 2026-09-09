type Props = {
  /** 0–5, may be fractional for an overall rating. */
  rating: number;
  /** Height of one star in pixels. */
  size?: number;
  className?: string;
  /** Set when a nearby element already announces the rating in words. */
  decorative?: boolean;
};

const STAR_PATH =
  'M10 1.6l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.21l-4.94 2.6.94-5.5-4-3.9 5.53-.8z';

function Stars({ width, height, className }: { width: number; height: number; className: string }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 20"
      fill="none"
      aria-hidden="true"
      className={`block max-w-none ${className}`}
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={i} d={STAR_PATH} transform={`translate(${i * 20} 0)`} />
      ))}
    </svg>
  );
}

/**
 * Five stars filled left to right, clipped mid-star for fractional ratings.
 *
 * The fill is an overflow-clipped overlay rather than an SVG clipPath, because
 * several cards with the same rating would otherwise emit duplicate element ids.
 */
export default function StarRating({ rating, size = 16, className, decorative }: Props) {
  const clamped = Math.max(0, Math.min(5, rating));
  const width = size * 5;

  return (
    <span
      className={`inline-flex items-center ${className ?? ''}`}
      role={decorative ? 'presentation' : 'img'}
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : `${clamped} out of 5 stars`}
    >
      <span className="relative block shrink-0" style={{ width, height: size }}>
        <Stars width={width} height={size} className="fill-stone" />
        <span
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${(clamped / 5) * 100}%` }}
        >
          <Stars width={width} height={size} className="fill-[#F5A623]" />
        </span>
      </span>
    </span>
  );
}
