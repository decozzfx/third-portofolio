"use client";

import { SectionEyebrow } from "@/components/common/section-eyebrow";
import styles from "./partnerships.module.css";

type Partner = {
  company: string;
  role: string;
  note?: string;
  stack: string;
};

const PARTNERS: Partner[] = [
  {
    company: "PT Veritask",
    role: "Frontend Engineer",
    note: "Legal AI Platform",
    stack: "Next.js 15 · React 19 · TypeScript",
  },
  {
    company: "PT MFI",
    role: "Frontend Engineer",
    stack: "React Native · Next.js · Tailwind CSS",
  },
  {
    company: "PT Xprogroup",
    role: "Frontend Engineer",
    stack: "Next.js · Tailwind CSS · Rizzui",
  },
  {
    company: "Ismaya Group",
    role: "Frontend Engineer",
    stack: "React Native · Next.js · Material UI",
  },
  {
    company: "PT Javan Cipta Solusi",
    role: "Frontend Engineer",
    stack: "Next.js · Tailwind CSS · Material UI",
  },
  {
    company: "PT Infosys Solusi Terpadu",
    role: "Frontend Engineer",
    stack: "React.js · Tailwind CSS · Material UI",
  },
];

export function Partnerships() {
  return (
    <section className={styles.section}>
      <div data-reveal>
        <SectionEyebrow num="03" label="Partnerships" />
      </div>
      <div className={styles.list}>
        {PARTNERS.map((p, i) => (
          <div key={p.company} data-reveal className={styles.row}>
            <span className={styles.index}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className={styles.main}>
              <h3 className={styles.company}>{p.company}</h3>
              <p className={styles.stack}>
                {p.note && <span className={styles.note}>{p.note} — </span>}
                {p.stack}
              </p>
            </div>
            <span className={styles.role}>{p.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
