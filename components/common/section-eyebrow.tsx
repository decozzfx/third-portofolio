import styles from "./section-eyebrow.module.css";

export function SectionEyebrow({ num, label }: { num: string; label: string }) {
  return (
    <p className={styles.eyebrow}>
      <span className={styles.bar} aria-hidden="true" />
      <span className={styles.tag}>[{num}]</span>
      {label}
    </p>
  );
}
