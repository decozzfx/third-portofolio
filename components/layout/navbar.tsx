"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BorderCTA } from "@/components/motion/border-cta";
import { Magnetic } from "@/components/motion/magnetic";
import { MenuOverlay } from "./menu-overlay";
import styles from "./navbar.module.css";

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.bar}>
          <Link href="/" className={styles.logo} aria-label="Home">
            <span className={styles.logoMark} />
          </Link>
          <Magnetic>
            <a href="mailto:decozzfx@gmail.com">
              <BorderCTA>Start a project &nbsp;→</BorderCTA>
            </a>
          </Magnetic>
          <button
            type="button"
            className={styles.burger}
            aria-label="Toggle menu"
            aria-expanded={open}
            data-open={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>
      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
