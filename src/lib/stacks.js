const icon = (slug, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-${variant}.svg`;

export const frontend = [
  { name: "ReactJS", iconUrl: icon("react") },
  { name: "Next.js", iconUrl: icon("nextjs") },
  { name: "JavaScript", iconUrl: icon("javascript") },
  { name: "TypeScript", iconUrl: icon("typescript") },
  { name: "React Native / Expo", iconUrl: icon("react") },
  { name: "Tailwind CSS", iconUrl: icon("tailwindcss") },
  { name: "SCSS", iconUrl: icon("sass") },
  { name: "HTML & CSS", iconUrl: icon("html5") },
];

export const backend = [
  { name: "Node.js", iconUrl: icon("nodejs") },
  { name: "Java", iconUrl: icon("java") },
  { name: "Java Spring Boot", iconUrl: icon("spring") },
  { name: "PostgreSQL / SQL", iconUrl: icon("postgresql") },
  { name: "Git & GitHub", iconUrl: icon("git") },
];

export const tools = [
  { name: "Claude Code", symbol: "✳" },
  { name: "Figma", iconUrl: icon("figma") },
  {
    name: { pt: "Infraestrutura de redes", en: "Network infrastructure" },
    symbol: "◇",
  },
  {
    name: { pt: "Manutenção de computadores", en: "Computer maintenance" },
    symbol: "◇",
  },
];
