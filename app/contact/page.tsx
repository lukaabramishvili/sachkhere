'use client'

import { useState } from "react";
import { useLanguage } from "../context/languageContext";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const { language } = useLanguage();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setResponseMessage(
          language === "eng"
            ? "Email sent successfully!"
            : "მეილი წარმატებით გაგზავნილია!"
        );
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setResponseMessage(
          language === "eng"
            ? "Failed to send email."
            : "მეილის გაგზავნა ვერ მოხერხდა."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage(
        language === "eng"
          ? "Something went wrong."
          : "გაუგებრობა მოხდა."
      );
    } finally {
      setLoading(false);
    }
  };

  const contactDetails = [
    {
      label: language === "eng" ? "Address" : "მისამართი",
      value: "თავისუფლების ქუჩა, Sachkhere",
    },
    {
      label: language === "eng" ? "Website" : "საიტი",
      value: "sachkhere.gov.ge",
    },
    {
      label: language === "eng" ? "Phone" : "ტელეფონი",
      value: "+995 555 11 11 11",
    },
    {
      label: language === "eng" ? "Email" : "ელ. ფოსტა",
      value: "sachkhere@gmail.com",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b1121] via-[#162542] to-[#0092d6] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10 rounded-[32px] border border-white/10 bg-slate-950/80 p-10 shadow-2xl shadow-slate-900/50 backdrop-blur-xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300 opacity-80 mb-3">
                {language === "eng" ? "Contact" : "კონტაქტი"}
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold">
                {language === "eng"
                  ? "Talk to the Sachkhere team"
                  : "დაიწყე საუბარი საჩხერის მერიასთან"}
              </h1>
              <p className="mt-4 max-w-2xl text-slate-300 text-lg leading-8">
                {language === "eng"
                  ? "Need help with your request? Send us a message and we will get back to you shortly."
                  : "გჭირდებათ დახმარება? მოგვწერეთ და რაც შეიძლება მალე დაგიკავშირდებით."}
              </p>
            </div>
            <div className="space-y-4 rounded-[28px] border border-white/10 bg-slate-950/90 p-6 shadow-xl">
              {contactDetails.map((item) => (
                <div key={item.label} className="rounded-3xl bg-slate-900/70 p-4">
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300 opacity-80">
                    {item.label}
                  </p>
                  <p className="mt-2 text-base text-slate-100">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/80 shadow-2xl shadow-slate-900/50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6500.343942956881!2d43.40305347908498!3d42.338854691433546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405b5d6e9eb3df79%3A0xa5a7d0bb7c964cee!2sSachkhere%20Municipality%20City%20Hall!5e1!3m2!1sen!2sge!4v1777824169294!5m2!1sen!2sge"
              className="h-full min-h-[520px] w-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="space-y-6">
            <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-slate-900/50">
              <h2 className="text-3xl font-bold">
                {language === "eng" ? "Send us a message" : "გაგვიგზავნეთ შეტყობინება"}
              </h2>
              <p className="mt-3 text-slate-300">
                {language === "eng"
                  ? "Use the form below and we will answer as soon as possible."
                  : "გამოიყენე ქვემოთ მოცემული ფორმა და რაც შეიძლება მალე დაგიკავშირდებით."}
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={
                      language === "eng" ? "Full Name" : "სრული სახელი და გვარი"
                    }
                    className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400"
                  />
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={
                      language === "eng" ? "Email Address" : "ელექტრონული ფოსტა"
                    }
                    className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
                <input
                  required
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={language === "eng" ? "Title" : "სათაური"}
                  className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400"
                />
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={
                    language === "eng"
                      ? "What can we help you with?"
                      : "რით შეგვიძლია დაგეხმაროთ?"
                  }
                  rows={6}
                  className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading
                    ? language === "eng"
                      ? "Sending..."
                      : "იგზავნება..."
                    : language === "eng"
                    ? "Send Message"
                    : "მესიჯის გაგზავნა"}
                </button>
                {responseMessage === "Message sent successfully" ? (
                  <p className="text-center text-sm text-emerald-300">
                    {responseMessage}
                  </p>
                ) : responseMessage ? (
                  <p className="text-center text-sm text-red-400">{responseMessage}</p>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
