"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ChefSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !textRef.current || !portraitRef.current) return;

    // Lightweight mobile-only reveal as the section enters the viewport.
    const mobileMotionOK =
      window.matchMedia("(max-width: 767px)").matches &&
      window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
    if (mobileMotionOK) {
      const els = [
        { el: portraitRef.current, delayMs: 120 },
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
      portraitRef.current.classList.add("mobile-reveal--in");
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
        gsap.set(portraitRef.current, { opacity: 0, x: 46 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "+=600",
            scrub: 1,
          },
        });

        tl.to(portraitRef.current, {
          opacity: 1,
          x: 0,
          duration: 1.0,
          ease: "power3.out",
        }).to(
          textRef.current,
          { opacity: 1, y: 0, duration: 1.0, ease: "power3.out" },
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
      id="chef"
      className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center py-32 px-4 md:px-8 relative overflow-hidden bg-[#0B0B0B]"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#121212] to-[#0B0B0B]" />

      <div
        ref={portraitRef}
        className="relative z-10 w-full md:w-1/2 flex justify-center items-center mb-16 md:mb-0 px-4"
      >
        <div className="relative w-80 h-[32rem] md:w-96 md:h-[36rem] rounded-3xl overflow-hidden border border-[#D4AF37]/20 shadow-2xl bg-black/30">
          <Image
            src="/chef-portrait.svg"
            alt="Chef portrait"
            fill
            className="object-cover opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/70" />

          <div className="absolute bottom-8 left-8">
            <h3 className="text-2xl font-serif font-light text-[#F5F1E8] mb-1">
              Chef Alexandre Dubois
            </h3>
            <p className="text-sm text-[#D4AF37] font-sans tracking-widest">
              EXECUTIVE CHEF & OWNER
            </p>
          </div>
        </div>
      </div>

      <div
        ref={textRef}
        className="relative z-10 w-full md:w-1/2 max-w-2xl flex flex-col items-center md:items-start text-center md:text-left px-4"
      >
        <div className="gold-divider w-24 mb-10 md:mb-16 md:ml-0" />

        <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight text-[#F5F1E8] mb-8">
          A Philosophy Rooted in Respect
        </h2>

        <p className="text-lg text-[#F5F1E8]/90 font-sans font-light leading-relaxed tracking-wide mb-8">
          My culinary journey began in the French countryside, where I learned to
          appreciate the profound connection between land and plate. Every dish
          at Aether reflects my commitment to sourcing the finest ingredients,
          respecting traditional techniques, and pushing creative boundaries.
        </p>

        <p className="text-lg text-[#F5F1E8]/90 font-sans font-light leading-relaxed tracking-wide mb-8">
          With three Michelin stars, our restaurant stands as a testament to
          excellence, innovation, and the relentless pursuit of perfection. We
          invite you to experience not just a meal, but a transformative
          narrative through flavor.
        </p>

        <p className="text-lg text-[#F5F1E8]/80 font-sans font-light leading-relaxed tracking-wide mb-10">
          Our kitchen works like an atelier: daily tastings, calibrated sauces,
          and precise heat curves. The result is clarity—bold flavor without
          heaviness.
        </p>

        <blockquote className="border-l-2 border-[#D4AF37] pl-6 italic text-[#F5F1E8] font-serif text-xl">
          “Cooking is the art of transformation — where simple ingredients become
          extraordinary experiences.”
        </blockquote>
      </div>
    </section>
  );
}
