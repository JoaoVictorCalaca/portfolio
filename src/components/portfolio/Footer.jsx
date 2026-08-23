"use client";

import { dict } from "@/lib/i18n";

export default function Footer({ lang }) {
  const t = dict[lang].footer;

  return (
    <footer
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 14,
        justifyContent: "space-between",
        alignItems: "center",
        padding: "26px 6vw",
        borderTop: "1px solid var(--color-divider)",
        fontSize: 12,
        color: "color-mix(in srgb, var(--color-text) 58%, transparent)",
      }}
    >
      <span>{t.copyright}</span>
      <span style={{ fontVariantNumeric: "tabular-nums" }}>{t.note}</span>
    </footer>
  );
}
