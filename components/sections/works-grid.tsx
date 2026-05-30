import Link from "next/link";
import type { Work } from "@/types";
import styles from "./works-grid.module.css";

export function WorksGrid({ works }: { works: Work[] }) {
  return (
    <div className={styles.grid}>
      {works.map((w, i) => (
        <Link
          key={w.slug}
          href={`/works/${w.slug}`}
          className={styles.card}
          data-reveal
        >
          <div className={styles.thumb}>
            {w.images[0] && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={w.images[0]} alt={w.title} loading="lazy" />
            )}
            <span className={styles.index}>
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
          <div className={styles.meta}>
            <h3 className={styles.title}>{w.title}</h3>
            <span className={styles.sub}>
              {w.platform} · {w.year}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
