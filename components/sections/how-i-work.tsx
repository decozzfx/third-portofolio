"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { SectionEyebrow } from "@/components/common/section-eyebrow";
import { DisplayHeading } from "@/components/common/display-heading";
import styles from "./how-i-work.module.css";

const STEPS = [
  {
    n: "01",
    title: "Discover",
    text: "Map the goal, users and constraints across the whole product — not just the screen. Cheap decisions first, expensive mistakes avoided.",
    tags: ["Discovery", "Requirements", "Scope", "Roadmap"],
    lottie: "/lottie/step-01.lottie",
  },
  {
    n: "02",
    title: "Architect",
    text: "Design the system end to end — data models, API contracts, UI structure. Decisions that keep frontend and backend honest.",
    tags: ["System Design", "Data Modeling", "API Contracts", "UI / UX"],
    lottie: "/lottie/step-02.lottie",
  },
  {
    n: "03",
    title: "Build",
    text: "Ship frontend and backend together: typed interfaces, REST and realtime APIs, database-backed logic. One developer, full stack.",
    tags: ["Frontend", "Backend", "APIs", "Database"],
    lottie: "/lottie/step-03.lottie",
  },
  {
    n: "04",
    title: "Test & ship",
    text: "Verify, deploy, observe. Manual and automated QA, CI/CD pipelines, then measure and iterate in production.",
    tags: ["QA & Testing", "CI / CD", "Deploy", "Monitor"],
    lottie: "/lottie/step-04.lottie",
  },
];

export function HowIWork() {
  return (
    <section className={styles.section}>
      <div data-reveal>
        <SectionEyebrow num="05" label="Process / How I work" />
      </div>
      <div data-reveal>
        <DisplayHeading
          as="h2"
          text="From *idea* to *launch.*"
          className={styles.heading}
        />
      </div>

      <div className={styles.stack}>
        {STEPS.map((s, i) => (
          <article
            key={s.n}
            className={styles.card}
            style={{ ["--i" as string]: i } as React.CSSProperties}
          >
            <div className={styles.viz} aria-hidden>
              <span className={styles.vizGlow} />
              <DotLottieReact
                src={s.lottie}
                loop
                autoplay
                className={styles.lottie}
              />
              <span className={styles.vizNum}>{s.n}</span>
            </div>
            <div className={styles.body}>
              <span className={styles.count}>
                {s.n} / 0{STEPS.length}
              </span>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardText}>{s.text}</p>
              <ul className={styles.tags}>
                {s.tags.map((t) => (
                  <li key={t} className={styles.tag}>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
