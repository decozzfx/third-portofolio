"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { RevealWords } from "@/components/motion/reveal-words";
import { SectionEyebrow } from "@/components/common/section-eyebrow";
import { ShinyCTA } from "@/components/motion/shiny-cta";
import { BorderCTA } from "@/components/motion/border-cta";
import styles from "./hero.module.css";

const ShaderBg = dynamic(() => import("./shader-bg").then((m) => m.ShaderBg), {
  ssr: false,
});

const HeroModel = dynamic(
  () => import("./hero-model").then((m) => m.HeroModel),
  { ssr: false },
);

const WORDS = [
  { t: "I", em: false },
  { t: "build", em: false },
  { t: "digital", em: true },
  { t: "experiences", em: true },
  { t: "that", em: false },
  { t: "ship.", em: false },
];

const STATS = [
  { num: "4+", label: "Years experience" },
  { num: "6", label: "Companies" },
  { num: "20+", label: "Technologies" },
];

export function Hero() {
  return (
    <header className={styles.hero}>
      <ShaderBg />
      <div className={styles.glow} aria-hidden="true" />
      <HeroModel />
      <div className={styles.grid}>
        <div className={styles.content}>
          <SectionEyebrow num="01" label="Fullstack & Frontend Engineer" />
          <RevealWords>
            <h1 className={styles.title}>
              {WORDS.map((w, i) => (
                <span key={i} className={styles.word}>
                  <span
                    data-word
                    style={{
                      display: "inline-block",
                      fontFamily: w.em
                        ? "var(--font-instrument-serif)"
                        : "var(--font-switzer)",
                      fontStyle: w.em ? "italic" : "normal",
                      fontWeight: w.em ? 400 : 700,
                    }}
                  >
                    {w.t}
                  </span>{" "}
                </span>
              ))}
            </h1>
          </RevealWords>
          <p className={styles.sub}>
            From first pixel to production — websites, web apps and mobile
            experiences engineered to look sharp, move fast, and earn their
            keep. Considered, crafted digital products for brands that refuse to
            blend in.
          </p>
          <div className={styles.actions}>
            <a href="mailto:decozzfx@gmail.com">
              <BorderCTA>Start a project &nbsp;→</BorderCTA>
            </a>
            <Link href="/works">
              <ShinyCTA>Selected work &nbsp;→</ShinyCTA>
            </Link>
          </div>
          <div className={styles.stats}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.visual}>
          <HeroModel />
        </div>
      </div>
    </header>
  );
}
