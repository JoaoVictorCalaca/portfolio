"use client";

import { dict } from "@/lib/i18n";

export default function Hero({ lang }) {
  const t = dict[lang].hero;

  return (
    <header
      id="top"
      className="two-col"
      style={{
        position: "relative",
        padding: "12vh 6vw 9vh",
        display: "grid",
        gridTemplateColumns: "minmax(0,1.55fr) minmax(240px,.95fr)",
        gap: "7vw",
        alignItems: "end",
        borderBottom: "1px solid var(--color-divider)",
      }}
    >
      <div style={{ minWidth: 0 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 34,
            animation: "fade .7s ease both",
          }}
        >
          <span
            style={{
              width: 52,
              height: 1,
              background: "var(--color-accent)",
              transformOrigin: "left",
              animation: "draw .8s cubic-bezier(.2,.7,.2,1) both",
            }}
          />
          <span
            style={{
              fontSize: 11,
              letterSpacing: ".22em",
              textTransform: "uppercase",
              color: "color-mix(in srgb, var(--color-text) 62%, transparent)",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {t.kicker}
          </span>
        </div>
        <p
          style={{
            margin: "0 0 6px",
            fontSize: 12,
            letterSpacing: ".2em",
            textTransform: "uppercase",
            color: "var(--color-accent-deep)",
            animation: "rise .8s .05s cubic-bezier(.2,.7,.2,1) both",
          }}
        >
          {t.eyebrow}
        </p>
        <h1
          style={{
            fontWeight: 400,
            fontSize: "clamp(48px,8.4vw,124px)",
            lineHeight: 0.92,
            letterSpacing: "-.03em",
            animation: "rise .9s .12s cubic-bezier(.2,.7,.2,1) both",
          }}
        >
          {t.titleLine1}
          <br />
          {t.titleLine2 ? `${t.titleLine2} ` : ""}
          <span style={{ fontStyle: "italic", color: "var(--color-accent-deep)" }}>
            {t.titleEm}
          </span>
        </h1>
        <p
          style={{
            maxWidth: "34ch",
            margin: "32px 0 0",
            fontSize: 19,
            lineHeight: 1.6,
            textWrap: "pretty",
            animation: "rise .9s .22s cubic-bezier(.2,.7,.2,1) both",
          }}
        >
          {t.lead}
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            marginTop: 40,
            animation: "rise .9s .3s cubic-bezier(.2,.7,.2,1) both",
          }}
        >
          <a href="#projetos" className="btn btn-primary">
            {t.ctaPrimary}
          </a>
          <a
            href="/Curriculo.pdf"
            download={t.cvFilename}
            className="btn btn-secondary"
          >
            {t.ctaSecondary}
          </a>
        </div>
      </div>
      <div
        style={{
          minWidth: 0,
          animation: "rise 1s .35s cubic-bezier(.2,.7,.2,1) both",
        }}
      >
        <dl style={{ margin: 0, display: "grid", gap: 0 }}>
          {t.stats.map((s, i) => (
            <div
              key={s.term}
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 16,
                padding: "13px 0",
                borderTop: "1px solid var(--color-divider)",
                borderBottom:
                  i === t.stats.length - 1
                    ? "1px solid var(--color-divider)"
                    : undefined,
              }}
            >
              <dt
                style={{
                  fontSize: 11,
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                  opacity: 0.55,
                }}
              >
                {s.term}
              </dt>
              <dd
                style={{
                  margin: 0,
                  fontSize: 14,
                  textAlign: "right",
                  color: s.accent ? "var(--color-accent-deep)" : undefined,
                }}
              >
                {s.desc}
                {s.tag ? <span style={{ opacity: 0.6 }}> {s.tag}</span> : null}
                {s.sub ? (
                  <>
                    <br />
                    <span style={{ opacity: 0.6, fontSize: 12 }}>{s.sub}</span>
                  </>
                ) : null}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </header>
  );
}
