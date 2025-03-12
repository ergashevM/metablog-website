import React from "react";

const ItineraryPost = ({ isLightMode, setIsLightMode }) => {
  const handleSwitchClick = () => {
    const newMode = !isLightMode;
    setIsLightMode(newMode);
  };

  return (
    <section className="max-w-[800px] w-full mb-8">
      <h3
        className={`font-semibold text-[24px] -mt-1 ${
          isLightMode ? "text-[#181A2A]" : "text-white"
        }`}
      >
        Plan Your Itinerary
      </h3>
      <p
        className={`font-sourseSerifPro font-normal text-[18px] md:text-[20px] leading-[32px] tracking-tight ${
          isLightMode ? "text-[#3B3C4A]" : "text-[#BABABF]"
        }`}
      >
        While it's essential to leave room for spontaneity and unexpected
        adventures, having a rough itinerary can help you make the most of your
        time and budget. Identify the must-see sights and experiences and
        prioritize them according to your interests and preferences. This will
        help you avoid overscheduling and ensure that you have time to relax and
        enjoy your journey. <br />
        <br /> Vitae sapien pellentesque habitant morbi tristique. Luctus
        venenatis lectus magna fringilla. Nec ullamcorper sit amet risus nullam
        eget felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.
      </p>
    </section>
  );
};

export default ItineraryPost;
