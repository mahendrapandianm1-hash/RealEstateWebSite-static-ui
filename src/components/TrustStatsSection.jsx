import React, { useEffect, useRef, useState } from "react";

const stats = [
  { value: 15, label: "Years of Experience", suffix: "+", icon: "experience" },
  { value: 120, label: "Projects Completed", suffix: "+", icon: "projects" },
  { value: 500, label: "Happy Clients", suffix: "+", icon: "clients" },
  { value: 6, label: "Cities Served", suffix: "+", icon: "locations" },
];

// ===== ICONS =====
const Icon = ({ type }) => {
  const base = "w-6 h-6 text-indigo-600";

  if (type === "experience") return <svg className={base} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth="2" d="M12 6v6l4 2" /><circle cx="12" cy="12" r="9" strokeWidth="2" /></svg>;
  if (type === "projects") return <svg className={base} fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="4" width="18" height="14" rx="2" strokeWidth="2" /><path strokeWidth="2" d="M3 10h18" /></svg>;
  if (type === "clients") return <svg className={base} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth="2" d="M16 14a4 4 0 00-8 0" /><circle cx="12" cy="9" r="4" strokeWidth="2" /><path strokeWidth="2" d="M4 20a8 8 0 0116 0" /></svg>;
  if (type === "locations") return <svg className={base} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth="2" d="M12 21s6-5.33 6-10a6 6 0 10-12 0c0 4.67 6 10 6 10z" /><circle cx="12" cy="11" r="2" strokeWidth="2" /></svg>;

  return null;
};

// ===== NUMBER ANIMATION =====
const AnimatedNumber = ({ value, suffix, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 1600;
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
    <>
      {count}
      {suffix}
    </>
  );
};

// ===== MAIN SECTION =====
const TrustStatsSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true); // enter → animate
        } else {
          setVisible(false); // leave → reset
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -100px 0px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* TITLE */}
        <div className="text-center mb-14">
          <div className="relative inline-block">
            <span
              className={`absolute left-0 bottom-2 h-4 rounded-md bg-gradient-to-r from-indigo-400 via-indigo-300 to-indigo-200 blur-sm transition-all duration-700 ${
                visible ? "w-full opacity-100" : "w-0 opacity-0"
              }`}
            />
            <h2
              className={`relative text-3xl md:text-4xl font-bold text-gray-900 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Trusted by Growing Businesses
            </h2>
          </div>
          <p
            className={`mt-5 max-w-xl mx-auto text-gray-600 transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Strong numbers backed by real-world delivery and client trust.
          </p>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`group rounded-2xl p-6 text-center border border-gray-100 bg-white shadow-sm
                transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-xl
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 group-hover:bg-indigo-100 transition">
                <Icon type={item.icon} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                <AnimatedNumber value={item.value} suffix={item.suffix} start={visible} />
              </h3>
              <p className="mt-1 text-sm sm:text-base text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStatsSection;
