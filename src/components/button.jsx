import React from "react";

const Button = ({isLightMode, setIsLightMode}) => {
  const handleSwitchClick = () => {
    const newMode = !isLightMode;
    setIsLightMode(newMode);
  };
  return (
    <div className="flex flex-col items-center mb-[80px]">
      <button
        className={`w-[142px] h-[48px] border rounded-[6px] font-workSans gap-[12px] mt-10 text-[#696A75] font-medium text-base ${
          isLightMode ? "border-[#E8E8EA]" : "border-[#242535]"
        }`}
      >
        View All Post
      </button>
    </div>
  );
};

export default Button;
