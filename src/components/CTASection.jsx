import React, { useState } from "react";

const CTASection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate async request
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: "", phone: "" });

      // Close popup after 2s
      setTimeout(() => {
        setIsOpen(false);
        setSuccess(false);
      }, 2000);
    }, 1500);
  };

  return (
    <section className="py-20 bg-indigo-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center text-white">
        <h3 className="text-3xl sm:text-4xl font-bold">
          Ready to build your dream property?
        </h3>
        <p className="mt-4 max-w-2xl mx-auto text-indigo-100 text-base sm:text-lg">
          Get expert consultation for residential, commercial, or investment
          properties. We’ll guide you from planning to possession.
        </p>

        <button
          onClick={() => setIsOpen(true)}
          className="mt-8 bg-white text-indigo-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition shadow-lg"
        >
          Request Callback
        </button>
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl p-8 w-11/12 sm:w-96 shadow-2xl relative animate-fadeIn">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold text-xl"
            >
              &times;
            </button>

            <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Request a Callback
            </h4>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-indigo-600 text-white font-semibold px-4 py-3 rounded-lg hover:bg-indigo-700 transition"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>

            {success && (
              <div className="mt-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center animate-fadeIn">
                Successfully sent!
              </div>
            )}
          </div>
        </div>
      )}

      {/* Animation Classes */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
};

export default CTASection;
