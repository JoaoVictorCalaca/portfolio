"use client";

import { dict } from "@/lib/i18n";

export default function Nav({ lang, setLang }) {
  const t = dict[lang].nav;
  const links = [
    ["#sobre", t.sobre],
    ["#servicos", t.servicos],
    ["#stacks", t.stacks],
    ["#projetos", t.projetos],
    ["#trajetoria", t.trajetoria],
    ["#contato", t.contato],
  ];

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        display: "flex",
        alignItems: "center",
        gap: 28,
        padding: "16px 6vw",
        background: "color-mix(in srgb, var(--color-bg) 90%, transparent)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--color-divider)",
      }}
    >
      <a
        href="#top"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          textDecoration: "none",
          marginRight: "auto",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: "-.01em",
            color: "var(--color-text)",
            textTransform: "uppercase",
          }}
        >
          João Víctor
        </span>
        <span
          className="brand-meta"
          style={{ display: "flex", alignItems: "center", gap: 8 }}
        >
          <span style={{ width: 18, height: 3, background: "var(--color-accent)" }} />
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 10.5,
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "var(--color-muted)",
            }}
          >
            {t.brandRole}
          </span>
        </span>
      </a>
      <div className="nav-links" style={{ display: "flex", gap: 26, alignItems: "center" }}>
        {links.map(([href, label]) => (
          <a
            key={href}
            href={href}
            className="nav-link"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              fontSize: 11.5,
              letterSpacing: ".1em",
              textTransform: "uppercase",
              color: "var(--color-text)",
              textDecoration: "none",
            }}
          >
            {label}
          </a>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          paddingLeft: 18,
          borderLeft: "1px solid var(--color-divider)",
        }}
      >
        <button
          onClick={() => setLang("pt")}
          style={{
            cursor: "pointer",
            background: "transparent",
            border: 0,
            padding: "2px 4px",
            font: "inherit",
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: 11,
            letterSpacing: ".1em",
            color: lang === "pt" ? "var(--color-accent)" : "var(--color-muted)",
          }}
        >
          PT
        </button>
        <span style={{ opacity: 0.3, fontSize: 11 }}>/</span>
        <button
          onClick={() => setLang("en")}
          style={{
            cursor: "pointer",
            background: "transparent",
            border: 0,
            padding: "2px 4px",
            font: "inherit",
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: 11,
            letterSpacing: ".1em",
            color: lang === "en" ? "var(--color-accent)" : "var(--color-muted)",
          }}
        >
          EN
        </button>
      </div>
    </nav>
  );
}
