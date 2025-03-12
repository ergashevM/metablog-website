import Image from "next/image";
import Facebook from "@/assets/facebook.svg";
import Twitter from "@/assets/twitter.svg";
import Instagram from "@/assets/instagram.svg";
import Youtube from "@/assets/youtube.svg";

const Author = ({ authorData, isLightMode, setIsLightMode }) => {
  const handleSwitchClick = () => {
    const newMode = !isLightMode;
    setIsLightMode(newMode);
  };

  return (
    <div
      className={`max-w-[1216px] h-[344px] w-full rounded-[12px] mt-[120px] mb-10 ${
        isLightMode ? "bg-[#F6F6F7]" : "bg-[#242535]"
      }`}
    >
      <div className="w-full max-w-[668px] mt-[46px] mx-auto">
        <div className="flex flex-col items-center justify-center font-workSans">
          <div className="flex items-center justify-center w-full max-w-[254px]">
            <Image
              width={64}
              height={64}
              src={authorData.profileImage}
              alt="profile"
            />
            <span className="flex flex-col text-left ml-3 ">
              <h3
                className={`font-medium text-[20px] leading-[28px] ${
                  isLightMode ? "text-[#181A2A]" : "text-[#fff]"
                }`}
              >
                {authorData.name}
              </h3>
              <p
                className={`font-normal text-sm leading-[20px] ${
                  isLightMode ? "text-[#696A75]" : "text-[#BABABF]"
                }`}
              >
                {authorData.role}
              </p>
            </span>
          </div>
          <p
            className={`font-normal text-[18px] leading-[26px] text-center my-6 ${
              isLightMode ? "text-[#3B3C4A]" : "text-[#BABABF]"
            }`}
          >
            {authorData.description}
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Image src={Facebook} alt="Facebook" />
            <Image src={Twitter} alt="Twitter" />
            <Image src={Instagram} alt="Instagram" />
            <Image src={Youtube} alt="Youtube" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
