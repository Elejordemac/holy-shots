"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #C5A044 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating gold particles */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#C5A044] rounded-full opacity-20"
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-3 h-3 bg-[#C5A044] rounded-full opacity-15"
        animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-[#D4B66A] rounded-full opacity-25"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-2/3 right-1/3 w-2 h-2 bg-[#D4B66A] rounded-full opacity-20"
        animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Glowing ring behind content */}
      <motion.div
        className="absolute w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] rounded-full border border-[#C5A044]/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1.5 mb-6 border border-[#C5A044]/30 rounded-full bg-white/50 backdrop-blur-sm"
        >
          <span className="text-xs sm:text-sm text-[#C5A044] font-medium">
            Premium Camera Rentals
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-tight"
        >
          Capture Your
          <br />
          <motion.span
            className="text-[#C5A044] inline-block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Holy Shot
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed px-4"
        >
          Rent premium cameras for your creative projects. Professional
          equipment, affordable rates, hassle-free experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <Link
            href="/booking"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#C5A044] text-white font-medium rounded-full hover:bg-[#A6852E] hover:shadow-xl hover:shadow-[#C5A044]/30 transition-all duration-300 text-base hover:scale-105 active:scale-95"
          >
            Reserve Equipment
          </Link>
          <a
            href="#equipment"
            className="w-full sm:w-auto px-8 py-3.5 border border-gray-300 text-gray-700 font-medium rounded-full hover:border-[#C5A044] hover:text-[#C5A044] hover:shadow-lg transition-all duration-300 text-base hover:scale-105 active:scale-95"
          >
            View Equipment
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-sm sm:max-w-md mx-auto"
        >
          {[
            { value: "₱600", label: "Per Day" },
            { value: "₱800", label: "Weekdays" },
            { value: "24/7", label: "Support" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
              className="group"
            >
              <p className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-[#C5A044] transition-colors">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          className="w-6 h-6 text-[#C5A044] opacity-60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
