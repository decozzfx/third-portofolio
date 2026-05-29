"use client";

import Link from "next/link";
import { TextRoll } from "@/components/motion/text-roll";
import styles from "./menu-overlay.module.css";

const ITEMS = [
  { label: "Home", href: "/" },
  { label: "Works", href: "/works" },
  { label: "Posts", href: "/posts" },
  { label: "CV", href: "/cv" },
];

export function MenuOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={`${styles.overlay} ${open ? styles.open : ""}`}
      aria-hidden={!open}
    >
      <ul className={styles.list}>
        {ITEMS.map((it) => (
          <li key={it.href} className={styles.item}>
            <Link href={it.href} onClick={onClose}>
              <TextRoll text={it.label} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
