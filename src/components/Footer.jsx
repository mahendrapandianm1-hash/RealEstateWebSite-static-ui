/* -------------------- Footer -------------------- */

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Company Info */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">
            RealEstate Co.
          </h4>
          <p className="text-sm leading-relaxed">
            Trusted real estate & construction partner delivering quality
            residential and commercial projects.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Projects</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Residential Construction</li>
            <li>Commercial Projects</li>
            <li>Property Development</li>
            <li>Consultation</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <p className="text-sm">Chennai, Tamil Nadu</p>
          <p className="text-sm mt-2">📞 +91 96000 00000</p>
          <p className="text-sm mt-1">✉️ info@realestateco.com</p>
        </div>

      </div>

      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} RealEstate Co. All rights reserved.
      </div>
    </footer>
  );
};


export default Footer;