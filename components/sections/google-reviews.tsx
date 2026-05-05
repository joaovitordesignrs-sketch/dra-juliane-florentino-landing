import { Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { fetchPlaceReviews, type GoogleReview } from "@/lib/google-reviews";

const FALLBACK_GOOGLE_HREF = "https://share.google/nNeXUPmxMvu0v8a6y";
const MAX_REVIEWS = 4;
const TEXT_PREVIEW_LENGTH = 280;

interface FallbackTestimonial {
  readonly quote: string;
  readonly name: string;
}

interface Props {
  /** WhatsApp deep link rendered on the bottom CTA. */
  ctaHref: string;
  /** Pre-formatted icon node to render alongside the CTA label. */
  ctaIcon?: React.ReactNode;
  /** Used when the API key/place id are missing or the request fails. */
  fallback: ReadonlyArray<FallbackTestimonial>;
}

export async function GoogleReviewsSection({ ctaHref, ctaIcon, fallback }: Props) {
  const data = await fetchPlaceReviews();
  const liveReviews = (data?.reviews ?? []).slice(0, MAX_REVIEWS);
  const googleHref = data?.googleMapsUri ?? FALLBACK_GOOGLE_HREF;
  const totalCount = data?.userRatingCount;
  const aggregateRating = data?.rating;

  const items: ReviewCardData[] =
    liveReviews.length > 0
      ? liveReviews.map(toCardData)
      : fallback.map((t) => ({
          key: t.name,
          author: t.name,
          rating: 5,
          text: t.quote,
          relativeTime: "Avaliação Google",
        }));

  const isLive = liveReviews.length > 0;

  return (
    <section
      id="depoimentos"
      aria-labelledby="depoimentos-title"
      className="bg-background-soft py-16 md:py-24"
    >
      <Container>
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h2
            id="depoimentos-title"
            className="font-heading text-foreground text-2xl font-medium tracking-tight lg:text-4xl"
          >
            Pacientes que voltaram a sorrir com segurança
          </h2>
          <p className="text-foreground text-lg leading-relaxed">
            A experiência de quem confiou seu sorriso à Dra. Juliane Florentino.
          </p>

          {isLive && typeof aggregateRating === "number" && (
            <div className="flex flex-col items-center gap-2 pt-2">
              <div className="flex items-center gap-3">
                <GoogleGlyph className="size-6" />
                <StarRow value={aggregateRating} />
                <span className="font-heading text-foreground text-xl font-medium">
                  {aggregateRating.toFixed(1)}
                </span>
              </div>
              {typeof totalCount === "number" && totalCount > 0 && (
                <p className="text-muted-foreground text-sm">
                  Baseado em {totalCount} avaliações no Google
                </p>
              )}
            </div>
          )}
        </div>
      </Container>

      <div
        className="mt-10 overflow-x-auto md:mt-14 lg:overflow-visible"
        role="region"
        aria-label="Depoimentos de pacientes"
        tabIndex={0}
      >
        <ul className="flex snap-x snap-mandatory gap-4 px-4 pb-4 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-6 lg:px-8 lg:pb-0 xl:grid-cols-4">
          {items.map((item) => (
            <li
              key={item.key}
              className="snap-center shrink-0 basis-[85%] sm:basis-[60%] lg:basis-auto"
            >
              <ReviewCard data={item} />
            </li>
          ))}
        </ul>
      </div>

      <Container>
        <p className="text-muted-foreground mt-2 text-center text-sm lg:hidden">
          Arraste para ver mais
        </p>

        <div className="mt-10 flex flex-col items-center gap-6 text-center md:mt-12">
          <a
            href={googleHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary-strong inline-flex items-center gap-2 text-base underline underline-offset-4 transition-colors"
          >
            <GoogleGlyph className="size-4" />
            Ver mais avaliações no Google
          </a>

          <Button asChild variant="primary" size="lg" className="h-14 w-full sm:w-auto">
            <a href={ctaHref} target="_blank" rel="noopener noreferrer">
              {ctaIcon}
              Agendar minha avaliação
            </a>
          </Button>

          <p className="text-muted-foreground mx-auto mt-2 max-w-2xl text-center text-xs italic">
            Avaliações exibidas diretamente do Google. Resultados podem variar conforme cada caso.
          </p>
        </div>
      </Container>
    </section>
  );
}

interface ReviewCardData {
  key: string;
  author: string;
  rating: number;
  text: string;
  relativeTime: string;
}

function toCardData(review: GoogleReview): ReviewCardData {
  const raw = review.text?.text ?? review.originalText?.text ?? "";
  const text =
    raw.length > TEXT_PREVIEW_LENGTH ? `${raw.slice(0, TEXT_PREVIEW_LENGTH).trimEnd()}…` : raw;

  return {
    key: review.name,
    author: review.authorAttribution.displayName,
    rating: review.rating,
    text,
    relativeTime: review.relativePublishTimeDescription || "Avaliação Google",
  };
}

function ReviewCard({ data }: { data: ReviewCardData }) {
  return (
    <article className="border-border bg-background flex h-full flex-col gap-5 rounded-3xl border p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <StarRow value={data.rating} />
        <GoogleGlyph className="size-5 opacity-80" aria-label="Avaliação Google" />
      </div>
      <blockquote className="text-foreground text-lg leading-relaxed">
        <p>&ldquo;{data.text}&rdquo;</p>
      </blockquote>
      <div className="border-border/70 mt-auto border-t pt-4">
        <p className="font-heading text-foreground text-lg font-medium">{data.author}</p>
        <p className="text-muted-foreground mt-1 text-sm">{data.relativeTime}</p>
      </div>
    </article>
  );
}

function StarRow({ value }: { value: number }) {
  const total = 5;
  const filled = Math.round(value);
  return (
    <div
      className="text-primary-strong flex items-center gap-1"
      aria-label={`${value.toFixed(1)} de ${total} estrelas`}
    >
      {Array.from({ length: total }, (_, i) => (
        <Star key={i} filled={i < filled} className="size-4" />
      ))}
    </div>
  );
}

function Star({ filled, className }: { filled: boolean; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 1.5}
      className={className}
      aria-hidden="true"
    >
      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

function GoogleGlyph({
  className,
  ...props
}: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      className={className}
      aria-hidden={props["aria-label"] ? undefined : true}
      {...props}
    >
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
      />
      <path
        fill="#FF3D00"
        d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
      />
    </svg>
  );
}
