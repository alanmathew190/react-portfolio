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
      <h1 className="mt-20 text-2xl font-bold text-center">My Services</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center w-fit m-auto mt-10 text-xl text-gray-600 font-bold">
        {[
          "Frontend Developer",
          "Full Stack Developer",
          "React",
          "Git",
          "JavaScript",
          "TailwindCSS",
          "Python",
          "Web Developer",
          "Responsive Design",
        ].map((skill, i) => (
          <motion.p
            key={i}
            className="px-7 py-3 rounded-2xl border shadow-md bg-white hover:shadow-blue-400/50 hover:scale-105 transition"
            whileHover={{ rotate: -2, scale: 1.05 }}
          >
            {skill}
          </motion.p>
        ))}
      </div>
    </div>
  );
}

export default Skills;
