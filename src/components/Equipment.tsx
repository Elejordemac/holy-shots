import Link from "next/link";

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
    <section id="equipment" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm text-[#C5A044] font-medium uppercase tracking-wider">
            Our Gear
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Equipment Catalog
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Professional-grade cameras available for rent. More equipment coming
            soon.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {equipment.map((item) => (
            <div key={item.id} className="space-y-8">
              {/* Camera image placeholder */}
              <div className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden border border-gray-200">
                <div className="text-center p-8">
                  <svg
                    className="w-32 h-32 mx-auto text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="mt-4 text-sm text-gray-400">
                    Canon G7X Mark III
                  </p>
                </div>
              </div>
            </div>
          ))}

          {equipment.map((item) => (
            <div key={`details-${item.id}`} className="space-y-6">
              <div>
                <span className="text-sm text-[#C5A044] font-medium">
                  {item.category}
                </span>
                <h3 className="mt-2 text-2xl font-bold text-gray-900">
                  {item.name}
                </h3>
                <p className="mt-3 text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {item.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
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
                  </div>
                ))}
              </div>

              <div className="flex items-end gap-6 pt-4 border-t border-gray-100">
                <div>
                  <p className="text-sm text-gray-500">Daily Rate</p>
                  <p className="text-2xl font-bold text-gray-900">
                    ₱{item.dailyRate}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Weekdays</p>
                  <p className="text-2xl font-bold text-gray-900">
                    ₱{item.weekdayRate}
                  </p>
                </div>
              </div>

              <Link
                href="/booking"
                className="inline-block px-8 py-3 bg-[#C5A044] text-white font-medium rounded-full hover:bg-[#A6852E] transition-colors"
              >
                Book This Camera
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
