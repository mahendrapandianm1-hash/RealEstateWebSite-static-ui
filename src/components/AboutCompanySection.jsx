const AboutCompanySection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-sm uppercase tracking-wider text-indigo-600 font-semibold">
            Who We Are
          </h2>

          <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
            A trusted real estate & construction partner
          </h3>

          <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
            We are a full-service real estate and construction company delivering
            high-quality residential and commercial projects. Our focus is on
            modern design, structural integrity, and timely delivery that meets
            client expectations.
          </p>

          <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
            With an experienced team and transparent processes, we transform
            ideas into sustainable spaces that add long-term value.
          </p>

          <a
            href="/about"
            className="inline-flex items-center mt-6 text-indigo-600 font-medium hover:text-indigo-700 transition"
          >
            Learn more about us
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

        {/* Right Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80"
            alt="Real estate and construction"
            className="rounded-xl shadow-lg object-cover w-full h-[280px] sm:h-[340px]"
          />

          {/* Overlay Card */}
          <div className="absolute -bottom-6 left-6 bg-white px-5 py-4 rounded-xl shadow-md">
            <p className="text-sm text-gray-600">
              <span className="font-bold text-indigo-600">15+</span> Years of
              Industry Experience
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutCompanySection;
