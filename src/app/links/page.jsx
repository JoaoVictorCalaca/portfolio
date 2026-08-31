import { File, Github, Home, Instagram, Linkedin } from "lucide-react";

export const metadata = {
  title: "Links — João Víctor Calaça",
};

const links = [
  { href: "/", label: "Portfólio", icon: Home, external: false },
  {
    href: "/Curriculo.pdf",
    label: "Currículo",
    icon: File,
    download: "Curriculo-Joao-Victor-Calaca.pdf",
    external: false,
  },
  {
    href: "https://www.linkedin.com/in/joaovictorcalaca",
    label: "LinkedIn",
    icon: Linkedin,
    external: true,
  },
  {
    href: "https://github.com/JoaoVictorCalaca",
    label: "GitHub",
    icon: Github,
    external: true,
  },
  {
    href: "https://www.instagram.com/jvcalaca",
    label: "Instagram",
    icon: Instagram,
    external: true,
  },
];

export default function LinksPage() {
  return (
    <div
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
        padding: "10vh 6vw",
        background: "var(--color-bg)",
        color: "var(--color-text)",
      }}
    >
      <div style={{ textAlign: "center" }}>
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
          Goiânia, GO
        </p>
        <h1
          style={{
            margin: 0,
            fontWeight: 800,
            fontSize: "clamp(28px,6vw,40px)",
            letterSpacing: "-.01em",
            textTransform: "uppercase",
          }}
        >
          João Víctor <span style={{ color: "var(--color-accent)" }}>Calaça</span>
        </h1>
      </div>

      <nav style={{ display: "flex", flexDirection: "column", gap: 12, width: "min(420px, 100%)" }}>
        {links.map(({ href, label, icon: Icon, download, external }) => (
          <a
            key={href}
            href={href}
            download={download}
            {...(external ? { target: "_blank", rel: "noopener" } : {})}
            className="btn btn-secondary"
            style={{ justifyContent: "flex-start", gap: 14, padding: "16px 20px", fontSize: 14 }}
          >
            <Icon size={18} />
            {label}
          </a>
        ))}
      </nav>

      <p style={{ margin: 0, fontSize: 12, color: "var(--color-muted)" }}>© 2026 João Víctor Calaça</p>
    </div>
  );
}
