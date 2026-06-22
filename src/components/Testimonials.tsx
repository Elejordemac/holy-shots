const testimonials = [
  {
    name: "Maria Santos",
    role: "Content Creator",
    text: "Holy Shots made it so easy to rent a camera for my vlog. The Canon G7X produced amazing quality and the process was super smooth!",
    rating: 5,
  },
  {
    name: "James Cruz",
    role: "Student Filmmaker",
    text: "As a student, buying a camera wasn't an option. Holy Shots gave me access to pro gear at a price I could afford. Highly recommend!",
    rating: 5,
  },
  {
    name: "Angela Reyes",
    role: "Travel Vlogger",
    text: "Rented the G7X for a weekend trip and the footage was incredible. Clean equipment, fair pricing, and great communication. Will rent again!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm text-[#C5A044] font-medium uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            What Our Renters Say
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Don&apos;t just take our word for it — hear from creators who&apos;ve
            used our equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#C5A044]/30 transition-colors"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-[#C5A044]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed text-sm">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#C5A044]/10 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-[#C5A044]">
                    {testimonial.name[0]}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
