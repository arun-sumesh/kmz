import React from "react";
import "./Footer.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const brands = [
    { name: "Alexa", logo: "/logos/alexa.svg" },
    { name: "Apple HomeKit", logo: "/logos/Apple_HomeKit_logo.svg" },
    { name: "Cisco", logo: "/logos/cisco.svg" },
    { name: "Dahua", logo: "/logos/dahua.png" },
    { name: "Excel", logo: "/logos/excel.png" },
    { name: "FEB", logo: "/logos/feb.jpeg" },
    { name: "Fortinet", logo: "/logos/Fortinet-01.jpg" },
    { name: "Google Home", logo: "/logos/google-home.svg" },
    { name: "Hikvision", logo: "/logos/hikvision.svg" },
    { name: "KNX", logo: "/logos/KN-Logo.svg" },
    { name: "Reolink", logo: "/logos/reolink.svg" },
    { name: "Samsung SmartThings", logo: "/logos/samsung-smart-things.png" },
    { name: "Schneider Electric", logo: "/logos/Schneider-Electric-Logo.svg" },
    { name: "Shelly", logo: "/logos/shelly.svg" },
    { name: "Ubiquiti UniFi", logo: "/logos/ubiquiti-unifi.svg" },
    { name: "Zigbee", logo: "/logos/zigbee-seeklogo.svg" },
  ];

  return (
    <footer className="footer">
      {/* Top Brand Section */}
      <div className="footer-brands">
        {brands.map((brand, idx) => (
          <div className="brand-box" key={idx}>
            <img src={brand.logo} alt={brand.name} />
            <span>{brand.name}</span>
          </div>
        ))}
      </div>

      {/* Info Grid */}
      <div className="footer-info">
        {/* Address */}
        <div className="info-box">
          <h4>KMZ Information Technology Network Services</h4>
          <p>License Number: 1516816</p>
          <p>M Floor, Office Number 33</p>
          <p>Al Khabisi Showroom Building</p>
          <p><MdEmail className="icon" /> info@kmztech.ae</p>
          <p><FaPhoneAlt className="icon" /> +971 56 411 2322</p>
        </div>

        {/* Careers */}
        <div className="info-box">
          <h4>Careers</h4>
          <p>Join our team and grow with us.</p>
          <p>Send your CV to <b>info@kmztech.ae</b></p>
        </div>

        {/* Map */}
        <div className="info-box map-box">
          <h4>Our Location</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.100485707387!2d55.3410423!3d25.2689042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d9c2d6ac38d%3A0xbdae2167112931b!2sGinger%20Business%20Center!5e0!3m2!1sen!2sae!4v1694444444444"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="KMZ Location"
          ></iframe>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} KMZ Information Technology Network Services. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
