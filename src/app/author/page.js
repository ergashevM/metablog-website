"use client";
import { useState } from "react";
import Navigation from "@/components/navigation";
import Posts from "@/components/posts";
import Profile from "@/assets/profile.svg";
import Footer from "@/components/footer";
import Author from "@/components/author";
import Title from "@/components/title";

export default function Pages() {
  const [isLightMode, setIsLightMode] = useState(true);
  const backgroundColor = isLightMode ? "bg-white" : "bg-[#181A2A]";

  const [authorData, setAuthorData] = useState({
    name: "Jonathan Doe",
    role: "Collaborator & Editor",
    description:
      "Meet Jonathan Doe, a passionate writer and blogger with a love for technology and travel. Jonathan holds a degree in Computer Science and has spent years working in the tech industry, gaining a deep understanding of the impact technology has on our lives.",
    profileImage: Profile,
  });

  return (
    <div
      className={`w-full mx-auto min-h-screen flex flex-col items-center mb-20 ${backgroundColor}`}
    >
      <Navigation setIsLightMode={setIsLightMode} isLightMode={isLightMode} />
      <Author
        authorData={authorData}
        setIsLightMode={setIsLightMode}
        isLightMode={isLightMode}
      />
      <Title setIsLightMode={setIsLightMode} isLightMode={isLightMode} />
      <Posts
        setIsLightMode={setIsLightMode}
        isLightMode={isLightMode}
        setAuthorData={setAuthorData}
      />
      <div className="mb-20"></div>
      <Footer setIsLightMode={setIsLightMode} isLightMode={isLightMode} />
    </div>
  );
}
