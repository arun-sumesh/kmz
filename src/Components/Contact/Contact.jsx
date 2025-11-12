import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import contactImg from "../../assets/contact-hero.jpg";

export default function Contact() {
  const location = useLocation();
  const fromSolution = location.state?.fromSolution || "";
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: fromSolution,
    message: "",
    consent: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: integrate with your API or email service
    console.log("Contact form submitted:", form);
    alert("Thanks! We’ll get back to you shortly.");
    setForm({
      name: "",
      email: "",
      phone: "",
      subject: fromSolution,
      message: "",
      consent: true,
    });
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-bg dark:bg-darkbg text-text dark:text-darktext font-outfit"
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-heading dark:text-darkheading">
            Contact us
          </h1>
          <p className="mt-3 text-paragraph dark:text-darkparagraph">
            Tell us what you need. We’ll design the right solution for your
            space.
          </p>
          {fromSolution && (
            <p className="mt-2 text-sm text-accent">
              Inquiry context:{" "}
              <span className="font-semibold">{fromSolution}</span>
            </p>
          )}
        </header>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {/* Left: image */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10">
            <img
              src={contactImg}
              alt="Smart home and network solutions"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 backdrop-blur text-white text-sm">
                <span className="inline-block w-2 h-2 rounded-full bg-accent" />
                Dubai • Site surveys available
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-2xl border border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-6 md:p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-heading dark:text-darkheading mb-1">
                    Name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-lg bg-white/70 dark:bg-white/5 border border-white/10 px-3 py-2 text-text dark:text-darktext placeholder:text-gray-500 focus:outline-none focus:border-accent transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-heading dark:text-darkheading mb-1">
                    Email
                  </label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-lg bg-white/70 dark:bg-white/5 border border-white/10 px-3 py-2 text-text dark:text-darktext placeholder:text-gray-500 focus:outline-none focus:border-accent transition"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-heading dark:text-darkheading mb-1">
                    Phone
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="+971 50 123 4567"
                    className="w-full rounded-lg bg-white/70 dark:bg-white/5 border border-white/10 px-3 py-2 text-text dark:text-darktext placeholder:text-gray-500 focus:outline-none focus:border-accent transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-heading dark:text-darkheading mb-1">
                    Subject
                  </label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    type="text"
                    placeholder="How can we help?"
                    className="w-full rounded-lg bg-white/70 dark:bg-white/5 border border-white/10 px-3 py-2 text-text dark:text-darktext placeholder:text-gray-500 focus:outline-none focus:border-accent transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-heading dark:text-darkheading mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us a bit about your space, timeline, and goals…"
                  className="w-full rounded-lg bg-white/70 dark:bg-white/5 border border-white/10 px-3 py-2 text-text dark:text-darktext placeholder:text-gray-500 focus:outline-none focus:border-accent transition"
                  required
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  checked={form.consent}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 rounded border-white/20 bg-white/20 text-accent focus:ring-accent"
                />
                <label
                  htmlFor="consent"
                  className="text-sm text-paragraph dark:text-darkparagraph"
                >
                  I agree to be contacted regarding my inquiry. We never share
                  your details.
                </label>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-accent/90 to-teal-500/90 text-white font-semibold hover:scale-105 transition"
                >
                  Send request
                </button>
                <p className="text-xs text-paragraph dark:text-darkparagraph">
                  Avg. response time: under 24 hours.
                </p>
              </div>
            </form>

            {/* Contact details */}
            <div className="mt-6 grid gap-2 text-sm text-paragraph dark:text-darkparagraph">
              <div>
                <span className="font-medium text-heading dark:text-darkheading">
                  Email:
                </span>{" "}
                info@kmztech.ae
              </div>
              <div>
                <span className="font-medium text-heading dark:text-darkheading">
                  Phone:
                </span>{" "}
                +971 564 112 322
              </div>
              <div>
                <span className="font-medium text-heading dark:text-darkheading">
                  Location:
                </span>{" "}
                Dubai, United Arab Emirates
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
