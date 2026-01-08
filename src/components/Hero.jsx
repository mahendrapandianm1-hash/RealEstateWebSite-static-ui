import React,{useState} from "react";
const images = [
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80",
];
const HeroSection = () => {

  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <>
      <main className="flex flex-col items-center max-w-7xl mx-auto w-full">
        {/* Badge */}
        <button className="mt-16 mb-6 flex items-center space-x-2 border border-indigo-600 text-indigo-600 text-xs rounded-full px-4 pr-1.5 py-1.5 hover:bg-indigo-50 transition">
          <span>Helping real estate & construction brands grow</span>
          <span className="flex items-center justify-center size-6 p-1 rounded-full bg-indigo-600">
            <svg width="14" height="11" viewBox="0 0 16 13" fill="none">
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

        {/* Title */}
        <h1 className="text-center text-gray-900 font-semibold text-3xl sm:text-4xl md:text-5xl max-w-2xl leading-tight">
          Powering modern{" "}
          <span className="text-indigo-600">
            real estate & construction
          </span>{" "}
          businesses
        </h1>

        {/* Description */}
        <p className="mt-4 text-center text-gray-600 max-w-md text-sm sm:text-base">
          From property management to construction planning, trusted by
          professionals to deliver results faster.
        </p>

        {/* CTA */}
        <button className="mt-8 bg-indigo-600 text-white px-6 pr-2.5 py-2.5 rounded-full text-sm font-medium flex items-center space-x-2 hover:bg-indigo-700 transition">
          <span>View Property Solutions</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M4.821 11.999h13.43m0 0-6.714-6.715m6.715 6.715-6.715 6.715"
              stroke="#fff"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Image Row – Real Estate & Construction */}
   {/* Image Slider */}
 {/* IMAGE SLIDER */}
        <div className="relative mt-12 w-full overflow-hidden">

          {/* Gradient Fade Edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#F5F7FF] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#F5F7FF] to-transparent z-10" />

          {/* Slider */}
          <div className="group flex w-max gap-6 animate-marquee hover:[animation-play-state:paused]">
            {[...images, ...images].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Property & construction"
                onClick={() => setSelectedImage(src)}
                className="w-36 h-44 rounded-lg object-cover flex-shrink-0 cursor-pointer hover:scale-105 transition"
              />
            ))}
          </div>
        </div>
      </main>
 {/* IMAGE POPUP */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-3xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-10 right-0 text-white text-3xl"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>

            <img
              src={selectedImage}
              alt="Selected property"
              className="w-full max-h-[80vh] rounded-xl object-contain"
            />
          </div>
        </div>
      )}      
   </>
  );
};

export default HeroSection;
