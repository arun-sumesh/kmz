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
        {/* Simple header */}
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-heading dark:text-darkheading">About KMZ Tech</h1>
          <p className="mt-3 text-base text-paragraph dark:text-darkparagraph">
            We build scalable, secure, and elegant web solutions that empower businesses to thrive in the digital age.
          </p>
        </header>

        {/* Mission / Vision side-by-side minimal */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <article className="rounded-xl overflow-hidden bg-white dark:bg-darkbg border border-gray-100 dark:border-gray-800 p-4 flex items-start gap-4">
            <img src={missionImg} alt="mission" className="w-16 h-16 object-cover rounded-md flex-none" />
            <div>
              <h3 className="font-heading font-semibold text-heading dark:text-darkheading">Our Mission</h3>
              <p className="mt-2 text-sm text-paragraph dark:text-darkparagraph">
                To deliver future-proof digital experiences through thoughtful design, robust architecture, and seamless performance.
              </p>
            </div>
          </article>

          <article className="rounded-xl overflow-hidden bg-white dark:bg-darkbg border border-gray-100 dark:border-gray-800 p-4 flex items-start gap-4">
            <img src={visionImg} alt="vision" className="w-16 h-16 object-cover rounded-md flex-none" />
            <div>
              <h3 className="font-heading font-semibold text-heading dark:text-darkheading">Our Vision</h3>
              <p className="mt-2 text-sm text-paragraph dark:text-darkparagraph">
                To set the standard for business web presence — combining beauty, accessibility, and maintainability in every project.
              </p>
            </div>
          </article>
        </section>

        {/* Values — compact grid */}
        <section className="mb-12">
          <h4 className="text-lg font-semibold mb-4 text-heading dark:text-darkheading">What drives us</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <li
                key={i}
                className="flex items-start gap-3 bg-gradient-to-r from-accent/30 to-teal-500/30 dark:bg-darkbg border border-gray-100 dark:border-gray-800 rounded-lg p-3"
              >
                <div className={`w-10 h-10 rounded-md flex items-center justify-center text-white ${v.accent} flex-none`}>
                  <v.Icon />
                </div>
                <div>
                  <div className="font-medium text-heading dark:text-darkheading">{v.title}</div>
                  <div className="text-sm text-paragraph dark:text-darkparagraph mt-1">{v.detail}</div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-14">
          <div className=" bg-accent/50 dark:bg-darkbg border border-gray-100 dark:border-gray-800 rounded-lg p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="font-semibold  text-heading dark:text-darkheading">Ready to automate your network?</div>
              <div className="text-sm text-paragraph dark:text-darkparagraph mt-1">Talk to our architects about a pragmatic automation roadmap.</div>
            </div>

            <div className="flex gap-3">
              <a
                href="mailto:info@kmztech.example"
                className="px-4 py-2 rounded-md bg-accent text-white text-sm"
                aria-label="Email"
              >
                Email Us
              </a>

              <a
                href="https://wa.me/971501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md bg-green-500 hover:bg-green-600 text-white text-sm"
                aria-label="Chat on WhatsApp"
              >
                Send Hii on WhatsApp
              </a>

              <a
                href="tel:+971501234567"
                className="px-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 text-sm"
                aria-label="Call us"
              >
                Call Now
              </a>

            </div>
          </div>
        </section>
      </div>

      {/* Use existing Footer component full-width */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
