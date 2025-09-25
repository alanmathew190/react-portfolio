import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky z-100 top-0 backdrop-blur-md bg-white/70 p-5 flex justify-between transition-all duration-500">
      <div
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-gray-300 transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      <h1 className="text-2xl pl-4 tracking-wider text-cyan-400 font-bold">
        Alan
      </h1>

      <ul className="flex justify-evenly w-150 pt-2 text-gray-700">
        <li>
          <Link
            to="about"
            smooth={true}
            duration={600}
            offset={50}
            className="cursor-pointer"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={600}
            offset={50}
            className="cursor-pointer"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="education"
            smooth={true}
            duration={600}
            offset={50}
            className="cursor-pointer"
          >
            Education
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={600}
            offset={50}
            className="cursor-pointer"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="certificates"
            smooth={true}
            duration={600}
            offset={50}
            className="cursor-pointer"
          >
            Certificates
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={600}
            offset={50}
            className="cursor-pointer"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
