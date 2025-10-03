import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolling is more than 50px to reduce flicker near the top
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define link classes for reusability and hover effects
  const linkBaseClasses =
    "cursor-pointer font-medium text-gray-700 hover:text-cyan-600 transition-colors duration-300 relative";
  const linkActiveClass =
    "text-cyan-600 after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-cyan-600 after:transition-all after:duration-300";

  return (
    // Outer container: Sticky, high z-index, soft background matching the theme
    <header className="sticky top-0 z-[100] backdrop-blur-md bg-[#FFFDF2]/70 shadow-sm">
      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between transition-all duration-500">
        {/* Logo/Name */}
        <h1 className="text-2xl tracking-wide text-gray-900 font-extrabold">
          <span className="text-cyan-600">A</span>lan
        </h1>

        {/* Navigation Links (Hidden on small screens, shown on md and up) */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 text-gray-700">
            {[
              { to: "about", label: "About", duration: 500 },
              { to: "skills", label: "Skills", duration: 600 },
              { to: "education-experience", label: "Education", duration: 700 },
              { to: "projects", label: "Projects", duration: 800 },
              { to: "certificates", label: "Certificates", duration: 900 },
              { to: "contact", label: "Contact", duration: 1000 },
            ].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={item.duration}
                  offset={-70} // Adjusted for fixed header height
                  className={linkBaseClasses}
                  activeClass={linkActiveClass}
                  spy={true} // Needed for activeClass to work
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Optional: Add a placeholder for a Mobile Menu Button here */}
        <div className="md:hidden">
          {/* Hamburger icon for mobile navigation would go here */}
          {/* <button>...</button> */}
        </div>
      </div>

      {/* Dynamic Scroll Indicator Line */}
      <div
        className={`absolute bottom-0 left-0 w-full h-[3px] bg-cyan-500 transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      ></div>
    </header>
  );
}

export default Header;
