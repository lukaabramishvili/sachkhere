"use client";

import React from 'react'
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/Sachxerisgerbi-24bit.png";
import { useLanguage } from "../../context/languageContext";

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="flex flex-col items-center justify-center gap-4 pt-8 pb-8 bg-gradient-to-b from-[#162542] to-[#0092d6] text-white py-4 min-h-[120px]">
      <div className="cursor-pointer w-32 h-32 bg-white border-gray-200 border-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transform transition duration-300 flex items-center justify-center mt-[-5.5rem]">
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

            <ul className="flex flex-col gap-4 items-center justify-center text-white font-bold text-xl mb-8 mt-8">
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


      <div className="text-center">
        <p>
          {language === "eng" ? "2026 SACHKHERE. All rights reserved." : "2026 საჩხერე. ყველა უფლება დაცულია."}
        </p>
      </div>
    </footer>
  )
}

export default Footer