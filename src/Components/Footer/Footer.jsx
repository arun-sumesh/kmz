import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const base =
  (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.BASE_URL) || "/";

const partners = [
  { name: "Alexa", logo: `${base}brands/alexa.svg` },
  { name: "Apple HomeKit", logo: `${base}brands/Apple_HomeKit_logo.svg` },
  { name: "Cisco", logo: `${base}brands/cisco.svg` },
  { name: "Dahua", logo: `${base}brands/dahua.png` },
  { name: "Excel", logo: `${base}brands/excel.png` },
  { name: "FEB", logo: `${base}brands/feb.jpeg` },
  { name: "Fortinet", logo: `${base}brands/Fortinet-01.jpg` },
  { name: "Google Home", logo: `${base}brands/google-home.svg` },
  { name: "Hikvision", logo: `${base}brands/hikvision.svg` },
  { name: "KNX", logo: `${base}brands/KN-Logo.svg` },
  { name: "Reolink", logo: `${base}brands/reolink.svg` },
  { name: "Samsung SmartThings", logo: `${base}brands/samsung-smart-things.png` },
  { name: "Schneider Electric", logo: `${base}brands/Schneider-Electric-Logo.svg` },
  { name: "Shelly", logo: `${base}brands/shelly.svg` },
  { name: "Ubiquiti UniFi", logo: `${base}brands/ubiquiti-unifi.svg` },
  { name: "Zigbee", logo: `${base}brands/zigbee-seeklogo.svg` },
];

const Logo = ({ src, alt }) => {
  const fallback =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='50' viewBox='0 0 160 50'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%2373747a' font-family='Arial,Helvetica,sans-serif' font-size='10'%3Elogo%3C/text%3E%3C/svg%3E";
  return (
    <img
      src={src}
      alt={alt}
      className="max-w-[75%] max-h-[44px] object-contain transition-transform duration-200 group-hover:scale-105"
      loading="lazy"
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = fallback;
      }}
    />
  );
};

export default function Footer() {
  return (
    <footer className="bg-darkbg text-darktext">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-accent font-heading font-extrabold text-center text-2xl mb-8">
          Partners We Work With
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 place-items-center mb-10">
          {partners.map((p, i) => (
            <div
              key={i}
              title={p.name}
              className="group bg-white/5 rounded-lg p-3 w-28 h-14 flex items-center justify-center shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition"
              aria-hidden={false}
            >
              <Logo src={p.logo} alt={p.name} />
            </div>
          ))}
        </div>

        <div className="border-t border-white/8 pt-10 pb-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-accent font-heading text-lg mb-3">
                KMZ Information Technology Network Services
              </h3>
              <p className="text-sm text-darkparagraph mb-3">
                License Number: <span className="font-medium text-heading">1516816</span>
              </p>

              <address className="not-italic text-sm flex flex-col gap-2 text-darkparagraph">
                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-accent" /> M Floor, Office 33, Al Khabisi Showroom Building
                </span>

                <a
                  className="flex items-center gap-2 hover:text-heading transition"
                  href="mailto:info@kmztech.ae"
                >
                  <FaEnvelope className="text-accent" /> info@kmztech.ae
                </a>

                <a
                  className="flex items-center gap-2 hover:text-heading transition"
                  href="tel:+971564112322"
                >
                  <FaPhoneAlt className="text-accent" /> +971 56 411 2322
                </a>
              </address>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-accent font-heading text-lg mb-3">
                <MdWork /> Careers
              </h3>
              <p className="text-sm text-darkparagraph mb-2">
                Grow with us — we hire engineers and installers across Dubai.
              </p>
              <a
                href="mailto:info@kmztech.ae?subject=Career%20Application"
                className="inline-block mt-2 px-4 py-2 rounded-full bg-accent text-black text-sm font-medium hover:opacity-95 transition"
              >
                Send CV
              </a>

              <ul className="mt-6 text-sm text-darkparagraph space-y-2">
                <li>
                  <strong>Working hours:</strong> Sun–Thu, 9:00–18:00
                </li>
                <li>
                  <strong>Support:</strong> info@kmztech.ae
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-accent font-heading text-lg mb-3">Our Location</h3>
              <div className="rounded-lg overflow-hidden shadow">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.88226873366!2d55.3410423!3d25.2689042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d9c2d6ac38d%3A0xbdae2167112931b!2sGinger%20Business%20Center!5e1!3m2!1sen!2sae!4v1758044471831!5m2!1sen!2sae"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="KMZ Location"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-darkparagraph">
            © {new Date().getFullYear()} KMZ IT Network Services. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/6 hover:bg-white/10 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-accent" /> <span className="text-sm">LinkedIn</span>
            </a>

            <span className="text-sm text-darkparagraph">|</span>

            <p className="text-sm text-darkparagraph">Designed &amp; Developed by Arun</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
