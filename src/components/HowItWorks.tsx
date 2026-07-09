"use client";

import { motion } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";

const steps = [
  {
    number: 1,
    title: "Book Online",
    description: "Choose your equipment and dates",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    ),
  },
  {
    number: 2,
    title: "Pay & Confirm",
    description: "Complete payment via GCash, BPI or UnionBank",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
      />
    ),
  },
  {
    number: 3,
    title: "Pickup & Shoot",
    description: "Get your gear and start creating",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z"
      />
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-12 sm:mb-16">
          <span className="text-sm text-[#C5A044] font-medium uppercase tracking-wider">
            Simple Process
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            How It Works
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            Renting a camera has never been easier. Three simple steps and
            you&apos;re ready to shoot.
          </p>
        </AnimateOnScroll>

        <div className="relative">
          {/* Connecting lines - desktop only */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-1/2 px-32">
            <div className="flex items-center justify-between">
              <motion.div
                className="flex-1 h-0.5 bg-gradient-to-r from-[#C5A044] to-[#C5A044]/50 mx-4"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{ transformOrigin: "left" }}
              />
              <motion.div
                className="flex-1 h-0.5 bg-gradient-to-r from-[#C5A044]/50 to-[#C5A044] mx-4"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                style={{ transformOrigin: "left" }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
            {steps.map((step, index) => (
              <AnimateOnScroll key={step.number} delay={0.2 * index}>
                <motion.div
                  className="relative flex flex-col items-center text-center p-6 sm:p-8 bg-white rounded-2xl border border-gray-100 hover:border-[#C5A044]/30 hover:shadow-lg hover:shadow-[#C5A044]/5 transition-all duration-300"
                  whileHover={{ y: -6 }}
                >
                  {/* Step number circle */}
                  <motion.div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#C5A044]/10 border-2 border-[#C5A044] flex items-center justify-center mb-5"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-2xl sm:text-3xl font-bold text-[#C5A044]">
                      {step.number}
                    </span>
                  </motion.div>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-[#C5A044]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {step.icon}
                    </svg>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-500">
                    {step.description}
                  </p>
                </motion.div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
