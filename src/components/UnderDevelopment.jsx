import React from "react";

const UnderDevelopment = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#F5F7FF] via-[#FFFBEA] to-[#E6EFFF] px-4">
      <div className="bg-white shadow-xl rounded-2xl max-w-lg w-full text-center p-8 md:p-10">
        
        {/* Icon */}
        <div className="mx-auto mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-indigo-100">
          <svg
            className="w-10 h-10 text-indigo-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 17L7 14.25l2.75-2.75M14.25 7L17 9.75l-2.75 2.75M12 3v2m0 14v2M3 12h2m14 0h2"
            />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Page Under Development
        </h1>

        {/* Description */}
        <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
          We’re working hard to bring you this page very soon.  
          Our team is building something valuable for your real estate and construction needs.
        </p>

        {/* Divider */}
        <div className="my-6 h-px bg-gray-200" />

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition"
          >
            Go to Home
          </a>

          <a
            href="https://wa.me/919677380065?text=Hello%20I%20would%20like%20to%20know%20more%20about%20your%20projects"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-indigo-600 text-indigo-600 text-sm font-medium hover:bg-indigo-50 transition"
          >
            Contact Us
          </a>
        </div>

        {/* Footer Note */}
        <p className="mt-6 text-xs text-gray-400">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default UnderDevelopment;
