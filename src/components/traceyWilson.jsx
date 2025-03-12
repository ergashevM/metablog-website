import Image from "next/image";
import Link from "next/link";
import Woman from "@/assets/Woman.svg";
import User from "@/assets/user.svg";

const TraceyWilson = ({ isLightMode, setIsLightMode }) => {
  const handleSwitchClick = () => {
    const newMode = !isLightMode;
    setIsLightMode(newMode);
  };

  return (
    <div className="flex flex-col items-center justify-between mt-[120px] font-workSans mb-10 z-[1]">
      <div className="max-w-[1215px] w-full h-auto flex flex-col items-center justify-center px-4">
        <h3
          className={`font-semibold text-[30px] mb-2 ${
            isLightMode ? "text-[#181A2A]" : "text-white"
          }`}
        >
          Page Title
        </h3>
        <ul
          className={`w-full max-w-[139px] mb-10 h-auto flex items-center justify-between ${
            isLightMode ? "text-[#3B3C4A]" : "text-[#97989F]"
          }`}
        >
          <li className="text-base font-normal pr-3 border-r-[1px] border-gray-400">
            <Link href="./">Home</Link>
          </li>
          <li className="text-base font-normal">Link One</li>
        </ul>
      </div>
      <div
        style={{
          backgroundImage: `url(${Woman.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="max-w-[1215px] w-full h-[450px] rounded-[12px] flex flex-col justify-end p-5"
      >
        <button className="w-[98px] h-[28px] font-medium text-sm text-white rounded-[6px] bg-[#4B6BFB] mb-4">
          Technology
        </button>
        <h1
          className={`font-semibold text-[24px] md:text-[36px] text-white mb-2`}
        >
          The Impact of Technology on the Workplace: How Technology is Changing
        </h1>
        <span className="w-full flex items-center justify-start mt-3">
          <Image src={User} alt="user" width={36} height={36} />
          <h5 className="font-medium font-workSans text-base text-[#fff] ml-3">
            Tracey Wilson
          </h5>
          <p className="font-medium font-workSans text-base text-[#fff] ml-3">
            August 20, 2022
          </p>
        </span>
      </div>
    </div>
  );
};

export default TraceyWilson;
