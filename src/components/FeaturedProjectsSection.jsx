import React from "react";

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

const FeaturedProjectsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-sm uppercase tracking-wider text-indigo-600 font-semibold">
            Featured Projects
          </h2>
          <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900">
            Our recent real estate & construction work
          </h3>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            Explore some of our completed and ongoing projects that reflect our
            commitment to quality and excellence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Type Badge */}
                <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
                  {project.type}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-900">
                  {project.title}
                </h4>
                <p className="mt-1 text-sm text-gray-600">
                  📍 {project.location}
                </p>

                <a
                  href="/projects"
                  className="inline-flex items-center mt-3 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition"
                >
                  View details
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

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <a
            href="/projects"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-indigo-700 transition"
          >
            View All Projects
          </a>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
