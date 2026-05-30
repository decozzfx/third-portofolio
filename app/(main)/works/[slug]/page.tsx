import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SectionEyebrow } from "@/components/common/section-eyebrow";
import { ShinyCTA } from "@/components/motion/shiny-cta";
import { Reveal } from "@/components/motion/reveal";
import { getWorkBySlug, works } from "@/lib/works";
import styles from "./work-detail.module.css";

export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) return {};
  return { title: work.title, description: work.description };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) notFound();

  const idx = works.findIndex((w) => w.slug === slug);
  const next = works[(idx + 1) % works.length];

  const links =
    typeof work.website === "string"
      ? [{ label: "Visit site", url: work.website }]
      : (work.website ?? []);

  const showcase = work.images.slice(1);

  const meta = [
    { label: "Type", value: work.platform },
    { label: "Year", value: work.year },
    {
      label: "Engagement",
      value: work.category === "freelance" ? "Client work" : "Personal build",
    },
    { label: "Stack", value: work.stack.join(" · ") },
  ];

  return (
    <article className={styles.page}>
      <Link href="/works" className={styles.back}>
        ← All works
      </Link>

      {/* ---------- hero ---------- */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <SectionEyebrow num="01" label={`${work.platform} · ${work.year}`} />
          <h1 className={styles.title}>{work.title}</h1>
          <p className={styles.lead}>{work.description}</p>
          <div className={styles.actions}>
            {links.map((lnk) => (
              <a
                key={lnk.url}
                href={lnk.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkBtn}
              >
                {lnk.label} ↗
              </a>
            ))}
            <a href="mailto:decozzfx@gmail.com">
              <ShinyCTA>Start a project &nbsp;→</ShinyCTA>
            </a>
          </div>
        </div>

        <div className={styles.media}>
          <span className={styles.badge}>
            {String(idx + 1).padStart(2, "0")} · {work.year}
          </span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={work.images[0]} alt={work.title} className={styles.frame} />
        </div>
      </section>

      {/* ---------- meta bar ---------- */}
      <dl className={styles.metaBar}>
        {meta.map((m) => (
          <div key={m.label} className={styles.metaCell}>
            <dt className={styles.metaLabel}>{m.label}</dt>
            <dd className={styles.metaValue}>{m.value}</dd>
          </div>
        ))}
      </dl>

      {/* ---------- showcase ---------- */}
      {showcase.length > 0 && (
        <Reveal>
          <section className={styles.showcase}>
            <div data-reveal>
              <SectionEyebrow num="02" label="Showcase" />
            </div>
            <h2 className={styles.showHeading} data-reveal>
              Inside the build.
            </h2>
            <div className={styles.grid}>
              {showcase.map((image, i) => (
                <figure key={i} className={styles.shot} data-reveal>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={image} alt={`${work.title} screenshot ${i + 2}`} />
                </figure>
              ))}
            </div>
          </section>
        </Reveal>
      )}

      {/* ---------- next project ---------- */}
      <Reveal>
        <section className={styles.next}>
          <div data-reveal>
            <SectionEyebrow num="03" label="Next project" />
          </div>
          <Link
            href={`/works/${next.slug}`}
            className={styles.nextTitle}
            data-reveal
          >
            {next.title} ↗
          </Link>
          <p className={styles.nextLead} data-reveal>
            {next.description}
          </p>
          <div className={styles.actions} data-reveal>
            <Link href="/works" className={styles.linkBtn}>
              All works ↗
            </Link>
            <a href="mailto:decozzfx@gmail.com">
              <ShinyCTA>Start a project &nbsp;→</ShinyCTA>
            </a>
          </div>
        </section>
      </Reveal>
    </article>
  );
}
