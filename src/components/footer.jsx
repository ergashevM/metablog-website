import Image from "next/image";
import Link from "next/link";
import Email from "@/assets/Email.svg";
import Icon from "@/assets/Icon.svg";
import IconForDarkMode from "@/assets/IconForDarkMode.svg";

const Footer = ({ setIsLightMode, isLightMode }) => {
  const handleSwitchClick = () => {
    const newMode = !isLightMode;
    setIsLightMode(newMode);
  };

  return (
    <footer
      className={`w-full flex flex-col items-center h-auto mt-[10px] ${
        isLightMode
          ? "bg-[#F6F6F7] border border-[#E8E8EA]"
          : "bg-[#141624] border border-[#242535]"
      } `}
    >
      <div className="max-w-[1216px] w-full flex flex-col md:flex-row items-start justify-between mt-[70px] px-4">
        <div className="flex flex-col justify-start font-plusJakartaSans w-full md:w-[289px] h-auto mb-4 md:mb-0">
          <h3
            className={`font-semibold text-lg ${
              isLightMode ? "text-black" : "text-white"
            }`}
          >
            About
          </h3>
          <p className="font-normal text-base my-4 text-[#696A75]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <p
            className={`font-normal text-base mb-2 ${
              isLightMode ? "text-[#3B3C4A]" : "text-[#97989F]"
            }`}
          >
            <span
              className={`font-semibold text-lg mr-1 ${
                isLightMode ? "text-[#181A2A]" : "text-white"
              }`}
            >
              Email :
            </span>
            info@jstemplate.net
          </p>
          <p
            className={`font-normal text-base mb-2 ${
              isLightMode ? "text-[#3B3C4A]" : "text-[#97989F]"
            }`}
          >
            <span
              className={`font-semibold mr-1 ${
                isLightMode ? "text-[#181A2A]" : "text-white"
              }`}
            >
              Phone :
            </span>
            880 123 456 789
          </p>
        </div>

        <div className="flex flex-col md:flex-row w-full md:w-[495px] h-auto justify-around mb-4 md:mb-0">
          <ul className="flex flex-col gap-[10px]">
            <li
              className={`font-semibold text-lg mb-2 ${
                isLightMode ? "text-[#181A2A]" : "text-white"
              }`}
            >
              Quick Link
            </li>
            <li
              className={`font-normal text-base ${
                isLightMode ? "text-[#3B3C4A]" : "text-[#97989F]"
              }`}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`font-normal text-base ${
                isLightMode ? "text-[#3B3C4A]" : "text-[#97989F]"
              }`}
            >
              About
            </li>
            <li
              className={`font-normal text-base ${
                isLightMode ? "text-[#3B3C4A]" : "text-[#97989F]"
              }`}
            >
              <Link href="/blog">Blog</Link>
            </li>
            <li
              className={`font-normal text-base ${
                isLightMode ? "text-[#3B3C4A]" : "text-[#97989F]"
              }`}
            >
              Archived
            </li>
            <li
              className={`font-normal text-base ${
                isLightMode ? "text-[#3B3C4A]" : "text-[#97989F]"
              }`}
            >
              <Link href="/author">Author</Link>
            </li>
            <li
              className={`font-normal text-base ${
                isLightMode ? "text-[#3B3C4A]" : "text-[#97989F]"
              }`}
            >
              Contact
            </li>
          </ul>

          <ul className="flex flex-col gap-[10px]">
            <li
              className={`font-semibold text-lg mb-2 ${
                isLightMode ? "text-[#181A2A]" : "text-white"
              }`}
            >
              Category
            </li>
            <li
              className={`font-normal text-base ${
                isLightMode ? "text-[#3B3C4A]" : "text-[#97989F]"
              }`}
            >
              Lifestyle
            </li>
            <li
              className={`font-normal text-base ${
                isLightMode ? "text-[#3B3C4A]" : "text-[#97989F]"
              }`}
            >
              Technology
            </li>
            <li
              className={`font-normal text-base ${
                isLightMode ? "text-[#3B3C4A]" : "text-[#97989F]"
              }`}
            >
              Travel
            </li>
            <li
              className={`font-normal text-base ${
                isLightMode ? "text-[#3B3C4A]" : "text-[#97989F]"
              }`}
            >
              Business
            </li>
            <li
              className={`font-normal text-base ${
                isLightMode ? "text-[#3B3C4A]" : "text-[#97989F]"
              }`}
            >
              Economy
            </li>
            <li
              className={`font-normal text-base ${
                isLightMode ? "text-[#3B3C4A]" : "text-[#97989F]"
              }`}
            >
              Sports
            </li>
          </ul>
        </div>

        <div
          className={`flex flex-col font-workSans rounded-[12px] items-center w-full max-w-[392px] md:w-[392px] h-[254px] ${
            isLightMode ? "bg-white" : "bg-[#242535]"
          }`}
        >
          <h3
            className={`font-semibold text-[20px] mt-9 mb-0.5 ${
              isLightMode ? "text-[#181A2A]" : "text-white"
            }`}
          >
            Weekly Newsletter
          </h3>
          <p className="text-base font-normal text-[#696A75] mb-4">
            Get blog articles and offers via email
          </p>
          <div className="relative my-2 mr-[39px]">
            <input
              className={`w-[320px] h-[48px] ml-10 ${
                isLightMode
                  ? "bg-[#F4F4F5] border border-[#DCDDDF]"
                  : "bg-[#181A2A] border border-[#3B3C4A]"
              } rounded-[6px] pl-4`}
              placeholder="Your Email"
              type="email"
            />
            <Image
              className="absolute top-[17px] right-3"
              src={Email}
              alt="email"
            />
          </div>
          <button className="w-full max-w-[320px] h-[48px] font-medium text-base text-white rounded-[6px] bg-[#4B6BFB] py-[4px]">
            Subscribe
          </button>
        </div>
      </div>
      <div
        className={`w-full max-w-[1216px] h-[118px] mt-16 pt-5 mb-1 font-plusJakartaSans flex flex-col md:flex-row items-center justify-between border-t ${
          isLightMode ? "border-[#DCDDDF]" : "border-[#242535]"
        }`}
      >
        <div className="flex items-center mb-4 md:mb-0">
          <Image src={isLightMode ? Icon : IconForDarkMode} alt="logo" />
          <span className="ml-5">
            <h3
              className={`font-normal text-[20px] ${
                isLightMode ? "text-[#141624]" : "text-[#fff]"
              }`}
            >
              Meta<span className="font-extrabold">Blog</span>
            </h3>
            <p
              className={`font-normal text-base ${
                isLightMode ? "text-[#3B3C4A]" : "text-[#BABABF]"
              }`}
            >
              <span
                className={`${isLightMode ? "text-[#141624]" : "text-[#FFF]"}`}
              >
                © JS Template
              </span>
              2023. All Rights Reserved.
            </p>
          </span>
        </div>
        <div className="h-[24px]">
          <ul
            className={`flex flex-wrap font-normal text-base gap-5 ${
              isLightMode ? "text-[#3B3C4A]" : "text-[#BABABF]"
            }`}
          >
            <li>Terms of Use</li>
            <li className="border-x-[1px] border-gray-400 px-5">
              Privacy Policy
            </li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
