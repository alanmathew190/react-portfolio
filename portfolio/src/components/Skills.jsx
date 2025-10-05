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
        className="mt-20 text-center bg-[#FFFDF2] pb-20  flex flex-col items-center"
        id="services"
      >
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl py-10 font-bold text-gray-900 underline underline-offset-8 "
        >
          My Services
        </motion.h1>

        {/* 3D Glass Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-fit m-auto perspective-1000">
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
                whileHover={{
                  scale: 1.08,
                  rotateY: 6,
                  rotateX: 2,
                }}
                className="relative group"
              >
                {/* Gradient Edge Glow */}
                {/* <div className="absolute inset-0 rounded-2xl p-[2px] hover:bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-gradient-move"></div> */}

                {/* 3D Glass Brick */}
                <div className="relative px-8 py-6 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/40 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
                  {/* Inner lighting layer */}
                  {/* <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 via-white/10 to-transparent opacity-40 pointer-events-none"></div> */}

                  {/* Top glossy reflection */}
                  {/* <div className="absolute top-0 left-0 w-full h-1/3 rounded-t-2xl bg-white/30 opacity-40 blur-sm pointer-events-none"></div> */}

                  {/* Text */}
                  <motion.p
                    whileHover={{ scale: 1.1 }}
                    className="relative font-semibold text-lg text-gray-900 tracking-wide z-10"
                  >
                    {skill}
                  </motion.p>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>

        {/* Gradient Animation */}
        <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradientMove 4s ease infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
      </div>
    </div>
  );
}

export default Skills;
