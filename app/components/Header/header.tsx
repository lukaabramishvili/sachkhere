"use client";

import Image from "next/image";
import Logo from "../../../public/Sachxerisgerbi-24bit.png";
import React from "react";
import Link from "next/link";
import LanguageToggle from "../../context/languageToggle/languageToggle";
import { useLanguage } from "../../context/languageContext";

const Header = () => {
  const { language } = useLanguage();

  return (
    <div className="relative flex items-center justify-around bg-gradient-to-b from-[#162542] to-[#0092d6] min-h-20 max-h-20 w-full">
      <div className="absolute cursor-pointer top-[20%] left-[12%] w-32 h-32 bg-white border-gray-200 border-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transform transition duration-300 flex items-center justify-center">
        <Link href={"/"}>
          <div className="relative w-[90px] h-[90px]">
            <Image
              src={Logo.src}
              width={50}
              height={50}
              alt="Sachkhere Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </Link>
      </div>
      <div></div>
      <ul className="flex items-center justify-center text-white font-bold text-xl">
        <li className="hover:scale-110 transform transition duration-300">
          <Link
            href={"/"}
            className="py-2 px-4 hover:bg-white hover:text-black rounded-lg"
          >
            {language === "eng" ? "Home" : "მთავარი"}
          </Link>
        </li>
        <li className="hover:scale-110 transform transition duration-300">
          <Link
            href={"/contact"}
            className="py-2 px-4 hover:bg-white hover:text-black rounded-lg"
          >
            {language === "eng" ? "Contact" : "კონტაქტი"}
          </Link>
        </li>
        <li className="hover:scale-110 transform transition duration-300">
          <Link
            href={"/about"}
            className="py-2 px-4 hover:bg-white hover:text-black rounded-lg"
          >
            {language === "eng" ? "About" : "ჩვენს შესახებ"}
          </Link>
        </li>
        <li className="hover:scale-110 transform transition duration-300">
          <Link
            href={"/government"}
            className="py-2 px-4 hover:bg-white hover:text-black rounded-lg"
          >
            {language === "eng" ? "Government" : "მთავრობა"}
          </Link>
        </li>
      </ul>
      <LanguageToggle />
    </div>
  );
};

export default Header;
