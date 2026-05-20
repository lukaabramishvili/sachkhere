"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/languageContext";

// კომპონენტი რიცხვების ანიმაციისთვის
const CountUp = ({ end, duration = 2000, startOnView = true }: { end: number; duration?: number; startOnView?: boolean }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(!startOnView);
  const elementRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!startOnView) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [startOnView, hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, hasStarted]);

  return <p ref={elementRef} className="text-5xl font-extrabold text-cyan-300">{count}+</p>;
};

export default function AboutPage() {
  const { language } = useLanguage();

  const sections = [
    {
      title: language === "eng" ? "Mission" : "მისია",
      description:
        language === "eng"
          ? "To build a transparent, service-driven municipality where every citizen finds support and opportunity."
          : "შექმნას გამჭვირვალე, სერვისებზე ორიენტირებული მუნიციპალიტეტი, სადაც ყველა მოქალაქე მიიღებს მხარდაჭერას და შესაძლებლობებს.",
    },
    {
      title: language === "eng" ? "Vision" : "ვიზია",
      description:
        language === "eng"
          ? "A connected community with modern infrastructure, inclusive growth, and respect for local traditions."
          : "შეწყობილი საზოგადოება თანამედროვე ინფრასტრუქტურით, ინკლუზიური ზრდით და ადგილობრივი ტრადიციების პატივისცემით.",
    },
    {
      title: language === "eng" ? "Values" : "ღირებულებები",
      description:
        language === "eng"
          ? "Service, trust, progress, and partnership guide every decision we make for Sachkhere."
          : "სერვისი, ნდობა, პროგრესი და პარტნიორობა ყველას მიმართ გადაწყვეტილებების საფუძველს წარმოადგენს.",
    },
  ];

  const highlights = [
    { label: language === "eng" ? "Years of Progress" : "წლების პროგრესი", value: 20 },
    { label: language === "eng" ? "Projects Delivered" : "მიმდინარე პროექტები", value: 45 },
    { label: language === "eng" ? "Community Partners" : "მოსახლეობის პარტნიორები", value: 120 },
    { label: language === "eng" ? "Citizen Services" : "მოქალაქეების სერვისები", value: 30 },
  ];


  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div
        className="fixed inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: "url('/aboutUs.png')" }}
      />
      <div className="fixed inset-0 bg-black/40 -z-10" />

      <div className="absolute inset-x-0 top-0 h-96 bg-cyan-500/10 blur-3xl rounded-full animate-pulse" />
      <div className="absolute inset-x-0 bottom-0 h-96 bg-blue-500/10 blur-3xl rounded-full animate-pulse delay-1000" />

      <main className="relative z-10">
        <section className="pt-24 pb-14 px-6 text-center">
          <div className="mx-auto max-w-5xl rounded-[40px] border border-white/10 bg-slate-900/80 p-12 shadow-2xl shadow-slate-900/60 backdrop-blur-xl transition-all duration-500 hover:scale-[1.01]">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300 opacity-80">
              {language === "eng" ? "About Sachkhere" : "საჩხერის შესახებ"}
            </p>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight">
              {language === "eng"
                ? "Building the future of your city together"
                : "ერთად ვაშენებთ ქალაქის მომავალს"}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-300 leading-8">
              {language === "eng"
                ? "Sachkhere is a place of culture, progress and care. Our administration is committed to smart services, modern infrastructure and a community-first approach."
                : "საჩხერე არის კულტურის, პროგრესისა და მზრუნველობის ქალაქი. ჩვენი მმართველობა ეძღვნება ჭკვიან სერვისებს, თანამედროვე ინფრასტრუქტურას და საზოგადოების საჭიროებებს."}
            </p>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
            {sections.map((item, idx) => (
              <div
                key={item.title}
                className="rounded-[32px] border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <h2 className="text-2xl font-bold text-white">{item.title}</h2>
                <p className="mt-4 text-slate-300 leading-7">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 pb-16">
          <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-[32px] border border-white/10 bg-slate-900/80 p-8 text-center shadow-2xl shadow-slate-950/50 transition-all duration-300 hover:scale-105"
              >
                <CountUp end={item.value} duration={1500} startOnView />
                <p className="mt-4 text-sm uppercase tracking-[0.25em] text-slate-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-6xl mx-auto rounded-[40px] border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/50 backdrop-blur-xl">
            <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-300 opacity-80">
                  {language === "eng" ? "What we do" : "რას ვაკეთებთ"}
                </p>
                <h2 className="mt-4 text-4xl font-bold">
                  {language === "eng"
                    ? "A modern municipality with real citizen impact"
                    : "მუნიციპალიტეტი, რომელიც რეალურად ხელს უწყობს მოქალაქეებს"}
                </h2>
                <p className="mt-6 text-slate-300 leading-8">
                  {language === "eng"
                    ? "From city services and infrastructure improvements to cultural events and community education, our goals are shaped by your needs. We build trust by delivering visible results and a friendly, open administration."
                    : "ქალაქის სერვისებიდან და ინფრასტრუქტურული გაუმჯობესებებიდან დაწყებული კულტურული ღონისძიებებითა და საზოგადოების განათლებით დასრულებული — ჩვენი მიზნები თქვენს საჭიროებებზეა დაფუძნებული. ჩვენ ვქმნით ნდობას უშუალო შედეგებით და მეგობრული, ღია მმართველობით."}
                </p>
              </div>
              <div className="space-y-6">
                {[
                  {
                    title: language === "eng" ? "Citizen-first Services" : "მოქალაქეთა სერვისები",
                    detail:
                      language === "eng"
                        ? "Quick digital requests, transparent permits and easy contact with local leaders."
                        : "სწრაფი ციფრული განაცხადები, გამჭვირვალე ნებართვები და ქალაქის ლიდერებთან მარტივი კონტაქტი.",
                  },
                  {
                    title: language === "eng" ? "Strong Infrastructure" : "მყარი ინფრასტრუქტურა",
                    detail:
                      language === "eng"
                        ? "Roads, parks and utilities designed for safety, sustainability and future growth."
                        : "გზები, პარკები და კომუნიკაციები, რომლებიც უსაფრთხოებას, მდგრადობას და მომავალ ზრდას უზრუნველყოფს.",
                  },
                  {
                    title: language === "eng" ? "Culture & Heritage" : "კულტურა და მემკვიდრეობა",
                    detail:
                      language === "eng"
                        ? "Respecting local traditions while creating new spaces for arts, festivals and education."
                        : "ადგილობრივი ტრადიციების პატივისცემით, ახალი სივრცეები ხელოვნებისთვის, ფესტივალებისთვის და განათლებისთვის.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[28px] border border-white/10 bg-slate-950/90 p-6 transition-all duration-300 hover:border-cyan-400/30 hover:shadow-md"
                  >
                    <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-slate-300 leading-7">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="max-w-6xl mx-auto rounded-[40px] border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/50">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] items-center">
              <div className="rounded-[32px] bg-gradient-to-br from-cyan-500/20 to-slate-800/50 p-8">
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-200 opacity-90">
                  {language === "eng" ? "Join the journey" : "შემოგვიერთდით"}
                </p>
                <h2 className="mt-4 text-4xl font-bold text-white">
                  {language === "eng"
                    ? "Let's shape the next chapter of Sachkhere together"
                    : "ერთად შევქმნათ საჩხერის შემდეგი თავი"}
                </h2>
                <p className="mt-6 text-slate-200 leading-8">
                  {language === "eng"
                    ? "Whether you're a resident, visitor, or partner, your voice matters. Discover how our programs and services make everyday life better across the city."
                    : "მიუხედავად იმისა, ხართ ადგილობრივი, ვიზიტორი თუ პარტნიორი, თქვენი ხმა მნიშვნელოვანია. გაეცანით, როგორ ამარტივებს ჩვენი პროგრამები და სერვისები ყოველდღიურ ცხოვრებას."}
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  {
                    title: language === "eng" ? "Open Government" : "ღია მმართველობა",
                    value: language === "eng" ? "Daily updates and public plans" : "ყოველდღიური განახლებები და საჯარო გეგმები",
                  },
                  {
                    title: language === "eng" ? "Smart City" : "ჭკვიანი ქალაქი",
                    value: language === "eng" ? "Digital services adapted for modern life" : "მოდერნიზებული ციფრული სერვისები",
                  },
                  {
                    title: language === "eng" ? "Community Growth" : "საზოგადოების ზრდა",
                    value: language === "eng" ? "Programs for youth, family and local business" : "პროგრამები ახალგაზრდებისთვის, ოჯახებისთვის და ბიზნესისთვის",
                  },
                  {
                    title: language === "eng" ? "Safe Spaces" : "უსაფრთხო სივრცეები",
                    value: language === "eng" ? "Pedestrian routes, parks and cultural centers" : "ფეხით ბილიკები, პარკები და კულტურული ცენტრები",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[28px] border border-white/10 bg-slate-950/90 p-6 transition-all duration-300 hover:bg-slate-800/80"
                  >
                    <p className="text-lg font-semibold text-white">{item.title}</p>
                    <p className="mt-3 text-slate-300 leading-7">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}