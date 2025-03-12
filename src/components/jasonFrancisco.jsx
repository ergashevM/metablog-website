import Image from "next/image";
import Woman from "@/assets/Woman.svg";
import Profile from "@/assets/Profile.svg";

const JasonFrancisco = ({ setIsLightMode, isLightMode }) => {
  const handleSwitchClick = () => {
    const newMode = !isLightMode;
    setIsLightMode(newMode);
  };

  return (
    <section className="relative w-full flex flex-col justify-center items-center font-workSans mt-[120px] mb-40">
      <Image src={Woman} alt="woman" />
      <div
        className={`hidden absolute max-w-[598px] w-full h-[304px] lg:flex flex-col p-10 rounded-[12px] left-[220px] top-[370px] ${
          isLightMode
            ? "bg-white"
            : "bg-[#181A2A] border-[1px] border-[#242535]"
        } shadow-2xl`}
      >
        <button className="w-[98px] h-[28px] font-medium text-sm text-white rounded-[6px] bg-[#4B6BFB] py-[4px]">
          Technology
        </button>
        <h1
          className={`font-semibold text-[36px] mt-3 ${
            isLightMode ? "text-[#181A2A]" : "text-white"
          }`}
        >
          The Impact of Technology on the Workplace: How Technology is Changing
        </h1>
        <span className="w-full h-[36px] flex items-center justify-between mt-3">
          <Image src={Profile} alt="Profile" />
          <h5 className="font-medium font-workSans text-base text-[#97989F]">
            Jason Francisco
          </h5>
          <p className="font-medium font-workSans text-base text-[#97989F]">
            August 20, 2022
          </p>
        </span>
      </div>
    </section>
  );
};

export default JasonFrancisco;
