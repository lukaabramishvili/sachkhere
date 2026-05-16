"use client";

import { useRef } from "react";
import { useLanguage } from "../context/languageContext";

export default function GovernmentPage() {
  const { language } = useLanguage();
  const structureRef = useRef<HTMLElement>(null);

  const scrollToStructure = () => {
    structureRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sections = [
    language === "eng"
      ? "Issue is identified and documented"
      : "პრობლემის იდენტიფიცირება და დოკუმენტირება",
    language === "eng"
      ? "Departments review and propose solutions"
      : "დეპარტამენტები განიხილავენ და სთავაზობენ გადაწყვეტებს",
    language === "eng"
      ? "Council evaluates and votes"
      : "საკრებულო აფასებს და კენჭს უყრის",
    language === "eng"
      ? "Approved actions are implemented"
      : "დამტკიცებული გადაწყვეტილება ხორციელდება",
  ];

  const keyFunctions = [
    {
      title:
        language === "eng"
          ? "Budget planning and allocation"
          : "ბიუჯეტის დაგეგმვა და განაწილება",
      icon: "💰",
      description:
        language === "eng"
          ? "Annual budget of over ₾50 million distributed transparently."
          : "წლიური ბიუჯეტი 50 მილიონ ლარზე მეტი, განაწილებული გამჭვირვალედ.",
    },
    {
      title:
        language === "eng"
          ? "Urban regulation and control"
          : "ქალაქის რეგულირება და კონტროლი",
      icon: "🏗️",
      description:
        language === "eng"
          ? "Construction permits, land use planning and environmental oversight."
          : "სამშენებლო ნებართვები, მიწათსარგებლობის დაგეგმვა და გარემოს ზედამხედველობა.",
    },
    {
      title:
        language === "eng"
          ? "Public service coordination"
          : "საჯარო სერვისების კოორდინაცია",
      icon: "🤝",
      description:
        language === "eng"
          ? "Waste management, water supply, public transport and citizen support."
          : "ნარჩევების მართვა, წყალმომარაგება, საზოგადოებრივი ტრანსპორტი და მოქალაქეთა მხარდაჭერა.",
    },
    {
      title:
        language === "eng"
          ? "Local infrastructure supervision"
          : "ადგილობრივი ინფრასტრუქტურის ზედამხედველობა",
      icon: "🛣️",
      description:
        language === "eng"
          ? "Road maintenance, public lighting, parks and municipal buildings."
          : "გზების მოვლა, საჯარო განათება, პარკები და მუნიციპალური შენობები.",
    },
  ];

  const officials = [
    {
      title: language === "eng" ? "Mayor" : "მერი",
      name: language === "eng" ? "Levan ivanishvili" : "ლევან ივანიშვილი",
      term: "2022 – present",
    },
    {
      title: language === "eng" ? "Council Chairman" : "საკრებულოს თავმჯდომარე",
      name: language === "eng" ? "irakli Chkhikvadze" : "ირაკლი ჩხიკვაძე",
      term: "2021 – present",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      {/* Background image only - no overlay gradients that hide it */}
      <div
        className="fixed inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: "url('/governmentpage.png')" }}
      />

      {/* Hero Section - transparent background, only text shadow for readability */}
      <section className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight drop-shadow-lg md:text-7xl animate-fade-in-up">
          {language === "eng"
            ? "Municipal Administration"
            : "მუნიციპალური ადმინისტრაცია"}
        </h1>

        <p className="max-w-3xl text-lg text-white/90 drop-shadow-md md:text-2xl animate-fade-in-up animation-delay-200">
          {language === "eng"
            ? "Structure, governance system and public decision framework"
            : "სტრუქტურა, მმართველობის სისტემა და გადაწყვეტილებების ჩარჩო"}
        </p>

        <button
          onClick={scrollToStructure}
          className="mt-10 rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold shadow-xl transition-all duration-300 hover:bg-blue-500 hover:scale-105 hover:shadow-blue-500/25"
        >
          {language === "eng" ? "Explore Structure" : "სტრუქტურის ნახვა"}
        </button>
      </section>

      {/* Government Structure Section */}
      <section ref={structureRef} className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold drop-shadow-md">
            {language === "eng"
              ? "Government Structure"
              : "მმართველობის სტრუქტურა"}
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Executive Office */}
            <div className="group rounded-3xl border border-white/30 bg-slate-900/60 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10">
              <div className="mb-4 text-5xl">🏛️</div>
              <h3 className="mb-4 text-2xl font-bold">
                {language === "eng"
                  ? "Executive Office"
                  : "აღმასრულებელი ორგანო"}
              </h3>
              <p className="text-slate-200">
                {language === "eng"
                  ? "Responsible for implementation of municipal policies and projects. Led by the Mayor and deputy mayors."
                  : "პოლიტიკისა და პროექტების განხორციელებაზე პასუხისმგებელი ორგანო. ხელმძღვანელობს მერი და მისი მოადგილეები."}
              </p>
              <div className="mt-4 h-1 w-12 bg-blue-500 rounded-full group-hover:w-full transition-all duration-500" />
            </div>

            {/* City Council */}
            <div className="group rounded-3xl border border-white/30 bg-slate-900/60 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10">
              <div className="mb-4 text-5xl">🏛️</div>
              <h3 className="mb-4 text-2xl font-bold">
                {language === "eng" ? "City Council" : "საკრებულო"}
              </h3>
              <p className="text-slate-200">
                {language === "eng"
                  ? "Approves regulations, budget and strategic decisions. Composed of 35 elected members."
                  : "ამტკიცებს რეგულაციებს, ბიუჯეტს და სტრატეგიულ გადაწყვეტილებებს. შედგება 35 არჩეული წევრისგან."}
              </p>
              <div className="mt-4 h-1 w-12 bg-blue-500 rounded-full group-hover:w-full transition-all duration-500" />
            </div>

            {/* Public Departments */}
            <div className="group rounded-3xl border border-white/30 bg-slate-900/60 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10">
              <div className="mb-4 text-5xl">📂</div>
              <h3 className="mb-4 text-2xl font-bold">
                {language === "eng"
                  ? "Public Departments"
                  : "საჯარო დეპარტამენტები"}
              </h3>
              <p className="text-slate-200">
                {language === "eng"
                  ? "Provide daily services like permits, utilities and citizen support. 12 specialized departments."
                  : "უზრუნველყოფს ყოველდღიურ სერვისებს: ნებართვები, კომუნალური და მხარდაჭერა. 12 სპეციალიზებული დეპარტამენტი."}
              </p>
              <div className="mt-4 h-1 w-12 bg-blue-500 rounded-full group-hover:w-full transition-all duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Decision Making Process - Timeline style */}
      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-4xl font-bold drop-shadow-md">
            {language === "eng"
              ? "How Decisions Are Made"
              : "როგორ მიიღება გადაწყვეტილებები"}
          </h2>

          <div className="relative">
            {/* Vertical line for desktop */}
            <div className="absolute left-6 top-0 h-full w-0.5 bg-blue-500/40 md:left-1/2 md:-translate-x-1/2" />

            {sections.map((step, i) => (
              <div
                key={i}
                className={`relative mb-12 flex flex-col md:flex-row ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-6 group animate-fade-in-up`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                {/* Timeline node */}
                <div className="absolute left-0 md:left-1/2 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/30 ring-4 ring-slate-900">
                  {i + 1}
                </div>

                {/* Content */}
                <div className="md:w-1/2 pl-12 md:pl-0 md:pr-12">
                  <div className="rounded-2xl border border-white/20 bg-slate-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-blue-500/50">
                    <p className="text-lg text-slate-100">{step}</p>
                    {i === 0 && (
                      <p className="mt-2 text-sm text-slate-300">
                        {language === "eng"
                          ? "Citizens can submit issues via public portal or municipal hotline."
                          : "მოქალაქეებს შეუძლიათ პრობლემების განცხადება საჯარო პორტალით ან ცხელი ხაზით."}
                      </p>
                    )}
                  </div>
                </div>
                <div className="md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Functions with Icons and Descriptions */}
      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold drop-shadow-md">
            {language === "eng" ? "Key Functions" : "ძირითადი ფუნქციები"}
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {keyFunctions.map((item, idx) => (
              <div
                key={idx}
                className="group rounded-2xl border border-white/20 bg-slate-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-100">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-slate-300">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Officials Section */}
      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-4xl font-bold drop-shadow-md">
            {language === "eng" ? "Key Officials" : "ძირითადი პირები"}
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {officials.map((official, idx) => (
              <div
                key={idx}
                className="flex items-center gap-6 rounded-2xl border border-white/20 bg-slate-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/30 text-3xl backdrop-blur-sm">
                  👤
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-blue-300">
                    {official.title}
                  </p>
                  <p className="text-xl font-semibold">{official.name}</p>
                  <p className="text-sm text-slate-300">{official.term}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 px-6 py-16 text-center">
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/20 bg-slate-900/50 p-10 backdrop-blur-sm">
          <h3 className="text-2xl font-bold">
            {language === "eng"
              ? "Participate in Local Governance"
              : "მონაწილეობა ადგილობრივ მმართველობაში"}
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-slate-200">
            {language === "eng"
              ? "Attend council meetings, submit initiatives, or run for office."
              : "დაესწარით საკრებულოს სხდომებს, წარადგინეთ ინიციატივები, ან იყავით კანდიდატი."}
          </p>
          <button className="mt-6 rounded-full bg-transparent px-8 py-3 font-semibold text-blue-300 ring-1 ring-blue-400 transition-all hover:bg-blue-400 hover:text-slate-950 hover:scale-105">
            {language === "eng" ? "Get Involved" : "ჩაერთეთ"}
          </button>
        </div>
      </section>

      {/* Tailwind Custom Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </div>
  );
}