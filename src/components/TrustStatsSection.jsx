import React from "react";

const stats = [
  {
    value: "15+",
    label: "Years of Experience",
    icon: "🏗️",
  },
  {
    value: "120+",
    label: "Projects Completed",
    icon: "🏠",
  },
  {
    value: "500+",
    label: "Happy Clients",
    icon: "😊",
  },
  {
    value: "6+",
    label: "Cities Served",
    icon: "📍",
  },
];

const TrustStatsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="text-3xl mb-2">{item.icon}</div>

              <h3 className="text-2xl sm:text-3xl font-bold text-indigo-600">
                {item.value}
              </h3>

              <p className="mt-1 text-sm sm:text-base text-gray-600">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TrustStatsSection;
