/* eslint-disable no-unused-vars */

import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";
import hero1 from "../../assets/ai.jpg";
import hero2 from "../../assets/automation.jpg";
import hero3 from "../../assets/automation1.jpg";
import hero4 from "../../assets/cctv.jpg";
import hero5 from "../../assets//cctv_single.jpg";
import hero6 from "../../assets/human_robot.jpg";
import hero7 from "../../assets/server_room.jpg";
import hero8 from "../../assets/server_room.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.1, ease: "easeOut" } },
};

const Hero = () => {
  const images = [
    hero2,
    hero3,
    hero4,
    hero5,
    hero5,
    hero6,
    hero7,
    hero1,
    hero8,
  ];

  // carousel state
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const AUTO_DURATION = 6000; // ms per slide
  const TRANSITION = 900; // ms crossfade

  // parallax motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-120, 120], [12, -12]);
  const rotateY = useTransform(x, [-120, 120], [-12, 12]);
  const bgParallaxX = useTransform(x, [-120, 120], ["-6%", "6%"]);
  const bgParallaxY = useTransform(y, [-120, 120], ["-6%", "6%"]);
  const bgScale = useTransform(x, [-120, 120], [1.12, 1.18]);

  // ref to section for desktop pointer fallback
  const sectionRef = useRef(null);

  // detect mobile for default sensitivity (PC default = 70)
  const isMobileDevice =
    typeof navigator !== "undefined" &&
    /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  // sensitivity state: mobile keeps higher default, PC default set to 70
  const [sensitivity, setSensitivity] = useState(
    isMobileDevice ? 160 : 70
  );
  const sensitivityRef = useRef(sensitivity);
  useEffect(() => {
    sensitivityRef.current = sensitivity;
  }, [sensitivity]);

  // Helper to update motion values
  function updateMotion(normX, normY) {
    const s = sensitivityRef.current;
    x.set(normX * s);
    y.set(normY * s);
  }

  // pointer handlers (desktop fallback)
  function handlePointerMove(e) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    updateMotion(px, py);
  }
  function handlePointerLeave() {
    updateMotion(0, 0);
  }

  useEffect(() => {
    startAuto();
    return stopAuto;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  function startAuto() {
    stopAuto();
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, AUTO_DURATION);
  }
  function stopAuto() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  // manual controls
  const goPrev = () => {
    stopAuto();
    setIndex((i) => (i - 1 + images.length) % images.length);
  };
  const goNext = () => {
    stopAuto();
    setIndex((i) => (i + 1) % images.length);
  };

  // Dubai clock
  const [dubaiTime, setDubaiTime] = useState(() =>
    new Date().toLocaleTimeString("en-GB", {
      timeZone: "Asia/Dubai",
      hour12: false,
    })
  );
  const [dubaiDate, setDubaiDate] = useState(() =>
    new Date().toLocaleDateString("en-GB", {
      timeZone: "Asia/Dubai",
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    })
  );

  useEffect(() => {
    const t = setInterval(() => {
      const now = new Date();
      setDubaiTime(
        now.toLocaleTimeString("en-GB", {
          timeZone: "Asia/Dubai",
          hour12: false,
        })
      );
      setDubaiDate(
        now.toLocaleDateString("en-GB", {
          timeZone: "Asia/Dubai",
          weekday: "short",
          day: "numeric",
          month: "short",
          year: "numeric",
        })
      );
    }, 1000);
    return () => clearInterval(t);
  }, []);

  // Motion-sensing + desktop fallback setup
  useEffect(() => {
    let active = true;

    function handleOrientation(event) {
      if (!active) return;
      const { beta, gamma } = event;
      if (typeof beta !== "number" || typeof gamma !== "number") return;

      // beta: -180..180 (front-back), gamma: -90..90 (left-right)
      const normalizedX = Math.max(-90, Math.min(90, gamma)) / 90; // left-right
      const normalizedY = Math.max(-90, Math.min(90, beta)) / 90; // front-back
      updateMotion(normalizedX, normalizedY);
    }

    // Feature detection
    const isMobile = isMobileDevice;
    const supportsDeviceOrientation = typeof DeviceOrientationEvent !== "undefined";

    // iOS permission helper
    async function tryRequestPermission() {
      try {
        if (
          typeof DeviceMotionEvent !== "undefined" &&
          typeof DeviceMotionEvent.requestPermission === "function"
        ) {
          const resp = await DeviceMotionEvent.requestPermission();
          return resp === "granted";
        }
      } catch {
        return false;
      }
      return true;
    }

    // Attach listeners
    (async () => {
      if (isMobile && supportsDeviceOrientation) {
        const granted = await tryRequestPermission();
        if (granted) {
          window.addEventListener("deviceorientation", handleOrientation, true);
        } else {
          // fallback to pointer interaction if permission denied
          const el = sectionRef.current;
          el?.addEventListener("pointermove", handlePointerMove);
          el?.addEventListener("pointerleave", handlePointerLeave);
        }
      } else {
        // desktop or no support: pointer fallback
        const el = sectionRef.current;
        el?.addEventListener("pointermove", handlePointerMove);
        el?.addEventListener("pointerleave", handlePointerLeave);
      }
    })();

    return () => {
      active = false;
      window.removeEventListener("deviceorientation", handleOrientation);
      const el = sectionRef.current;
      el?.removeEventListener("pointermove", handlePointerMove);
      el?.removeEventListener("pointerleave", handlePointerLeave);
      // reset values
      updateMotion(0, 0);
    };
    // intentionally no dependencies: attach once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden bg-black font-outfit"
      aria-label="KMZ Tech hero"
    >
      {/* background layers */}
      <div className="absolute inset-0 will-change-transform">
        {images.map((src, i) => {
          const isActive = i === index;
          return (
            <motion.div
              key={i}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${src})`,
                transformOrigin: "center",
                x: bgParallaxX,
                y: bgParallaxY,
                scale: bgScale,
                filter: "saturate(0.95) contrast(1.04)",
                zIndex: i === index ? 0 : 0,
              }}
              initial={{ opacity: i === index ? 1 : 0 }}
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={{ duration: TRANSITION / 1000, ease: "easeOut" }}
              aria-hidden="true"
            />
          );
        })}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/50 to-black/95 backdrop-blur-sm z-1" />

      <motion.div
        className="relative z-10 w-full max-w-6xl px-6 md:px-12 lg:px-24 py-8 md:py-12 rounded-xl backdrop-blur-sm"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <motion.div
            className="w-full lg:w-2/3 text-center lg:text-left"
            variants={fadeUp}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight leading-tight text-white">
              <span className="inline-block bg-gradient-to-r from-accent to-teal-500 bg-clip-text text-transparent">
                KMZ Tech
              </span>
              <span className="block mt-3 text-xl md:text-2xl font-medium text-white/80">
                Smart Home & IT Solutions for Your World
              </span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto lg:mx-0 text-lg md:text-xl text-white/75">
              We provide cutting-edge home automation, networking infrastructure,
              and security systems — making technology simple, secure, and
              efficient.
            </p>

            <div className="mt-8 flex justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-teal-500 text-white font-semibold shadow-xl transform hover:scale-105 transition"
              >
                Get in Touch
              </a>
              <Link
                to="/solutions"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 text-white/90 hover:bg-white/6 transition shadow-md"
              >
                Our Solutions
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/3 perspective-1000"
            style={{ perspective: 1200 }}
            variants={fadeUp}
          >
            <motion.div
              className="relative mx-auto max-w-sm rounded-2xl bg-gradient-to-br from-white/6 to-white/3 backdrop-blur-md border border-white/6 shadow-2xl p-6 will-change-transform"
              style={{ rotateX, rotateY }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex flex-col items-center justify-center h-40">
                <div className="text-sm text-white/70 mb-2"> 🇦🇪 Dubai</div>
                <div className="text-3xl md:text-4xl font-semibold text-white tabular-nums">
                  {dubaiTime}
                </div>
                <div className="mt-2 text-xs text-white/60">{dubaiDate}</div>
              </div>

              <div className="mt-4 flex gap-3">
                <a
                  className="flex-1 inline-flex justify-center px-4 py-2 rounded-lg bg-white/8 text-white text-sm font-medium hover:bg-white/12 transition"
                  href="#work"
                >
                  View Work
                </a>
                {/* <a
                  className="inline-flex items-center px-3 py-2 rounded-lg bg-white/6 text-white text-sm hover:bg-white/10 transition"
                  href="#case"
                >
                  Case
                </a> */}
              </div>

              <div
                className="absolute left-1/2 -translate-x-1/2 -bottom-6 w-48 h-16 rounded-full blur-3xl bg-gradient-to-r from-accent/40 to-blue-500/30 pointer-events-none"
                aria-hidden="true"
              />
            </motion.div>

            {/* optional manual controls */}
            <div className="mt-4 flex justify-center gap-3">
              <button
                onClick={() => {
                  stopAuto();
                  goPrev();
                }}
                className="px-3 py-1 rounded-full bg-white/8 text-white text-sm hover:bg-white/12 transition"
                aria-label="Previous background"
              >
                &lt;
              </button>
              <button
                onClick={() => {
                  stopAuto();
                  goNext();
                }}
                className="px-3 py-1 rounded-full bg-white/8 text-white text-sm hover:bg-white/12 transition"
                aria-label="Next background"
              >
                &gt;
              </button>
            </div>
          </motion.div>
        </div>

        <p className="mt-10 text-xm shadow-md text-lime-50 p-6 rounded-lg text-center">
          <i>
            “The future belongs to those who can imagine it, design it, and
            execute it. It isn’t something you await, but rather create.”
          </i>
          <br />
          --His Highness Sheikh Mohammed bin Rashid Al Maktoum
        </p>

        <motion.div
          className="mt-5 flex justify-center"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <a href="#about" className="group" aria-label="Scroll to about">
            <div className="w-7 h-11 rounded-2xl border-2 border-white/20 flex items-start justify-center p-2">
              <div className="w-2 h-2 rounded-full bg-white/70 animate-bounce" />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
