import React, { useState } from "react";
import logo from "../assets/sairam-logo.png";

export const HeaderSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="flex items-center justify-between px-6 py-3 md:py-4 
        shadow-sm max-w-5xl rounded-full mx-auto w-full bg-white relative z-50">

        {/* Logo */}
        <a href="/">
          <img src={logo} alt="SaiRam Properties Pvt Ltd" className="h-10 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm text-gray-900">
          {[
            "Home",
            "Projects",
            "EMI",
            "Construction",
            "Joint Venture",
            "About Us",
            "Contact",
            "Site Visit",
          ].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase().replace(" ", "")}`}
              className="hover:text-red-600 transition"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">

          {/* WhatsApp – Desktop */}
          <a
            href="https://wa.me/919566106560"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-green-600 text-white 
              px-5 py-2 rounded-full text-sm font-medium 
              hover:bg-green-700 transition"
          >
            <WhatsAppIcon />
            WhatsApp
          </a>

          {/* WhatsApp – Mobile (ICON ONLY) */}
          <a
            href="https://wa.me/919566106560"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden flex items-center justify-center 
              w-10 h-10 rounded-full bg-green-600 text-white"
          >
            <WhatsAppIcon />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(true)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* MOBILE SLIDE MENU (LEFT) */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 
        transform transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6 flex flex-col gap-6 text-gray-800">

          {/* Close Button */}
          <button
            className="self-end"
            onClick={() => setMenuOpen(false)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {[
            "Home",
            "Projects",
            "EMI",
            "Construction",
            "Joint Venture",
            "About Us",
            "Contact",
            "Site Visit",
          ].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase().replace(" ", "")}`}
              className="text-sm font-medium hover:text-red-600"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </aside>
    </>
  );
};

/* WhatsApp Icon Component */
const WhatsAppIcon = () => (
<svg className="w-4 h-4" viewBox="0 0 32 32" fill="currentColor" > <path d="M19.11 17.27c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.23 5.12 4.53.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35z" /> <path d="M16.02 2.01c-7.73 0-14.01 6.28-14.01 14.01 0 2.47.65 4.88 1.88 7.01l-2 7.3 7.48-1.96c2.06 1.13 4.39 1.72 6.65 1.72 7.73 0 14.01-6.28 14.01-14.01 0-7.73-6.28-14.01-14.01-14.01zm0 25.52c-2.11 0-4.17-.57-5.96-1.65l-.43-.26-4.44 1.16 1.18-4.32-.28-.45c-1.16-1.85-1.77-3.98-1.77-6.17 0-6.5 5.29-11.79 11.79-11.79 6.5 0 11.79 5.29 11.79 11.79 0 6.5-5.29 11.79-11.79 11.79z" /> </svg>
);
