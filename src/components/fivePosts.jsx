import React from "react";

const FivePosts = ({ isLightMode, setIsLightMode }) => {
  const handleSwitchClick = () => {
    const newMode = !isLightMode;
    setIsLightMode(newMode);
  };

  return (
    <section className="max-w-[800px] w-full grid grid-cols-1 gap-y-10 mb-8">
      <div>
        <h3 className={`font-semibold text-[24px] -mt-1 ${isLightMode ? "text-[#181A2A]" : "text-white"}`}>
          Pack Lightly and Smartly
        </h3>
        <p className={`font-sourseSerifPro font-normal text-[20px] leading-[32px] tracking-tight ${isLightMode ? "text-[#3B3C4A]" : "text-[#BABABF]"}`}>
          Packing can be a daunting task, but with some careful planning and
          smart choices, you can pack light and efficiently. Start by making a
          packing list and sticking to it, focusing on versatile and comfortable
          clothing that can be mixed and matched. Invest in quality luggage and
          packing organizers to maximize space and minimize wrinkles.
        </p>
      </div>
      <div>
        <h3 className={`font-semibold text-[24px] -mt-1 ${isLightMode ? "text-[#181A2A]" : "text-white"}`}>
          Stay Safe and Healthy
        </h3>
        <p className={`font-sourseSerifPro font-normal text-[20px] leading-[32px] tracking-tight ${isLightMode ? "text-[#3B3C4A]" : "text-[#BABABF]"}`}>
          Traveling can expose you to new environments and potential health
          risks, so it's crucial to take precautions to stay safe and healthy.
          This includes researching any required vaccinations or medications,
          staying hydrated, washing your hands frequently, and using sunscreen
          and insect repellent. It's also essential to keep your valuables safe
          and secure and to be aware of your surroundings at all times.
        </p>
      </div>
      <div>
        <h3 className={`font-semibold text-[24px] -mt-1 ${isLightMode ? "text-[#181A2A]" : "text-white"}`}>
          Immerse Yourself in the Local Culture
        </h3>
        <p className={`font-sourseSerifPro font-normal text-[20px] leading-[32px] tracking-tight ${isLightMode ? "text-[#3B3C4A]" : "text-[#BABABF]"}`}>
          One of the most rewarding aspects of traveling is immersing yourself
          in the local culture and customs. This includes trying local cuisine,
          attending cultural events and festivals, and interacting with locals.
          Learning a few phrases in the local language can also go a long way in
          making connections and showing respect.
        </p>
      </div>
      <div>
        <h3 className={`font-semibold text-[24px] -mt-1 ${isLightMode ? "text-[#181A2A]" : "text-white"}`}>
          Capture Memories
        </h3>
        <p className={`font-sourseSerifPro font-normal text-[20px] leading-[32px] tracking-tight ${isLightMode ? "text-[#3B3C4A]" : "text-[#BABABF]"}`}>
          Finally, don't forget to capture memories of your journey. Whether
          it's through photographs, journaling, or souvenirs, preserving the
          moments and experiences of your travels can bring joy and nostalgia
          for years to come. However, it's also essential to be present in the
          moment and not let technology distract you from the beauty of your
          surroundings.
        </p>
      </div>
      <div>
        <h3 className={`font-semibold text-[24px] -mt-1 ${isLightMode ? "text-[#181A2A]" : "text-white"}`}>
          Conclusion:
        </h3>
        <p className={`font-sourseSerifPro font-normal text-[20px] leading-[32px] tracking-tight ${isLightMode ? "text-[#3B3C4A]" : "text-[#BABABF]"}`}>
          Traveling is an art form that requires a blend of planning,
          preparation, and spontaneity. By following these tips and tricks, you
          can make the most of your journey and create memories that last a
          lifetime. So pack your bags, embrace the adventure, and enjoy the
          ride.
        </p>
      </div>
    </section>
  );
};

export default FivePosts;