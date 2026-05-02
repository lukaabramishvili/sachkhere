'use client';

import Slider from "../components/Slider/slider";
import { useLanguage } from "../context/languageContext";

export default function HomePage() {
  const { language } = useLanguage();

  return (
    <div className="relative min-h-screen">

      <div
        className="fixed inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: "url('/cover.webp')" }}
      />

      <div className="fixed inset-0 bg-black/60 -z-10" />

      <div className="relative z-10">

        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
          <Slider />
        </section>

        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">

          <h1 className="text-white text-5xl md:text-7xl font-extrabold">
            {language === "eng" ? "City Government Portal" : "მუნიციპალური პორტალი"}
          </h1>

          <p className="mt-6 text-gray-200 text-lg md:text-2xl max-w-3xl">
            {language === "eng" ? "Official platform for public services, news, and city development." : "ოფიციალური პლატფორმა საჯარო სერვისების, სიახლეების და ქალაქის განვითარებისთვის."}
          </p>

        </section>

        {/* SECTION 1 */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-10 text-white">
            <h2 className="text-3xl font-bold">
              {language === "eng" ? "Public Services" : "საჯარო სერვისები"}
            </h2>
            <p className="mt-4 text-gray-300">
              {language === "eng" ? " From permits to payments, everything is just a click away." : "განცხადებებისგან გადახდამდე, ყველაფერი ერთი კლიკით ხელმისაწვდომია."}
            </p>
          </div>
        </section>

        {/* SECTION 2 */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-10 text-white">
            <h2 className="text-3xl font-bold">
              {language === "eng" ? "City Development" : "ქალაქის განვითარება"}
            </h2>
            <p className="mt-4 text-gray-300">
              {language === "eng" ? "Explore ongoing infrastructure and modernization projects." : "იხილეთ მიმდინარე ინფრასტრუქტურის და მოდერნიზაციის პროექტები."}
            </p>
          </div>
        </section>

        {/* SECTION 3 */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-10 text-white">
            <h2 className="text-3xl font-bold">
              {language === "eng" ? "Announcements" : "შეტყობინებები"}
            </h2>
            <p className="mt-4 text-gray-300">
              {language === "eng" ? "Stay updated with official news and city updates." : "იყავით მიმდინარე ოფიციალურ სიახლეებთან და ქალაქის განვითარების შესახებ."}
            </p>
          </div>
        </section>

      </div>

    </div>
  );
}