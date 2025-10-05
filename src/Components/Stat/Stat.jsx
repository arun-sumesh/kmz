/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaServer, FaBolt, FaShieldAlt, FaUsers } from "react-icons/fa";
import statImage from "../../assets/stat.jpg";

/* Animation variants */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, when: "beforeChildren" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const expandVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.3 },
  },
  exit: { opacity: 0, height: 0, transition: { duration: 0.2 } },
};

const stats = [
  {
    icon: <FaServer />,
    label: "Deployments",
    value: 10,
    detail: "Cloud, on-prem, and hybrid rollouts across 10+ industries.",
  },
  {
    icon: <FaBolt />,
    label: "Automations",
    value: 2,
    detail:
      "Workflow and infrastructure automations saving 1000+ hours monthly.",
  },
  {
    icon: <FaShieldAlt />,
    label: "Security Audits",
    value: 2,
    detail: "Audits with remediation plans and compliance mapping.",
  },
  {
    icon: <FaUsers />,
    label: "Clients Served",
    value: 12,
    detail:
      "Long-term partnerships with SMEs, enterprises, and government sectors.",
  },
];

const StatCard = ({ icon, label, value, detail, isActive, onClick }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setCount(value);
      return;
    }

    const duration = 1000;
    const start = performance.now();
    let raf;

    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(value * progress));
      if (progress < 1) raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [value]);

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -3, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="bg-white dark:bg-white/5 border border-white/10 rounded-xl p-5 shadow-sm hover:shadow-md transition cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        <div className="text-2xl text-accent">{icon}</div>
        <div>
          <div className="text-3xl font-bold text-heading dark:text-darkheading">
            {count}+
          </div>
          <div className="text-sm text-paragraph dark:text-darkparagraph">
            {label}
          </div>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            key="detail"
            variants={expandVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="mt-4 text-sm text-paragraph dark:text-darkparagraph"
          >
            {detail}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function StatPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <main className=" bg-bg dark:bg-darkbg text-text dark:text-darktext font-outfit">
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Left column content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6 flex flex-col justify-center"
        >
          <h1 className="text-4xl font-heading font-bold text-heading dark:text-darkheading">
            KMZ Tech — Performance Metrics
          </h1>
          <p className="text-paragraph dark:text-darkparagraph">
            Real-time insights into our infrastructure, automation, and client
            success.
          </p>
        </motion.div>

        {/* Middle column: image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center"
        >
          <motion.img
            src={statImage}
            alt="KMZ Tech dashboard"
            className="w-full max-w-sm h-auto rounded-xl shadow-md"
            loading="lazy"
            decoding="async"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          />
        </motion.div>

        {/* Right column: stats in 2×2 grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              {...stat}
              isActive={activeIndex === i}
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
            />
          ))}
        </motion.div>

        <div className="col-span-1 md:col-span-3">
          <a
            href="#contact"
            className="block w-half mt-4 px-6 py-4 bg-gradient-to-r from-accent/90 to-teal-500/90 text-white font-semibold rounded-full shadow text-center hover:scale-105 transition-transform"
          >
            Request Full Performance Report
          </a>
        </div>
      </section>
    </main>
  );
}
