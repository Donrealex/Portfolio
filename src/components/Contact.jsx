import React, { useState } from "react";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlineDocumentText,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xdkwpdyv";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // "success" | "error" | null
  const [errorMsg, setErrorMsg] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    setErrorMsg("");

    try {
      const fd = new FormData();
      fd.append("name", form.name);
      fd.append("email", form.email);
      fd.append("subject", form.subject);
      fd.append("message", form.message);

      // Optional: customize email subject shown in Formspree notifications
      fd.append("_subject", `New message: ${form.subject || "Contact Form"}`);

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        const data = await res.json().catch(() => null);
        const msg =
          data?.errors?.map((e) => e.message).join(", ") ||
          "Something went wrong. Please try again.";
        setStatus("error");
        setErrorMsg(msg);
      }
    } catch (error) {
      setStatus(error);
      setErrorMsg("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#0f172a] text-white font-space px-6 py-16 scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold tracking-tight">
          Contact
        </h2>

        {/* Grid: content (left) + form (right on lg) */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left column: paragraph -> buttons -> social */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            <p className="text-lg text-gray-300">
              Interested in working together? <br /> Let’s have a conversation.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:adebiyiridwan91@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Ridwan,%0D%0AI'd%20like%20to%20discuss%20a%20project%20with%20you."
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg"
              >
                <HiOutlineMail className="w-5 h-5" />
                <span>Get in Touch</span>
              </a>
              <a
                href="https://drive.google.com/file/d/16baVazj_IvNTz1uxc2dPy_4dkxN2K6CN/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-gray-500 text-gray-200 font-semibold hover:bg-gray-800 hover:border-gray-400 transition-colors duration-300"
              >
                <HiOutlineDocumentText className="w-5 h-5" />
                <span>View Resume</span>
              </a>
            </div>

            {/* Social */}
            <div className="grid grid-cols-4 gap-6 text-gray-300">
              <NavLink
                to="https://github.com/donrealex"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl" />
              </NavLink>
              <NavLink
                to="https://www.linkedin.com/in/donrealex/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl" />
              </NavLink>
              <NavLink
                to="https://x.com/donrealex1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="text-2xl" />
              </NavLink>
              <NavLink
                to="https://api.whatsapp.com/send?phone=2348031158757&text=Hi%2C%20I%20found%20you%20online"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-2xl" />
              </NavLink>
            </div>
          </div>

          {/* Right column: Form */}
          <form
            onSubmit={handleSubmit}
            action={FORMSPREE_ENDPOINT} // optional fallback
            method="POST" // optional fallback
            className="bg-gray-800/50 border border-gray-700/60 rounded-2xl p-2 sm:p-3 space-y-2"
            aria-labelledby="contact-form-title"
          >
            <h3 id="contact-form-title" className="text-2xl font-semibold">
              Send a message
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl bg-[#0f172a] text-white placeholder-slate-400 px-2 py-2 focus:outline-none focus:ring-2 focus:ring-slate-300"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl bg-[#0f172a] text-white placeholder-slate-400 px-2 py-2 focus:outline-none focus:ring-2 focus:ring-slate-300"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="subject" className="text-sm">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                required
                className="w-full rounded-xl bg-[#0f172a] text-white placeholder-slate-400 px-2 py-2 focus:outline-none focus:ring-2 focus:ring-slate-300"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="text-sm">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={2}
                value={form.message}
                onChange={handleChange}
                required
                className="w-full rounded-xl bg-[#0f172a] text-white placeholder-slate-400 px-2 py-2 focus:outline-none focus:ring-2 focus:ring-slate-300"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className={`inline-flex items-center justify-center rounded-full bg-slate-400 text-black font-extrabold tracking-wide px-8 py-3 uppercase transition ${
                submitting
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:bg-slate-300 active:translate-y-[1px]"
              }`}
              aria-busy={submitting}
            >
              {submitting ? "Sending..." : "Submit"}
            </button>

            {status === "success" && (
              <p className="text-emerald-400" role="status" aria-live="polite">
                Thanks! Your message was sent.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400" role="status" aria-live="polite">
                {errorMsg}
              </p>
            )}
          </form>
        </div>

        {/* location + copyright */}
        <div className="mt-12 flex flex-col items-center gap-2 text-center text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <HiOutlineLocationMarker className="w-5 h-5" />
            <span>Ibadan, OYO STATE</span>
          </div>
          <p>
            Copyright © {new Date().getFullYear()} Portfolio.
            <br /> All Rights Reserved
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;