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
                className="aspect-[4/5] bg-gradient-to-br from-[#1a1a2e] to-[#0f3460] rounded-2xl overflow-hidden border border-gray-200"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full flex items-center justify-center p-8">
                  <svg viewBox="0 0 300 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-w-[280px]">
                    {/* Decorative circles */}
                    <circle cx="150" cy="190" r="140" fill="#C5A044" opacity="0.06"/>
                    <circle cx="150" cy="190" r="100" fill="#C5A044" opacity="0.08"/>

                    {/* Camera body */}
                    <rect x="75" y="140" width="150" height="105" rx="18" fill="url(#aboutBodyGrad)"/>
                    <rect x="75" y="140" width="150" height="5" rx="2" fill="#E8D48B" opacity="0.5"/>

                    {/* Viewfinder */}
                    <rect x="120" y="118" width="60" height="28" rx="10" fill="#A6852E"/>

                    {/* Shutter button */}
                    <circle cx="165" cy="128" r="8" fill="#E8D48B"/>
                    <circle cx="165" cy="128" r="5" fill="white" opacity="0.4"/>

                    {/* Halo */}
                    <path d="M115 115 C115 90, 185 90, 185 115" stroke="#E8D48B" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.8"/>

                    {/* Lens outer */}
                    <circle cx="150" cy="195" r="40" fill="none" stroke="#E8D48B" stroke-width="4"/>
                    {/* Lens body */}
                    <circle cx="150" cy="195" r="35" fill="#0D0D0D"/>
                    <circle cx="150" cy="195" r="26" fill="none" stroke="#333" stroke-width="0.8"/>
                    <circle cx="150" cy="195" r="18" fill="none" stroke="#444" stroke-width="0.8"/>
                    {/* Glass */}
                    <circle cx="150" cy="195" r="14" fill="#1a1a2e"/>
                    {/* Reflection */}
                    <ellipse cx="143" cy="187" rx="6" ry="4" fill="white" opacity="0.2"/>

                    {/* Bottom accent */}
                    <rect x="120" y="235" width="60" height="4" rx="2" fill="#E8D48B" opacity="0.6"/>

                    {/* Text below camera */}
                    <text x="150" y="290" text-anchor="middle" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="white">Holy Shots</text>
                    <text x="150" y="312" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#D4B66A">Est. 2024</text>

                    {/* Sparkles */}
                    <path d="M50 160 L55 170 L50 180 L45 170 Z" fill="#E8D48B" opacity="0.4"/>
                    <path d="M250 220 L255 230 L250 240 L245 230 Z" fill="#E8D48B" opacity="0.4"/>
                    <path d="M70 280 L74 288 L70 296 L66 288 Z" fill="#D4B66A" opacity="0.3"/>
                    <path d="M230 140 L234 148 L230 156 L226 148 Z" fill="#D4B66A" opacity="0.3"/>

                    <defs>
                      <linearGradient id="aboutBodyGrad" x1="75" y1="140" x2="225" y2="245">
                        <stop offset="0%" stop-color="#D4B66A"/>
                        <stop offset="50%" stop-color="#C5A044"/>
                        <stop offset="100%" stop-color="#A6852E"/>
                      </linearGradient>
                    </defs>
                  </svg>
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
