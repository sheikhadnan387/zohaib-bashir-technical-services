export interface Review {
  /** Customer's name as they'd like it shown, e.g. "Sarah M." */
  name: string;
  /** Area or property type, e.g. "Villa, Arabian Ranches" */
  context: string;
  /** Service slug from services.ts */
  serviceSlug: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
  /** Where the review came from — shown as a small label. */
  source?: "Google" | "WhatsApp" | "Email";
}

/**
 * Real customer reviews. Add entries here (with the customer's permission)
 * and the Reviews section appears automatically on the home page.
 *
 * Leave this empty until you have genuine reviews — never publish invented ones.
 */
export const reviews: Review[] = [];

/** Public Google Business Profile reviews link, once the profile exists. */
export const googleReviewsUrl: string | null = null;

/**
 * Sample entries shown ONLY in local development so the section can be
 * designed and checked. They are never rendered in a production build.
 */
export const sampleReviews: Review[] = [
  {
    name: "Sample — A. Customer",
    context: "Villa, Dubai",
    serviceSlug: "shampoo-cleaning",
    rating: 5,
    quote:
      "Sample review text. Replace with a genuine customer quote once you have permission to publish it.",
    source: "Google",
  },
  {
    name: "Sample — B. Customer",
    context: "Apartment, Dubai",
    serviceSlug: "ac-services",
    rating: 5,
    quote:
      "Sample review text showing how a slightly longer quote wraps across two or three lines in the card layout.",
    source: "WhatsApp",
  },
  {
    name: "Sample — C. Customer",
    context: "Office, Dubai",
    serviceSlug: "painting-work",
    rating: 4,
    quote: "Sample review text for a four-star rating.",
    source: "Google",
  },
];
