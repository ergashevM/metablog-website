import React from "react";

const DestinationPost = ({ isLightMode, setIsLightMode }) => {
  const handleSwitchClick = () => {
    const newMode = !isLightMode;
    setIsLightMode(newMode);
  };

  return (
    <section className="max-w-[800px] w-full flex flex-col justify-between mb-8">
      <h3 className={`font-semibold text-[24px] -mt-1 ${isLightMode ? "text-[#181A2A]" : "text-white"}`}>
        Research Your Destination
      </h3>
      <p
        className={`font-sourseSerifPro font-normal text-[18px] md:text-[20px] leading-[32px] tracking-tight ${
          isLightMode ? "text-[#3B3C4A]" : "text-[#BABABF]"
        }`}
      >
        Before embarking on your journey, take the time to research your
        destination. This includes understanding the local culture, customs, and
        laws, as well as identifying top attractions, restaurants, and
        accommodations. Doing so will help you navigate your destination with
        confidence and avoid any cultural faux pas. <br />
        <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit
        gravida rutrum quisque non tellus orci ac auctor. Mi ipsum faucibus
        vitae aliquet nec ullamcorper sit amet. Aenean euismod elementum nisi
        quis eleifend quam adipiscing vitae. Viverra adipiscing at in tellus.
      </p>
    </section>
  );
};

export default DestinationPost;
