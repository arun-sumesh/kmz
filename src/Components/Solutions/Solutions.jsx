/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  FaSitemap,
  FaHome,
  FaDoorOpen,
  FaWifi,
  FaCameraRetro,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { solutionsList } from "../../utils/solutions-data";
import Footer from "../Footer/Footer";

const ICONS = {
  sitemap: FaSitemap,
  home: FaHome,
  door: FaDoorOpen,
  wifi: FaWifi,
  camera: FaCameraRetro,
};

// 🔧 Pure fade-in with stagger
const cardVariant = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Solutions() {
  const [activeId, setActiveId] = useState(null);
  const activeItem = solutionsList.find((s) => s.id === activeId);
  const toggle = (id) => setActiveId((cur) => (cur === id ? null : id));

  return (
    <main className="min-h-screen bg-bg dark:bg-darkbg text-text dark:text-darktext font-outfit">
      <section className="max-w-6xl mx-auto px-6 py-12">
        <header id="services" className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-heading font-extrabold text-heading dark:text-darkheading"
          >
            Our Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="mt-3 text-base md:text-lg text-paragraph dark:text-darkparagraph max-w-2xl mx-auto"
          >
            Practical, deployable solutions for network infrastructure, smart
            homes, wireless connectivity and video surveillance.
          </motion.p>
        </header>

        {/* Grid of solution cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {solutionsList.map((s, idx) => {
            const Icon = ICONS[s.iconKey] || FaSitemap;
            return (
              <motion.article
                key={s.id}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariant}
                whileHover={{ scale: 1.03 }}
                className="group bg-white/50 dark:bg-white/5 border border-white/10 rounded-2xl p-6 shadow-sm transition"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent/10 text-accent"
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>

                  <div className="min-w-0">
                    <h2 className="text-lg md:text-xl font-semibold text-heading dark:text-darkheading">
                      {s.title}
                    </h2>
                    <p className="mt-2 text-sm md:text-base text-paragraph dark:text-darkparagraph">
                      {s.summary}
                    </p>

                    <div className="mt-4 flex gap-3">
                      <button
                        onClick={() => toggle(s.id)}
                        className="inline-flex items-center px-4 py-2 rounded-full bg-accent text-white text-sm font-semibold hover:scale-105 transition"
                      >
                        {activeId === s.id ? "Close" : "View"}
                      </button>
                      <Link
                        to="/contact"
                        state={{ fromSolution: s.title }}
                        className="inline-flex items-center px-3 py-2 rounded-full border border-white/10 text-sm hover:bg-white/5 transition"
                      >
                        Request survey
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Expanded detail view */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            {activeItem && (
              <motion.section
                key={activeItem.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-white/60 dark:bg-white/5 border border-white/10 rounded-2xl p-8 shadow"
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-accent/10 text-accent text-2xl">
                    {(() => {
                      const IconComponent = ICONS[activeItem.iconKey];
                      return IconComponent ? (
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.4 }}
                        >
                          <IconComponent className="w-8 h-8" />
                        </motion.div>
                      ) : null;
                    })()}
                  </div>

                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-heading dark:text-darkheading">
                      {activeItem.title}
                    </h2>
                    {activeItem.summary && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-2 text-paragraph dark:text-darkparagraph"
                      >
                        {activeItem.summary}
                      </motion.p>
                    )}

                    {Array.isArray(activeItem.details) && (
                      <div className="mt-6 grid gap-6 md:grid-cols-2">
                        {activeItem.details.map((d) => (
                          <motion.article
                            key={d.slug}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="p-4 rounded border border-white/10 bg-transparent hover:bg-white/10 transition"
                          >
                            <h3 className="font-semibold text-heading dark:text-darkheading">
                              {d.subtitle}
                            </h3>
                            <ul className="mt-2 list-disc list-inside space-y-1 text-paragraph dark:text-darkparagraph">
                              {d.content.map((c, i) => (
                                <li key={i}>{c}</li>
                              ))}
                            </ul>
                            {d.img && (
                              <motion.img
                                src={d.img}
                                alt={d.subtitle}
                                className="mt-4 w-full rounded-lg shadow"
                                loading="lazy"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                              />
                            )}
                          </motion.article>
                        ))}
                      </div>
                    )}

                    <div className="mt-8 flex gap-3">
                      <Link
                        to="/contact"
                        state={{ fromSolution: activeItem.title }}
                        className="px-4 py-2 rounded-full bg-accent text-white font-semibold hover:scale-105 transition"
                      >
                        Request site survey
                      </Link>
                      <button
                        onClick={() => setActiveId(null)}
                        className="px-4 py-2 rounded-full border border-white/10 hover:bg-white/5 transition"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="w-full">
          <Footer />
        </div>
      </section>
    </main>
  );
}
