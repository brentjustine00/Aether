"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function MainCourseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const dishRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !textRef.current || !dishRef.current) return;

    // Lightweight mobile-only reveal as the section enters the viewport.
    const mobileMotionOK =
      window.matchMedia("(max-width: 767px)").matches &&
      window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
    if (mobileMotionOK) {
      const els = [
        { el: dishRef.current, delayMs: 120 },
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
      dishRef.current.classList.add("mobile-reveal--in");
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
        gsap.set(textRef.current, { opacity: 0, y: 36 });
        gsap.set(dishRef.current, { opacity: 0, scale: 0.9 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "+=800",
            scrub: 1,
          },
        });

        tl.to(dishRef.current, {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
        }).to(
          textRef.current,
          { opacity: 1, y: 0, duration: 1.0, ease: "power3.out" },
          "-=0.9",
        );

        gsap.to(dishRef.current, {
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        });
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
      id="signature"
      className="min-h-screen w-full flex flex-col-reverse md:flex-row items-center justify-center py-32 px-4 md:px-8 relative overflow-hidden bg-[#0B0B0B]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B0B] via-[#121212] to-[#0B0B0B]" />

      <div
        ref={textRef}
        className="relative z-10 w-full md:w-1/2 max-w-2xl flex flex-col items-center md:items-start text-center md:text-left px-4 mb-16 md:mb-0"
      >
        <div className="gold-divider w-24 mb-10 md:mb-16 md:ml-0" />

        <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight text-[#F5F1E8] mb-8">
          The Heart of Our Culinary Expression
        </h2>

        <p className="text-lg text-[#F5F1E8]/90 font-sans font-light leading-relaxed tracking-wide mb-8">
          This signature dish represents the culmination of our culinary
          philosophy, where traditional techniques meet innovative artistry.
          Each element on the plate tells a story of terroir, seasonality, and
          meticulous craftsmanship.
        </p>

        <p className="text-lg text-[#F5F1E8]/80 font-sans font-light leading-relaxed tracking-wide mb-8">
          We build depth through layered stocks, controlled caramelization, and
          temperature contrast—crisp edges, delicate centers, and sauces tuned to
          the exact moment they meet the plate.
        </p>

        <p className="text-base text-[#D4AF37] font-sans font-light tracking-wider mb-10">
          <span className="block mb-2">Featured Ingredients:</span>
          <span className="italic">
            Dover sole, white asparagus, champagne sabayon, micro herbs
          </span>
        </p>

        <a href="#menu" className="btn-luxury transition-all duration-500">
          View Full Menu
        </a>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div
          ref={dishRef}
          className="relative z-10 w-80 h-80 md:w-[32rem] md:h-[32rem] rounded-3xl overflow-hidden border border-[#D4AF37]/20 shadow-2xl bg-black/30"
        >
          <Image
            src="/signature-art.svg"
            alt="Signature course art"
            fill
            className="object-cover opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/55 via-black/10 to-black/55" />
        </div>
      </div>
    </section>
  );
}
