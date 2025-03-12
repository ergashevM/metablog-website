"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import User from "@/assets/userGray.svg";
import Beach from "@/assets/Beach.svg";
import GrandCanal from "@/assets/GrandCanal.svg";
import Fashion from "@/assets/Fashion.svg";
import Village from "@/assets/Village.svg";
import Stones from "@/assets/Stones.svg";
import LincolnContinental from "@/assets/LincolnContinental.svg";
import Phone from "@/assets/Phone.svg";
import Island from "@/assets/Island.svg";
import Gamepad from "@/assets/Gamepad.svg";
import Profile from "../assets/Profile.svg";
import Tracey from "@/assets/Tracey.svg";
import Slavin from "@/assets/Slavin.svg";
import Ernie from "@/assets/Ernie.svg";
import Eric from "@/assets/Eric.svg";

const database = [
  {
    id: 1,
    username: "Tracey Wilson",
    image: Beach,
    title: "The Allure of Beaches: Discovering the Serenity and Adventure",
    date: "August 20, 2022",
    content:
      "Beaches are a perfect escape from the hustle and bustle of daily life. With soft sands and the sound of waves crashing, they offer a serene environment for relaxation. Whether you enjoy sunbathing, reading a book under a parasol, or engaging in thrilling water sports like jet skiing or snorkeling, beaches provide endless opportunities for fun and adventure. The vibrant sunsets, the salty breeze, and the laughter of children playing in the surf create a picturesque setting that rejuvenates the soul. Visiting a beach destination can also introduce you to local seafood delicacies, enhancing your culinary experience.",
    profileImage: Tracey,
  },
  {
    id: 2,
    username: "Jason Francisco",
    image: GrandCanal,
    title: "Exploring the Grand Canal: A Journey Through Venice...",
    date: "September 10, 2022",
    content:
      "The Grand Canal in Venice is a breathtaking waterway lined with stunning architecture and rich history. A gondola ride offers a unique perspective of this iconic city, allowing visitors to soak in the beauty of the surroundings. The canal is not just a means of transport; it's a cultural experience that captures the essence of Venice. Along its banks, you'll find historic buildings, quaint cafes, and local artisans showcasing their crafts. Strolling through the narrow alleyways that lead to the canal reveals hidden gems, from charming boutiques to picturesque squares. The Grand Canal serves as a living museum, where each turn reveals a story waiting to be discovered.",
    profileImage: Profile,
  },
  {
    id: 3,
    username: "Elizabeth Slavin",
    image: Fashion,
    title: "Fashion Trends of 2022: What You Need to Know...",
    date: "October 5, 2022",
    content:
      "Fashion is a dynamic art form that reflects cultural changes, social movements, and personal expression. From haute couture to street style, fashion allows individuals to showcase their identity and creativity. Understanding the history of fashion—its revolutions, key figures, and enduring trends—can inspire a deeper appreciation for this vibrant industry. Fashion weeks around the world present not just clothing but a vision for the future, blending technology, sustainability, and culture. As we explore different styles and eras, we see how fashion connects us across time and space, revealing our values and aspirations.",
    profileImage: Slavin,
  },
  {
    id: 4,
    username: "Ernie Smith",
    image: Village,
    title: "The Charm of Rural Villages: Embracing Simplicity",
    date: "November 15, 2022",
    content:
      "Villages exude a charm that is often lost in urban settings, offering a glimpse into a simpler way of life. With close-knit communities and breathtaking landscapes, they provide a refreshing escape from the chaos of city living. Visiting a village can be a transformative experience, allowing one to connect with nature and embrace local traditions. Farmers’ markets, local festivals, and artisanal crafts showcase the rich cultural heritage of the area. Engaging with locals offers insights into their daily lives, customs, and culinary delights, making every visit a unique journey filled with warm hospitality.",
    profileImage: Ernie,
  },
  {
    id: 5,
    username: "Eric Smith",
    image: Stones,
    title: "Stones: The Hidden Gems of Nature...",
    date: "December 1, 2022",
    content:
      "Stones have been used for centuries in art, architecture, and jewelry. From sculptures that evoke emotion to buildings that stand as testaments to engineering prowess, they tell stories of history and culture. Exploring the different types of stones—granite, marble, and limestone, to name a few—can deepen our appreciation for nature's artistry. Each stone has its unique properties, colors, and textures, making it a favorite among artists and builders alike. Understanding the geological processes that create these beautiful materials unveils the complexity of our planet and our connection to it.",
    profileImage: Eric,
  },
  {
    id: 6,
    username: "Tracey Wilson",
    image: LincolnContinental,
    title: "The Legacy of Lincoln Continental: A Classic Car...",
    date: "January 5, 2023",
    content:
      "The Lincoln Continental is more than just a car; it's a symbol of luxury and American craftsmanship. With its sleek design, spacious interior, and powerful performance, the Continental has captured the hearts of car enthusiasts for generations. Discovering its history reveals the evolution of automotive innovation, from its debut in the 1940s to its modern iterations. The Continental has been a favorite among celebrities and dignitaries, often appearing in films and television as a representation of status and elegance. Exploring the features and engineering that make this vehicle iconic offers insights into the automotive industry's past and future.",
    profileImage: Tracey,
  },
  {
    id: 7,
    username: "Jason Francisco",
    image: Phone,
    title: "The Evolution of Mobile Phones: From Past to Present...",
    date: "February 10, 2023",
    content:
      "Mobile phones have transformed how we communicate and interact with the world. From bulky devices that could only make calls to sleek smartphones equipped with advanced features, the evolution of technology has made our lives more connected than ever. Understanding this journey highlights the incredible advancements in communication technology, including the rise of social media and instant messaging. Mobile phones have also changed the way we access information, shop, and entertain ourselves. As we reflect on the impact of mobile technology, we recognize its role in shaping our daily lives and global connections.",
    profileImage: Profile,
  },
  {
    id: 8,
    username: "Elizabeth Slavin",
    image: Island,
    title: "The Beauty of Islands: A Guide to Tropical Getaways...",
    date: "March 15, 2023",
    content:
      "Islands are often seen as idyllic getaways offering stunning landscapes, unique ecosystems, and rich cultural experiences. From sandy beaches to lush jungles, each island has its charm and story. Visiting islands can provide a refreshing escape and an opportunity to explore diverse environments and local traditions. Whether snorkeling in crystal-clear waters, hiking through volcanic landscapes, or indulging in local cuisine, island adventures offer something for everyone. Understanding the delicate balance of island ecosystems and the impact of tourism can foster a deeper appreciation for these remarkable destinations.",
    profileImage: Slavin,
  },
  {
    id: 9,
    username: "Ernie Smith",
    image: Gamepad,
    title: "The Rise of Gaming: How it Changed Entertainment...",
    date: "April 20, 2023",
    content:
      "Gamepads have revolutionized the gaming experience, allowing players to immerse themselves in virtual worlds. The design and functionality of gamepads have evolved, enhancing gameplay and making it more accessible. From the first joystick controllers to modern wireless gamepads, the evolution of gaming peripherals has transformed how we interact with games. Exploring the impact of gaming on culture, community, and technology reveals how it has become a mainstream form of entertainment. The rise of eSports and online multiplayer gaming has created new avenues for competition and camaraderie among players worldwide.",
    profileImage: Ernie,
  },
];

