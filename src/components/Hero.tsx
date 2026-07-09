"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

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
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDirection(1);
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
      // Swiped left → next
      setDirection(1);
      setCurrent((prev) => (prev + 1) % banners.length);
      startAutoPlay();
    } else if (info.offset.x > threshold) {
      // Swiped right → prev
      setDirection(-1);
      setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
      startAutoPlay();
    }
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden bg-gray-50 mt-16">
      {/* Banner slides - swipeable */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: "easeInOut" }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          className="absolute inset-0 cursor-grab active:cursor-grabbing"
        >
          <Image
            src={banners[current].image}
            alt={banners[current].alt}
            fill
            className="object-cover sm:object-contain"
            priority={current === 0}
            draggable={false}
          />
        </motion.div>
      </AnimatePresence>

      {/* Slide indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > current ? 1 : -1);
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
