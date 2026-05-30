"use client";

import { SectionEyebrow } from "@/components/common/section-eyebrow";
import styles from "./partnerships.module.css";

type Partner = {
  company: string;
  projects: string;
};

const PARTNERS: Partner[] = [
  { company: "PT Veritask", projects: "Veritask AI" },
  { company: "PT MFI", projects: "Maha-Job Ecosystem" },
  { company: "PT Xprogroup", projects: "Solum Clinic" },
  { company: "Ismaya Group", projects: "Grip OS & Grip POS" },
  { company: "PT Javan Cipta Solusi", projects: "Portfolio · Kominfo projects" },
  { company: "PT Infosys Solusi Terpadu", projects: "CIMB Junior" },
  {
    company: "PT Kurir Pulsa Digitech",
    projects: "iConvert Web & Mobile · Kurir Pulsa",
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
              <p className={styles.projects}>{p.projects}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
