import React from 'react';
/* -------------------- Call To Action -------------------- */

const CTASection = () => {
  return (
    <section className="py-16 bg-indigo-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center text-white">

        <h3 className="text-2xl sm:text-3xl font-bold">
          Ready to build your dream property?
        </h3>

        <p className="mt-4 max-w-2xl mx-auto text-indigo-100 text-sm sm:text-base">
          Get expert consultation for residential, commercial, or investment
          properties. We’ll guide you from planning to possession.
        </p>

        {/* Lead Capture Form */}
        <form className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 rounded-lg text-gray-800 w-full sm:w-64 focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="px-4 py-3 rounded-lg text-gray-800 w-full sm:w-64 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Request Callback
          </button>
        </form>

      </div>
    </section>
  );
};

export default CTASection;