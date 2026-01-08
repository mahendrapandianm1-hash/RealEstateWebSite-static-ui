import React from "react";

const services = [
  {
    title: "Residential Construction",
    description:
      "End-to-end construction of villas, apartments, and independent homes with quality materials and modern design.",
    icon: "🏡",
  },
  {
    title: "Commercial Construction",
    description:
      "Office buildings, retail spaces, and commercial complexes built for durability and efficiency.",
    icon: "🏢",
  },
  {
    title: "Real Estate Development",
    description:
      "Planning, development, and execution of residential and commercial real estate projects.",
    icon: "🏘️",
  },
  {
    title: "Renovation & Remodeling",
    description:
      "Upgrade and transform existing properties with smart layouts and premium finishes.",
    icon: "🔧",
  },
  {
    title: "Architectural Planning",
    description:
      "Innovative architectural designs that balance aesthetics, functionality, and compliance.",
    icon: "📐",
  },
  {
    title: "Project Management",
    description:
      "Professional project planning, budgeting, and execution for timely project delivery.",
    icon: "📊",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-sm uppercase tracking-wider text-indigo-600 font-semibold">
            Our Services
          </h2>
          <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900">
            Comprehensive real estate & construction solutions
          </h3>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            We offer end-to-end services to help clients plan, build, and manage
            residential and commercial properties efficiently.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition group"
            >
              <div className="text-4xl mb-4">{service.icon}</div>

              <h4 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition">
                {service.title}
              </h4>

              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>

              <a
                href="/services"
                className="inline-flex items-center mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition"
              >
                Learn more
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
