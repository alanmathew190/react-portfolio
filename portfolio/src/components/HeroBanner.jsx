import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import meImg from "../images/me1.png";




function HeroBanner() {
  return (
    <div
      className="p-7 relative hero z-50 min-h-screen flex flex-col justify-center overflow-hidden"
      id="about"
    >
      {/* Hero Section Tilt / Parallax Background */}
      <div className="absolute inset-0 -z-10">
        {/* Example subtle background shapes */}
        <div className="absolute w-60 h-60 bg-cyan-400/10 rounded-full top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-blue-400/10 rounded-full bottom-20 right-20 animate-pulse"></div>
      </div>
      {/* Heading */}
      <motion.h1
        className="text-7xl font-bold"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm{" "}
        <span className="text-7xl font-bold bg-gradient-to-l from-cyan-500 via-sky-500 to-blue-900 bg-clip-text text-transparent animate-gradient">
          Alan J Mathew
        </span>
      </motion.h1>
      {/* Subtitle with Typewriter Effect */}
      <motion.div
        className="text-4xl mt-7 text-gray-600 h-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <Typewriter
          options={{
            strings: [
              "Web Developer",
              "Python Full-Stack Developer",
              "React Enthusiast",
            ],
            autoStart: true,
            loop: true,
            delay: 75,
            deleteSpeed: 50,
          }}
        />
      </motion.div>
      {/* About Text */}
      <motion.p
        className="max-w-2xl text-xl mt-10 leading-relaxed text-gray-700"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        BTech graduate and a passionate Python Full-Stack Developer with
        hands-on experience building scalable web applications and intuitive
        user interfaces. Skilled in architecting secure backends with
        Flask/Django and crafting dynamic frontends with React. Driven by the
        challenge of turning complex requirements into clean, maintainable
        solutions and eager to contribute to innovative, forward-thinking teams.
      </motion.p>
      {/* Buttons + Social Icons */}
      <motion.div
        className="flex mt-10 items-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 1 }}
      >
        {/* Resume Button */}
        <motion.a
          href="/resume.pdf"
          download
          className="bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-bold text-white rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
          whileHover={{ scale: 1.05 }}
        >
          Download Resume
        </motion.a>

        {/* Social Links */}
        <div className="pt-3 text-gray-700 flex w-40 justify-between ml-5">
          {[
            {
              href: "https://www.linkedin.com/in/alan-j-mathew/",
              icon: (
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path>
              ),
            },
            {
              href: "https://github.com/alanmathew190",
              icon: (
                <path d="M12 1C5.924 1 1 5.924 1 12c0 4.867 3.153 8.987 7.523 10.437.55.102.75-.238.75-.53v-1.866c-3.065.666-3.706-1.48-3.706-1.48-.5-1.273-1.222-1.613-1.222-1.613-.998-.682.076-.668.076-.668 1.103.078 1.684 1.132 1.684 1.132.981 1.682 2.576 1.197 3.207.915.1-.71.384-1.197.698-1.472-2.447-.279-5.017-1.223-5.017-5.438 0-1.203.429-2.186 1.132-2.955-.113-.28-.49-1.403.108-2.925 0 0 .923-.296 3.027 1.129a10.51 10.51 0 0 1 5.506 0c2.104-1.425 3.027-1.129 3.027-1.129.598 1.522.221 2.645.108 2.925.703.769 1.132 1.752 1.132 2.955 0 4.228-2.576 5.155-5.031 5.429.395.34.75 1.013.75 2.047v3.04c0 .296.2.64.756.53C19.85 20.988 23 16.868 23 12c0-6.076-4.924-11-11-11z" />
              ),
            },
            {
              href: "mailto:alanmathew190@gmail.com",
              icon: (
                <>
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </>
              ),
            },
          ].map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-500 transition"
              whileHover={{ scale: 1.2 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="hover:drop-shadow-lg"
              >
                {social.icon}
              </svg>
            </motion.a>
          ))}
        </div>
      </motion.div>
      {/* Hero Image (Static) */}
      <img
        className="absolute h-160 right-0 top-20 z-10"
        src={meImg}
        alt="Alan"
      />
      ;{/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-600"
        >
          <path d="M12 5v14m0 0l-6-6m6 6l6-6"></path>
        </svg>
      </motion.div>
    </div>
  );
}

export default HeroBanner;
