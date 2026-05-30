"use client";

import { useState } from "react";
import { SectionEyebrow } from "@/components/common/section-eyebrow";
import { DisplayHeading } from "@/components/common/display-heading";
import styles from "./contact-cta.module.css";

const DETAILS = [
  { label: "Email", value: "decozzfx@gmail.com", href: "mailto:decozzfx@gmail.com" },
  { label: "Location", value: "Semarang · Central Java, ID" },
  { label: "Availability", value: "Remote · Worldwide" },
];

export function ContactCTA() {
  const [consent, setConsent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = [
      `Name: ${f.get("first")} ${f.get("last")}`,
      `Email: ${f.get("email")}`,
      `Phone: ${f.get("phone") || "-"}`,
      `Company: ${f.get("company") || "-"}`,
      `Website: ${f.get("website") || "-"}`,
      "",
      `${f.get("message") || ""}`,
    ].join("\n");
    window.location.href = `mailto:decozzfx@gmail.com?subject=${encodeURIComponent(
      `Project briefing — ${f.get("first")} ${f.get("last")}`,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className={styles.cta}>
      <div className={styles.grid}>
        <div className={styles.left}>
          <div data-reveal>
            <SectionEyebrow num="06" label="Contact" />
          </div>
          <div data-reveal>
            <DisplayHeading
              as="h2"
              text="Let's *talk.*"
              className={styles.title}
            />
          </div>
          <p className={styles.intro} data-reveal>
            You talk to the person who writes the code — no middle layer, no
            hand-offs. Tell me where you&apos;re headed and within 24 hours
            you&apos;ll have a straight answer and a concrete plan to get there.
          </p>

          <dl className={styles.details} data-reveal>
            {DETAILS.map((d) => (
              <div key={d.label} className={styles.detailRow}>
                <dt className={styles.detailLabel}>{d.label}</dt>
                <dd className={styles.detailValue}>
                  {d.href ? <a href={d.href}>{d.value}</a> : d.value}
                </dd>
              </div>
            ))}
          </dl>

          <p className={styles.metaLine} data-reveal>
            ▪ Reply within 24h &nbsp;·&nbsp; Open to work
          </p>
        </div>

        <form className={styles.form} onSubmit={onSubmit} data-reveal>
          <div className={styles.formHead}>
            <span className={styles.formEyebrow}>[ Briefing ]</span>
            <h3 className={styles.formTitle}>Send a short briefing</h3>
          </div>

          <div className={styles.row2}>
            <label className={styles.field}>
              <span className={styles.fieldLabel}>
                First name <em className={styles.req}>*</em>
              </span>
              <input name="first" required placeholder="Anna" />
            </label>
            <label className={styles.field}>
              <span className={styles.fieldLabel}>
                Last name <em className={styles.req}>*</em>
              </span>
              <input name="last" required placeholder="Smith" />
            </label>
          </div>

          <label className={styles.field}>
            <span className={styles.fieldLabel}>
              Email <em className={styles.req}>*</em>
            </span>
            <input
              name="email"
              type="email"
              required
              placeholder="anna@company.com"
            />
          </label>

          <label className={styles.field}>
            <span className={styles.fieldLabel}>Phone number</span>
            <input name="phone" type="tel" placeholder="+1 555 1234567" />
          </label>

          <div className={styles.row2}>
            <label className={styles.field}>
              <span className={styles.fieldLabel}>
                Company name <em className={styles.opt}>— optional</em>
              </span>
              <input name="company" placeholder="Studio Inc." />
            </label>
            <label className={styles.field}>
              <span className={styles.fieldLabel}>
                Current website <em className={styles.opt}>— optional</em>
              </span>
              <input name="website" placeholder="https://your-domain.com" />
            </label>
          </div>

          <label className={styles.field}>
            <span className={styles.fieldLabel}>
              Message <em className={styles.opt}>— optional</em>
            </span>
            <textarea
              name="message"
              rows={4}
              placeholder="Idea, industry, timeline — what I should know."
            />
          </label>

          <label className={styles.consent}>
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
            />
            <span>
              I consent to my data being used to respond to this request.
            </span>
          </label>

          <button type="submit" className={styles.submit} disabled={!consent}>
            Send request &nbsp;→
          </button>
        </form>
      </div>
    </section>
  );
}
