"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/Sachxerisgerbi-24bit.png";
import { useLanguage } from "../../context/languageContext";

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="relative z-0 flex flex-col items-center justify-center gap-4 pt-16 pb-8 bg-gradient-to-b from-transparent to-[#0092d6] text-white min-h-[120px]">
      {/* LOGO */}
      <div className="absolute -top-16 z-10 cursor-pointer w-32 h-32 bg-white border-gray-200 border-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition duration-300 flex items-center justify-center">
        <Link href={"/"}>
          <div className="relative w-[90px] h-[90px]">
            <Image
              src={Logo.src}
              fill
              alt="Sachkhere Logo"
              className="object-contain"
            />
          </div>
        </Link>
      </div>

      {/* NAV */}
      <ul className="flex flex-col gap-4 items-center justify-center text-white font-bold text-xl mb-8 mt-8">
        <li className="hover:scale-110 transition duration-300">
          <Link
            href={"/"}
            className="py-2 px-4 hover:bg-white hover:text-black rounded-lg"
          >
            {language === "eng" ? "Home" : "მთავარი"}
          </Link>
        </li>
        <li className="hover:scale-110 transition duration-300">
          <Link
            href={"/contact"}
            className="py-2 px-4 hover:bg-white hover:text-black rounded-lg"
          >
            {language === "eng" ? "Contact" : "კონტაქტი"}
          </Link>
        </li>
        <li className="hover:scale-110 transition duration-300">
          <Link
            href={"/about"}
            className="py-2 px-4 hover:bg-white hover:text-black rounded-lg"
          >
            {language === "eng" ? "About" : "ჩვენს შესახებ"}
          </Link>
        </li>
        <li className="hover:scale-110 transition duration-300">
          <Link
            href={"/government"}
            className="py-2 px-4 hover:bg-white hover:text-black rounded-lg"
          >
            {language === "eng" ? "Government" : "მთავრობა"}
          </Link>
        </li>
      </ul>

      {/* COPYRIGHT */}
      <div className="text-center">
        <p>
          {language === "eng"
            ? "2026 SACHKHERE. All rights reserved."
            : "2026 საჩხერე. ყველა უფლება დაცულია."}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
