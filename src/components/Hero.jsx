import React, { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80",
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen  overflow-hidden">

      {/* IMAGE SLIDER BACKGROUND */}
      <div
        className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img
              src={img}
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
           Find Your Best Real Estate
          </h1>

          <p className="mt-4 text-base md:text-lg text-gray-200">
            From property management to construction planning, trusted by
            professionals to deliver faster and smarter results.
          </p>

          <button className="mt-6 bg-indigo-600 px-7 py-3 rounded-full text-sm font-medium hover:bg-[#35b4f6cc]/80 transition">
            Contact Us
          </button>
        </div>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>

    </section>
  );
};

export default HeroSection;
