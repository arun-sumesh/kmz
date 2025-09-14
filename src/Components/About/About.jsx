import React from "react";
import "./About.css";
import { FaCloudDownloadAlt } from 'react-icons/fa';


const About = () => {
 const downloadBrochure = () => {
    // If the file is in the public folder
    const link = document.createElement("a");
    link.href = "/KMZ Proposal Presentation (1).pdf"; // place your brochure in public folder
    link.setAttribute("download", "KMZ_Tech_Brochure.pdf");
    document.body.appendChild(link);
    link.click();
    link.remove();
 }

  return (
    <section className="about-section" id="about">
      {/* Block 1 - Text Left, Image Right */}
      <div className="about-grid">
        <div className="about-text">
          <h2>What We Are???</h2>
          <p>
            At KMZ Tech, we’re passionate about making technology work for
            people. Our goal is simple — to help businesses stay connected,
            efficient, and ready for the future.{" "}
          </p>{" "}
          <p>
            {" "}
            We provide end-to-end IT solutions including network design,
            structured cabling, wireless connectivity, and automation services.
            Whether you’re setting up a new office, upgrading infrastructure, or
            looking to streamline operations, our team works closely with you to
            deliver solutions that truly fit your needs.{" "}
          </p>{" "}
          <p>
            {" "}
            What sets us apart is not just our technical expertise, but our
            commitment to building lasting relationships. We take the time to
            understand your challenges, explain things clearly, and support you
            every step of the way.{" "}
          </p>{" "}
          <p>
            With KMZ Tech, you get more than just technology—you get a
            reliable partner dedicated to your growth.
          </p>
          <button className="btn-primary" onClick={downloadBrochure}> < FaCloudDownloadAlt /> Download Brochure</button>
        </div>
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Modern Networking"
          />
        </div>
      </div>

      {/* Block 2 - Image Left, Text Right */}
      <div className="about-grid reverse">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
            alt="Smart Home Automation"
          />
        </div>
        <div className="about-text">
          <h2>Seamless Smart Home Experiences</h2>
          <p>
            From advanced security systems to intelligent automation, we
            integrate solutions that work in harmony with your lifestyle.
          </p>
          <p>
            Every project is designed with attention to detail, ensuring your
            technology is as beautiful as it is functional.
          </p>
          <button className="btn-primary">Our Projects</button>
        </div>
      </div>
    </section>
  );
};

export default About;
