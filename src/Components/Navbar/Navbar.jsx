import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo_final.png";
const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    const pupils = document.querySelectorAll(".eye .pupil");

    const moveEyes = (e) => {
      pupils.forEach((pupil) => {
        const rect = pupil.parentElement.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;

        const dx = e.clientX - eyeX;
        const dy = e.clientY - eyeY;
        const angle = Math.atan2(dy, dx);
        const radius = 4; // max distance pupil can move

        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        pupil.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    document.addEventListener("mousemove", moveEyes);
    return () => document.removeEventListener("mousemove", moveEyes);
  }, [theme]);

  const toggleMenu = () => setMenuActive(!menuActive);
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setMenuActive(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo-wrapper">
        <div className="nav-logo">
          <a href="#home">
            <img
              src={logo}
              alt="logo"
              style={{ width: "50px", height: "auto" }}
            />
          </a>
        </div>

        {/* Eyes next to logo */}
        <div className="eyes-wrapper">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="eye"
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "black")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "white")
              }
            >
              <div className="pupil"></div>
            </div>
          ))}
        </div>
      </div>

      <ul className={`nav-links ${menuActive ? "active" : ""}`}>
        <li>
          <a href="#hero" onClick={(e) => handleLinkClick(e, "#hero")}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={(e) => handleLinkClick(e, "#about")}>
            About
          </a>
        </li>
        <li>
          <a href="#services" onClick={(e) => handleLinkClick(e, "#services")}>
            What We Do
          </a>
        </li>
        <li>
          <a href="#Solutions" onClick={(e) => handleLinkClick(e, "#Solutions")}>
            Our Solutions
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => handleLinkClick(e, "#contact")}>
            Contact
          </a>
        </li>
      </ul>

      <div className="mobile-icons">
        <button
          className={`theme-toggle ${theme}`}
          onClick={toggleTheme}
        ></button>
        <div className="menu-icon" onClick={toggleMenu}>
          {menuActive ? "✖" : "☰"}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
