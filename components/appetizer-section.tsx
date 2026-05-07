"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function AppetizerSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !textRef.current || !visualRef.current) return;

    // Lightweight mobile-only reveal as the section enters the viewport.
    const mobileMotionOK =
      window.matchMedia("(max-width: 767px)").matches &&
      window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
    if (mobileMotionOK) {
      const els = [
        { el: visualRef.current, delayMs: 120 },
        { el: textRef.current, delayMs: 200 },
      ];
      els.forEach(({ el, delayMs }) => {
        el.classList.add("mobile-reveal");
        el.style.setProperty("--d", `${delayMs}ms`);
      });

      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).classList.add("mobile-reveal--in");
              io.unobserve(entry.target);
            }
          }
        },
        { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.15 },
      );

      els.forEach(({ el }) => io.observe(el));
      return () => io.disconnect();
    } else {
      // Ensure content isn't hidden when CSS media query isn't active.
      visualRef.current.classList.add("mobile-reveal--in");
      textRef.current.classList.add("mobile-reveal--in");
    }

    const enableMotion = window.matchMedia(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
    ).matches;
    if (!enableMotion) return;

    let cancelled = false;
    let cleanup: (() => void) | null = null;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        gsap.set(textRef.current, { opacity: 0, y: 30 });
        gsap.set(visualRef.current, { opacity: 0, scale: 0.92 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "+=600",
            scrub: 1,
          },
        });

        tl.to(textRef.current, {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
        }).to(
          visualRef.current,
          { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" },
          "-=0.7",
        );
      }, sectionRef);

      cleanup = () => ctx.revert();
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="appetizers"
      className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center py-32 px-4 md:px-8 relative overflow-hidden bg-[#0B0B0B]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#121212] via-[#0B0B0B] to-[#000000]" />

      <div
        ref={visualRef}
        className="relative z-10 w-full md:w-1/2 flex justify-center items-center mb-16 md:mb-0"
      >
        <div className="relative w-[min(26rem,90vw)] aspect-square rounded-3xl border border-[#D4AF37]/25 overflow-hidden bg-black/30">
          <Image
            src="/appetizer-art.svg"
            alt="Appetizer course art"
            fill
            className="object-cover opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/55 via-black/10 to-black/50" />
        </div>
      </div>

      <div
        ref={textRef}
        className="relative z-10 w-full md:w-1/2 max-w-2xl flex flex-col items-center md:items-start text-center md:text-left px-4"
      >
        <div className="gold-divider w-24 mb-10 md:mb-16 md:ml-0" />

        <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight text-[#F5F1E8] mb-8">
          An Overture of Sensory Delight
        </h2>

        <p className="text-lg text-[#F5F1E8]/90 font-sans font-light leading-relaxed tracking-wide mb-8">
          Our culinary journey begins with ethereal textures and delicate flavors
          that awaken the senses. Each ingredient is carefully selected for its
          purity and seasonality, creating a poetic introduction to our
          gastronomic narrative.
        </p>

        <p className="text-lg text-[#F5F1E8]/80 font-sans font-light leading-relaxed tracking-wide mb-8">
          Expect pristine seafood, garden herbs, and fleeting aromatics—plated
          with restraint so every note is heard. Pairings can be adapted for
          alcohol-free journeys with the same precision.
        </p>

        <div className="mt-2 flex flex-wrap gap-2 justify-center md:justify-start">
          {[
            "Seasonal produce",
            "Hand-crafted broths",
            "Silken textures",
            "Citrus brightness",
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-widest text-[#F5F1E8]/75"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-base text-[#D4AF37] font-sans font-light tracking-wider italic">
          “The beginning of an extraordinary experience”
        </p>
      </div>
    </section>
  );
}
