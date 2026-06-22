import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #C5A044 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 border border-[#C5A044]/30 rounded-full">
          <span className="text-sm text-[#C5A044] font-medium">
            Premium Camera Rentals
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-tight">
          Capture Your
          <br />
          <span className="text-[#C5A044]">Holy Shot</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Rent premium cameras for your creative projects. Professional
          equipment, affordable rates, hassle-free experience.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/booking"
            className="px-8 py-3.5 bg-[#C5A044] text-white font-medium rounded-full hover:bg-[#A6852E] transition-colors text-base"
          >
            Reserve Equipment
          </Link>
          <a
            href="#equipment"
            className="px-8 py-3.5 border border-gray-300 text-gray-700 font-medium rounded-full hover:border-[#C5A044] hover:text-[#C5A044] transition-colors text-base"
          >
            View Equipment
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div>
            <p className="text-2xl font-bold text-gray-900">₱600</p>
            <p className="text-sm text-gray-500 mt-1">Per Day</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">₱800</p>
            <p className="text-sm text-gray-500 mt-1">Weekdays</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">24/7</p>
            <p className="text-sm text-gray-500 mt-1">Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
