"use client";

import { useEffect, useRef, useState } from "react";
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
  const [theme, setTheme] = useState("light");
  const overriddenRef = useRef(false);
  useScrollReveal();

  // The device's theme is authoritative: on mount, and on every OS-level
  // light/dark change, sync to it — unless the visitor toggled manually
  // this session, in which case their choice wins until the next reload.
  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const applyFromSystem = (isDark) => {
      if (overriddenRef.current) return;
      const next = isDark ? "dark" : "light";
      setTheme(next);
      document.documentElement.setAttribute("data-theme", next);
    };
    applyFromSystem(mql.matches);
    const onChange = (e) => applyFromSystem(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  const toggleTheme = () => {
    overriddenRef.current = true;
    setTheme((current) => {
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      return next;
    });
  };

  return (
    <div style={{ maxWidth: "100%", overflowX: "hidden" }}>
      <Nav lang={lang} setLang={setLang} theme={theme} toggleTheme={toggleTheme} />
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
