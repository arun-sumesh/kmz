import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { FaMessage } from 'react-icons/fa6';

// Unsplash image for contact section
const contactImg = "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbnRhY3R8ZW58MHx8MHx8fDA%3D";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id",
        "your_template_id",
        form.current,
        "your_public_key"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        {/* Left Side: Image */}
        <div className="contact-image">
          <img src={contactImg} alt="Contact" />
        </div>

        {/* Middle Side: Heading + Paragraph */}
        <div className="contact-left">
          <h2>Let's Work Together</h2>
          <p>
            We love collaborating with new people and companies. Please take a moment to
            tell us about your project. Your messages will be responded to within ONE BUSINESS DAY.
          </p>
        </div>

        {/* Right Side: Form */}
        <div className="contact-right">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="btn btn-primary"> < FaMessage />Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
