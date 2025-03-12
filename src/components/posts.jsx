import Image from "next/image";
import Link from "next/link";
import Beach from "@/assets/Beach.svg";
import GrandCanal from "@/assets/GrandCanal.svg";
import Fashion from "@/assets/Fashion.svg";
import Village from "@/assets/Village.svg";
import Stones from "@/assets/Stones.svg";
import LincolnContinental from "../assets/LincolnContinental.svg";
import Phone from "@/assets/Phone.svg";
import Island from "@/assets/Island.svg";
import Gamepad from "@/assets/Gamepad.svg";
import Profile from "@/assets/profile.svg";
import Tracey from "@/assets/Tracey.svg";
import Slavin from "@/assets/Slavin.svg";
import Ernie from "@/assets/Ernie.svg";
import Eric from "@/assets/Eric.svg";

const database = [
  {
    id: 1,
    username: "Tracey Wilson",
    image: Beach,
    profileImage: Tracey,
    title: "The Allure of Beaches: Discovering the Serenity and Adventure",
  },
  {
    id: 2,
    username: "Jason Francisco",
    image: GrandCanal,
    profileImage: Profile,
    title: "Exploring the Grand Canal: A Journey Through Venice...",
  },
  {
    id: 3,
    username: "Elizabeth Slavin",
    image: Fashion,
    profileImage: Slavin,
    title: "Fashion Trends of 2022: What You Need to Know...",
  },
  {
    id: 4,
    username: "Ernie Smith",
    image: Village,
    profileImage: Ernie,
    title: "The Charm of Rural Villages: Embracing Simplicity",
  },
  {
    id: 5,
    username: "Eric Smith",
    image: Stones,
    profileImage: Eric,
    title: "Stones: The Hidden Gems of Nature...",
  },
  {
    id: 6,
    username: "Tracey Wilson",
    image: LincolnContinental,
    profileImage: Tracey,
    title: "The Legacy of Lincoln Continental: A Classic Car...",
  },
  {
    id: 7,
    username: "Jason Francisco",
    image: Phone,
    profileImage: Profile,
    title: "The Evolution of Mobile Phones: From Past to Present...",
  },
  {
    id: 8,
    username: "Elizabeth Slavin",
    image: Island,
    profileImage: Slavin,
    title: "The Beauty of Islands: A Guide to Tropical Getaways...",
  },
  {
    id: 9,
    username: "Ernie Smith",
    image: Gamepad,
    profileImage: Ernie,
    title: "The Rise of Gaming: How it Changed Entertainment...",
  },
];

const Posts = ({ setIsLightMode, isLightMode, setAuthorData }) => {
  const handleSwitchClick = () => {
    const newMode = !isLightMode;
    setIsLightMode(newMode);
  };

  const handleAuthorChange = (data) => {
    if (data) {
      if (typeof setAuthorData == "function") {
        setAuthorData({
          name: data.username,
          role: "Collaborator & Editor",
          description: `Meet ${data.username}, a passionate writer and blogger with a love for technology and travel. Jonathan holds a degree in Computer Science and has spent years working in the tech industry, gaining a deep understanding of the impact technology has on our lives.`,
          profileImage: data.profileImage,
        });
      }
    }
  };

  return (
    <section className="w-full max-w-[1216px] flex flex-col font-workSans mt-[10px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto">
        {database.map((data) => (
          <div
            key={data.id}
            className={`w-full max-w-[392px] h-[488px] rounded-[12px] border p-[16px] cursor-pointer ${
              isLightMode ? "border-[#E8E8EA]" : "border-[#242535]"
            }`}
          >
            <div className="relative overflow-hidden w-full h-[240px] mb-4">
              <Image
                className="transition-transform duration-300 ease-in-out transform hover:scale-150"
                src={data.image}
                alt={data.username}
                layout="fill"
                objectFit="cover"
              />
              <Link href={`/post/${data.id}`} passHref>
                <span
                  className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center py-2 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                  onMouseEnter={() => handleAuthorChange(data)}
                >
                  More Information
                </span>
              </Link>
            </div>
            <div className="flex flex-col justify-center w-full h-[200px] p-[8px]">
              <button className="w-[98px] h-[28px] font-medium text-sm text-white rounded-[6px] bg-[#4B6BFB] py-[4px]">
                Technology
              </button>
              <h1
                className={`font-semibold text-[24px] mt-3 ${
                  isLightMode ? "text-[#181A2A]" : "text-white"
                }`}
              >
                {data.title}
              </h1>
              <span className="w-full h-[36px] flex items-center justify-between mt-3">
                <Image
                  src={data.profileImage}
                  alt={data.username}
                  width={36}
                  height={36}
                />
                <h5 className="font-medium font-workSans text-base text-[#97989F]">
                  {data.username}
                </h5>
                <p className="font-medium font-workSans text-base text-[#97989F]">
                  August 20, 2022
                </p>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Posts;
