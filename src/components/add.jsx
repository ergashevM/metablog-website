import React from "react";

const Add = ({ setIsLightMode, isLightMode }) => {
  const handleSwitchClick = () => {
    const newMode = !isLightMode;
    setIsLightMode(newMode);
  };

  return (
    <aside
      className={`max-w-full w-[750px] h-auto flex flex-col items-center justify-around rounded-[12px] font-workSans py-4 mb-[70px] ${
        isLightMode ? "bg-[#E8E8EA]" : "bg-[#242535]"
      }`}
    >
      <h4 className="text-sm font-normal text-[#696A75]">Advertisement</h4>
      <p className="font-semibold text-[20px] text-[#696A75]">
        You can place ads
      </p>
      <p className="text-lg font-normal text-[#696A75]">750x100</p>
    </aside>
  );
};

export default Add;
