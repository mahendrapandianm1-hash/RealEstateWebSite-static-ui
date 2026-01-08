import logo from "../assets/sairam-logo.png"; 

const PageLoader = () => {
  return (
    <div className="fixed inset-0 bg-white/90 flex flex-col items-center justify-center z-50">
      
      {/* Logo */}
      <img
        src={logo}
        alt="SaiRam Properties Pvt Ltd"
        className="w-40 mb-6"   // increased logo size
      />

      {/* Spinner */}
      <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>

    </div>
  );
};

export default PageLoader;
