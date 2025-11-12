import React from "react";
import { FaGem, FaBalanceScale, FaLightbulb, FaHandsHelping, FaUniversalAccess, FaChartLine } from "react-icons/fa";
import Footer from "../Components/Footer/Footer";
import missionImg from "../assets/human_robot.jpg";
import visionImg from "../assets/automation1.jpg";

const values = [
  {
    title: "Excellence",
    detail: "Deliver high-quality solutions through rigorous design and continuous improvement.",
    Icon: FaGem,
    accent: "from-amber-400 to-rose-400",
  },
  {
    title: "Integrity",
    detail: "Operate transparently and ethically to build lasting trust with clients and partners.",
    Icon: FaBalanceScale,
    accent: "from-sky-400 to-blue-600",
  },
  {
    title: "Innovation",
    detail: "Apply creative engineering and automation to solve real problems faster and smarter.",
    Icon: FaLightbulb,
    accent: "from-lime-400 to-emerald-400",
  },
  {
    title: "Collaboration",
    detail: "Partner closely with stakeholders to co-create practical, user-centered outcomes.",
    Icon: FaHandsHelping,
    accent: "from-pink-400 to-indigo-500",
  },
  {
    title: "Accessibility",
    detail: "Design inclusive systems that are usable by people with diverse needs and environments.",
    Icon: FaUniversalAccess,
    accent: "from-cyan-400 to-blue-400",
  },
  {
    title: "Scalability",
    detail: "Architect reliable solutions that grow with business needs and traffic demands.",
    Icon: FaChartLine,
    accent: "from-violet-400 to-indigo-500",
  },
];

export default function AboutPageMinimal() {
  return (
    <div className="min-h-screen bg-bg dark:bg-darkbg text-text dark:text-darktext font-body flex flex-col">
      <div className="max-w-4xl mx-auto px-6 py-20 w-full">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-heading dark:text-darkheading">
            About KMZ Tech
          </h1>
          <p className="mt-4 text-base md:text-lg text-paragraph dark:text-darkparagraph leading-relaxed">
            We build scalable, secure, and elegant web solutions that empower businesses to thrive in the digital age.
          </p>
        </header>

        {/* Mission / Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {[{ img: missionImg, title: "Our Mission", text: "To deliver future-proof digital experiences through thoughtful design, robust architecture, and seamless performance." },
            { img: visionImg, title: "Our Vision", text: "To set the standard for business web presence — combining beauty, accessibility, and maintainability in every project." }]
            .map(({ img, title, text }, i) => (
              <article key={i} className="rounded-xl overflow-hidden bg-white dark:bg-darkbg border border-gray-100 dark:border-gray-800 p-4 flex items-start gap-4">
                <img src={img} alt={title} className="w-16 h-16 object-cover rounded-md flex-none" />
                <div>
                  <h3 className="font-heading text-xl md:text-2xl font-semibold text-heading dark:text-darkheading">
                    {title}
                  </h3>
                  <p className="mt-4 text-base text-paragraph dark:text-darkparagraph leading-relaxed">
                    {text}
                  </p>
                </div>
              </article>
            ))}
        </section>

        {/* Values */}
        <section className="mb-14">
          <h4 className="text-xl md:text-2xl font-heading font-semibold mb-6 text-heading dark:text-darkheading">
            What drives us
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <li key={i} className="flex items-start gap-4 bg-gradient-to-r from-accent/30 to-teal-500/30 dark:bg-darkbg border border-gray-100 dark:border-gray-800 rounded-lg p-4">
                <div className={`w-10 h-10 rounded-md flex items-center justify-center text-white ${v.accent} flex-none`}>
                  <v.Icon />
                </div>
                <div>
                  <div className="font-heading font-semibold text-heading dark:text-darkheading text-base md:text-lg">
                    {v.title}
                  </div>
                  <div className="mt-2 text-base text-paragraph dark:text-darkparagraph leading-relaxed">
                    {v.detail}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="mb-16">
          <div className="bg-accent/50 dark:bg-darkbg border border-gray-100 dark:border-gray-800 rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="font-heading font-semibold text-heading dark:text-darkheading text-lg md:text-xl">
                Lets Talk Business!
              </div>
              <div className="mt-2 text-base text-paragraph dark:text-darkparagraph leading-relaxed">
                Talk to our Engineers about your needs.
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="mailto:info@kmztech.example"
                className="px-4 py-2 rounded-md bg-accent text-white text-base font-semibold hover:scale-105 transition-transform duration-200"
              >
                Email Us
              </a>
              <a
                href="https://wa.me/971564112322"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md bg-green-500 hover:bg-green-600 text-white text-base font-semibold"
              >
                WhatsApp
              </a>
              <a
                href="tel:+971564112322"
                className="px-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 text-base font-semibold"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
