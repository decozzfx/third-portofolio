"use client";

import styles from "./quick-contact.module.css";

// Replace with the real number (international format, no "+"), e.g. "628123456789"
const CONTACT_PHONE = "628000000000";
const CONTACT_EMAIL = "decozzfx@gmail.com";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
    <path d="M17.47 14.38c-.3-.15-1.74-.86-2-.95-.27-.1-.46-.15-.65.15-.2.3-.75.95-.92 1.14-.17.2-.34.22-.63.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.65-1.58-.9-2.16-.24-.57-.48-.49-.65-.5l-.56-.01c-.2 0-.5.07-.77.37-.26.3-1.01.99-1.01 2.42 0 1.42 1.04 2.8 1.18 2.99.15.2 2.04 3.12 4.95 4.38.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.74-.71 1.98-1.4.24-.68.24-1.27.17-1.39-.07-.12-.27-.2-.56-.34zM12.04 21.5h-.01a9.5 9.5 0 01-4.84-1.32l-.35-.21-3.6.94.96-3.51-.23-.36a9.46 9.46 0 01-1.45-5.05c0-5.24 4.27-9.5 9.52-9.5 2.54 0 4.93.99 6.72 2.79a9.43 9.43 0 012.78 6.72c0 5.24-4.27 9.5-9.5 9.5zm8.1-17.6A11.42 11.42 0 0012.04 0C5.74 0 .6 5.13.6 11.43c0 2.01.53 3.98 1.53 5.71L.5 24l6.04-1.58a11.4 11.4 0 005.49 1.4h.01c6.3 0 11.43-5.13 11.43-11.43 0-3.05-1.19-5.92-3.35-8.08z" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
    <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.3 21 3 13.7 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
  </svg>
);

const ChatIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
    <path d="M20 2H4a2 2 0 00-2 2v18l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2zm-2 9H6V9h12v2zm0-4H6V5h12v2z" />
  </svg>
);

const LINKS = [
  {
    label: "WhatsApp",
    href: `https://wa.me/${CONTACT_PHONE}`,
    icon: <WhatsAppIcon />,
    external: true,
  },
  {
    label: "Call",
    href: `tel:+${CONTACT_PHONE}`,
    icon: <PhoneIcon />,
    external: false,
  },
  {
    label: "Email",
    href: `mailto:${CONTACT_EMAIL}`,
    icon: <ChatIcon />,
    external: false,
  },
] as const;

export function QuickContact() {
  return (
    <nav className={styles.dock} aria-label="Quick contact">
      {LINKS.map((l) => (
        <a
          key={l.label}
          href={l.href}
          className={styles.btn}
          aria-label={l.label}
          {...(l.external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {l.icon}
          <span className={styles.tip}>{l.label}</span>
        </a>
      ))}
    </nav>
  );
}
