"use client";

import styles from "./text-roll.module.css";

export function TextRoll({ text }: { text: string }) {
  const letters = text.split("");

  const render = (clone?: boolean) => (
    <span
      className={`${styles.row} ${clone ? styles.clone : ""}`}
      aria-hidden={clone}
    >
      {letters.map((ch, i) => (
        <span
          key={i}
          className={styles.letter}
          style={{ ["--i" as string]: i } as React.CSSProperties}
        >
          {ch === " " ? " " : ch}
        </span>
      ))}
    </span>
  );

  return (
    <span className={styles.wrap}>
      <span className={styles.roll} aria-label={text}>
        {render(false)}
        {render(true)}
      </span>
    </span>
  );
}
