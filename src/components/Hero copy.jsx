import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Valid property images
  const images = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=735&q=80", // modern building
    "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=735&q=80", // apartment
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=735&q=80", // construction site
    "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=735&q=80", // house
    "https://images.unsplash.com/photo-1600585154525-25e0c0e3c8f2?auto=format&fit=crop&w=735&q=80", // skyline
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="section"
      className={`bg-gradient-to-b from-[#f7f9ff] via-[#fffbee] to-[#f7f9ff] h-full ${
        menuOpen ? "overflow-hidden" : ""
      }`}
    >
    

      {/* Main Hero Content */}
      <main className="flex-grow flex flex-col items-center px-6 sm:px-10 max-w-7xl mx-auto w-full">
        <button
          className="mt-10 mb-6 flex items-center space-x-2 border border-indigo-600 text-indigo-600 text-xs rounded-full px-4 pr-1.5 py-1.5 hover:bg-indigo-50 transition"
          type="button"
        >
          <span>Discover premium real estate solutions</span>
          <span className="flex items-center justify-center size-6 p-1 rounded-full bg-indigo-600">
            <svg
              width="14"
              height="11"
              viewBox="0 0 16 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 6.5h14M9.5 1 15 6.5 9.5 12"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>

        <h1 className="text-center text-gray-900 font-semibold text-3xl sm:text-4xl md:text-5xl max-w-2xl leading-tight">
          Building the future of{" "}
          <span className="text-indigo-600">real estate & construction</span>
        </h1>

        <p className="mt-4 text-center text-gray-600 max-w-md text-sm sm:text-base leading-relaxed">
          Explore our properties, ongoing projects, and services trusted by
          investors and homeowners alike.
        </p>

        <button
          className="mt-8 bg-indigo-600 text-white px-6 pr-2.5 py-2.5 rounded-full text-sm font-medium flex items-center space-x-2 hover:bg-indigo-700 transition"
          type="button"
        >
          <span>View Our Projects</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.821 11.999h13.43m0 0-6.714-6.715m6.715 6.715-6.715 6.715"
              stroke="#fff"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Featured Properties Slider */}
        <div className="mt-12 w-full overflow-hidden flex justify-center">
          <div className="relative w-full max-w-4xl flex items-center justify-center">
            <div
              className="flex gap-6 transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * (130 + 24)}px)`,
              }}
            >
              {images.map((src, i) => {
                const isCenter = i === currentIndex;
                return (
                  <img
                    key={i}
                    src={src}
                    alt={`Property ${i + 1}`}
                    className={`rounded-lg object-cover flex-shrink-0 transition-transform duration-500 ${
                      isCenter
                        ? "w-48 h-56 scale-110 shadow-2xl"
                        : "w-36 h-44 opacity-70"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default HeroSection;
