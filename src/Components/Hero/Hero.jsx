import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import videoBg from "../../assets/video.mp4";

const Hero = () => {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const spans = root.querySelectorAll(".home_title span");
    const subtitle = root.querySelector(".hero-subtitle");
    const description = root.querySelector(".hero-description");
    const buttons = root.querySelector(".hero-buttons");
    const quote = root.querySelector(".hero-quote");

    // Entrance animation
    gsap.fromTo(
      spans,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      [subtitle, description, buttons, quote],
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 1.5,
        ease: "power2.out",
      }
    );

    // Cursor parallax animation
    const handleMouseMove = (e) => {
      const screenX = e.clientX;
      const t = -(window.innerWidth / 2 - screenX);

      gsap.to(spans, {
        duration: 1,
        x: (i, el) => {
          const ratio = 100 / (window.innerWidth / 2 / t);
          const offset =
            ((window.innerWidth - el.clientWidth) / 2) * (ratio / 100);
          return offset;
        },
        ease: "power3.out",
      });
    };

    root.addEventListener("mousemove", handleMouseMove);
    return () => root.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      ref={rootRef}
      className="relative h-screen flex flex-col items-center justify-center text-white overflow-hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Content */}
      <div className="relative z-10 w-full text-center px-6">
        {/* Full‑width split mirrored heading */}
        <div className="anima-container w-full overflow-hidden">
          <ul className="home_title w-full pt-[10vh] overflow-hidden">
            <li className="flex relative h-[15vw] pointer-events-none w-full">
              <div className="left w-1/2 overflow-hidden text-[#FFD700]">
                <h2 className="text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tight transform rotate-[-15deg] skew-x-[-15deg] w-[200%] text-center">
                  <span className="inline-block opacity-100">KMZ Tech</span>
                </h2>
              </div>
              <div className="right w-1/2 overflow-hidden text-[#25282A]">
                <h2 className="text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tight transform rotate-[15deg] skew-x-[15deg] w-[200%] -ml-[100%] text-center">
                  <span className="inline-block opacity-100">KMZ Tech</span>
                </h2>
              </div>
            </li>
          </ul>
        </div>

        <h2 className="hero-subtitle mt-6 text-xl md:text-2xl font-medium text-white/90">
          SMART HOME & IT SOLUTION FOR YOUR WORLD
        </h2>

        <p className="hero-description mt-4 text-lg md:text-xl text-white/80 drop-shadow-md max-w-2xl mx-auto">
          We provide cutting-edge home automation, networking infrastructure,
          and security systems — making technology simple, secure, and efficient.
        </p>

        <div className="hero-buttons mt-8 flex justify-center gap-4">
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-accent hover:bg-teal-600 transition font-semibold shadow-lg"
          >
            Get in Touch
          </a>
          <Link
            to="/solutions"
            className="px-6 py-3 rounded-full border border-white/40 hover:bg-white/10 transition font-semibold"
          >
            Our Solutions
          </Link>
        </div>

        <p className="hero-quote mt-10 text-sm text-lime-50 p-6 rounded-lg bg-white/5 shadow-md">
          <i>
            “The future belongs to those who can imagine it, design it, and
            execute it. It isn’t something you await, but rather create.”
          </i>
          <br />
          --His Highness Sheikh Mohammed bin Rashid Al Maktoum
        </p>
      </div>
    </section>
  );
};

export default Hero;
