"use client";

import { motion } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";

const features = [
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
    title: "Well-Maintained",
    description: "All equipment cleaned and checked before every rental",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
    title: "Flexible Rentals",
    description: "Daily and weekly rates that fit your schedule",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
      />
    ),
    title: "Quick Support",
    description: "Reach us anytime via Instagram DM",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
    title: "Affordable",
    description: "Pro gear without the pro price tag",
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <AnimateOnScroll>
              <span className="text-sm text-[#C5A044] font-medium uppercase tracking-wider">
                About Us
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Your Go-To Camera
                <br />
                Rental Shop
              </h2>
              <p className="mt-6 text-gray-500 leading-relaxed text-sm sm:text-base">
                Holy Shots was born out of a passion for photography and
                videography. We believe everyone deserves access to premium
                equipment without the heavy price tag of buying.
              </p>
              <p className="mt-4 text-gray-500 leading-relaxed text-sm sm:text-base">
                Whether you&apos;re a content creator, vlogger, student, or just
                someone who wants to capture special moments in stunning quality —
                we&apos;ve got the gear for you.
              </p>
            </AnimateOnScroll>

            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <AnimateOnScroll key={feature.title} delay={0.1 * index}>
                  <motion.div
                    className="p-4 bg-white rounded-xl border border-gray-100 hover:border-[#C5A044]/30 hover:shadow-lg hover:shadow-[#C5A044]/5 transition-all duration-300"
                    whileHover={{ y: -4 }}
                  >
                    <div className="w-10 h-10 bg-[#C5A044]/10 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-[#C5A044]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {feature.icon}
                      </svg>
                    </div>
                    <h3 className="mt-3 font-semibold text-gray-900 text-sm sm:text-base">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-gray-500">
                      {feature.description}
                    </p>
                  </motion.div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>

          <AnimateOnScroll direction="right" delay={0.3}>
            <div className="relative">
              <motion.div
                className="aspect-[4/5] bg-gradient-to-br from-[#C5A044]/5 to-gray-200 rounded-2xl overflow-hidden border border-gray-200"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <svg
                      className="w-20 h-20 sm:w-24 sm:h-24 mx-auto text-[#C5A044]/30"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="mt-4 text-sm text-gray-400">
                      About Holy Shots
                    </p>
                  </div>
                </div>
              </motion.div>
              {/* Decorative element */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 bg-[#C5A044]/10 rounded-2xl -z-10"
                animate={{ rotate: [0, 2, -2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
