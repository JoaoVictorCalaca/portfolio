"use client";

import { useState } from "react";
import { dict } from "@/lib/i18n";

const EMAIL = "joaovictormcalaca@gmail.com";

export default function Contact({ lang }) {
  const t = dict[lang].contact;
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      // clipboard API unavailable — still acknowledge the click
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2600);
  };

  const rows = [
    {
      label: t.rows.email,
      node: (
        <a
          href={`mailto:${EMAIL}`}
          style={{ fontSize: 14.5, flex: 1, minWidth: 0, overflowWrap: "anywhere" }}
        >
          {EMAIL}
        </a>
      ),
      copy: true,
    },
    {
      label: t.rows.linkedin,
      node: (
        <a
          href="https://www.linkedin.com/in/joaovictorcalaca"
          target="_blank"
          rel="noopener"
          style={{ fontSize: 14.5 }}
        >
          /joaovictorcalaca ↗
        </a>
      ),
    },
    {
      label: t.rows.github,
      node: (
        <a
          href="https://github.com/JoaoVictorCalaca"
          target="_blank"
          rel="noopener"
          style={{ fontSize: 14.5 }}
        >
          /JoaoVictorCalaca ↗
        </a>
      ),
    },
    {
      label: t.rows.instagram,
      node: (
        <a
          href="https://www.instagram.com/jvcalaca"
          target="_blank"
          rel="noopener"
          style={{ fontSize: 14.5 }}
        >
          @jvcalaca ↗
        </a>
      ),
      last: true,
    },
  ];

  return (
    <section id="contato" data-reveal="1" style={{ padding: "12vh 6vw 9vh" }}>
      <div
        className="two-col"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0,1.2fr) minmax(260px,.8fr)",
          gap: "6vw",
          alignItems: "start",
        }}
      >
        <div>
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
              margin: "0 0 20px",
              fontWeight: 400,
              fontSize: "clamp(34px,5vw,72px)",
              lineHeight: 1.02,
              letterSpacing: "-.03em",
            }}
          >
            {t.titleLine1}
            <br />
            {t.titleLine2}{" "}
            <span style={{ fontStyle: "italic", color: "var(--color-accent-deep)" }}>
              {t.titleEm}
            </span>
          </h2>
          <p style={{ margin: 0, maxWidth: "44ch", fontSize: 16, lineHeight: 1.7, opacity: 0.78 }}>
            {t.lead}
          </p>
        </div>
        <div>
          {rows.map((row) => (
            <div
              key={row.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "16px 0",
                borderTop: "1px solid var(--color-divider)",
                borderBottom: row.last ? "1px solid var(--color-divider)" : undefined,
              }}
            >
              <span
                style={{
                  fontSize: 13,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  opacity: 0.5,
                  flex: "none",
                  width: 104,
                  whiteSpace: "nowrap",
                }}
              >
                {row.label}
              </span>
              {row.node}
              {row.copy && (
                <button
                  onClick={copy}
                  title={t.copyTitle}
                  className="copy-btn"
                  style={{
                    cursor: "pointer",
                    background: "transparent",
                    border: "1px solid var(--color-divider)",
                    borderRadius: 3,
                    width: 32,
                    height: 32,
                    flex: "none",
                    color: copied ? "var(--color-accent-deep)" : "var(--color-text)",
                    font: "inherit",
                    fontSize: 13,
                  }}
                >
                  {copied ? "✓" : "⧉"}
                </button>
              )}
            </div>
          ))}
          <p style={{ margin: "14px 0 0", minHeight: 18, fontSize: 12.5, color: "var(--color-accent-deep)" }}>
            {copied ? t.copyNote : ""}
          </p>
          <a
            href="/Curriculo.pdf"
            download={t.cvFilename}
            className="btn btn-primary btn-block"
            style={{ marginTop: 18 }}
          >
            {t.cv}
          </a>
        </div>
      </div>
    </section>
  );
}
