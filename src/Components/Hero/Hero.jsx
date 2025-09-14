import React from "react";
import "./Hero.css";
import image from "../../assets/wifi.png";
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const Hero = () => {
  const phoneNumber = "+971564112322";

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  const startCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <section className="hero-section" id="hero">
      <div className="hero-container">
        {/* Image */}
        <div className="hero-image">
          <img src={image} alt="IT Solutions" />
        </div>

        {/* Text */}
        <div className="hero-text">
          <h1>
            Smart Home & IT Networking <br />
            <span>Solutions for Your World</span>
          </h1>
          <p>
            Cutting-edge home automation, networking infrastructure, and
            security systems — making technology simple, secure, and efficient.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
            <button className="btn-primary" onClick={openWhatsApp}>
              <FaWhatsapp /> Message Us Now
            </button>
            <button className="btn-secondary" onClick={startCall}>
              <FaPhoneAlt /> Start a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
