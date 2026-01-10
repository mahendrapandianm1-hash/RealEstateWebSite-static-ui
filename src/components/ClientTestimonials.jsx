import React, { useRef, useEffect, useState } from "react";

/* -------------------- Testimonials -------------------- */

const testimonials = [
  {
    name: "Ramesh Kumar",
    role: "Villa Owner, Chennai",
    feedback:
      "The team delivered our villa exactly as promised. Quality construction and transparent communication throughout.",
  },
  {
    name: "Priya Sharma",
    role: "Apartment Buyer",
    feedback:
      "Professional approach, on-time delivery, and excellent after-sales support. Highly recommended.",
  },
  {
    name: "Arun Prasad",
    role: "Commercial Property Investor",
    feedback:
      "Clear pricing and strong project management. One of the most reliable builders we’ve worked with.",
  },
];

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-sm uppercase tracking-wider text-indigo-600 font-semibold">
            Testimonials
          </h2>
          <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900">
            What our clients say
          </h3>
        </div>

        {/* Testimonials Grid */}
        <div
          className={`mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-[1200ms] ease-out ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-32"
          }`}
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow hover:shadow-md transition-transform duration-700 ease-out hover:-translate-y-1"
            >
              <p className="text-gray-600 text-sm leading-relaxed">
                “{item.feedback}”
              </p>

              <div className="mt-4">
                <p className="font-semibold text-gray-900">{item.name}</p>
                <p className="text-xs text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
