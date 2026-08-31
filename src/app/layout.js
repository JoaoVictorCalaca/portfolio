import { Poppins, Roboto } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const roboto = Roboto({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "João Víctor Calaça — Engenheiro de Software",
  description:
    "Portfólio de João Víctor Calaça: desenvolvedor full-stack e mobile, do banco de dados ao pixel.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={`${poppins.variable} ${roboto.variable}`}>{children}</body>
    </html>
  );
}