const PostContent = ({ isLightMode, setIsLightMode }) => {
  const handleSwitchClick = () => {
    const newMode = !isLightMode;
    setIsLightMode(newMode);
  };
  const { id } = useParams();

  const post = database.find((item) => item.id.toString() === id);

  if (!post) return <div>Loading...</div>;
  return (
    <section className="max-w-[800px] w-full h-auto mt-[120px] mb-10 flex flex-col justify-between px-4">
  <div className="w-full h-auto flex flex-col justify-center font-workSans">
    <button className="w-[98px] h-[28px] font-medium text-sm text-white rounded-[6px] bg-[#4B6BFB] py-[4px]">
      Technology
    </button>
    <h1
      className={`w-full h-auto font-semibold text-[28px] md:text-[36px] mt-1 mb-7 ${
        isLightMode ? "text-[#181A2A]" : "text-white"
      }`}
    >
      {post.title}
    </h1>
    <span className="flex items-center justify-start">
      <Image width={28} height={28} src={post.profileImage} alt="user" />
      <h5
        className={`font-medium font-workSans text-base text-[#97989F] ml-3`}
      >
        {post.username}
      </h5>
      <p className="font-medium font-workSans text-base text-[#696A75] ml-3">
        August 20, 2022
      </p>
    </span>
  </div>
  <div className="w-full h-auto mt-8">
    <Image width={800} height={462} src={post.image} alt={post.image} layout="responsive" />
  </div>
  <div className="w-full h-auto mt-10">
    <p
      className={`font-sourseSerifPro font-normal text-[18px] md:text-[20px] leading-[32px] tracking-tight ${
        isLightMode ? "text-[#3B3C4A]" : "text-[#BABABF]"
      }`}
    >
      {post.content}
    </p>
  </div>
</section>
  );
};

export default PostContent;
