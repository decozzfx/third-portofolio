"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Animates the children of a section in when it enters the viewport and out
 * when it leaves — staggered, eased, and reversible in both scroll directions.
 * Targets descendants marked `data-reveal`; falls back to direct children.
 * `full` makes the wrapper fill the viewport and centre its content.
 * Respects reduced motion (content stays visible, no transforms).
 */
export function Reveal({
  children,
  className,
  full = false,
  out = true,
}: {
  children: React.ReactNode;
  className?: string;
  full?: boolean;
  out?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const tagged = el.querySelectorAll<HTMLElement>("[data-reveal]");
      const targets = tagged.length
        ? Array.from(tagged)
        : Array.from(el.children);
      if (!targets.length) return;

      gsap.set(targets, { autoAlpha: 0, y: 40 });

      const animIn = () =>
        gsap.to(targets, {
          autoAlpha: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.7,
          ease: "power3.out",
          overwrite: true,
        });
      const animOut = (y: number) =>
        gsap.to(targets, {
          autoAlpha: 0,
          y,
          stagger: 0.05,
          duration: 0.5,
          ease: "power2.in",
          overwrite: true,
        });

      ScrollTrigger.create({
        trigger: el,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: animIn,
        onEnterBack: animIn,
        onLeave: out ? () => animOut(-40) : undefined,
        onLeaveBack: out ? () => animOut(40) : undefined,
      });
    }, el);

    return () => ctx.revert();
  }, [out]);

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
