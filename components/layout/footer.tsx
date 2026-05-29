import Link from "next/link";

const COLS = [
  {
    title: "Sitemap",
    links: [
      ["Home", "/"],
      ["Works", "/works"],
      ["Posts", "/posts"],
      ["CV", "/cv"],
    ],
  },
  {
    title: "Social",
    links: [
      ["GitHub", "https://github.com/decozzfx"],
      ["LinkedIn", "https://linkedin.com/in/decozzfx"],
    ],
  },
];

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "4rem 1.5rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "3rem",
          justifyContent: "space-between",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-instrument-serif)",
            fontSize: "2rem",
            lineHeight: 1.1,
          }}
        >
          Fullstack
          <br />
          developer from
          <br />
          <em>Semarang.</em>
        </p>
        <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}>
          {COLS.map((c) => (
            <div key={c.title}>
              <p
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontSize: "0.7rem",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: "0.8rem",
                }}
              >
                {c.title}
              </p>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                }}
              >
                {c.links.map(([label, href]) => (
                  <li key={href}>
                    {href.startsWith("http") ? (
                      <a href={href} target="_blank" rel="noopener noreferrer">
                        {label} ↗
                      </a>
                    ) : (
                      <Link href={href}>{label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p
        style={{
          maxWidth: "var(--container)",
          margin: "3rem auto 0",
          fontFamily: "var(--font-jetbrains-mono)",
          fontSize: "0.72rem",
          color: "var(--text-muted)",
        }}
      >
        © 2026 Moch Fathurrozi
      </p>
    </footer>
  );
}
