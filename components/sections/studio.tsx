"use client";

import { SectionEyebrow } from "@/components/common/section-eyebrow";
import { DisplayHeading } from "@/components/common/display-heading";
import styles from "./studio.module.css";

const META = [
  { label: "Since", value: "2021" },
  { label: "Companies", value: "6" },
  { label: "Timezone", value: "GMT+7" },
];

const STACK_ROW_1 = [
  "Next.js",
  "React",
  "Svelte",
  "Remix",
  "Solid",
  "Astro",
  "React Native",
  "Flutter",
  "TypeScript",
];
const STACK_ROW_2 = [
  "Go",
  "Node.js",
  "NestJS",
  "AdonisJS",
  "Hono",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "AI / LLM",
];

function StackTrack({ items, dir }: { items: string[]; dir: "left" | "right" }) {
  return (
    <div className={styles.stackRow}>
      <div
        className={`${styles.track} ${dir === "right" ? styles.trackRight : ""}`}
      >
        {[...items, ...items].map((t, i) => (
          <span key={i} className={styles.stackItem}>
            {t}
            <span className={styles.stackDot} aria-hidden>
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function Studio() {
  return (
    <section className={styles.section}>
      <div className={styles.media} data-reveal>
        <img
          src="/images/contents/youtube-my-desk-setup.jpg"
          alt="My desk and coding setup in Semarang"
          className={styles.bigImg}
          loading="lazy"
        />
        <div className={styles.card}>
          <div className={styles.cardHead}>
            <span className={styles.cardName}>decoz</span>
            <span className={styles.cardDivider}>|</span>
            <span className={styles.cardTag}>Workspace</span>
          </div>
          <p className={styles.cardLine}>Semarang</p>
          <p className={styles.cardLine}>Central Java, Indonesia</p>
          <p className={styles.cardCoords}>◎ 6.9667° S · 110.4167° E</p>
        </div>
      </div>

      <div className={styles.content}>
        <div data-reveal>
          <SectionEyebrow num="02" label="The Studio" />
        </div>
        <div data-reveal>
          <DisplayHeading
            as="h2"
            text="My desk in Semarang is my *place to build*."
            className={styles.heading}
          />
        </div>
        <p className={styles.lead} data-reveal>
          This is where websites, apps and digital products come together — no
          bloated agency process, no handoffs. Just direct collaboration, tight
          feedback loops, and short decision paths.
        </p>

        <div className={styles.meta} data-reveal>
          {META.map((m) => (
            <div key={m.label} className={styles.metaCell}>
              <span className={styles.metaLabel}>{m.label}</span>
              <span className={styles.metaValue}>{m.value}</span>
            </div>
          ))}
        </div>
        <div className={styles.availability} data-reveal>
          <span className={styles.metaLabel}>Availability</span>
          <span className={styles.availValue}>Remote · Worldwide</span>
        </div>

        <div className={styles.stack} data-reveal>
          <div className={styles.stackHead}>
            <span className={styles.metaLabel}>Stack</span>
            <span className={styles.stackCount}>20+ technologies</span>
          </div>
          <StackTrack items={STACK_ROW_1} dir="left" />
          <StackTrack items={STACK_ROW_2} dir="right" />
        </div>
      </div>
    </section>
  );
}
