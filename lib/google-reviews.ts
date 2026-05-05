/**
 * Google Places API (New) v1 helper.
 *
 * Reads up to 5 most-relevant reviews for the clinic's Place ID and caches
 * them with Next's fetch revalidation (6h). On any error or missing env, returns
 * null so the UI can fall back to the static testimonials.
 *
 * Env (server-only):
 *   - GOOGLE_PLACES_API_KEY  (do NOT prefix with NEXT_PUBLIC)
 *   - GOOGLE_PLACE_ID        (e.g. "ChIJ...")
 *
 * Docs: https://developers.google.com/maps/documentation/places/web-service/place-details
 */

const PLACES_ENDPOINT = "https://places.googleapis.com/v1/places";

const FIELD_MASK = [
  "reviews",
  "rating",
  "userRatingCount",
  "googleMapsUri",
  "displayName",
].join(",");

const REVALIDATE_SECONDS = 60 * 60 * 6; // 6h

export interface GoogleReview {
  name: string;
  relativePublishTimeDescription: string;
  rating: number;
  text?: { text: string; languageCode: string };
  originalText?: { text: string; languageCode: string };
  authorAttribution: {
    displayName: string;
    uri?: string;
    photoUri?: string;
  };
  publishTime: string;
}

export interface PlaceData {
  reviews: GoogleReview[];
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  displayName?: { text: string };
}

export async function fetchPlaceReviews(): Promise<PlaceData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) return null;

  try {
    const res = await fetch(`${PLACES_ENDPOINT}/${encodeURIComponent(placeId)}`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": FIELD_MASK,
        "Accept-Language": "pt-BR",
      },
      next: { revalidate: REVALIDATE_SECONDS, tags: ["google-reviews"] },
    });

    if (!res.ok) return null;

    const json = (await res.json()) as Partial<PlaceData>;
    return {
      reviews: Array.isArray(json.reviews) ? json.reviews : [],
      rating: json.rating,
      userRatingCount: json.userRatingCount,
      googleMapsUri: json.googleMapsUri,
      displayName: json.displayName,
    };
  } catch {
    return null;
  }
}
