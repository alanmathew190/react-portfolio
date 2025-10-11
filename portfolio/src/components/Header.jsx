import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useDarkMode } from "./ThemeContext";
import { HiMenu, HiX } from "react-icons/hi";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true); // 👈 new state
  const { darkMode, toggleDarkMode } = useDarkMode();

  // Detect scroll direction
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Add shadow / background when scrolled
      setScrolled(currentScrollY > 10);

      // Show header when scrolling up, hide when down
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowHeader(false); // scroll down → hide
      } else {
        setShowHeader(true); // scroll up → show
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkBaseClasses =
    "cursor-pointer font-medium transition-colors duration-300 relative block py-2 px-4";

  const linkActiveClass =
    "text-cyan-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-cyan-600 after:transition-all after:duration-300";

  const navLinks = [
    { to: "about", label: "About", duration: 100 },
    { to: "skills", label: "Skills", duration: 200 },
    { to: "education-experience", label: "Education", duration: 300 },
    { to: "projects", label: "Projects", duration: 400 },
    { to: "certificates", label: "Certificates", duration: 500 },
    { to: "contact", label: "Contact", duration: 600 },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] backdrop-blur-md shadow-sm transition-all duration-500 transform
      ${
        darkMode
          ? "bg-[#0f172a]/80 text-white"
          : "bg-[#FFFDF2]/70 text-gray-900"
      }
      ${showHeader ? "translate-y-0" : "-translate-y-full"}
    `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <h1 className="text-2xl tracking-wide font-extrabold">
          A<span className="text-cyan-600">J</span>M
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={item.duration}
              offset={-50}
              spy={true}
              activeClass={linkActiveClass}
              className={`${linkBaseClasses} ${
                darkMode
                  ? "text-gray-300 hover:text-cyan-400"
                  : "text-gray-700 hover:text-cyan-600"
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className={`ml-2 p-2 rounded-full shadow-md text-sm font-medium transition-all ${
              darkMode
                ? "bg-white text-gray-900 hover:bg-gray-200"
                : "bg-gray-900 text-white hover:bg-gray-800"
            }`}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full shadow-md text-sm font-medium transition-all ${
              darkMode
                ? "bg-white text-gray-900 hover:bg-gray-200"
                : "bg-gray-900 text-white hover:bg-gray-800"
            }`}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            {menuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 
          ${darkMode ? "bg-[#0f172a]/80" : "bg-white/40"} 
          backdrop-blur-3xl shadow-xl transform transition-transform duration-300 z-50 
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        ></div>

        <div className="relative flex flex-col h-full">
          <div className="flex justify-between items-center px-6 py-4">
            <h2 className="text-xl font-bold">Menu</h2>
          </div>

          <nav
            className={`flex flex-col mt-3 space-y-2 px-6 py-4 rounded-b-xl transition-all duration-300
              ${
                darkMode
                  ? "backdrop-blur-2xl bg-[#0f172a]/90 border border-gray-700"
                  : "backdrop-blur-2xl bg-gray-400/80 border border-gray-300"
              }`}
          >
            {navLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={item.duration}
                offset={-50}
                spy={true}
                onClick={() => setMenuOpen(false)}
                className={`${linkBaseClasses} relative py-2 px-3 rounded-md transition-all duration-300 
                ${
                  darkMode
                    ? "text-gray-300 hover:text-cyan-400 hover:translate-x-1 hover:scale-105 hover:shadow-lg"
                    : "text-gray-900 hover:text-cyan-600 hover:translate-x-1 hover:scale-105 hover:shadow-lg"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Scroll Line */}
      <div
        className={`absolute bottom-0 left-0 w-full h-[2px] bg-cyan-500 transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      ></div>
    </header>
  );
}

export default Header;
