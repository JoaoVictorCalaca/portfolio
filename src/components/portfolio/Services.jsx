"use client";

import { dict } from "@/lib/i18n";

export default function Services({ lang }) {
  const t = dict[lang].services;

  return (
    <section
      id="servicos"
      data-reveal="1"
      style={{ padding: "11vh 6vw", borderBottom: "1px solid var(--color-divider)" }}
    >
      <p
        style={{
          margin: "0 0 8px",
          fontSize: 11,
          letterSpacing: ".2em",
          textTransform: "uppercase",
          color: "var(--color-accent-deep)",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {t.kicker}
      </p>
      <h2
        style={{
          margin: "0 0 6vh",
          fontWeight: 400,
          fontSize: "clamp(30px,3.6vw,46px)",
          letterSpacing: "-.02em",
        }}
      >
        {t.title}
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))",
          gap: 0,
        }}
      >
        {t.items.map((item) => (
          <article
            key={item.title}
            style={{
              padding: "0 4vw 0 3vw",
              borderLeft: "1px solid var(--color-divider)",
            }}
          >
            <p
              style={{
                margin: "0 0 14px",
                fontVariantNumeric: "tabular-nums",
                fontSize: 12,
                color: "var(--color-accent-deep)",
              }}
            >
              {item.numeral}
            </p>
            <h3 style={{ margin: "0 0 12px", fontWeight: 600, fontSize: 22 }}>
              {item.title}
            </h3>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, opacity: 0.78 }}>
              {item.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
