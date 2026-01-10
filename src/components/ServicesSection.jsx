import React from "react";

const services = [
  {
    title: "Residential Construction",
    description:
      "End-to-end construction of villas, apartments, and independent homes with quality materials and modern design.",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Commercial Construction",
    description:
      "Office buildings, retail spaces, and commercial complexes built for durability and efficiency.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Real Estate Development",
    description:
      "Planning, development, and execution of residential and commercial real estate projects.",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Renovation & Remodeling",
    description:
      "Upgrade and transform existing properties with smart layouts and premium finishes.",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Architectural Planning",
    description:
      "Innovative architectural designs that balance aesthetics, functionality, and compliance.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161c44158?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Project Management",
    description:
      "Professional project planning, budgeting, and execution for timely project delivery.",
    image:
      "https://images.unsplash.com/photo-1581090700227-6b9cceaf5c6c?auto=format&fit=crop&w=800&q=80",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-sm uppercase tracking-wider text-indigo-600 font-semibold">
            Our Services
          </h2>
          <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900">
            Comprehensive Real Estate & Construction Solutions
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
              className="relative group overflow-hidden rounded-xl shadow-lg bg-white hover:shadow-2xl transition-transform transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-t-xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <a
                  href="/services"
                  className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700 transition"
                >
                  Learn More
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
