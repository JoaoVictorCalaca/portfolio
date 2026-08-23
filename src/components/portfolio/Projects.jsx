"use client";

import Image from "next/image";
import { dict } from "@/lib/i18n";
import { projects } from "@/lib/projects";

export default function Projects({ lang }) {
  const t = dict[lang].projects;

  return (
    <section
      id="projetos"
      data-reveal="1"
      style={{ padding: "11vh 6vw", borderBottom: "1px solid var(--color-divider)" }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "end",
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
        <p style={{ margin: 0, fontSize: 13, opacity: 0.6, maxWidth: "32ch", textAlign: "right" }}>
          {t.note}
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))",
          gap: "3vw",
        }}
      >
        {projects.map((p) => (
          <a
            key={p.id}
            href={p.link}
            target="_blank"
            rel="noopener"
            className="project-card"
            style={{
              textDecoration: "none",
              color: "var(--color-text)",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <figure
              className="plate project-figure"
              style={{ margin: 0, position: "relative", aspectRatio: "16/10", overflow: "hidden" }}
            >
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width: 700px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </figure>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  gap: 12,
                }}
              >
                <h3 style={{ margin: 0, fontWeight: 600, fontSize: 24 }}>{p.title}</h3>
                <span style={{ fontSize: 12, color: "var(--color-accent-deep)" }}>↗</span>
              </div>
              <p
                style={{
                  margin: "8px 0 12px",
                  fontSize: 14,
                  lineHeight: 1.65,
                  opacity: 0.78,
                  color: "var(--color-text)",
                }}
              >
                {p.blurb[lang]}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {p.tags.map((tag) => (
                  <span key={tag} className="tag tag-neutral">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      <p style={{ margin: "36px 0 0", fontSize: 14 }}>
        <a href="https://github.com/JoaoVictorCalaca" target="_blank" rel="noopener">
          {t.allRepos}
        </a>
      </p>
    </section>
  );
}
