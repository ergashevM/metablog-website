"use client";
import { useState } from "react";
import Navigation from "@/components/navigation";
import JasonFrancisco from "@/components/jasonFrancisco";
import Add from "@/components/add";
import Posts from "@/components/posts";
import Footer from "@/components/footer";
import Title from "@/components/title";
import Button from "@/components/button";

export default function Home() {
  const [isLightMode, setIsLightMode] = useState(true);
  const backgroundColor = isLightMode ? "bg-white" : "bg-[#181A2A]";

  return (
    <div
      className={`w-full mx-auto min-h-screen flex flex-col items-center ${backgroundColor}`}
    >
      <Navigation setIsLightMode={setIsLightMode} isLightMode={isLightMode} />
      <JasonFrancisco
        setIsLightMode={setIsLightMode}
        isLightMode={isLightMode}
      />
      <Add setIsLightMode={setIsLightMode} isLightMode={isLightMode} />
      <Title setIsLightMode={setIsLightMode} isLightMode={isLightMode} />
      <Posts setIsLightMode={setIsLightMode} isLightMode={isLightMode} />
      <Button setIsLightMode={setIsLightMode} isLightMode={isLightMode} />
      <Add setIsLightMode={setIsLightMode} isLightMode={isLightMode} />
      <Footer setIsLightMode={setIsLightMode} isLightMode={isLightMode} />
    </div>
  );
}
