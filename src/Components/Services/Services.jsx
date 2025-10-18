import React, { useState, useEffect, useRef } from "react";
import { FaNetworkWired, FaHome, FaVideo, FaCogs } from "react-icons/fa";

const servicesData = [
  {
    icon: <FaNetworkWired className="text-accent text-4xl" />,
    title: "Networking Solutions",
    description:
      "We design and deploy reliable, high-performance networks that keep your home or business seamlessly connected. Our solutions ensure security, scalability, and consistent uptime.",
    items: [
      "Design & Installation",
      "Fiber Optics Solutions",
      "Structured Cabling",
      "Network Audits & Remediation",
      "Moves, Adds & Changes (MAC)",
      "Wireless Network Solutions (Wi-Fi / Access Points)",
      "Maintenance & Support",
      "Security & Compliance (Firewalls, Access Control)",
      "Warranty & Quality Assurance",
    ],
  },
  {
    icon: <FaHome className="text-accent text-4xl" />,
    title: "Home Automation",
    description:
      "Smart automation systems that make your life easier and more efficient. Control lighting, climate, security, and appliances all from a single, intuitive interface.",
    items: [
      "Smart Lighting Control",
      "Climate & Thermostat Automation",
      "Voice Assistant Integration",
      "Smart Locks & Access",
      "Energy Monitoring",
    ],
  },
  {
    icon: <FaVideo className="text-accent text-4xl" />,
    title: "CCTV & Surveillance",
    description:
      "Advanced CCTV and surveillance solutions to protect your property. Monitor in real-time, store footage securely, and gain peace of mind with 24/7 coverage.",
    items: [
      "HD & IP Camera Installation",
      "Remote Mobile Monitoring",
      "Video Storage & Backup",
      "Night Vision & Motion Detection",
      "Integration with Access Control",
    ],
  },
  {
    icon: <FaCogs className="text-accent text-4xl" />,
    title: "IT Infrastructure Setup",
    description:
      "Complete IT infrastructure services, from server and device setup to cloud integration. Optimize your business operations with secure, scalable, and reliable systems.",
    items: [
      "Server Deployment & Virtualization",
      "Workstation Setup",
      "Router & Firewall Configuration",
      "Cloud Integration",
      "Backup & Disaster Recovery",
    ],
  },
];

const skillsData = [
  { name: "Structured Cabling", percent: 100 },
  { name: "Home Automation", percent: 99 },
  { name: "CCTV Surveillance", percent: 99 },
  { name: "Wireless Technology", percent: 99 },
  { name: "Access Control", percent: 98 },
];

const Services = () => {
  const [animatedPercents, setAnimatedPercents] = useState(
    skillsData.map(() => 0)
  );
  const [expandedIndex, setExpandedIndex] = useState(null);
  const sectionRef = useRef(null);
  const [revealed, setRevealed] = useState(false);

  // Entrance + progress animation when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setRevealed(true);
        let start = null;
        const duration = 2000;

        const animate = (timestamp) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          setAnimatedPercents(
            skillsData.map(({ percent }) => Math.round(percent * progress))
          );
          if (progress < 1) requestAnimationFrame(animate);
        };

        // Respect reduced motion
        const prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) {
          setAnimatedPercents(skillsData.map(({ percent }) => percent));
        } else {
          requestAnimationFrame(animate);
        }

        observer.disconnect();
      },
      { threshold: 0.2 }
    );

    const node = sectionRef.current;
    if (node) observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const circumferenceFor = (r) => 2 * Math.PI * r;

  return ( 
    <section
      id="services"
      ref={sectionRef}
      className="py-20 bg-bg dark:bg-darkbg text-text dark:text-darktext transition-colors duration-500"
    >
      {/* Heading */}
      <div
        className={`container text-center mb-16 ${
          revealed ? "animate-fadeUp" : "opacity-0"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-heading dark:text-darkheading">
          What We Do
        </h2>
        <p className="mt-4 text-lg text-paragraph dark:text-darkparagraph max-w-3xl mx-auto">
          We provide cutting-edge solutions for IT networking, automation, and
          security to make your home and business smarter and safer.
        </p>
      </div>

      {/* Services Grid */}
      <div className="container grid gap-10 md:grid-cols-2 lg:grid-cols-4 mb-20">
        {servicesData.map(({ icon, title, description, items }, idx) => (
          <article
            key={idx}
            className={`p-6 rounded-2xl shadow-lg bg-white dark:bg-darkbg border border-gray-200 dark:border-gray-700 flex flex-col ${
              revealed ? "animate-scaleIn" : "opacity-0"
            } [animation-delay:${idx * 120}ms]`}
          >
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-heading font-semibold text-heading dark:text-darkheading mb-3">
              {title}
            </h3>
            <p className="text-paragraph dark:text-darkparagraph mb-4 flex-1">
              {description}
            </p>

            {items && (
              <>
                <div
                  className={`overflow-hidden transition-[max-height] duration-500 ease-out ${
                    expandedIndex === idx ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <ul className="list-disc list-inside text-left text-sm text-paragraph dark:text-darkparagraph space-y-1">
                    {items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <button
                  aria-expanded={expandedIndex === idx}
                  className="mt-3 inline-flex items-center gap-1 text-accent font-semibold hover:underline"
                  onClick={() =>
                    setExpandedIndex(expandedIndex === idx ? null : idx)
                  }
                >
                  {expandedIndex === idx ? "View Less ▲" : "View More ▼"}
                </button>
              </>
            )}
          </article>
        ))}
      </div>

      {/* Strengths */}
      <div
        className={`container text-center ${
          revealed ? "animate-fadeUp" : "opacity-0"
        } [animation-delay:200ms]`}
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-heading dark:text-darkheading">
          Why Businesses Trust Us
        </h2>
        <p className="mt-4 text-lg text-paragraph dark:text-darkparagraph max-w-3xl mx-auto">
          We deliver proven expertise in IT, security, and automation. Our
          strengths ensure that your business operates with reliability,
          scalability, and innovation.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 mt-12">
          {skillsData.map(({ name }, idx) => {
            const radius = 45;
            const circumference = circumferenceFor(radius);
            const strokeDashoffset =
              circumference - (circumference * animatedPercents[idx]) / 100;

            return (
              <div
                key={idx}
                className={`flex flex-col items-center bg-white dark:bg-darkbg border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow hover:-translate-y-1 transition ${
                  revealed ? "animate-scaleIn" : "opacity-0"
                } [animation-delay:${idx * 120 + 200}ms]`}
              >
                <div className="relative w-28 h-28 mb-4">
                  <svg viewBox="0 0 120 120" className="w-full h-full">
                    <defs>
                      <linearGradient
                        id="progressGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#00a2ff" />
                        <stop offset="100%" stopColor="#14b8a6" />{" "}
                        {/* teal-500 */}
                      </linearGradient>
                    </defs>

                    <circle
                      cx="60"
                      cy="60"
                      r={radius}
                      className="stroke-gray-300 dark:stroke-gray-600"
                      strokeWidth="10"
                      fill="none"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r={radius}
                      stroke="url(#progressGradient)"
                      strokeWidth="10"
                      fill="none"
                      style={{
                        strokeDashoffset,
                        strokeDasharray: circumference,
                      }}
                      className="transition-all duration-500"
                    />
                  </svg>

                  <div className="absolute inset-0 flex items-center justify-center font-heading font-bold text-lg text-heading dark:text-darkheading">
                    {animatedPercents[idx]}%
                  </div>
                </div>
                <h4 className="font-heading font-semibold text-heading dark:text-darkheading">
                  {name}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
