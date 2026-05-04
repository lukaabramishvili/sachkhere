"use client";

import { useLanguage } from "../context/languageContext";

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
    {
      label: language === "eng" ? "Years of Progress" : "წლების პროგრესი",
      value: "20+",
    },
    {
      label: language === "eng" ? "Projects Delivered" : "მიმდინარე პროექტები",
      value: language === "eng" ? "45+" : "45+",
    },
    {
      label: language === "eng" ? "Community Partners" : "მოსახლეობის პარტნიორები",
      value: "120+",
    },
    {
      label: language === "eng" ? "Citizen Services" : "მოქალაქეების სერვისები",
      value: "30+",
    },
  ];

  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(0,150,230,0.25),transparent_35%),linear-gradient(180deg,#07101f_0%,#04101b_48%,#07131f_100%)] -z-10" />
      <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.25),transparent_30%)] blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-96 bg-[radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.18),transparent_30%)] blur-3xl" />

      <main className="relative z-10">
        <section className="pt-24 pb-14 px-6 text-center">
          <div className="mx-auto max-w-5xl rounded-[40px] border border-white/10 bg-slate-900/80 p-12 shadow-2xl shadow-slate-900/60 backdrop-blur-xl">
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
            {sections.map((item) => (
              <div
                key={item.title}
                className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-950/50 backdrop-blur-xl"
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
                className="rounded-[32px] border border-white/10 bg-slate-900/80 p-8 text-center shadow-2xl shadow-slate-950/50"
              >
                <p className="text-5xl font-extrabold text-cyan-300">{item.value}</p>
                <p className="mt-4 text-sm uppercase tracking-[0.25em] text-slate-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-6xl mx-auto rounded-[40px] border border-white/10 bg-white/5 p-10 shadow-2xl shadow-slate-950/50 backdrop-blur-xl">
            <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-300 opacity-80">
                  {language === "eng" ? "What we do" : "რას ვაკეთებთ"}
                </p>
                <h2 className="mt-4 text-4xl font-bold">
                  {language === "eng"
                    ? "A modern municipality with real citizen impact"
                    : "მუნიციპალიტეტი, რომელიც რეალურად ხელს უშლის მოქალაქეებს"}
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
                        : "სწრაფი ციფრული განაცხადები, გამჭვირვალე დაშვებები და ქალაქის ლიდერებთან მარტივი კარუსალური კონტაქტი.",
                  },
                  {
                    title: language === "eng" ? "Strong Infrastructure" : "მყარი ინფრასტრუქტურა",
                    detail:
                      language === "eng"
                        ? "Roads, parks and utilities designed for safety, sustainability and future growth."
                        : "სოფლის გზები, პარკები და კომუნიკაციები, რომლებიც უსაფრთხოებას, მდგრადობას და მომავალ ზრდას პასუხობენ.",
                  },
                  {
                    title: language === "eng" ? "Culture & Heritage" : "კულტურა და მემკვიდრეობა",
                    detail:
                      language === "eng"
                        ? "Respecting local traditions while creating new spaces for arts, festivals and education."
                        : "ადგილობრივი ტრადიციების პატივისცემით, ახალი სივრცეები ხელოვნებისთვის, ფესტივალებისთვის და განათლებისთვის ვქმნით."
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[28px] border border-white/10 bg-slate-950/90 p-6"
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
                  {language === "eng" ? "Join the journey" : "გაიღწინე მოცემისკენ"}
                </p>
                <h2 className="mt-4 text-4xl font-bold text-white">
                  {language === "eng"
                    ? "Let's shape the next chapter of Sachkhere together"
                    : "შემოგვიერთდით საჩხერის მომავალი სტატიის შექმნაში"}
                </h2>
                <p className="mt-6 text-slate-200 leading-8">
                  {language === "eng"
                    ? "Whether you're a resident, visitor, or partner, your voice matters. Discover how our programs and services make everyday life better across the city."
                    : "მიუხედავად იმისა, ხართ თუ არა ადგილობრივი, ვიზიტორი, თუ პარტნიორი, თქვენი ხმა მნიშვნელოვანია. გაეცანით, როგორ ამარტივებს ჩვენი პროგრამები და სერვისები ყოველდღიურ ცხოვრებას ქალაქში."}
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
                    value: language === "eng" ? "Pedestrian routes, parks and cultural centers" : "პედიატრიული გზები, პარკები და კულტურული ცენტრები",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[28px] border border-white/10 bg-slate-950/90 p-6"
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
