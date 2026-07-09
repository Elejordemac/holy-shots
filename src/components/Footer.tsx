import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Logo className="w-10 h-10" />
              <span className="text-lg font-semibold">Holy Shots</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium camera rentals for creators. Affordable, accessible, and
              always ready for your next project.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">
              Quick Links
            </h4>
            <div className="space-y-2">
              <a
                href="#equipment"
                className="block text-sm text-gray-300 hover:text-[#C5A044] transition-colors"
              >
                Equipment
              </a>
              <a
                href="#about"
                className="block text-sm text-gray-300 hover:text-[#C5A044] transition-colors"
              >
                About Us
              </a>
              <a
                href="#faq"
                className="block text-sm text-gray-300 hover:text-[#C5A044] transition-colors"
              >
                FAQ
              </a>
              <a
                href="#terms"
                className="block text-sm text-gray-300 hover:text-[#C5A044] transition-colors"
              >
                Terms & Conditions
              </a>
              <a
                href="#contact"
                className="block text-sm text-gray-300 hover:text-[#C5A044] transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">
              Connect
            </h4>
            <a
              href="https://instagram.com/holyshots"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-[#C5A044] transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              @holyshots
            </a>
            <p className="mt-4 text-xs text-gray-500">
              DM us for inquiries and bookings
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-xs text-gray-500">
            © 2024 Holy Shots. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
