import { Compass } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-brand-black">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(249,115,22,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.08) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div className="container-edge relative py-24 text-center">
        <Compass className="mx-auto h-10 w-10 text-brand-orange" strokeWidth={1.25} aria-hidden="true" />
        <p className="mt-6 font-heading text-[15px] font-bold uppercase tracking-[0.2em] text-brand-orange">
          404
        </p>
        <h1 className="mt-4 font-heading text-[36px] font-bold text-white sm:text-[48px]">
          Page Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[15.5px] leading-relaxed text-white/60">
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have
          been moved.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href="/" variant="primary" withArrow>
            Back to Home
          </Button>
          <Button href="/services" variant="ghost-light">
            View Services
          </Button>
        </div>
      </div>
    </section>
  );
}
