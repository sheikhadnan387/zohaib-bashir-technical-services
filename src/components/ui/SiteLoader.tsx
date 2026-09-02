"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import clsx from "clsx";
import { company } from "@/lib/company";

type LoaderPhase = "entering" | "active" | "exiting" | "done";

export function SiteLoader() {
  const [phase, setPhase] = useState<LoaderPhase>("entering");
  const previousOverflowRef = useRef<string>("");

  useEffect(() => {
    // 1. Lock body scroll while preserving previous overflow value
    previousOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // 2. Detect prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      // Shortened sequence for reduced-motion users
      const enterTimer = setTimeout(() => setPhase("active"), 20);
      const exitTimer = setTimeout(() => setPhase("exiting"), 400);
      const doneTimer = setTimeout(() => {
        document.body.style.overflow = previousOverflowRef.current;
        setPhase("done");
      }, 600);

      return () => {
        clearTimeout(enterTimer);
        clearTimeout(exitTimer);
        clearTimeout(doneTimer);
        document.body.style.overflow = previousOverflowRef.current;
      };
    }

    // 3. Complete brand intro sequence (~1.25s total: 0-300ms enter, 300-900ms active progress, 900-1250ms exit)
    const t1 = setTimeout(() => setPhase("active"), 300);
    const t2 = setTimeout(() => setPhase("exiting"), 900);
    const t3 = setTimeout(() => {
      document.body.style.overflow = previousOverflowRef.current;
      setPhase("done");
    }, 1250);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      document.body.style.overflow = previousOverflowRef.current;
    };
  }, []);

  if (phase === "done") {
    return null;
  }

  const isExiting = phase === "exiting";
  const isProgressActive = phase === "active" || isExiting;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={`Loading ${company.legalName}`}
      className={clsx(
        "fixed inset-0 z-[9999] flex h-[100dvh] w-screen flex-col items-center justify-center bg-brand-black select-none pointer-events-auto",
        "transition-opacity duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        isExiting ? "opacity-0" : "opacity-100"
      )}
    >
      <span className="sr-only">Loading {company.legalName}...</span>

      {/* Centered Brand Content */}
      <div className="flex flex-col items-center justify-center px-6">
        {/* Logo Container with Smooth Transitions */}
        <div
          className={clsx(
            "relative transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
            phase === "entering" && "scale-100 opacity-100",
            phase === "active" && "scale-[1.015] opacity-100 duration-[600ms]",
            isExiting && "scale-[1.02] opacity-0 duration-[350ms]"
          )}
        >
          <Image
            src="/logo/logo.svg"
            alt={company.legalName}
            width={998}
            height={992}
            priority
            className="h-auto w-[130px] sm:w-[155px] lg:w-[180px] object-contain drop-shadow-[0_6px_30px_rgba(0,0,0,0.65)]"
          />
        </div>

        {/* Industrial Orange Progress Indicator Line */}
        <div
          aria-hidden="true"
          className="mt-8 h-[2px] w-[110px] sm:w-[125px] overflow-hidden rounded-full bg-white/10"
        >
          <div
            className={clsx(
              "h-full w-full bg-brand-orange origin-left transition-transform duration-[600ms] ease-out",
              isProgressActive ? "scale-x-100" : "scale-x-0"
            )}
          />
        </div>
      </div>
    </div>
  );
}
