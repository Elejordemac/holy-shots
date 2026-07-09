"use client";

import { motion } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";

const terms = [
  {
    title: "1. Rental Agreement",
    content:
      "By renting equipment from Holy Shots, you agree to these terms and conditions. A valid government ID is required for all rentals. The renter is fully responsible for the equipment from the time of pickup until return.",
  },
  {
    title: "2. Payment Terms",
    content:
      "Full payment is required before equipment pickup. We accept payments via GCash, BPI, and UnionBank. A security deposit may be required depending on the equipment. Deposits are refundable upon safe return of the equipment.",
  },
  {
    title: "3. Equipment Care",
    content:
      "Renters must handle all equipment with care. Do not expose cameras to extreme weather, water, sand, or dust without proper protection. Return equipment in the same condition as received. Report any issues immediately.",
  },
  {
    title: "4. Late Returns",
    content:
      "Equipment must be returned on or before the agreed date and time. Late returns will incur additional charges at the daily rental rate. Please notify us at least 24 hours in advance if you need an extension.",
  },
  {
    title: "5. Damage & Loss",
    content:
      "The renter is responsible for any damage or loss during the rental period. Minor wear and tear is acceptable. Major damage or loss will require compensation at repair or replacement cost. The security deposit will be used to cover damages if applicable.",
  },
  {
    title: "6. Cancellations",
    content:
      "Cancellations made 24 hours before the rental date are eligible for a full refund. Cancellations within 24 hours may be subject to a cancellation fee. No-shows forfeit the full rental payment.",
  },
  {
    title: "7. Prohibited Use",
    content:
      "Equipment must not be sub-rented, pawned, or used for illegal activities. Holy Shots reserves the right to refuse service or terminate rentals at any time if terms are violated.",
  },
];

export default function Terms() {
  return (
    <section id="terms" className="py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-12 sm:mb-16">
          <span className="text-sm text-[#C5A044] font-medium uppercase tracking-wider">
            Policies
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Terms & Conditions
          </h2>
          <p className="mt-4 text-gray-500 text-sm sm:text-base">
            Please read these terms carefully before renting.
          </p>
        </AnimateOnScroll>

        <div className="space-y-4 sm:space-y-6">
          {terms.map((term, index) => (
            <AnimateOnScroll key={index} delay={0.05 * index}>
              <motion.div
                className="p-5 sm:p-6 bg-white rounded-xl border border-gray-100 hover:border-[#C5A044]/20 transition-all duration-300"
                whileHover={{ x: 4, boxShadow: "0 4px 20px rgba(197, 160, 68, 0.08)" }}
              >
                <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">
                  {term.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  {term.content}
                </p>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
