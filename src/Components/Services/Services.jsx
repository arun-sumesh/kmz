import React, { useState, useEffect, useRef } from "react";
import { FaNetworkWired, FaHome, FaVideo, FaCogs } from "react-icons/fa";
import "./Services.css";

/* ===== Data ===== */
const servicesData = [
  {
    icon: <FaNetworkWired />,
    title: "Networking Solutions",
    description: "High-speed, secure networking infrastructure.",
  },
  {
    icon: <FaHome />,
    title: "Home Automation",
    description: "Smart home integration at your fingertips.",
  },
  {
    icon: <FaVideo />,
    title: "CCTV & Surveillance",
    description: "Remote monitoring for enhanced security.",
  },
  {
    icon: <FaCogs />,
    title: "IT Infrastructure Setup",
    description: "Server and device configuration for your business.",
  },
];

const skillsData = [
  { name: "Structured Cabling", percent: 100 },
  { name: "Home Automation", percent: 99 },
  { name: "CCTV Surveillance", percent: 90 },
  { name: "Wireless Technology", percent: 100 },
  { name: "Access Control", percent: 95 },
];

/* ===== Component ===== */
const Services = () => {
  const [animatedPercents, setAnimatedPercents] = useState(
    skillsData.map(() => 0)
  );
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        let start = null;
        const duration = 2000; // ms

        const animate = (timestamp) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);

          setAnimatedPercents(
            skillsData.map(({ percent }) => Math.round(percent * progress))
          );

          if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
        observer.disconnect(); // run once
      },
      { threshold: 0.3 }
    );

    const node = sectionRef.current;
    if (node) observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services-section" id="services" ref={sectionRef}>
      {/* ===== What We Do ===== */}
      <header className="services-header">
        <h2>What We Do.</h2>
        <p>
          We provide cutting-edge solutions for IT networking, automation, and
          security to make your home and business smarter and safer.
        </p>
        <div className="services-grid">
          {servicesData.map(({ icon, title, description }, idx) => (
            <article className="service-card" key={idx}>
              <div className="service-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </header>

      {/* ===== We Are Strong At ===== */}
            {/* ===== We Are Strong At ===== */}
      <section className="strengths-section">
        <div className="strengths-content">
          <h2>Why Businesses Trust Us</h2>
          <p>
            We deliver proven expertise in IT, security, and automation. Our 
            strengths ensure that your business operates with reliability, 
            scalability, and innovation.
          </p>

          <div className="strengths-grid">
            {skillsData.map(({ name }, idx) => {
              const radius = 45;
              const circumference = 2 * Math.PI * radius;
              const strokeDashoffset =
                circumference - (circumference * animatedPercents[idx]) / 100;

              return (
                <div className="strength-card" key={idx}>
                  <div className="circle">
                    <svg viewBox="0 0 120 120">
                      <circle cx="60" cy="60" r={radius} />
                      <circle
                        cx="60"
                        cy="60"
                        r={radius}
                        style={{
                          strokeDashoffset,
                          strokeDasharray: circumference,
                        }}
                        className="progress-circle"
                      />
                    </svg>
                    <div className="percent-text">{animatedPercents[idx]}%</div>
                  </div>
                  <h4>{name}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </section>
  );
};

export default Services;
