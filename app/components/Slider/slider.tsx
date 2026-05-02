"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "../../context/languageContext";

type LocalizedText = {
  eng: string;
  geo: string;
};

type Slide = {
  src: string;
  title: LocalizedText;
  desc: LocalizedText;
};

const images: Slide[] = [
  {
    src: "/sliderImages/sachkhere.jpg",
    title: { eng: "sachkhere", geo: "საჩხერე" },
    desc: { eng: "a town at the northern edge of the Imereti Province in Western Georgia.", geo: "იმერეთის ჩრდილოეთ მხარეს მდებარე ქალაქი დასავლეთ საქართველო." },
  },
  {
    src: "/sliderImages/modinakhe.jpg",
    title: { eng: "Modinakhe", geo: "მოდინახე" },
    desc: { eng: "a historic place in the Sachkhere region of Georgia.", geo: "ისტორიული ადგილი საჩხერის რეგიონში საქართველოში." },
  },
  {
    src: "/sliderImages/modinakhe2.jpg",
    title: { eng: "Modinakhe", geo: "მოდინახე" },
    desc: { eng: "a historic place in the Sachkhere region of Georgia.", geo: "ისტორიული ადგილი საჩხერის რეგიონში საქართველოში." },
  },
  {
    src: "/sliderImages/kvereti.webp",
    title: { eng: "Kvereti", geo: "კვერეთი" },
    desc: { eng: "Kvereti is located in the Sachkhere Municipality of the Imereti region, at an altitude of 570 meters above sea level. It is a low-mountain balneo-climatic resort.", geo: "კვერეთი იმერეთის მხარეში საჩხერის მუნიციპალიტეტში მდებარეობს, ზღვის დონიდან 570 მეტრზე. იგი დაბალმთიანი ბალნეო-კლიმატური კურორტია." },
  },
  {
    src: "/sliderImages/sachkheris-sacurao-auzi.jpg",
    title: { eng: "Sachkhere Swimming-pool", geo: "საჩხერის საცურაო აუზი" },
    desc: { eng: "Sachkhere Swimming-pool Head Architect: George Chkuaseli Project team: George Chkuaseli, Natela Jobadze, Nana Churadze, Magda Goliadze, Kote Meparishvili, Irina Bujiashvili.", geo: "საჩხერის საცურაო აუზი პროექტის მთავარი არქიტექტორი: გიორგი ჭკუასელი საავტორო ჯგუფი: გიორგი ჭკუასელი, ნანა ჭურაძე, ნათელა ჯობაძე, მაგდა გოლიაძე, კოტე მეფარიშვილი, ირინა ბუჯიაშვილი." },
  },
  {
    src: "/sliderImages/sachkheris-sameditsino-tsentri.jpeg",
    title: { eng: "Sachkhere medical center", geo: "საჩხერის სამედიცინო ცენტრი" },
    desc: { eng: "Sachkhere medical center is a modern healthcare facility located in the Sachkhere region of Georgia.", geo: "საჩხერის სამედიცინო ცენტრი საქართველოს საჩხერის რეგიონში მდებარე თანამედროვე კლინიკაა." },
  },
  {
    src: "/sliderImages/sxvitori.webp",
    title: { eng: "Sxvitori", geo: "სხვიტორი" },
    desc: { eng: "Sxvitori is a historic village in the Sachkhere region of Georgia.", geo: "სხვითორი საჩხერის რეგიონში მდებარე ისტორიული სოფელია საქართველოში." },
  },
];

export default function Slider() {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="mb-10 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300 opacity-80 mb-3">
            {language === "eng" ? "Welcome to Sachkhere" : "კეთილი იყოს თქვენი მობრძანება საჩხერის ვებგვერდზე"}
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            {language === "eng" ? "Discover Sachkhere" : "აღმოაჩინეთ საჩხერე"}
        </h2>
      </div>

      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/80 shadow-2xl shadow-black/40 backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-slate-950/70 pointer-events-none" />

        <div
          className="relative flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="min-w-full relative w-full h-[420px] md:h-[520px] overflow-hidden"
            >
              <Image
                src={img.src}
                alt={img.title[language]}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/20" />

              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 bg-gradient-to-t from-slate-950/95 to-transparent">
                <span className="inline-block px-3 py-1 mb-3 text-xs uppercase tracking-[0.3em] text-cyan-300 bg-white/5 rounded-full">
                  {index + 1} / {images.length}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  {img.title[language]}
                </h3>
                <p className="mt-3 max-w-2xl text-sm md:text-base text-slate-200 opacity-90">
                  {img.desc[language]}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute top-1/2 left-4 -translate-y-1/2 z-10 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 p-3 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-300"
        >
          ❮
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute top-1/2 right-4 -translate-y-1/2 z-10 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 p-3 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-300"
        >
          ❯
        </button>
      </div>

      <div className="mt-6 rounded-[28px] bg-slate-950/80 border border-white/10 p-4 shadow-[0_18px_50px_-40px_rgba(15,23,42,0.9)]">
        <div className="flex justify-center gap-3 flex-wrap">
          {images.map((img, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className={`group relative overflow-hidden rounded-2xl border-2 transition ${
                currentIndex === index
                  ? "border-cyan-400 shadow-[0_0_0_3px_rgba(6,182,212,0.2)]"
                  : "border-white/10 hover:border-white/30"
              }`}
            >
              <Image
                src={img.src}
                alt={`${img.title[language]} thumbnail`}
                width={96}
                height={64}
                className="h-14 w-20 object-cover transition duration-300 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 bg-slate-950/70 px-2 py-1 text-[11px] uppercase tracking-[0.2em] text-slate-200 text-center">
                {img.title[language]}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}