"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

const galleryImages = [
  {
    src: "/images/sample-nature.svg",
    alt: "Nature landscape shot with Canon G7X",
    label: "Nature",
  },
  {
    src: "/images/sample-city.svg",
    alt: "City nightscape shot with Canon G7X",
    label: "Cityscape",
  },
  {
    src: "/images/sample-portrait.svg",
    alt: "Portrait photography with Canon G7X",
    label: "Portrait",
  },
  {
    src: "/images/sample-food.svg",
    alt: "Food photography with Canon G7X",
    label: "Food",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-12 sm:mb-16">
          <span className="text-sm text-[#C5A044] font-medium uppercase tracking-wider">
            Sample Work
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Shot with Holy Shots Gear
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            See what our renters have captured using our equipment.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {galleryImages.map((image, index) => (
            <AnimateOnScroll key={image.label} delay={0.1 * index}>
              <motion.div
                className="relative aspect-[3/2] rounded-xl overflow-hidden border border-gray-100 hover:border-[#C5A044]/30 group cursor-pointer"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-medium">
                    {image.label}
                  </span>
                </div>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
