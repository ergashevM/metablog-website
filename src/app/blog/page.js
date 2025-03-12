"use client";
import { useState } from "react";
import Navigation from "@/components/navigation";
import Add from "@/components/add";
import Posts from "@/components/posts";
import Footer from "@/components/footer";
import TraceyWilson from "@/components/traceyWilson";
import Button from "@/components/button";

export default function Blog() {
  const [isLightMode, setIsLightMode] = useState(true);
  const backgroundColor = isLightMode ? "bg-white" : "bg-[#181A2A]";

  return (
      <div className={`w-full mx-auto min-h-screen flex flex-col items-center ${backgroundColor}`}>
        <Navigation setIsLightMode={setIsLightMode} isLightMode={isLightMode} />
        <TraceyWilson setIsLightMode={setIsLightMode} isLightMode={isLightMode} />
        <Posts setIsLightMode={setIsLightMode} isLightMode={isLightMode}/>
        <Button setIsLightMode={setIsLightMode} isLightMode={isLightMode} />
        <Add setIsLightMode={setIsLightMode} isLightMode={isLightMode} />
      <Footer setIsLightMode={setIsLightMode} isLightMode={isLightMode} />
    </div>
  );
}
