import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo_final.png";

const SECTION_IDS = ["hero", "about", "services", "solutions", "contact"];

export default function Navbar() {
  const location = useLocation();
  const isOnHome = location.pathname === "/" || location.pathname === "";

  const [menuActive, setMenuActive] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState(SECTION_IDS[0]);

  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved) return saved;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    } catch {
      return "light";
    }
  });

  // Apply theme immediately on mount
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, []);

  // Update theme on toggle
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Track active section with IntersectionObserver
  useEffect(() => {
    const observers = SECTION_IDS.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => entry.isIntersecting && setActiveSectionId(id),
        { rootMargin: "-40% 0px -55% 0px", threshold: 0.2 }
      );
      obs.observe(el);
      return obs;
    }).filter(Boolean);
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Close menu on resize or Escape
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

  // Smooth scroll handler
  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (!el) {
      setMenuActive(false);
      return;
    }
    const headerOffset = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: "smooth" });
    setMenuActive(false);
  };

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  const toggleMenu = () => setMenuActive((m) => !m);

  // Unified navLinks structure
  const navLinks = [
  // Section links (on the home page)
  { path: "/", section: "hero", label: "Home" },
  { path: "/", section: "services", label: "What We Do" },

  // Route links (navigate to other pages)
  { path: "/solutions", label: "Our Solutions" },
  { path: "/about", label: "About Us" },
  { path: "/contact", label: "Contact" },
];


  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-darkbg shadow transition-all duration-700 ease-in-out">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-3">
        <Link to="/" onClick={() => setMenuActive(false)} className="flex items-center gap-3">
          <img src={logo} alt="KMZ Tech logo" className="w-28 h-auto transition-transform duration-300 hover:scale-105" />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8 font-heading items-center">
          {navLinks.map((link) => {
            const isSection = !!link.section;
            const isActiveRoute = !isSection && location.pathname.startsWith(link.path);
            const isActiveSection = isSection && isOnHome && activeSectionId === link.section;

            const commonClass = `px-1 py-1 focus:outline-none focus:ring-2 focus:ring-accent rounded transition duration-300 ${
              isActiveRoute || isActiveSection
                ? "text-accent underline underline-offset-4"
                : "text-text dark:text-darktext hover:text-accent"
            }`;

            return (
              <li key={link.label}>
                {isSection ? (
                  <a
                    href={`#${link.section}`}
                    onClick={(e) => {
                      if (!isOnHome) {
                        e.preventDefault();
                        window.location.href = `/#${link.section}`;
                        return;
                      }
                      handleLinkClick(e, link.section);
                    }}
                    className={commonClass}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link to={link.path} onClick={() => setMenuActive(false)} className={commonClass}>
                    {link.label}
                  </Link>
                )}
              </li>
            );
          })}

          {/* Theme toggle */}
          <li>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="relative w-10 h-6 rounded-full border-2 border-accent focus:outline-none focus:ring-2 focus:ring-accent overflow-hidden"
            >
              <span
                className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-accent transition-transform duration-300 ${
                  theme === "dark" ? "translate-x-4" : "translate-x-0"
                }`}
              />
            </button>
          </li>
        </ul>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button onClick={toggleTheme} aria-label="Toggle theme" className="relative w-9 h-5 rounded-full border-2 border-accent focus:outline-none focus:ring-2 focus:ring-accent overflow-hidden">
            <span
              className={`absolute top-0.5 left-0.5 w-3 h-3 rounded-full bg-accent transition-transform duration-300 ${
                theme === "dark" ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>

          <button
            onClick={toggleMenu}
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
        className={`md:hidden absolute left-0 w-full bg-white dark:bg-darkbg shadow-lg rounded-b-lg px-6 py-6 transition-all duration-500 ease-in-out ${
          menuActive ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-5 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.section ? (
                <a
                  href={`#${link.section}`}
                  onClick={(e) => {
                    if (!isOnHome) {
                      e.preventDefault();
                      window.location.href = `/#${link.section}`;
                      return;
                    }
                    handleLinkClick(e, link.section);
                  }}
                  className="block text-center text-lg text-text dark:text-darktext hover:text-accent"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  to={link.path}
                  onClick={() => setMenuActive(false)}
                  className="block text-center text-lg text-text dark:text-darktext hover:text-accent"
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
