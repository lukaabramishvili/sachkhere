"use client";

import { useLanguage } from "../context/languageContext";

export default function GovernmentPage() {
  const { language } = useLanguage();

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
    language === "eng"
      ? "Budget planning and allocation"
      : "ბიუჯეტის დაგეგმვა და განაწილება",
    language === "eng"
      ? "Urban regulation and control"
      : "ქალაქის რეგულირება და კონტროლი",
    language === "eng"
      ? "Public service coordination"
      : "საჯარო სერვისების კოორდინაცია",
    language === "eng"
      ? "Local infrastructure supervision"
      : "ადგილობრივი ინფრასტრუქტურის ზედამხედველობა",
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div
        className="fixed inset-0 bg-cover bg-center -z-9 brightness-90"
        style={{ backgroundImage: "url('/governmentpage.png')" }}
      />

      <section className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-6 text-5xl font-extrabold md:text-7xl">
          {language === "eng"
            ? "Municipal Administration"
            : "მუნიციპალური ადმინისტრაცია"}
        </h1>

        <p className="max-w-3xl text-lg text-slate-300 md:text-2xl">
          {language === "eng"
            ? "Structure, governance system and public decision framework"
            : "სტრუქტურა, მმართველობის სისტემა და გადაწყვეტილებების ჩარჩო"}
        </p>

        <button className="mt-10 rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold shadow-xl transition hover:bg-blue-500">
          {language === "eng" ? "Explore Structure" : "სტრუქტურის ნახვა"}
        </button>
      </section>

      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold">
            {language === "eng"
              ? "Government Structure"
              : "მმართველობის სტრუქტურა"}
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-white/30 bg-slate-900/70 p-8 backdrop-blur">
              <h3 className="mb-4 text-2xl font-bold">
                {language === "eng"
                  ? "Executive Office"
                  : "აღმასრულებელი ორგანო"}
              </h3>
              <p className="text-slate-300">
                {language === "eng"
                  ? "Responsible for implementation of municipal policies and projects."
                  : "პოლიტიკისა და პროექტების განხორციელებაზე პასუხისმგებელი ორგანო."}
              </p>
            </div>

            <div className="rounded-3xl border border-white/30 bg-slate-900/70 p-8 backdrop-blur">
              <h3 className="mb-4 text-2xl font-bold">
                {language === "eng" ? "City Council" : "საკრებულო"}
              </h3>
              <p className="text-slate-300">
                {language === "eng"
                  ? "Approves regulations, budget and strategic decisions."
                  : "ამტკიცებს რეგულაციებს, ბიუჯეტს და სტრატეგიულ გადაწყვეტილებებს."}
              </p>
            </div>

            <div className="rounded-3xl border border-white/30 bg-slate-900/70 p-8 backdrop-blur">
              <h3 className="mb-4 text-2xl font-bold">
                {language === "eng"
                  ? "Public Departments"
                  : "საჯარო დეპარტამენტები"}
              </h3>
              <p className="text-slate-300">
                {language === "eng"
                  ? "Provide daily services like permits, utilities and citizen support."
                  : "უზრუნველყოფს ყოველდღიურ სერვისებს: ნებართვები, კომუნალური და მხარდაჭერა."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-4xl font-bold">
            {language === "eng"
              ? "How Decisions Are Made"
              : "როგორ მიიღება გადაწყვეტილებები"}
          </h2>

          <div className="space-y-6">
            {sections.map((step, i) => (
              <div
                key={i}
                className="mx-auto max-w-5xl rounded-[40px] border border-white/30 bg-slate-900/70 p-5 shadow-2xl shadow-slate-900/60 backdrop-blur-xl flex row-auto gap-6 items-center"
              >
                <span className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-600 font-bold">
                  {i + 1}
                </span>
                <p className="text-slate-200">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold">
            {language === "eng" ? "Key Functions" : "ძირითადი ფუნქციები"}
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {keyFunctions.map((item) => (
              <div
                key={item}
                className="mx-auto w-[500px] max-w-5xl h-20 rounded-[40px] border border-white/30 bg-slate-900/70 p-5 shadow-2xl shadow-slate-900/60 backdrop-blur-xl flex items-center"
              >
                <p className="text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
