"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";

const faqs = [
  {
    question: "How do I book a camera?",
    answer:
      "Simply click the 'Book Now' button, fill out the reservation form with your preferred dates, and we'll confirm your booking via Instagram DM. Payment is done through GCash, BPI, or UnionBank.",
  },
  {
    question: "What are your rental rates?",
    answer:
      "Our Canon G7X Mark III is available at ₱600 per day or ₱800 for weekdays. Rates may vary for future equipment additions.",
  },
  {
    question: "How do I pay?",
    answer:
      "We accept payments via GCash, BPI, and UnionBank. QR codes for payment will be provided after booking confirmation. Full payment is required before pickup.",
  },
  {
    question: "What's included in the rental?",
    answer:
      "Each rental includes the camera body, battery, charger, memory card, and a carrying pouch. Additional accessories may be available upon request.",
  },
  {
    question: "What if the camera gets damaged?",
    answer:
      "A security deposit is required before rental. Minor wear is expected, but significant damage or loss will be deducted from your deposit. Please see our Terms & Conditions for full details.",
  },
  {
    question: "Can I extend my rental period?",
    answer:
      "Yes! Just message us on Instagram at least 24 hours before your return date. Extension is subject to availability and additional charges apply.",
  },
  {
    question: "Where do I pick up and return the equipment?",
    answer:
      "Pickup and return details will be coordinated via Instagram DM after booking confirmation. We'll arrange a convenient meetup location.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-12 sm:mb-16">
          <span className="text-sm text-[#C5A044] font-medium uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-500 text-sm sm:text-base">
            Got questions? We&apos;ve got answers.
          </p>
        </AnimateOnScroll>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <AnimateOnScroll key={index} delay={0.05 * index}>
              <motion.div
                className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-[#C5A044]/20 transition-colors"
                whileHover={{ scale: 1.01 }}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-5 sm:px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-gray-900 text-sm sm:text-base pr-4">
                    {faq.question}
                  </span>
                  <motion.svg
                    className="w-5 h-5 text-[#C5A044] flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-4">
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
