import { Cormorant_Garamond, Lora } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

const lora = Lora({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata = {
  title: "João Víctor Calaça — Engenheiro de Software",
  description:
    "Portfólio de João Víctor Calaça: desenvolvedor full-stack e mobile, do banco de dados ao pixel.",
  icons: {
    icon: "/favicon.svg",
  },
};

const themeBootScript = `(function(){try{var t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body className={`${cormorant.variable} ${lora.variable}`}>
        {children}
      </body>
    </html>
  );
}
