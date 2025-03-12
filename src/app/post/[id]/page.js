"use client";
import { useState } from "react";
import Navigation from "@/components/navigation";
import PostContent from "@/components/postContent";
import Footer from "@/components/footer";

export default function SinglePost() {
  const [isLightMode, setIsLightMode] = useState(true);
  const backgroundColor = isLightMode ? "bg-white" : "bg-[#181A2A]";
  return (
    <div
      className={`w-full max-w-[1246px] mx-auto min-h-screen flex flex-col items-center ${backgroundColor}`}
    >
      <Navigation setIsLightMode={setIsLightMode} isLightMode={isLightMode} />
      <PostContent setIsLightMode={setIsLightMode} isLightMode={isLightMode} />
      <Footer setIsLightMode={setIsLightMode} isLightMode={isLightMode} />
    </div>
  );
}
