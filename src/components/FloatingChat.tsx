"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const contactOptions = [
  {
    name: "WhatsApp",
    href: "https://wa.me/639616987756",
    color: "#25D366",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    name: "Viber",
    href: "viber://chat?number=639616987756",
    color: "#7360F2",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.4 0C9.473.028 5.333.344 3.354 2.17 1.793 3.7 1.243 5.963 1.18 8.762c-.063 2.8-.143 8.047 4.92 9.467h.004l-.004 2.16s-.034.874.543 1.052c.696.213 1.103-.447 1.765-1.163.363-.393.863-.968 1.242-1.408 3.423.29 6.054-.37 6.353-.467.69-.223 4.593-.725 5.232-5.913.658-5.343-.317-8.713-2.072-10.223C17.702.677 14.63.074 12.263.017c-.257-.008-.555-.017-.863-.017zm.109 1.8h.697c2.026.05 4.66.507 5.87 1.512 1.42 1.2 2.258 4.076 1.69 8.56-.52 4.206-3.62 4.572-4.2 4.76-.247.08-2.537.648-5.424.455 0 0-2.15 2.592-2.82 3.27-.104.107-.228.148-.31.13-.114-.027-.145-.152-.144-.336.003-.126.01-2.416.013-3.607-4.156-1.135-3.912-5.324-3.86-7.71.052-2.387.483-4.27 1.748-5.491C6.376 2.003 9.483 1.85 11.509 1.8z" />
        <path d="M12.364 4.835a.525.525 0 01-.005 1.049c-1.166.013-2.147.39-2.874 1.095-.72.698-1.095 1.672-1.12 2.818a.525.525 0 01-1.049-.023c.03-1.4.503-2.605 1.413-3.486.9-.872 2.13-1.392 3.535-1.453h.1zm.067 1.91a.525.525 0 01.032 1.048c-.58.035-1.025.228-1.344.557-.322.333-.495.798-.517 1.37a.525.525 0 01-1.048-.042c.03-.82.286-1.516.78-2.024.497-.511 1.19-.82 2.03-.905a.526.526 0 01.067-.004zm2.638 5.093c.046-.003.093.008.139.028l1.475.68c.18.083.26.193.26.346 0 .42-.206 1.225-.778 1.464-.486.203-1.29.233-2.264-.327a13.389 13.389 0 01-3.077-2.536 14.39 14.39 0 01-1.568-2.054c-.405-.652-.684-1.213-.835-1.647-.212-.611.093-1.12.37-1.365l.556-.503c.142-.13.286-.163.41-.114.125.05.243.17.35.352l.8 1.37c.085.146.1.312.002.474l-.4.58c-.055.08-.048.16.006.237.206.294.6.762 1.106 1.23.578.534 1.15.94 1.48 1.12.088.048.173.042.255-.02l.527-.47c.134-.12.274-.168.415-.176z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/Elejordemac",
    color: "#E4405F",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute bottom-16 right-0 mb-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-3 bg-gradient-to-r from-[#C5A044] to-[#A6852E]">
              <p className="text-white font-medium text-sm">Chat with us</p>
              <p className="text-white/70 text-xs">Choose a platform</p>
            </div>
            <div className="p-2">
              {contactOptions.map((option) => (
                <a
                  key={option.name}
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: option.color }}
                  >
                    {option.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                    {option.name}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#C5A044] text-white shadow-lg shadow-[#C5A044]/30 flex items-center justify-center hover:bg-[#A6852E] transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.2 }}
        aria-label={isOpen ? "Close chat options" : "Open chat options"}
      >
        {isOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}
      </motion.button>
    </div>
  );
}
