import React from "react";
import "./SkillSlider.css"; // Your CSS file
import jsIcon from "../images/java-script.png";
import cssIcon from "../images/css-3.png";
import vsCode from "../images/logo.png";
import nodeIcon from "../images/node-js.png";
import reactIcon from "../images/physics.png";
import gitIcon from "../images/git.png";
import githubIcon from "../images/ghub.png";
import htmlIcon from "../images/html-5.png";
import pythonIcon from "../images/python.png";
import apiIcon from "../images/cloud-api.png";
import bootIcon from "../images/bootstrap.png"
import { motion } from "framer-motion";
import vercelIcon from "../images/Vercel.png" 
import tailIcon from "../images/Tailwind CSS.png"
  
  const icons = [
    { src: jsIcon, alt: "JavaScript" },
    { src: cssIcon, alt: "CSS" },
    { src: vsCode, alt: "VS Code" },
    { src: nodeIcon, alt: "NodeJS" },
    { src: reactIcon, alt: "React" },
    { src: gitIcon, alt: "Git" },
    { src: githubIcon, alt: "GitHub" },
    { src: htmlIcon, alt: "HTML" },
    { src: pythonIcon, alt: "Python" },
    { src: apiIcon, alt: "API" },
    { src: bootIcon, alt: "BootStrap" },
    { src: vercelIcon, alt: "Vercel" },
    { src: tailIcon, alt: "Tailwind CSS" },
  ];
  const skills = [
    "Frontend Developer",
    "Full Stack Developer",
    "React",
    "Git",
    "JavaScript",
    "TailwindCSS",
    "Python",
    "Web Developer",
    "Responsive Design",
  ];


function Skills() {
  return (
    <div className="h-fit py-20 bg-[#FFFDF2]" id="skills">
      <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-16 relative z-20">
        <span className="relative pb-2 inline-block">
          Technical Toolkit
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-green-500 rounded"></span>
        </span>
      </h1>
      {/* Row 1 */}
      <div
        className="slider"
        style={{
          "--width": "120px",
          "--height": "120px",
          "--quantity": icons.length,
        }}
      >
        <div className="list">
          {icons.map((icon, idx) => (
            <div
              key={idx}
              className="item bg-gray-100 "
              style={{ "--position": idx + 1 }}
            >
              <img src={icon.src} alt={icon.alt} />
              <p className="skill-name">{icon.alt}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div
        className="slider"
        reverse="true"
        style={{
          "--width": "120px",
          "--height": "120px",
          "--quantity": icons.length,
          marginTop: "2rem",
        }}
      >
        <div className="list">
          {icons.map((icon, idx) => (
            <div
              key={idx}
              className="item bg-gray-100"
              style={{ "--position": idx + 1 }}
            >
              <img src={icon.src} alt={icon.alt} />
              <p className="skill-name">{icon.alt}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <h1 className="text-3xl font-bold text-gray-900 underline underline-offset-8">
          My Services
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-fit m-auto mt-12 text-lg font-bold">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.1, rotate: -3 }}
              className="relative group"
            >
              {/* Glowing background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-60 blur-md transition group-hover:opacity-100"></div>

              {/* Card */}
              <div className="relative px-7 py-4 rounded-2xl bg-white text-gray-800 shadow-lg border border-gray-200 hover:border-purple-400 transition">
                {skill}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gradient shimmer animation */}
        <style>{`
        @keyframes gradient-shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .group:hover .absolute {
          background-size: 200% 200%;
          animation: gradient-shimmer 3s linear infinite;
        }
      `}</style>
      </div>
    </div>
  );
}

export default Skills;
