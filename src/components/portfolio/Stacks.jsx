"use client";

import { dict } from "@/lib/i18n";
import { frontend, backend, tools } from "@/lib/stacks";
import { useGithubStats } from "@/hooks/useGithubStats";

function StackList({ items, lang }) {
  return (
    <ul
      style={{
        listStyle: "none",
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {items.map((item) => {
        const name = typeof item.name === "string" ? item.name : item.name[lang];
        return (
          <li
            key={name}
            className="stack-item"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "9px 8px",
              borderRadius: 3,
            }}
          >
            {item.iconUrl ? (
              <img
                src={item.iconUrl}
                alt=""
                width={20}
                height={20}
                loading="lazy"
                style={{ width: 20, height: 20, opacity: 0.85 }}
              />
            ) : (
              <span
                style={{ width: 20, textAlign: "center", color: "var(--color-accent-deep)" }}
              >
                {item.symbol}
              </span>
            )}
            <span style={{ fontSize: 14.5 }}>{name}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default function Stacks({ lang }) {
  const t = dict[lang].stacks;
  const gh = useGithubStats();

  return (
    <section
      id="stacks"
      data-reveal="1"
      style={{ padding: "11vh 6vw", borderBottom: "1px solid var(--color-divider)" }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: 20,
          marginBottom: "6vh",
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
            style={{ fontWeight: 400, fontSize: "clamp(30px,3.6vw,46px)", letterSpacing: "-.02em" }}
          >
            {t.title}
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            gap: 34,
            padding: "16px 0",
            borderTop: "1px solid var(--color-divider)",
            borderBottom: "1px solid var(--color-divider)",
          }}
        >
          <div>
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-heading)",
                fontSize: 32,
                fontVariantNumeric: "tabular-nums",
                lineHeight: 1,
              }}
            >
              {gh.repos}
            </p>
            <p
              style={{
                margin: "2px 0 0",
                fontSize: 10.5,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                opacity: 0.55,
              }}
            >
              {t.stats.repos}
            </p>
          </div>
          <div>
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-heading)",
                fontSize: 32,
                fontVariantNumeric: "tabular-nums",
                lineHeight: 1,
              }}
            >
              {gh.stars}
            </p>
            <p
              style={{
                margin: "2px 0 0",
                fontSize: 10.5,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                opacity: 0.55,
              }}
            >
              {t.stats.stars}
            </p>
          </div>
          <div>
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-heading)",
                fontSize: 32,
                fontVariantNumeric: "tabular-nums",
                lineHeight: 1,
              }}
            >
              {gh.since}
            </p>
            <p
              style={{
                margin: "2px 0 0",
                fontSize: 10.5,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                opacity: 0.55,
              }}
            >
              {t.stats.since}
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
          gap: "4vw",
        }}
      >
        <div>
          <h4 className="stack-heading">{t.groups.frontend}</h4>
          <StackList items={frontend} lang={lang} />
        </div>
        <div>
          <h4 className="stack-heading">{t.groups.backend}</h4>
          <StackList items={backend} lang={lang} />
        </div>
        <div>
          <h4 className="stack-heading">{t.groups.tools}</h4>
          <StackList items={tools} lang={lang} />
        </div>
      </div>
    </section>
  );
}
