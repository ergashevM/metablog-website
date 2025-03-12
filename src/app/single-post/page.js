"use client";
import { useState } from "react";
import Navigation from "@/components/navigation";
import Add from "@/components/add";
import Footer from "@/components/footer";
import TechnologyPost from "@/components/technologyPost";
import DestinationPost from "@/components/destinationPost";
import ItineraryPost from "@/components/itineraryPost";
import Traveling from "@/components/traveling";
import FivePosts from "@/components/fivePosts";

export default function SinglePost() {
  const [isLightMode, setIsLightMode] = useState(true);
  const backgroundColor = isLightMode ? "bg-white" : "bg-[#181A2A]";

  return (
    <div
      className={`w-full mx-auto min-h-screen flex flex-col items-center ${backgroundColor}`}
    >
      <Navigation setIsLightMode={setIsLightMode} isLightMode={isLightMode} />
      <TechnologyPost
        setIsLightMode={setIsLightMode}
        isLightMode={isLightMode}
      />
      <DestinationPost
        setIsLightMode={setIsLightMode}
        isLightMode={isLightMode}
      />
      <ItineraryPost
        setIsLightMode={setIsLightMode}
        isLightMode={isLightMode}
      />
      <Traveling setIsLightMode={setIsLightMode} isLightMode={isLightMode} />
      <Add setIsLightMode={setIsLightMode} isLightMode={isLightMode} />
      <FivePosts setIsLightMode={setIsLightMode} isLightMode={isLightMode} />
      <Footer setIsLightMode={setIsLightMode} isLightMode={isLightMode} />
    </div>
  );
}
