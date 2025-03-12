"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/Logo.svg";
import LogoWhite from "@/assets/LogoForDarkMode.svg";
import Search from "@/assets/Search.svg";
import Light from "@/assets/Light.svg";
import Dark from "@/assets/Dark.svg";
import MenuIcon from "@/assets/menu.svg";

const Navigation = ({ setIsLightMode, isLightMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleSwitchClick = () => {
    const newMode = !isLightMode;
    setIsLightMode(newMode);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const results = [];
    if (searchQuery) {
      const data = ["Home", "Blog", "Single Post", "Pages", "Contact"];
      results.push(
        ...data.filter((item) =>
          item.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
    setSearchResults(results);
  }, [searchQuery]);

  return (
    <nav
        className={`fixed top-0 lg:w-full max-w-[1280px] w-full h-[100px] flex items-center px-10 mx-auto font-workSans z-10 ${
          isLightMode ? "bg-white" : "bg-[#181A2A]"
        }`}
      >
        <Image
          src={isLightMode ? Logo : LogoWhite}
          alt="logo"
          className="h-[36px]"
        />
        <ul
          className={`hidden lg:flex md:flex sm:flex w-full h-[24px] items-center justify-around ${
            isLightMode ? "text-[#3B3C4A]" : "text-white"
          }`}
        >
          <li className="font-normal text-base">
            <Link href="/">Home</Link>
          </li>
          <li className="font-normal text-base">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="font-normal text-base">
            <Link href="/single-post">Single Post</Link>
          </li>
          <li className="font-normal text-base">
            <Link href="/author">Author</Link>
          </li>
          <li className="font-normal text-base">Contact</li>
        </ul>
        <div className=" sm:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
            <Image src={MenuIcon} alt="menu" className="h-[24px]" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-[100px] left-0 w-full bg-white shadow-lg z-10">
            <ul
              className={`flex flex-col items-center pb-3 ${
                isLightMode
                  ? "text-[#3B3C4A] bg-white"
                  : "text-white bg-[#181A2A]"
              }`}
            >
              <li className="py-2">
                <Link href="/">Home</Link>
              </li>
              <li className="py-2">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="py-2">
                <Link href="/single-post">Single Post</Link>
              </li>
              <li className="py-2">
                <Link href="/author">Pages</Link>
              </li>
              <li className="py-2">Contact</li>
            </ul>
          </div>
        )}
        <div className="relative">
          <input
            className={`w-[166px] h-[36px] pr-3 ml-10 ${
              isLightMode
                ? "bg-[#F4F4F5] text-[#A1A1AA]"
                : "bg-[#242535] text-[#A1A1AA]"
            } rounded-lg pl-4`}
            placeholder="Search"
            type="search"
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
          />
          {!isInputFocused && (
            <Image
              className="absolute top-[11px] right-3"
              src={Search}
              alt="search"
            />
          )}
          {searchResults.length > 0 && (
            <div
              className={`absolute top-[40px] left-0 w-full bg-white shadow-lg z-10`}
            >
              <ul className="flex flex-col">
                {searchResults.map((result, index) => (
                  <li key={index} className="py-2 px-4 hover:bg-gray-200">
                    <Link href={`/${result.toLowerCase().replace(" ", "-")}`}>
                      {result}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <Image
          src={isLightMode ? Light : Dark}
          alt="light switch"
          onClick={handleSwitchClick}
          className="cursor-pointer ml-5"
        />
      </nav>
  );
};

export default Navigation;
