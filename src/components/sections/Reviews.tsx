import { Star, ExternalLink } from "lucide-react";
import { reviews, sampleReviews, googleReviewsUrl, type Review } from "@/lib/reviews";
import { getServiceBySlug } from "@/lib/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const isDev = process.env.NODE_ENV !== "production";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`} role="img">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={i < rating ? "h-4 w-4 fill-brand-orange text-brand-orange" : "h-4 w-4 text-brand-black/20"}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const service = getServiceBySlug(review.serviceSlug);
  return (
    <figure className="flex h-full flex-col rounded-lg border border-brand-black/10 bg-brand-bg p-6 sm:p-7">
      <div className="flex items-center justify-between gap-3">
        <Stars rating={review.rating} />
        {review.source && (
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-black/55">
            via {review.source}
          </span>
        )}
      </div>
      <blockquote className="mt-4 flex-1 text-[16px] leading-relaxed text-brand-black/85">
        &ldquo;{review.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-5 border-t border-brand-black/10 pt-4">
        <div className="font-heading text-[15px] font-bold text-brand-black">{review.name}</div>
        <div className="mt-0.5 text-[13px] text-brand-black/60">
          {review.context}
          {service && <> · {service.shortName}</>}
        </div>
      </figcaption>
    </figure>
  );
}

export function Reviews() {
  const items = reviews.length > 0 ? reviews : isDev ? sampleReviews : [];
  if (items.length === 0) return null;

  const showingSamples = reviews.length === 0;
  const average = items.reduce((sum, r) => sum + r.rating, 0) / items.length;

  return (
    <section className="bg-white py-14 sm:py-20 lg:py-28">
      <div className="container-edge">
        {showingSamples && (
          <p className="mb-8 inline-block rounded-[6px] border border-amber-300 bg-amber-50 px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-amber-800">
            Sample reviews — development only, not shown in production
          </p>
        )}

        <div className="flex flex-col items-start justify-between gap-6 sm:gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Customer Reviews"
            title="What Property Owners Say."
            description="Feedback from residential and commercial clients across Dubai."
          />
          <Reveal delay={0.1}>
            <div className="flex items-center gap-4 rounded-lg border border-brand-black/10 px-5 py-4">
              <div className="font-heading text-[34px] font-bold leading-none text-brand-black">
                {average.toFixed(1)}
              </div>
              <div>
                <Stars rating={Math.round(average)} />
                <div className="mt-1 text-[12.5px] text-brand-black/60">
                  Based on {items.length} review{items.length === 1 ? "" : "s"}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 md:grid-cols-2 xl:grid-cols-3">
          {items.map((review, i) => (
            <Reveal key={`${review.name}-${i}`} delay={(i % 3) * 0.08} y={16}>
              <ReviewCard review={review} />
            </Reveal>
          ))}
        </div>

        {googleReviewsUrl && (
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-8 inline-flex items-center gap-2 py-2 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-brand-black transition-colors hover:text-brand-orange-text"
          >
            Read all reviews on Google
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        )}
      </div>
    </section>
  );
}
