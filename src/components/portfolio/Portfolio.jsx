"use client";

import { useState } from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Stacks from "./Stacks";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Portfolio() {
  const [lang, setLang] = useState("pt");
  useScrollReveal();

  return (
    <div style={{ maxWidth: "100%", overflowX: "hidden" }}>
      <Nav lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <About lang={lang} />
      <Services lang={lang} />
      <Stacks lang={lang} />
      <Projects lang={lang} />
      <Experience lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}
