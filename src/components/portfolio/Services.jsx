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
          fontFamily: "var(--font-heading)",
          fontWeight: 700,
          fontSize: 11,
          letterSpacing: ".2em",
          textTransform: "uppercase",
          color: "var(--color-accent)",
        }}
      >
        {t.kicker}
      </p>
      <h2
        style={{
          margin: "0 0 6vh",
          fontWeight: 800,
          fontSize: "clamp(28px,3.2vw,42px)",
          letterSpacing: "-.01em",
          textTransform: "uppercase",
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
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: 12,
                color: "var(--color-accent)",
              }}
            >
              {item.numeral}
            </p>
            <h3 style={{ margin: "0 0 12px", fontWeight: 700, fontSize: 21 }}>{item.title}</h3>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: "var(--color-muted)" }}>
              {item.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
