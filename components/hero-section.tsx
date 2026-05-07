"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInnerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const dishRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !heroRef.current ||
      !heroInnerRef.current ||
      !titleRef.current ||
      !subtitleRef.current
    )
      return;

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
        // Immediate reveal on load (not "late" on scroll)
        gsap.fromTo(
          [titleRef.current, subtitleRef.current],
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            ease: "power3.out",
            stagger: 0.12,
            delay: 0.15,
          },
        );
        gsap.fromTo(
          scrollIndicatorRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.7, delay: 1.0, ease: "power2.out" },
        );

        ScrollTrigger.create({
          trigger: heroRef.current,
          start: "top top",
          end: "+=800",
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        });

        requestAnimationFrame(() => ScrollTrigger.refresh());

        gsap.to(heroInnerRef.current, {
          scale: 1.01,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "+=800",
            scrub: 1,
          },
        });

        if (dishRef.current) {
          gsap.to(dishRef.current, {
            y: -24,
            rotate: 1.2,
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "+=800",
              scrub: 1,
            },
          });
        }
      }, heroRef);

      cleanup = () => ctx.revert();
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="top"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#0B0B0B]"
    >
      <div
        ref={heroInnerRef}
        className="absolute inset-0 will-change-transform"
        style={{ transform: "translateZ(0)" }}
      >
        {/* Ensure the pinned surface always paints solid black (avoids any transient gray flashes). */}
        <div className="absolute inset-0 bg-[#0B0B0B]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#0B0B0B] to-[#000000]" />
        {/* Animated conic-gradients are costly; keep it static for smoother scroll. */}
        <div className="absolute inset-0 opacity-55 bg-[conic-gradient(from_180deg_at_50%_50%,#000000_0deg,#151515_130deg,#000000_260deg,#151515_360deg)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#000000] opacity-70" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37] rounded-full blur-[128px] opacity-12" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-[#D4AF37] rounded-full blur-[128px] opacity-10" />
        {/* Pulse animation is also expensive during pin/scrub. */}
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-[90px]" />

        <div className="relative z-10 flex h-full w-full items-center justify-center">
          <div className="w-full max-w-7xl px-4 md:px-8 mx-auto flex flex-col items-center text-center">
            <div
              ref={dishRef}
              className="relative mb-10 md:mb-14 w-[min(22rem,86vw)] md:w-[28rem] aspect-square motion-reduce:opacity-100 opacity-0 translate-y-3 animate-[heroIn_900ms_ease-out_120ms_forwards]"
            >
              <Image
                src="/hero-dish.svg"
                alt="Signature dish"
                fill
                priority
                className="object-contain drop-shadow-[0_30px_70px_rgba(0,0,0,0.65)]"
              />
            </div>

            <h1
              ref={titleRef}
              className="text-4xl md:text-6xl lg:text-7xl font-serif font-light tracking-tight text-[#F5F1E8] mb-6 max-w-4xl motion-reduce:opacity-100 opacity-0 translate-y-3 animate-[heroIn_900ms_ease-out_220ms_forwards]"
            >
              A Culinary Experience Beyond Taste
            </h1>

            <p
              ref={subtitleRef}
              className="text-lg md:text-xl text-[#D4AF37] font-sans font-light tracking-wider max-w-2xl mb-16 motion-reduce:opacity-100 opacity-0 translate-y-3 animate-[heroIn_900ms_ease-out_340ms_forwards]"
            >
              Three Michelin Stars | Paris | Seasonal Modernist Cuisine
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#reserve" className="btn-luxury px-7 py-3">
                Reserve a Table
              </a>
              <a
                href="#menu"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3 text-sm tracking-widest text-[#F5F1E8]/85 hover:text-[#F5F1E8] hover:border-white/25 transition-colors"
              >
                Explore Menus
              </a>
            </div>

            <div
              ref={scrollIndicatorRef}
              className="flex flex-col items-center mt-24"
            >
              <span className="text-sm font-sans tracking-widest text-[#F5F1E8] mb-2">
                SCROLL TO EXPERIENCE
              </span>
              <div className="w-px h-24 bg-gradient-to-b from-[#D4AF37] to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
