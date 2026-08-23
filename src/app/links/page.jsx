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
            fontSize: 11,
            letterSpacing: ".2em",
            textTransform: "uppercase",
            color: "var(--color-accent-deep)",
          }}
        >
          Goiânia, GO
        </p>
        <h1
          style={{
            margin: 0,
            fontFamily: "var(--font-heading)",
            fontWeight: 400,
            fontSize: "clamp(30px,6vw,44px)",
            letterSpacing: "-.02em",
          }}
        >
          João Víctor{" "}
          <span style={{ fontStyle: "italic", color: "var(--color-accent-deep)" }}>Calaça</span>
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
            style={{ justifyContent: "flex-start", gap: 14, padding: "16px 20px", fontSize: 15 }}
          >
            <Icon size={18} />
            {label}
          </a>
        ))}
      </nav>

      <p style={{ margin: 0, fontSize: 12, opacity: 0.55 }}>© 2026 João Víctor Calaça</p>
    </div>
  );
}
