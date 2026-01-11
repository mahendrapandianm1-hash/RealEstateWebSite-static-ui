import React, { useRef, useEffect, useState } from "react";

const projects = [
  {
    title: "Green Valley Villas",
    location: "Chennai",
    type: "Residential",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Skyline Business Park",
    location: "Bangalore",
    type: "Commercial",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Urban Heights Apartments",
    location: "Coimbatore",
    type: "Residential",
    image:
      "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Prime Retail Plaza",
    location: "Hyderabad",
    type: "Commercial",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
  },
];

const CompletedProjectsSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 relative">
          <div className="relative inline-block">
            {/* Gradient underline */}
            <span
              className={`absolute left-0 bottom-0 h-1.5 rounded-full bg-gradient-to-r from-indigo-400 via-indigo-300 to-indigo-200 blur-sm transition-all duration-700 ${
                visible ? "w-full opacity-100" : "w-0 opacity-0"
              }`}
            />
            <h2 className="text-sm uppercase tracking-wider text-indigo-600 font-semibold">
              Completed Projects
            </h2>
          </div>

          <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900">
            Our Latest Work
          </h3>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            Explore some of our completed and ongoing projects that reflect our
            commitment to quality and excellence.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-[1200ms] ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-32"
          }`}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-700 ease-out hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Type Badge */}
                <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
                  {project.type}
                </span>
              </div>

              {/* Content */}
              {/* Content */}
<div className="p-5">
  {/* Title */}
  <h4 className="text-base font-semibold text-gray-900 leading-snug
    group-hover:text-indigo-600 transition-colors duration-300">
    {project.title}
  </h4>

  {/* Location */}
  <div className="mt-1 flex items-center text-sm text-gray-500">
    <svg
      className="w-4 h-4 mr-1.5 text-indigo-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 21s7-7.4 7-12a7 7 0 10-14 0c0 4.6 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
    {project.location}
  </div>

  {/* CTA */}
  <a
    href="/projects"
    className="group/cta inline-flex items-center gap-2 mt-4
      text-sm font-semibold text-indigo-600
      transition-all duration-300"
  >
    <span className="relative">
      View details
      {/* underline animation */}
      <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-indigo-600
        group-hover/cta:w-full transition-all duration-300"></span>
    </span>

    {/* Arrow animation */}
    <svg
      className="w-4 h-4 transform transition-transform duration-300
        group-hover/cta:translate-x-1"
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

export default CompletedProjectsSection;
