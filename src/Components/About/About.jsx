/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  return (
    <main id="about" className="min-h-screen bg-bg dark:bg-darkbg text-text dark:text-darktext font-body">
      {/* Hero / Intro */}
      <section className="relative pt-20 pb-12 md:pt-28 md:pb-20 max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl  font-heading font-extrabold tracking-tight">
            KMZ Tech — Networking & Automation
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-paragraph dark:text-darkparagraph leading-relaxed">
            We make technology work for people. Our mission is simple — keep
            businesses connected, efficient, and future-ready.
          </p>
        </motion.div>
      </section>

      <div className="max-w-6xl mx-auto px-6 grid gap-12 md:gap-16 md:grid-cols-2 items-start">
        {/* Left column: What we do */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="space-y-6"
        >
          <h3 className="text-3xl md:text-4xl font-semibold">What we do</h3>
          <p className="text-base md:text-lg text-paragraph dark:text-darkparagraph leading-relaxed">
            We provide end-to-end IT and infrastructure services: network
            design, structured cabling, wireless connectivity, and automation
            systems. Whether you are opening a new office, modernizing your
            infrastructure, or automating workflows, we deliver tailored
            solutions that solve real problems.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
            <article className="p-4 shadow-lg rounded-xl border border-white/6 bg-teal-500/30 dark:bg-white/2 dark:border-white/6">
              <h4 className="text-xl md:text-2xl font-semibold">
                Network Design
              </h4>
              <p className="mt-2 text-sm md:text-base text-paragraph dark:text-darkparagraph leading-relaxed">
                Robust LAN/WAN architecture, resilient topology, and capacity
                planning designed around business needs.
              </p>
            </article>

            <article className="p-4  rounded-xl border border-white/6 bg-accent/50 dark:bg-white/2 dark:border-white/6">
              <h4 className="text-xl md:text-2xl  font-semibold">
                Structured Cabling
              </h4>
              <p className="mt-2 text-sm md:text-base text-paragraph dark:text-darkparagraph leading-relaxed">
                Neat, documented cabling with future-proof pathways, labeling,
                and testing for predictable performance.
              </p>
            </article>

            <article className="p-4  rounded-xl border border-white/6 bg-accent/50 dark:bg-white/2 dark:border-white/6">
              <h4 className="text-xl md:text-2xl  font-semibold">
                Wireless Connectivity
              </h4>
              <p className="mt-2 text-sm md:text-base text-paragraph dark:text-darkparagraph leading-relaxed">
                Site surveys, AP placement, band steering, and QoS tuning to
                keep users and devices reliably connected.
              </p>
            </article>

            <article className="p-4 shadow-lg rounded-xl border border-white/6 bg-teal-500/30 dark:bg-white/2 dark:border-white/6">
              <h4 className="text-xl md:text-2xl  font-semibold">
                Automation & Smart Systems
              </h4>
              <p className="mt-2 text-sm md:text-base text-paragraph dark:text-darkparagraph leading-relaxed">
                Intelligent automation for buildings and operations: security,
                lighting, HVAC integration, and workflow automation.
              </p>
            </article>
          </div>

          <div className="mt-4 flex gap-3">
            <a
              href="#contact"
              className="inline-block px-5 py-3 rounded-full bg-accent text-white text-base font-semibold shadow hover:scale-105 transition-transform duration-200"
            >
              Talk to our team
            </a>
            <a
              href="#services"
              className="inline-block text-black bg-teal-400 shadow-md px-4 py-3 rounded-full border border-white/10 text-base  dark:text-darktext hover:bg-white/5 transition-colors duration-200"
            >
              Explore services
            </a>
          </div>
        </motion.section>

        {/* Right column: Why KMZ / Stats / Process */}
        <motion.aside
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="space-y-6"
        >
          <div className="p-6 rounded-2xl bg-gradient-to-br from-white/6 to-white/3 dark:from-white/3 dark:to-white/6 border border-white/6 shadow-lg">
            <h4 className="text-xl md:text-2xl  font-semibold">Why KMZ Tech</h4>
            <p className="mt-3 text-base md:text-lg text-paragraph dark:text-darkparagraph leading-relaxed">
              Our difference is people-first deployment. We listen, we explain,
              and we stand by our work. You get a technical partner who cares
              about uptime, clarity, and long-term value.
            </p>

            <dl className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div>
                <dt className="text-3xl md:text-4xl font-extrabold">10+</dt>
                <dd className="text-sm md:text-base text-paragraph dark:text-darkparagraph">
                  Sites deployed
                </dd>
              </div>
              <div>
                <dt className="text-3xl md:text-4xl font-extrabold">99.9%</dt>
                <dd className="text-sm md:text-base text-paragraph dark:text-darkparagraph">
                  Avg uptime
                </dd>
              </div>
              <div>
                <dt className="text-3xl md:text-4xl font-extrabold">10 yrs</dt>
                <dd className="text-sm md:text-base text-paragraph dark:text-darkparagraph">
                  Average expected partner tenure
                </dd>
              </div>
            </dl>
          </div>

          <div className="p-6 rounded-xl border shadow-md border-white/6">
            <h4 className="text-xl md:text-2xl  font-semibold">
              Typical project flow
            </h4>
            <ol className="mt-3 space-y-3 text-sm md:text-base text-paragraph dark:text-darkparagraph">
              <li>
                <strong>Discover</strong> — site survey, requirements, and
                budgets.
              </li>
              <li>
                <strong>Design</strong> — drawings, BOM, and phased rollout
                plan.
              </li>
              <li>
                <strong>Deploy</strong> — certified installation, labeling, and
                testing.
              </li>
              <li>
                <strong>Handover</strong> — documentation, training, SLAs, and
                ongoing support.
              </li>
            </ol>
          </div>

          <div className="p-6 rounded-xl shadow bg-teal-500/30 dark:bg-white/3 border border-white/6">
            <h4 className="text-xl md:text-2xl  font-semibold">
              Seamless Smart Home Experiences
            </h4>
            <p className="mt-2 text-sm md:text-base dark:text-white leading-relaxed">
              From security and surveillance to lighting and climate automation,
              we integrate systems that feel cohesive and elegant.
            </p>
          </div>
        </motion.aside>
      </div>

      {/* Testimonials / Small cases */}
      <section className="max-w-6xl mx-auto px-6 mt-12 pb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="grid gap-6 md:grid-cols-3"
        >
          <blockquote className="p-6 rounded-xl shadow bg-white/50 dark:bg-[#042033] border border-white/6">
            <p className="text-base text-paragraph dark:text-darkparagraph">
              “KMZ replaced our aging network and reduced downtime to nearly
              zero. Their team made the transition painless.”
            </p>
            <footer className="mt-4 text-sm text-paragraph dark:text-darkparagraph">
              Facilities Manager, Retail Chain
            </footer>
          </blockquote>

          <blockquote className="p-6 rounded-xl shadow bg-white/50 dark:bg-[#042033] border border-white/6">
            <p className="text-base text-paragraph dark:text-darkparagraph">
              “Our smart office automations now save hours of manual work every
              week — and the support has been excellent.”
            </p>
            <footer className="mt-4 text-sm text-paragraph dark:text-darkparagraph">
              Operations Lead, Logistics
            </footer>
          </blockquote>

          <blockquote className="p-6 rounded-xl shadow bg-white/50 dark:bg-[#042033] border border-white/6">
            <p className="text-base text-paragraph dark:text-darkparagraph">
              “Clear documentation, tidy cabling, and fast response times.
              Highly recommended.”
            </p>
            <footer className="mt-4 text-sm text-paragraph dark:text-darkparagraph">
              IT Manager, SME
            </footer>
          </blockquote>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="flex flex-col md:flex-row items-center justify-between gap-6 rounded-xl p-6 bg-gradient-to-r from-accent/90 to-teal-500/90 text-white"
        >
          <div>
            <h4 className="text-xl md:text-2xl font-semibold">
              Ready to connect your business?
            </h4>
            <p className="mt-1 text-base text-white/90">
              Get a site survey or project estimate — straightforward and
              obligation-free.
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="#contact"
              className="inline-block px-5 py-3 rounded-full bg-white text-accent text-base font-semibold hover:scale-105 transition-transform duration-200"
            >
              Request survey
            </a>
            <a
              href="#contact"
              className="inline-block px-4 py-3 rounded-full border border-white/30 text-white text-base hover:bg-white/10 transition-colors duration-200"
            >
              Contact us
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
