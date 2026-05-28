"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface HomeExperienceProps {
  children: ReactNode;
}

export function HomeExperience({ children }: HomeExperienceProps) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reducedMotion) {
        gsap.set(".home-reveal", { autoAlpha: 1, y: 0 });
        return;
      }

      gsap.set(".home-reveal", { autoAlpha: 0, y: 28 });

      ScrollTrigger.batch(".home-reveal", {
        start: "top 86%",
        once: true,
        onEnter: (elements) => {
          gsap.to(elements, {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.12,
            overwrite: true,
          });
        },
      });

      gsap.to(".home-parallax", {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: ".home-shell",
          start: "top top",
          end: "bottom top",
          scrub: 0.7,
        },
      });
    },
    { scope },
  );

  return (
    <div ref={scope} className="home-shell overflow-hidden">
      {children}
    </div>
  );
}
