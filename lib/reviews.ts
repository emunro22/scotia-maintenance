import { archivedReviews } from './reviewsArchive';

/**
 * Google Places API (New) — Place Details.
 *
 * Google returns at most five reviews for a place and there is no paging: that
 * is a hard limit of the API, not a display choice. The five that come back are
 * refreshed automatically; anything older is preserved in lib/reviewsArchive.ts.
 *
 * Responses are revalidated once a day, which keeps the page current, keeps
 * request volume negligible, and stays inside the 30-day caching window the
 * Google Maps Platform terms allow for Places content.
 */

const PLACES_ENDPOINT = 'https://places.googleapis.com/v1/places';

/** Derived from the business's Google Maps listing (feature ID 0x2224cd51f827000d:0x8710d1e0465b3abd). */
export const DEFAULT_PLACE_ID = 'ChIJDQAn-FHNJCIRvTpbRuDREIc';

export const REVIEWS_REVALIDATE_SECONDS = 60 * 60 * 24;

/** Requesting `reviews` bills the call at the Place Details Enterprise rate. */
const FIELD_MASK = 'id,displayName,rating,userRatingCount,googleMapsUri,reviews';

export type Review = {
  id: string;
  author: string;
  authorUrl?: string;
  photoUrl?: string;
  rating: number;
  text: string;
  /** Human-readable date: Google's own wording when live, "March 2025" for archived. */
  displayDate: string;
  /** ISO timestamp, used for sorting. */
  publishTime: string;
  source: 'google' | 'archive';
};

export type ArchivedReview = {
  author: string;
  rating: number;
  /** ISO date string, e.g. '2025-04-18'. */
  publishTime: string;
  text: string;
};

export type ReviewsData = {
  reviews: Review[];
  /** Overall Google star rating, e.g. 4.9. */
  rating: number | null;
  /** Total number of ratings Google holds, including ones with no written review. */
  totalRatings: number | null;
  googleMapsUri: string;
  writeReviewUri: string;
  /** False when the API key is missing or Google could not be reached. */
  live: boolean;
};

type GoogleReview = {
  name?: string;
  rating?: number;
  text?: { text?: string };
  originalText?: { text?: string };
  relativePublishTimeDescription?: string;
  publishTime?: string;
  authorAttribution?: {
    displayName?: string;
    uri?: string;
    photoUri?: string;
  };
};

type GooglePlace = {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: GoogleReview[];
};

export function placeId(): string {
  return process.env.GOOGLE_PLACE_ID || DEFAULT_PLACE_ID;
}

export function writeReviewUri(): string {
  return `https://search.google.com/local/writereview?placeid=${placeId()}`;
}

function fallbackMapsUri(): string {
  return `https://www.google.com/maps/place/?q=place_id:${placeId()}`;
}

async function fetchPlace(): Promise<GooglePlace | null> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  if (!key) return null;

  try {
    const res = await fetch(`${PLACES_ENDPOINT}/${placeId()}?languageCode=en-GB&regionCode=GB`, {
      headers: {
        'X-Goog-Api-Key': key,
        'X-Goog-FieldMask': FIELD_MASK,
      },
      next: { revalidate: REVIEWS_REVALIDATE_SECONDS },
    });

    if (!res.ok) {
      console.error(`[reviews] Places API responded ${res.status}: ${await res.text()}`);
      return null;
    }

    return (await res.json()) as GooglePlace;
  } catch (error) {
    console.error('[reviews] Places API request failed:', error);
    return null;
  }
}

function monthYear(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
}

function normaliseGoogleReview(review: GoogleReview, index: number): Review | null {
  const text = (review.text?.text || review.originalText?.text || '').trim();
  const author = review.authorAttribution?.displayName?.trim();
  if (!text || !author || typeof review.rating !== 'number') return null;

  const publishTime = review.publishTime || new Date().toISOString();

  return {
    id: review.name || `google-${index}`,
    author,
    authorUrl: review.authorAttribution?.uri,
    photoUrl: review.authorAttribution?.photoUri,
    rating: review.rating,
    text,
    displayDate: review.relativePublishTimeDescription || monthYear(publishTime),
    publishTime,
    source: 'google',
  };
}

function normaliseArchivedReview(review: ArchivedReview, index: number): Review {
  return {
    id: `archive-${index}`,
    author: review.author.trim(),
    rating: review.rating,
    text: review.text.trim(),
    displayDate: monthYear(review.publishTime),
    publishTime: new Date(review.publishTime).toISOString(),
    source: 'archive',
  };
}

/** Match key used to stop an archived review reappearing while Google still returns it. */
function dedupeKey(review: Review): string {
  const author = review.author.toLowerCase().replace(/\s+/g, ' ').trim();
  const opening = review.text.toLowerCase().replace(/[^a-z0-9]+/g, '').slice(0, 60);
  return `${author}::${opening}`;
}

function sortNewestFirst(reviews: Review[]): Review[] {
  return [...reviews].sort(
    (a, b) => new Date(b.publishTime).getTime() - new Date(a.publishTime).getTime(),
  );
}

/**
 * Live Google reviews only — at most five. Used on the homepage.
 */
export async function getGoogleReviews(): Promise<ReviewsData> {
  const place = await fetchPlace();

  const reviews = sortNewestFirst(
    (place?.reviews ?? [])
      .map(normaliseGoogleReview)
      .filter((review): review is Review => review !== null),
  );

  return {
    reviews,
    rating: place?.rating ?? null,
    totalRatings: place?.userRatingCount ?? null,
    googleMapsUri: place?.googleMapsUri || fallbackMapsUri(),
    writeReviewUri: writeReviewUri(),
    live: place !== null,
  };
}

/**
 * Every review the site holds: the live Google set plus the archive, newest
 * first, with archived duplicates of a still-live review removed.
 */
export async function getAllReviews(): Promise<ReviewsData> {
  const google = await getGoogleReviews();

  const seen = new Set(google.reviews.map(dedupeKey));
  const archived = archivedReviews
    .map(normaliseArchivedReview)
    .filter((review) => !seen.has(dedupeKey(review)));

  return {
    ...google,
    reviews: sortNewestFirst([...google.reviews, ...archived]),
  };
}
