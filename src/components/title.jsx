import React from "react";

const Title = ({ isLightMode, setIsLightMode }) => {
  const handleSwitchClick = () => {
    const newMode = !isLightMode;
    setIsLightMode(newMode);
  };
  return (
    <div className="w-[1216px]">
      <h3
        className={`font-bold font-workSans text-[24px] text-left mb-5 ${
          isLightMode ? "text-[#181A2A]" : "text-[#fff]"
        }`}
      >
        Latest Post
      </h3>
    </div>
  );
};

export default Title;
