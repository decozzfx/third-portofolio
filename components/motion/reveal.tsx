"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll-linked section transition: fades in as it enters, drifts a little
 * (parallax), then fades out as it leaves — all tied to scroll position
 * (scrub), so it reverses when scrolling back up. Respects reduced motion.
 */
export function Reveal({
  children,
  className,
  parallax = 60,
  full = false,
}: {
  children: React.ReactNode;
  className?: string;
  parallax?: number;
  full?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      });
      tl.fromTo(
        el,
        { autoAlpha: 0, y: parallax },
        { autoAlpha: 1, y: 0, ease: "none", duration: 0.22 },
      )
        .to(el, { y: -parallax, ease: "none", duration: 0.56 })
        .to(el, { autoAlpha: 0, ease: "none", duration: 0.22 });
    }, el);

    return () => ctx.revert();
  }, [parallax]);

  return (
    <div
      ref={ref}
      className={className}
      style={
        full
          ? {
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
