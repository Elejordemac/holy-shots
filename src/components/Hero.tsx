"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, PanInfo } from "framer-motion";

const banners = [
  {
    image: "/images/banner-hero.svg",
    alt: "Capture Your Holy Shot - Premium Camera Rentals",
  },
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
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAutoPlay]);

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x < -threshold) {
      setCurrent((prev) => (prev + 1) % banners.length);
      startAutoPlay();
    } else if (info.offset.x > threshold) {
      setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
      startAutoPlay();
    }
  };

  return (
    <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh] overflow-hidden mt-16">
      {/* All banners stacked, only current one is visible via opacity */}
      {banners.map((banner, index) => (
        <motion.div
          key={banner.image}
          className="absolute inset-0"
          initial={false}
          animate={{
            opacity: index === current ? 1 : 0,
            scale: index === current ? 1 : 1.05,
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ zIndex: index === current ? 1 : 0 }}
        >
          <Image
            src={banner.image}
            alt={banner.alt}
            fill
            className="object-cover"
            priority={index === 0}
            draggable={false}
          />
        </motion.div>
      ))}

      {/* Swipe overlay */}
      <motion.div
        className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
      />

      {/* Slide indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index);
              startAutoPlay();
            }}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current
                ? "w-8 bg-[#C5A044]"
                : "w-2 bg-gray-400/50 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
