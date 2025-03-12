import Image from "next/image";
import Man from "@/assets/man.svg";

const Traveling = ({ isLightMode, setIsLightMode }) => {
  const handleSwitchClick = () => {
    const newMode = !isLightMode;
    setIsLightMode(newMode);
  };

  return (
    <aside className="flex flex-col gap-y-10 justify-between font-sourseSerifPro mb-10">
      <div
        className={`w-full max-w-[799.1px] h-[128px] flex flex-col justify-center tracking-tighter border-l-[4px] border-[#E8E8EA] px-7 rounded-[12px] ${
          isLightMode ? "bg-[#F6F6F7]" : "bg-[#242535]"
        }`}
      >
        <p
          className={`italic font-normal text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] ${
            isLightMode ? "text-[#181A2A]" : "text-white"
          }`}
        >
          “ Traveling can expose you to new environments and potential health
          risks, so it's crucial to take precautions to stay safe and healthy. ”
        </p>
      </div>
      <div className="h-auto">
        <Image src={Man} alt="man" layout="responsive" />
      </div>
    </aside>
  );
};

export default Traveling;
