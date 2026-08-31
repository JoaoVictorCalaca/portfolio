"use client";

import { dict } from "@/lib/i18n";

export default function About({ lang }) {
  const t = dict[lang].about;

  return (
    <section
      id="sobre"
      data-reveal="1"
      style={{ padding: "11vh 6vw", borderBottom: "1px solid var(--color-divider)" }}
    >
      <div
        className="two-col"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(200px,.5fr) minmax(0,1.5fr)",
          gap: "6vw",
        }}
      >
        <div>
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
              fontWeight: 800,
              fontSize: "clamp(28px,3.2vw,42px)",
              letterSpacing: "-.01em",
              textTransform: "uppercase",
            }}
          >
            {t.titleLine1}
            <br />
            {t.titleLine2}
          </h2>
        </div>
        <div>
          <div
            className="about-cols"
            style={{
              columns: 2,
              columnGap: "5vw",
              columnRule: "1px solid var(--color-divider)",
              color: "var(--color-muted)",
              fontSize: 15.5,
              lineHeight: 1.8,
            }}
          >
            <p style={{ margin: "0 0 16px" }}>
              {t.dropCap}
              {t.paragraphs[0]}
            </p>
            <p style={{ margin: "0 0 16px" }}>{t.paragraphs[1]}</p>
            <p style={{ margin: 0 }}>{t.paragraphs[2]}</p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 30 }}>
            {t.langs.map((l) => (
              <span
                key={l.label}
                className="tag tag-outline"
                style={
                  l.flag === "🇧🇷"
                    ? { borderColor: "var(--color-accent)", color: "var(--color-accent)" }
                    : undefined
                }
              >
                {l.flag} {l.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
