'use client';
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import Sidebar from "@/components/Sidebar";

export default function Home() {

  return (
    <div className="flex flex-col w-screen h-screen overflow-x-hidden transition-all duration-500 scroll-smooth ease-linear">
      <Header />
      <div className="flex flex-col sm:flex-row mt-20">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}
