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
    <section className="relative w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[80vh] overflow-hidden mt-16 bg-gray-50">
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
    </section>
  );
}
