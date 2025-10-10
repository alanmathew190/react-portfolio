import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt"; // Import the Tilt component
import meImg from "../images/me1.png";

function HeroBanner() {
  // The main background color (Very light cream)
  const sectionBgColor = "bg-[#FFFDF2]";

  // Define tilt options for a subtle, professional effect
  const tiltOptions = {
    max: 10, // Maximum tilt rotation (degrees)
    scale: 1.05, // Scale the component up slightly on hover
    speed: 1000, // Speed of the enter/exit transition
    perspective: 1000, // Depth of the 3D effect (lower is more extreme)
    glareEnable: true, // Add a subtle light glare effect
    glareMaxOpacity: 0.2,
    glareColor: "#ffffff",
    glarePosition: "all",
  };

  return (
    <div
      className={`p-7 relative hero z-10 min-h-screen flex flex-col justify-center overflow-hidden ${sectionBgColor}`}
      id="about"
    >
      {/* UPDATED: Reduced opacity on background circles 
        (e.g., from /15 to /10) for a softer blend on the light background
      */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-72 h-72 bg-cyan-500/10 rounded-full top-10 left-10 md:top-20 md:left-20 animate-pulse mix-blend-multiply"></div>
        <div className="absolute w-80 h-80 bg-blue-500/10 rounded-full bottom-20 right-10 md:bottom-32 md:right-32 animate-pulse mix-blend-multiply"></div>
      </div>

      {/* Main Content Wrapper (Unchanged) */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left Side: Text Content (Unchanged) */}
        <div className="md:w-3/5 lg:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-l from-cyan-600 via-sky-600 to-blue-900 bg-clip-text text-transparent animate-gradient">
              Alan J Mathew
            </span>
          </motion.h1>

          <motion.div
            className="text-2xl md:text-3xl lg:text-4xl mt-4 md:mt-7 text-gray-700 h-8 md:h-10 lg:h-12 font-medium"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer",
                  "React Developer",
                  "Tech Explorer"
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </motion.div>

          <motion.p
            className="max-w-3xl text-base md:text-lg mt-6 md:mt-10 leading-relaxed text-gray-800"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            BTech graduate and a passionate Python Full-Stack Developer with
            hands-on experience building scalable web applications and intuitive
            user interfaces. Skilled in architecting secure backends with
            Flask/Django and crafting dynamic frontends with React. Driven by
            the challenge of turning complex requirements into clean,
            maintainable solutions and eager to contribute to innovative,
            forward-thinking teams.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row mt-8 md:mt-10 items-center justify-center md:justify-start"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            <motion.a
              href="/AlanResume4-10-25.pdf"
              download
              className="bg-gradient-to-r from-cyan-600 to-blue-700 px-7 py-3 font-semibold text-white rounded-full shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 text-lg mb-4 sm:mb-0 sm:mr-5"
              whileHover={{ scale: 1.05 }}
            >
              Download Resume
            </motion.a>

            <div className="flex w-40 justify-between text-gray-700">
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
                  className="hover:text-cyan-600 transition"
                  whileHover={{ scale: 1.2 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
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
        </div>

        {/* Right Side: Hero Image - Tilt wraps the entire circle */}
        <motion.div
          className="md:w-2/5 lg:w-1/2 flex justify-center md:justify-end relative mt-10 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Tilt options={tiltOptions}>
            {/* UPDATED: Border color changed to match the background color (#FFFDF2).
                This makes the colored gradient look like a foreground element 
                sitting *in* the light page, which is a common and clean design pattern.
            */}
            <div
              className={`relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center overflow-hidden border-4 border-[#FFFDF2] shadow-2xl`}
            >
              <img
                className="absolute w-full h-full object-cover object-top"
                src={meImg}
                alt="Alan J Mathew"
              />
            </div>
          </Tilt>
        </motion.div>
      </div>

      {/* Scroll Indicator (Unchanged) */}
      <motion.div
        className="absolute bottom-20 md:bottom-20 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-500 animate-bounce"
        >
          <path d="M12 5v14m0 0l-6-6m6 6l6-6"></path>
        </svg>
      </motion.div>
    </div>
  );
}

export default HeroBanner;