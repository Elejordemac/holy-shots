"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const banners = [
  {
    image: "/images/banner1.svg",
    alt: "Premium Camera Rentals - Holy Shots",
  },
  {
    image: "/images/banner2.svg",
    alt: "Canon G7X Mark III - Vlog Like A Pro",
  },
  {
    image: "/images/banner3.svg",
    alt: "Book Now, Shoot Tomorrow - Holy Shots",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % banners.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden">
      {/* Banner slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={banners[current].image}
            alt={banners[current].alt}
            fill
            className="object-cover"
            priority={current === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero content overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 mb-4 sm:mb-6 border border-[#C5A044]/50 rounded-full bg-black/30 backdrop-blur-sm"
          >
            <span className="text-xs sm:text-sm text-[#E8D48B] font-medium">
              Premium Camera Rentals
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight"
          >
            Capture Your
            <br />
            <span className="text-[#E8D48B]">Holy Shot</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-3 sm:mt-6 text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Rent premium cameras for your creative projects. Professional
            equipment, affordable rates, hassle-free experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <Link
              href="/booking"
              className="w-full sm:w-auto px-8 py-3 sm:py-3.5 bg-[#C5A044] text-white font-medium rounded-full hover:bg-[#A6852E] hover:shadow-xl hover:shadow-[#C5A044]/30 transition-all duration-300 text-sm sm:text-base hover:scale-105 active:scale-95"
            >
              Reserve Equipment
            </Link>
            <a
              href="#equipment"
              className="w-full sm:w-auto px-8 py-3 sm:py-3.5 border border-white/40 text-white font-medium rounded-full hover:border-[#C5A044] hover:bg-[#C5A044]/10 transition-all duration-300 text-sm sm:text-base hover:scale-105 active:scale-95 backdrop-blur-sm"
            >
              View Equipment
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-8 max-w-xs sm:max-w-md mx-auto"
          >
            {[
              { value: "₱600", label: "Per Day" },
              { value: "₱800", label: "Weekdays" },
              { value: "24/7", label: "Support" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-lg sm:text-2xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-white/60 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current
                ? "w-8 bg-[#C5A044]"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + banners.length) % banners.length)}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#C5A044]/80 transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#C5A044]/80 transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}
