import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo_final.png";


const SECTION_IDS = ["hero", "about", "services", "solutions", "contact"];

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  // Theme
  const getInitialTheme = () => {
    const saved = typeof window !== "undefined" && localStorage.getItem("theme");
    if (saved) return saved;
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  };
  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("theme", theme);
    } catch {''}
  }, [theme]);

  // Active section (for on-page anchors)
  const [activeSectionId, setActiveSectionId] = useState(SECTION_IDS[0]);
  useEffect(() => {
    const observers = [];
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSectionId(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0.2 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Close menu on resize > md and handle Escape
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuActive(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setMenuActive(false);
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  // Eye tracking (guarded + respects reduced motion)
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const pupils = Array.from(document.querySelectorAll(".eye .pupil"));
    if (!pupils.length) return;

    let raf = null;
    const onMove = (e) => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        pupils.forEach((pupil) => {
          const parent = pupil.parentElement;
          if (!parent) return;
          const rect = parent.getBoundingClientRect();
          const eyeX = rect.left + rect.width / 2;
          const eyeY = rect.top + rect.height / 2;
          const dx = e.clientX - eyeX;
          const dy = e.clientY - eyeY;
          const angle = Math.atan2(dy, dx);
          const radius = 4;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          pupil.style.transform = `translate(${x}px, ${y}px)`;
        });
      });
    };

    document.addEventListener("mousemove", onMove);
    return () => {
      document.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const toggleMenu = () => setMenuActive((s) => !s);
  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  // Smooth scroll that accounts for sticky header height
  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (!el) {
      setMenuActive(false);
      return;
    }
    const headerOffset = 80; // adjust to your sticky header height
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: "smooth" });
    setMenuActive(false);
  };

  // Mix of route vs section links
  const navLinks = [
    { id: "hero", label: "Home", type: "section" },
    { id: "services", label: "What We Do", type: "section" },
    { id: "/solutions", label: "Our Solutions", type: "route" },
        { id: "/about", label: "About Us", type: "route" },

    { id: "/contact", label: "Contact", type: "route" },
  ];

  const location = useLocation();
  const isOnHome = location.pathname === "/" || location.pathname === "";

  return (
    <nav className="sticky top-0 z-50   bg-white dark:bg-darkbg transition-colors duration-300 shadow" role="navigation" aria-label="Main">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-3">
        {/* Logo + eyes */}
        <div className="flex items-center gap-3">
          <Link to="/" onClick={() => { setMenuActive(false); }} className="flex items-center gap-3">
            <img src={logo} alt="KMZ Tech logo" className="w-28 md:w-24 sm:w-20 h-auto" />
          </Link>

          <div className="flex gap-2" aria-hidden>
            {[1, 2].map((i) => (
              <div key={i} className="eye w-5 h-5 rounded-full border border-gray-800 bg-white flex items-center justify-center">
                <div className="pupil w-1.5 h-1.5 bg-black rounded-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 font-heading items-center">
          {navLinks.map((link) => {
            const isRoute = link.type === "route";
            const isActiveRoute = isRoute && (location.pathname === link.id || location.pathname.startsWith(link.id + "/"));
            const isActiveSection = link.type === "section" && isOnHome && activeSectionId === link.id;

            return (
              <li key={link.id} className="group relative">
                {link.type === "section" ? (
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      if (!isOnHome) {
                        e.preventDefault();
                        setMenuActive(false);
                        window.location.href = `/#${link.id}`;
                        return;
                      }
                      handleLinkClick(e, link.id);
                    }}
                    className={`px-1 py-1 focus:outline-none focus:ring-2 focus:ring-accent rounded ${
                      isActiveSection ? "text-accent underline underline-offset-4" : "text-gray-700 dark:text-darktext hover:text-accent"
                    }`}
                    aria-current={isActiveSection ? "page" : undefined}
                  >
                    {link.label}
                    <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                  </a>
                ) : (
                  <Link
                    to={link.id}
                    onClick={() => setMenuActive(false)}
                    className={`px-1 py-1 focus:outline-none focus:ring-2 focus:ring-accent rounded ${
                      isActiveRoute ? "text-accent underline underline-offset-4" : "text-gray-700 dark:text-darktext hover:text-teal-600"
                    }`}
                    aria-current={isActiveRoute ? "page" : undefined}
                  >
                    {link.label}
                    <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                  </Link>
                )}
              </li>
            );
          })}

          {/* Theme toggle */}
          <li>
            <button
              onClick={toggleTheme}
              aria-pressed={theme === "dark"}
              aria-label="Toggle theme"
              className="relative w-10 h-6 rounded-full border-2 border-teal-500 focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <span
                className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-teal-400 transition-transform duration-300 ${
                  theme === "dark" ? "translate-x-[1.25rem]" : ""
                }`}
              />
            </button>
          </li>
        </ul>

        {/* Mobile icons */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            aria-pressed={theme === "dark"}
            aria-label="Toggle theme"
            className="relative w-9 h-5 rounded-full border-2 border-accent focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <span className={`absolute top-0.5 left-0.5 w-3 h-3 rounded-full bg-accent transition-transform duration-300 ${theme === "dark" ? "translate-x-5" : ""}`} />
          </button>

          <button
            onClick={toggleMenu}
            aria-expanded={menuActive}
            aria-controls="mobile-menu"
            aria-label={menuActive ? "Close menu" : "Open menu"}
            className="text-2xl p-2 focus:outline-none focus:ring-2 focus:ring-accent rounded"
          >
            {menuActive ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute left-0 w-full bg-white dark:bg-darkbg shadow-lg rounded-b-lg px-6 py-6 transition-transform duration-300 ${
          menuActive ? "translate-y-0 pointer-events-auto opacity-100" : "-translate-y-3 pointer-events-none opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4" role="menu">
          {navLinks.map((link) => (
            <li key={link.id} role="none">
              {link.type === "section" ? (
                <a
                  role="menuitem"
                  href={`#${link.id}`}
                  onClick={(e) => {
                    if (!isOnHome) {
                      e.preventDefault();
                      setMenuActive(false);
                      window.location.href = `/#${link.id}`;
                      return;
                    }
                    handleLinkClick(e, link.id);
                  }}
                  className="block w-full text-center text-lg text-gray-700 dark:text-darktext hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded py-2"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  role="menuitem"
                  to={link.id}
                  onClick={() => setMenuActive(false)}
                  className="block w-full text-center text-lg text-gray-700 dark:text-darktext hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded py-2"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
