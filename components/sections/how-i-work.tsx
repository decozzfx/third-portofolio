"use client";

import { SectionEyebrow } from "@/components/common/section-eyebrow";
import { DisplayHeading } from "@/components/common/display-heading";
import { useScrollReveal } from "@/lib/motion/use-scroll-reveal";
import styles from "./how-i-work.module.css";

const STEPS = [
  {
    n: "01",
    title: "Understand",
    text: "Clarify the goal, users and constraints before writing code. Cheap decisions first.",
  },
  {
    n: "02",
    title: "Build",
    text: "Type-safe, component-driven, performance-first. Clean code that survives.",
  },
  {
    n: "03",
    title: "Ship & iterate",
    text: "Deploy, measure, refine. The first release is the start, not the finish.",
  },
];

export function HowIWork() {
  const ref = useScrollReveal<HTMLDivElement>({ selector: "[data-card]" });
  return (
    <section className={styles.section}>
      <SectionEyebrow num="05b" label="How I work" />
      <DisplayHeading
        as="h2"
        text="From *idea* to *launch.*"
        style={{ fontSize: "clamp(2rem,4vw,3.25rem)" }}
      />
      <div className={styles.grid} ref={ref}>
        {STEPS.map((s) => (
          <div key={s.n} className={styles.card} data-card>
            <span className={styles.step}>[{s.n}]</span>
            <h3 className={styles.cardTitle}>{s.title}</h3>
            <p className={styles.cardText}>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
