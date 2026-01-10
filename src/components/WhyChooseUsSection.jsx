import React, { useRef, useEffect, useState } from "react";

const reasons = [
  {
    title: "On-Time Project Delivery",
    description:
      "We follow structured planning and execution processes to ensure projects are delivered as committed.",
    icon: "⏱️",
  },
  {
    title: "Transparent Pricing",
    description:
      "Clear cost breakdowns with no hidden charges, ensuring complete financial transparency.",
    icon: "💰",
  },
  {
    title: "Quality Construction",
    description:
      "We use premium materials and proven construction practices for long-lasting quality.",
    icon: "🏗️",
  },
  {
    title: "Experienced Professionals",
    description:
      "Our team includes skilled engineers, architects, and project managers with industry expertise.",
    icon: "👷",
  },
  {
    title: "Customer-Centric Approach",
    description:
      "Client requirements and satisfaction remain at the center of every project we deliver.",
    icon: "🤝",
  },
  {
    title: "Regulatory Compliance",
    description:
      "All projects comply with local regulations and industry standards for complete peace of mind.",
    icon: "📜",
  },
];

const WhyChooseUsSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 relative">
          <div className="relative inline-block">
            {/* Gradient underline */}
            <span
              className={`absolute left-0 bottom-0 h-1.5 rounded-full bg-gradient-to-r from-indigo-400 via-indigo-300 to-indigo-200 blur-sm transition-all duration-700 ${
                visible ? "w-full opacity-100" : "w-0 opacity-0"
              }`}
            />
            <h2 className="text-sm uppercase tracking-wider text-indigo-600 font-semibold">
              Why Choose Us
            </h2>
          </div>

          <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900">
            What makes us a trusted real estate partner
          </h3>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            We combine experience, transparency, and quality to deliver projects
            that exceed expectations.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-transform duration-700 ease-out
                ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h4 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition">
                {reason.title}
              </h4>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
