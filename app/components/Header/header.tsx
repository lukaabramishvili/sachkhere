"use client";
import Image from "next/image";
import Logo from "../../../public/Sachxerisgerbi-24bit.png";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import LanguageToggle from "../../context/languageToggle/languageToggle";
import { useLanguage } from "../../context/languageContext";

const Header = () => {
  const { language } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { href: "/", eng: "Home", geo: "მთავარი" },
    { href: "/contact", eng: "Contact", geo: "კონტაქტი" },
    { href: "/about", eng: "About", geo: "ჩვენს შესახებ" },
    { href: "/government", eng: "Government", geo: "მთავრობა" },
  ];

  return (
    <header className="w-full z-20 mb-8 relative">
      <div
        className={`bg-gradient-to-t from-transparent to-[#0092d6] flex items-center justify-between px-6 transition-all duration-500 ease-in-out overflow-visible ${
          menuOpen
            ? "opacity-0 max-h-0 min-h-0 pointer-events-none overflow-hidden"
            : "opacity-100 min-h-20"
        }`}
      >
        <Link href="/">
          <div className="w-32 h-32 ml-4 mt-4 mb-[-2rem] bg-white border-gray-200 border-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transform transition duration-300 flex items-center justify-center flex-shrink-0">
            <div className="relative w-[90px] h-[90px]">
              <Image
                src={Logo.src}
                width={50}
                height={50}
                alt="Sachkhere Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </Link>

        <ul className="hidden md:flex items-center justify-center text-white font-bold text-xl gap-[0.18rem]">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="hover:scale-110 transform transition duration-300"
            >
              <Link
                href={link.href}
                className="py-2 px-4 hover:bg-white hover:text-black rounded-lg block"
              >
                {language === "eng" ? link.eng : link.geo}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/20 transition"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-6 h-0.5 bg-white" />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden bg-gradient-to-t from-transparent to-[#0092d6] overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex items-center justify-between px-6 min-h-20">
          <LanguageToggle />
          <button
            className="flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/20 transition"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <span className="block w-6 h-0.5 bg-white rotate-45 translate-y-2 transition-all duration-300" />
            <span className="block w-6 h-0.5 bg-white opacity-0 transition-all duration-300" />
            <span className="block w-6 h-0.5 bg-white -rotate-45 -translate-y-2 transition-all duration-300" />
          </button>
        </div>

        <ul className="flex flex-col items-center text-white font-bold text-lg pb-6 gap-1">
          {navLinks.map((link) => (
            <li key={link.href} className="w-full text-center">
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 px-4 hover:bg-white hover:text-black rounded-lg transition duration-300 mx-4"
              >
                {language === "eng" ? link.eng : link.geo}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
