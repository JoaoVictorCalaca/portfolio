'use client';

import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import MainContent from "@/components/MainContent";
import Projects from "@/components/Projects";
import Stacks from "@/components/Stacks";

export default function Home() {

  return (
    <div className="flex flex-col w-screen h-screen overflow-x-hidden transition-all duration-500 scroll-smooth ease-linear font-mono">
      <MainContent/>
      <AboutMe/>
      <Experience/>
      <Stacks/>
      <Projects/>
      <Contact/>
    </div>
  );
}
