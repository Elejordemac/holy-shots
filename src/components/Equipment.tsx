"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";

const equipment = [
  {
    id: 1,
    name: "Canon G7X Mark III",
    category: "Compact Camera",
    dailyRate: 600,
    weekdayRate: 800,
    description:
      "Perfect for vlogging and content creation. 4K video, flip-up touchscreen, and built-in ND filter.",
    features: [
      "20.1MP 1-inch CMOS sensor",
      "4K 30fps / 1080p 120fps",
      "3.5inch flip-up touchscreen",
      "Built-in ND filter",
      "Live streaming capable",
      "Compact & lightweight",
    ],
    image: "/images/canon-g7x.jpg",
  },
];

export default function Equipment() {
  return (
    <section id="equipment" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-12 sm:mb-16">
          <span className="text-sm text-[#C5A044] font-medium uppercase tracking-wider">
            Our Gear
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Equipment Catalog
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            Professional-grade cameras available for rent. More equipment coming
            soon.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {equipment.map((item) => (
            <AnimateOnScroll key={item.id} direction="left">
              <motion.div
                className="aspect-square bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl flex items-center justify-center overflow-hidden border border-gray-200 hover:border-[#C5A044]/30 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src="/images/G7X.jpg"
                  alt="Canon G7X Mark III"
                  width={600}
                  height={600}
                  className="object-contain w-full h-full p-4"
                />
              </motion.div>
            </AnimateOnScroll>
          ))}

          {equipment.map((item) => (
            <AnimateOnScroll key={`details-${item.id}`} direction="right" delay={0.2}>
              <div className="space-y-6">
                <div>
                  <span className="text-sm text-[#C5A044] font-medium">
                    {item.category}
                  </span>
                  <h3 className="mt-2 text-xl sm:text-2xl font-bold text-gray-900">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-gray-500 leading-relaxed text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {item.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <svg
                        className="w-4 h-4 text-[#C5A044] flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex items-end gap-6 pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-sm text-gray-500">Daily Rate</p>
                    <p className="text-xl sm:text-2xl font-bold text-gray-900">
                      ₱{item.dailyRate}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Weekdays</p>
                    <p className="text-xl sm:text-2xl font-bold text-gray-900">
                      ₱{item.weekdayRate}
                    </p>
                  </div>
                </div>

                <Link
                  href="/booking"
                  className="inline-block px-8 py-3 bg-[#C5A044] text-white font-medium rounded-full hover:bg-[#A6852E] hover:shadow-lg hover:shadow-[#C5A044]/20 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Book This Camera
                </Link>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
