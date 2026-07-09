"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import AnimateOnScroll from "./AnimateOnScroll";

const EMAILJS_SERVICE_ID = "service_pfqc3iv";
const EMAILJS_CONTACT_TEMPLATE_ID = "template_1kj3xrv";
const EMAILJS_PUBLIC_KEY = "vpDTwVtZMtxoj-JpX";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_CONTACT_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setFormData({ name: "", email: "", message: "" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <AnimateOnScroll direction="left">
            <div>
              <span className="text-sm text-[#C5A044] font-medium uppercase tracking-wider">
                Contact
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Get In Touch
              </h2>
              <p className="mt-4 text-gray-500 leading-relaxed text-sm sm:text-base">
                Have questions or want to make a reservation? Reach out to us
                through Instagram or fill out the form below.
              </p>

              <div className="mt-8 sm:mt-10 space-y-4 sm:space-y-6">
                <motion.a
                  href="https://instagram.com/Elejordemac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#C5A044]/30 transition-all duration-300"
                  whileHover={{ x: 4, boxShadow: "0 10px 30px rgba(197, 160, 68, 0.1)" }}
                >
                  <div className="w-12 h-12 bg-[#C5A044]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-[#C5A044]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Instagram</p>
                    <p className="text-sm text-gray-500">@Elejordemac</p>
                  </div>
                </motion.a>

                <motion.div
                  className="p-4 bg-gray-50 rounded-xl border border-gray-100"
                  whileHover={{ x: 4 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#C5A044]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-[#C5A044]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Response Time</p>
                      <p className="text-sm text-gray-500">
                        Usually within 1-2 hours via Instagram DM
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right" delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C5A044] focus:ring-1 focus:ring-[#C5A044] outline-none transition-all duration-300 text-sm hover:border-gray-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C5A044] focus:ring-1 focus:ring-[#C5A044] outline-none transition-all duration-300 text-sm hover:border-gray-300"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C5A044] focus:ring-1 focus:ring-[#C5A044] outline-none transition-all duration-300 text-sm resize-none hover:border-gray-300"
                  placeholder="Tell us about your inquiry..."
                />
              </div>
              <motion.button
                type="submit"
                disabled={submitting}
                className="w-full px-8 py-3.5 bg-[#C5A044] text-white font-medium rounded-full hover:bg-[#A6852E] hover:shadow-lg hover:shadow-[#C5A044]/20 transition-all duration-300 disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {submitted ? "Message Sent! ✓" : submitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
