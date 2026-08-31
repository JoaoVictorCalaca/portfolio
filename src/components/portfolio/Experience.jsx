"use client";

import { dict } from "@/lib/i18n";

export default function Experience({ lang }) {
  const t = dict[lang].experience;

  return (
    <section
      id="trajetoria"
      data-reveal="1"
      style={{ background: "var(--color-surface)", padding: "12vh 6vw" }}
    >
      <div
        className="two-col"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(200px,.55fr) minmax(0,1.45fr)",
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
              margin: "0 0 20px",
              fontWeight: 800,
              fontSize: "clamp(28px,3.2vw,42px)",
              letterSpacing: "-.01em",
              textTransform: "uppercase",
            }}
          >
            {t.title}
          </h2>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: "var(--color-muted)", maxWidth: "30ch" }}>
            {t.lead}
          </p>
          <div
            style={{
              marginTop: 34,
              paddingTop: 22,
              borderTop: "1px solid var(--color-divider)",
            }}
          >
            <p
              style={{
                margin: "0 0 4px",
                fontSize: 11,
                letterSpacing: ".16em",
                textTransform: "uppercase",
                color: "var(--color-muted)",
              }}
            >
              {t.academicLabel}
            </p>
            <p style={{ margin: "10px 0 0", fontSize: 15, lineHeight: 1.6, color: "var(--color-text)" }}>
              {t.degree1} — <span style={{ color: "var(--color-muted)" }}>{t.ongoing}</span>
              <br />
              <span style={{ fontSize: 13, color: "var(--color-muted)" }}>{t.degree1Sub}</span>
            </p>
            <p style={{ margin: "14px 0 0", fontSize: 15, lineHeight: 1.6, color: "var(--color-text)" }}>
              {t.degree2} — <span style={{ color: "var(--color-muted)" }}>{t.degree2Year}</span>
              <br />
              <span style={{ fontSize: 13, color: "var(--color-muted)" }}>{t.degree2Sub}</span>
            </p>
          </div>
        </div>
        <ol
          style={{
            listStyle: "none",
            margin: 0,
            padding: "0 0 0 30px",
            position: "relative",
            borderLeft: "1px solid var(--color-divider)",
          }}
        >
          {t.steps.map((step, i) => (
            <li key={step.title} data-step={i + 1} style={{ position: "relative", paddingBottom: 38 }}>
              <span
                style={{
                  position: "absolute",
                  left: -35,
                  top: 6,
                  width: 9,
                  height: 9,
                  borderRadius: "50%",
                  background: "var(--color-accent)",
                }}
              />
              <p
                style={{
                  margin: "0 0 6px",
                  fontSize: 12,
                  letterSpacing: ".14em",
                  color: "var(--color-accent)",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {step.period}
              </p>
              <h3 style={{ margin: "0 0 8px", fontWeight: 700, fontSize: 20 }}>{step.title}</h3>
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "var(--color-muted)",
                  maxWidth: "62ch",
                }}
              >
                {step.desc}
              </p>
            </li>
          ))}
          <li data-step={t.steps.length + 1} style={{ position: "relative" }}>
            <span
              style={{
                position: "absolute",
                left: -38,
                top: 2,
                width: 15,
                height: 15,
                borderRadius: "50%",
                border: "1px solid var(--color-accent)",
                background: "var(--color-surface)",
              }}
            />
            <p style={{ margin: 0, fontSize: 13, color: "var(--color-muted)", fontStyle: "italic" }}>
              {t.nextChapter}
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
