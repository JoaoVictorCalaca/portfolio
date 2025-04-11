'use client';
import MainContent from "@/components/MainContent";
import Sidebar from "@/components/Sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, MapPin, Send } from "lucide-react";

export default function Home() {

  return (
    <div className="flex flex-col sm:flex-row h-screen w-screen overflow-x-hidden">
      <Sidebar/>
      <MainContent/>
    </div>
  );
}
