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
              height: 3,
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
              color: "var(--color-muted)",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {t.kicker}
          </span>
        </div>
        <p
          style={{
            margin: "0 0 10px",
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: 12,
            letterSpacing: ".24em",
            textTransform: "uppercase",
            color: "var(--color-accent)",
            animation: "rise .8s .05s cubic-bezier(.2,.7,.2,1) both",
          }}
        >
          {t.eyebrow}
        </p>
        <h1
          style={{
            fontWeight: 800,
            fontSize: "clamp(44px,7.6vw,108px)",
            lineHeight: 0.96,
            letterSpacing: "-.02em",
            textTransform: "uppercase",
            animation: "rise .9s .12s cubic-bezier(.2,.7,.2,1) both",
          }}
        >
          {t.titleLine1}
          <br />
          {t.titleLine2 ? `${t.titleLine2} ` : ""}
          <span style={{ color: "var(--color-accent)" }}>{t.titleEm}</span>
        </h1>
        <p
          style={{
            maxWidth: "36ch",
            margin: "32px 0 0",
            fontSize: 18,
            lineHeight: 1.65,
            color: "var(--color-muted)",
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
            gap: 14,
            marginTop: 40,
            animation: "rise .9s .3s cubic-bezier(.2,.7,.2,1) both",
          }}
        >
          <a href="#projetos" className="btn btn-primary">
            {t.ctaPrimary}
          </a>
          <a href="/Curriculo.pdf" download={t.cvFilename} className="btn btn-secondary">
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
                  i === t.stats.length - 1 ? "1px solid var(--color-divider)" : undefined,
              }}
            >
              <dt
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: 11,
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                  color: "var(--color-muted)",
                }}
              >
                {s.term}
              </dt>
              <dd
                style={{
                  margin: 0,
                  fontSize: 14,
                  textAlign: "right",
                  color: s.accent ? "var(--color-accent)" : "var(--color-text)",
                }}
              >
                {s.desc}
                {s.tag ? <span style={{ color: "var(--color-muted)" }}> {s.tag}</span> : null}
                {s.sub ? (
                  <>
                    <br />
                    <span style={{ color: "var(--color-muted)", fontSize: 12 }}>{s.sub}</span>
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
