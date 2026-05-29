import styles from "./shiny-cta.module.css";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export function ShinyCTA({ children, className = "", ...rest }: Props) {
  return (
    <button className={`${styles.cta} ${className}`} {...rest}>
      {children}
    </button>
  );
}
