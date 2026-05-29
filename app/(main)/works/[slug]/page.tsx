import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SectionEyebrow } from "@/components/common/section-eyebrow";
import { getWorkBySlug, works } from "@/lib/works";

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
  return {
    title: work.title,
    description: work.description,
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) notFound();

  const links =
    typeof work.website === "string"
      ? [{ label: "Visit site", url: work.website }]
      : (work.website ?? []);

  return (
    <div style={{ paddingTop: "2rem", maxWidth: "860px" }}>
      {/* Back link */}
      <div style={{ marginBottom: "2.5rem" }}>
        <Link
          href="/works"
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "var(--text-muted)",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
          }}
        >
          ← Works
        </Link>
      </div>

      {/* Title block */}
      <SectionEyebrow num="WORK" label={`${work.year} · ${work.platform}`} />
      <h1
        style={{
          fontFamily: "var(--font-instrument-serif)",
          fontSize: "clamp(2.5rem,6vw,4.5rem)",
          lineHeight: 1.05,
          margin: "0.5rem 0 1.5rem",
        }}
      >
        {work.title}
      </h1>
      <p
        style={{
          color: "var(--text-muted)",
          maxWidth: "60ch",
          lineHeight: 1.7,
        }}
      >
        {work.description}
      </p>

      {/* Stack chips */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          margin: "1.5rem 0",
        }}
      >
        {work.stack.map((s) => (
          <span
            key={s}
            style={{
              border: "1px solid var(--border)",
              padding: "0.35rem 0.75rem",
              fontFamily: "var(--font-jetbrains-mono)",
              fontSize: "0.72rem",
              textTransform: "uppercase",
            }}
          >
            {s}
          </span>
        ))}
      </div>

      {/* Website link(s) */}
      {work.website && (
        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            flexWrap: "wrap",
            marginBottom: "2rem",
          }}
        >
          {links.map((lnk) => (
            <a
              key={lnk.url}
              href={lnk.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontSize: "0.8rem",
                textTransform: "uppercase",
                padding: "0.7rem 1.1rem",
                border: "1px solid var(--border)",
              }}
            >
              {lnk.label} ↗
            </a>
          ))}
        </div>
      )}

      {/* Images — full-width vertical stack */}
      <div style={{ marginTop: "2.5rem" }}>
        {work.images.map((image, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={index}
            src={image}
            alt={
              index === 0 ? work.title : `${work.title} screenshot ${index + 1}`
            }
            style={{
              width: "100%",
              display: "block",
              marginBottom: "1.5rem",
              border: "1px solid var(--border)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
