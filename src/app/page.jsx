'use client';

import AboutMe from "@/components/AboutMe";
import MainContent from "@/components/MainContent";
import Stacks from "@/components/Stacks";

export default function Home() {

  return (
    <div className="flex flex-col w-screen h-screen overflow-x-hidden transition-all duration-500 scroll-smooth ease-linear font-mono">
      <MainContent/>
      <AboutMe/>
      <Stacks/>
    </div>
  );
}
