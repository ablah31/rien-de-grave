"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Logo } from "@/components/brand/Logo";
import type { HomeContent } from "@/lib/content";

gsap.registerPlugin(useGSAP);

interface HeroSectionProps {
  content: HomeContent;
}

export function HeroSection({ content }: HeroSectionProps) {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reducedMotion) {
        gsap.set([".hero-bg", ".hero-line", ".hero-panel", ".hero-art", ".hero-mark"], {
          autoAlpha: 1,
          y: 0,
          scale: 1,
        });
        return;
      }

      const timeline = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 },
      });

      timeline
        .fromTo(".hero-bg", { scale: 1.08, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 1.35 })
        .fromTo(".hero-art", { autoAlpha: 0, y: 34, scale: 0.96 }, { autoAlpha: 1, y: 0, scale: 1, duration: 1.05 }, "-=0.75")
        .fromTo(".hero-line", { autoAlpha: 0, y: 22 }, { autoAlpha: 1, y: 0, stagger: 0.1 }, "-=0.65")
        .fromTo(".hero-mark", { autoAlpha: 0, x: -24 }, { autoAlpha: 1, x: 0, duration: 0.9 }, "-=0.35")
        .fromTo(".hero-panel", { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 0.85 }, "-=0.55");
    },
    { scope },
  );

  return (
    <section ref={scope} className="relative min-h-[96vh] overflow-hidden border-b border-white/10">
      <div className="hero-bg home-parallax absolute inset-0">
        <Image
          src={content.heroBackgroundImage}
          alt="Visuel dos RIEN DE GRAVE"
          fill
          priority
          className="object-cover object-center opacity-55 blur-[1px] scale-105"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_35%,rgba(194,168,120,0.20),transparent_32%),linear-gradient(90deg,rgba(13,13,13,0.92),rgba(13,13,13,0.52)_44%,rgba(13,13,13,0.86))]" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-brand-black/80 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-brand-black via-brand-black/70 to-transparent" />

      <div className="relative mx-auto grid min-h-[96vh] w-full max-w-7xl grid-rows-[1fr_auto] gap-8 px-4 pb-7 pt-28 md:grid-cols-[0.9fr_1.1fr] md:grid-rows-none md:items-end md:px-8 md:pb-12">
        <div className="z-10 flex flex-col justify-end space-y-6">
          <div className="hero-line">
            <Logo className="text-brand-cream/90" />
          </div>
          <div className="space-y-4">
            <p className="hero-line text-[10px] uppercase tracking-[0.32em] text-brand-sand md:text-xs">
              {content.heroEyebrow}
            </p>
            <h1 className="hero-line max-w-xl font-serif text-5xl leading-[0.92] text-brand-cream md:text-7xl">
              {content.heroTitle}
            </h1>
            <p className="hero-line max-w-md text-sm leading-7 text-brand-cream/74 md:text-base">
              {content.heroSubtitle}
            </p>
          </div>
          <div className="hero-mark hidden h-px w-40 bg-brand-sand/70 md:block" />
        </div>

        <div className="hero-art relative mx-auto w-full max-w-[560px] self-end md:mx-0 md:justify-self-end">
          <div className="relative aspect-[5/4] overflow-hidden border border-brand-cream/20 bg-brand-black p-2 shadow-2xl shadow-black/45 md:p-3">
            <Image
              src={content.heroArtImage}
              alt="Dos de t-shirt RIEN DE GRAVE"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 560px"
            />
            <div className="absolute inset-2 border border-white/10 md:inset-3" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-5">
              <p className="max-w-[220px] font-serif text-xl leading-tight text-brand-cream drop-shadow md:text-2xl">
                {content.heroArtQuote}
              </p>
              <span className="hidden text-[10px] uppercase tracking-[0.28em] text-brand-cream/80 md:block">
                {content.heroArtLabel}
              </span>
            </div>
          </div>
        </div>

        <div className="hero-panel z-10 border border-white/10 bg-brand-black/58 p-5 backdrop-blur-md md:col-span-2 md:p-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="text-[10px] uppercase tracking-[0.28em] text-brand-gray">
                {content.dropEyebrow}
              </p>
              <p className="max-w-2xl font-serif text-2xl leading-tight text-brand-cream md:text-4xl">
                {content.dropTitle}
              </p>
            </div>
            <div className="space-y-3">
              <Link
                href={content.ctaHref}
                className="inline-flex h-11 items-center border border-brand-cream bg-brand-cream px-5 text-[11px] font-medium uppercase tracking-[0.22em] text-[#030303] shadow-lg shadow-black/25 transition-opacity hover:opacity-90"
              >
                {content.ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
