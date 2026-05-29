"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShinyCTA } from "@/components/motion/shiny-cta";
import { Magnetic } from "@/components/motion/magnetic";
import { MenuOverlay } from "./menu-overlay";

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
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 80,
          zIndex: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 1.5rem",
          background: "rgba(10,10,11,0.6)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-instrument-serif)",
            fontSize: "1.4rem",
          }}
        >
          Moch Fathurrozi
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Magnetic>
            <a href="mailto:decozzfx@gmail.com">
              <ShinyCTA>Start a project &nbsp;→</ShinyCTA>
            </a>
          </Magnetic>
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            style={{
              background: "none",
              border: "none",
              color: "var(--text)",
              cursor: "pointer",
              fontFamily: "var(--font-jetbrains-mono)",
              fontSize: "0.8rem",
              textTransform: "uppercase",
            }}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </nav>
      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
