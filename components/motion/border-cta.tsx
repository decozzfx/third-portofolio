import styles from "./border-cta.module.css";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export function BorderCTA({ children, className = "", ...rest }: Props) {
  return (
    <button className={`${styles.cta} ${className}`} {...rest}>
      <span className={styles.inner}>{children}</span>
    </button>
  );
}
