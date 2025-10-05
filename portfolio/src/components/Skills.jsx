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
import mysqlIcon from "../images/mysql.png"
import Tilt from "react-parallax-tilt";
  
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
    { src: mysqlIcon, alt: "MySql" },
  ];
  const skills = [
    "Frontend Developer",
    "Full Stack Developer",
    "React",
    "Git",
    "JavaScript",
    "TailwindCSS",
    "Python",
    "Web Hosting",
    "Responsive Design",
  ];


function Skills() {
  return (
    <div className="h-fit pt-10 bg-[#FFFDF2]" id="skills">
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
      <div
        className="mt-20 text-center bg-[#FFFDF2] pb-20 flex flex-col items-center"
        id="services"
      >
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl py-10 font-bold text-gray-900 underline underline-offset-8"
        >
          My Services
        </motion.h1>

        {/* 3D Glass Skill Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 p-5 gap-7 w-fit m-auto perspective-1000">
          {skills.map((skill, i) => (
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={900}
              transitionSpeed={1000}
              glareEnable={true}
              glareMaxOpacity={0.3}
              scale={1.05}
              key={i}
            >
              <motion.div
                initial={{ opacity: 0, y: 60, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.08, rotateY: 6, rotateX: 2 }}
                className="relative group"
                whileTap={{ scale: 0.95 }}
              >
                {/* Glass 3D Brick */}
                <div className="relative px-8 py-8 glass-brick rounded-2xl bg-white/20 backdrop-blur-xl border-b-3 border-1 border-emerald-400 shadow-xl">
                  <div className="shine"></div>
                  <motion.p
                    whileHover={{ scale: 1.1 }}
                    className="font-semibold text-lg text-gray-900 tracking-wide"
                  >
                    {skill}
                  </motion.p>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>

        {/* Perspective for 3D */}
        <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
      </div>
    </div>
  );
}

export default Skills;
