"use client";

import { Moon, Sun } from "lucide-react";
import { dict } from "@/lib/i18n";

export default function Nav({ lang, setLang, theme, toggleTheme }) {
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
        padding: "14px 6vw",
        background: "color-mix(in srgb, var(--color-bg) 88%, transparent)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--color-divider)",
      }}
    >
      <a
        href="#top"
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 600,
          fontSize: 19,
          letterSpacing: ".02em",
          color: "var(--color-text)",
          textDecoration: "none",
          marginRight: "auto",
        }}
      >
        João Víctor{" "}
        <span className="brand-meta">
          <span style={{ color: "var(--color-accent)" }}>·</span>{" "}
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 11,
              letterSpacing: ".16em",
              textTransform: "uppercase",
              opacity: 0.6,
            }}
          >
            {t.brandRole}
          </span>
        </span>
      </a>
      <div
        className="nav-links"
        style={{ display: "flex", gap: 22, alignItems: "center" }}
      >
        {links.map(([href, label]) => (
          <a
            key={href}
            href={href}
            className="nav-link"
            style={{
              fontSize: 13,
              color: "var(--color-text)",
              textDecoration: "none",
              letterSpacing: ".02em",
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
            fontSize: 11,
            letterSpacing: ".14em",
            color:
              lang === "pt"
                ? "var(--color-accent-deep)"
                : "color-mix(in srgb, var(--color-text) 50%, transparent)",
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
            fontSize: 11,
            letterSpacing: ".14em",
            color:
              lang === "en"
                ? "var(--color-accent-deep)"
                : "color-mix(in srgb, var(--color-text) 50%, transparent)",
          }}
        >
          EN
        </button>
        <button
          onClick={toggleTheme}
          title={theme === "dark" ? t.themeToLight : t.themeToDark}
          aria-label={theme === "dark" ? t.themeToLight : t.themeToDark}
          className="theme-toggle"
        >
          {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
        </button>
      </div>
    </nav>
  );
}
