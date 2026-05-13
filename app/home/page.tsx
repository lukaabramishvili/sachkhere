"use client";

import Slider from "../components/Slider/slider";
import { useLanguage } from "../context/languageContext";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function FadeInSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
}

const sections = [
  {
    icon: (
      <svg className="w-10 h-10 text-cyan-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
    eng: { title: "Public Services", desc: "From permits to payments, everything is just a click away.", link: "/contact" },
    geo: { title: "საჯარო სერვისები", desc: "განცხადებებისგან გადახდამდე, ყველაფერი ერთი კლიკით ხელმისაწვდომია.", link: "/contact" },
  },
  {
    icon: (
      <svg className="w-10 h-10 text-cyan-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    eng: { title: "City Development", desc: "Explore ongoing infrastructure and modernization projects.", link: "/government" },
    geo: { title: "ქალაქის განვითარება", desc: "იხილეთ მიმდინარე ინფრასტრუქტურის და მოდერნიზაციის პროექტები.", link: "/government" },
  },
  {
    icon: (
      <svg className="w-10 h-10 text-cyan-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
      </svg>
    ),
    eng: { title: "Announcements", desc: "Stay updated with official news and city updates.", link: "/government" },
    geo: { title: "შეტყობინებები", desc: "იყავით მიმდინარე ოფიციალურ სიახლეებთან და ქალაქის განვითარების შესახებ.", link: "/government" },
  },
];

export default function HomePage() {
  const { language } = useLanguage();

  return (
    <>
      <div className="fixed inset-0 bg-cover bg-center -z-10" style={{ backgroundImage: "url('/cover.webp')" }} />
      <div className="fixed inset-0 bg-black/20 -z-10" />

      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-24">
        <Slider />
      </section>

      <FadeInSection>
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-extrabold leading-tight">
            {language === "eng" ? "City Government Portal" : "მუნიციპალური პორტალი"}
          </h1>
          <p className="mt-6 text-gray-200 text-base sm:text-lg md:text-2xl max-w-3xl">
            {language === "eng"
              ? "Official platform for public services, news, and city development."
              : "ოფიციალური პლატფორმა საჯარო სერვისების, სიახლეების და ქალაქის განვითარებისთვის."}
          </p>
        </section>
      </FadeInSection>

      {sections.map((s, i) => (
        <FadeInSection key={i}>
          <section className="py-16 sm:py-24 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 sm:p-10 text-white">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                {s.icon}
                <h2 className="text-2xl sm:text-3xl font-bold">
                  {language === "eng" ? s.eng.title : s.geo.title}
                </h2>
              </div>
              <p className="text-gray-300 text-sm sm:text-base mb-6">
                {language === "eng" ? s.eng.desc : s.geo.desc}
              </p>
              <Link
                href={language === "eng" ? s.eng.link : s.geo.link}
                className="inline-block px-6 py-2.5 rounded-full bg-cyan-400 text-slate-950 font-semibold text-sm hover:bg-cyan-300 transition duration-300"
              >
                {language === "eng" ? "Learn more →" : "დეტალურად →"}
              </Link>
            </div>
          </section>
        </FadeInSection>
      ))}
    </>
  );
}