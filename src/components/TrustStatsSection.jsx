import React, { useEffect, useRef, useState } from "react";

const stats = [
  { value: 15, label: "Years of Experience", icon: "🏗️", suffix: "+" },
  { value: 120, label: "Projects Completed", icon: "🏠", suffix: "+" },
  { value: 500, label: "Happy Clients", icon: "😊", suffix: "+" },
  { value: 6, label: "Cities Served", icon: "📍", suffix: "+" },
];

const AnimatedNumber = ({ value, suffix, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 1500;
    const interval = 30;
    const step = Math.ceil(value / (duration / interval));

    const timer = setInterval(() => {
      current += step;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [start, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const TrustStatsSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // animate once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="text-3xl mb-2">{item.icon}</div>

              <h3 className="text-2xl sm:text-3xl font-bold text-indigo-600">
                <AnimatedNumber
                  value={item.value}
                  suffix={item.suffix}
                  start={visible}
                />
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
