const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      
      {/* Brand Text */}
      <h1 className="text-2xl sm:text-3xl font-bold text-orange-600 tracking-wide">
        SaiRam Properties Pvt Ltd
      </h1>
      <p className="mt-1 text-sm text-gray-500">Real Estate | Construction</p>

      {/* Circular Loader */}
      <div className="mt-10">
        <svg
          className="w-20 h-20 animate-spin"
          viewBox="0 0 50 50"
        >
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="#e0e7ff"
            strokeWidth="4"
          />
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="#4f46e5"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="90 60"
          />
        </svg>
      </div>
    </div>
  );
};

export default PageLoader;
