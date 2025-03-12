import Image from "next/image";
import User from "@/assets/userGray.svg";
import H_Parliament from "@/assets/HungarianParliament.svg";

const TechnologyPost = ({ isLightMode, setIsLightMode }) => {
  const handleSwitchClick = () => {
    const newMode = !isLightMode;
    setIsLightMode(newMode);
  };

  return (
    <section className="max-w-[800px] w-full mt-[120px] mb-8 flex flex-col justify-between px-4">
      <div className="w-full h-auto flex flex-col justify-center font-workSans mb-10">
        <button className="w-[98px] h-[28px] font-medium text-sm text-white rounded-[6px] bg-[#4B6BFB] py-[4px]">
          Technology
        </button>
        <h1
          className={`font-semibold text-[28px] md:text-[36px] mt-1 mb-7 ${
            isLightMode ? "text-[#181A2A]" : "text-white"
          }`}
        >
          The Impact of Technology on the Workplace: How Technology is Changing
        </h1>
        <span className="w-full flex items-center justify-start">
          <Image src={User} alt="user" width={36} height={36} />
          <h5 className={`font-medium font-workSans text-base text-[#97989F] ml-3`}>
            Jason Francisco
          </h5>
          <p className="font-medium font-workSans text-base text-[#696A75] ml-3">
            August 20, 2022
          </p>
        </span>
      </div>
      <div className="w-full h-auto mb-10">
        <Image src={H_Parliament} alt="Hungarian Parliament" layout="responsive" />
      </div>
      <div className="w-full h-auto">
        <p className={`font-sourseSerifPro font-normal text-[18px] md:text-[20px] leading-[32px] tracking-tight ${isLightMode ? "text-[#3B3C4A]" : "text-[#BABABF]"}`}>
          Traveling is an enriching experience that opens up new horizons,
          exposes us to different cultures, and creates memories that last a
          lifetime. However, traveling can also be stressful and overwhelming,
          especially if you don't plan and prepare adequately. In this blog
          article, we'll explore tips and tricks for a memorable journey and how
          to make the most of your travels. <br /> <br />
          One of the most rewarding aspects of traveling is immersing yourself
          in the local culture and customs. This includes trying local cuisine,
          attending cultural events and festivals, and interacting with locals.
          Learning a few phrases in the local language can also go a long way in
          making connections and showing respect.
        </p>
      </div>
    </section>
  );
};

export default TechnologyPost;
