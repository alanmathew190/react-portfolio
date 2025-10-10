import React from "react";
import { motion, useInView } from "framer-motion";
import Tilt from "react-parallax-tilt";
import weather from "../images/weatherapp.png";
import todo from "../images/toda.png";
import form1 from "../images/form.png";
import netflix from "../images/netflix.png";
import notesapp from "../images/notesapp.png";
import port from "../images/port.png";
import { useDarkMode } from "./ThemeContext";
import "../App.css";


function Projects() {
  const { darkMode } = useDarkMode();

  const projects = [
    {
      img: todo,
      title: "To-do List React App",
      desc: "Add, delete, reorder tasks seamlessly with dynamic UI interactions.",
      live: "https://react-arcite-green.vercel.app/",
      git: "https://github.com/alanmathew190/reactArcite/tree/867337c62d5c32c2041f8b4fd1f93a15f2f02fcc/day5/day5-1",
      tags: ["React", "JS", "UI"],
    },
    {
      img: weather,
      title: "React Weather App",
      desc: "Real-time weather updates for any city with dynamic backgrounds.",
      live: "https://react-weather-app-nine-nu.vercel.app/",
      git: "https://github.com/alanmathew190/React-Weather-App.git",
      tags: ["React", "API", "Weather"],
    },
    {
      img: form1,
      title: "React Form Validation App",
      desc: "Sign-up & login app with real-time input validation and responsive design.",
      live: "https://alanmathew190.github.io/form-validation/",
      git: "https://github.com/alanmathew190/form-validation.git",
      tags: ["React", "Form", "Validation"],
    },
    {
      img: notesapp,
      title: "React Notes App",
      desc: "A simple notes application to create, update, and delete notes with persistent storage.",
      live: "https://react-arcite.vercel.app/",
      git: "https://github.com/alanmathew190/reactArcite/tree/737ff9fc4129763f1e86320fb20ad03d98993ad2/assignments/note-app",
      tags: ["React", "Notes", "Storage"],
    },
    {
      img: netflix,
      title: "Netflix Clone (React)",
      desc: "A Netflix clone built with React, fetching data from TMDB API with Top Rated, Popular, and LocalStorage-based persistence.",
      live: "https://netflix-clone-app-bp9p.vercel.app/",
      git: "https://github.com/alanmathew190/Netflix-Clone-App.git",
      tags: ["React", "API", "TMDB"],
    },
    {
      img: port,
      title: "Personal Portfolio (React)",
      desc: "A modern, interactive portfolio built with React and Tailwind CSS, showcasing my skills, projects, and a clean, responsive web design.",
      live: "https://react-portfolio-c8ri.vercel.app/",
      git: "https://github.com/alanmathew190/react-portfolio.git",
      tags: ["React", "Components", "TailwindCSS"],
    },
  ];

  return (
    <div
      className={`relative min-h-screen py-16 px-6 flex flex-col items-center transition-colors duration-500 overflow-hidden ${
        darkMode ? "bg-[#000011]" : "bg-[#FFFDF2]"
      }`}
      id="projects"
    >
      {/* Animated gradient background for light mode */}
      {!darkMode && (
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-100 via-pink-100 to-yellow-100 animate-gradient-x opacity-50"></div>
      )}

      <h2
        className={`text-4xl font-bold text-center mb-12 relative inline-block`}
      >
        My Projects
        <span
          className={`absolute -bottom-2.5 left-1/2 transform -translate-x-1/2 w-1/3 h-1 rounded ${
            darkMode ? "bg-purple-500" : "bg-green-400"
          }`}
        ></span>
      </h2>

      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-10 z-10">
        {projects.map((project, index) => (
          <Tilt
            glareEnable={true}
            glareMaxOpacity={darkMode ? 0.05 : 0.1}
            scale={1.02}
            transitionSpeed={500}
            key={index}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, rotateY: -5 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: index * 0.15,
              }}
              className={`relative rounded-2xl overflow-hidden shadow-xl border transition-all duration-300 transform hover:scale-105 hover:shadow-cyan-300/40 ${
                darkMode
                  ? "bg-[#0d0d1a] border-gray-700"
                  : "bg-white/50 border-gray-200 backdrop-blur-md"
              }`}
            >
              {/* Gradient overlay for light mode */}
              {!darkMode && (
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-blue-100/50 mix-blend-multiply pointer-events-none"></div>
              )}

              {/* Project Image */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover relative z-10"
              />

              {/* Project Info */}
              <div className="p-6 relative z-20">
                <h3
                  className={`text-xl font-bold transition-colors duration-500 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`mt-3 text-sm leading-relaxed transition-colors duration-500 ${
                    darkMode ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.1 }}
                      className={`px-3 py-1 rounded-full text-xs font-medium shadow-sm transition-colors duration-300 ${
                        darkMode
                          ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
                          : "bg-cyan-100/70 text-cyan-800 backdrop-blur-sm"
                      }`}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-5">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 text-center px-4 py-2 rounded-lg font-medium shadow-md transition-all duration-300 hover:scale-105 ${
                      darkMode
                        ? "bg-gradient-to-r from-orange-400 to-yellow-500 text-white"
                        : "bg-cyan-500/60 hover:bg-cyan-500/80 text-white backdrop-blur-sm"
                    }`}
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.git}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 text-center px-4 py-2 rounded-lg font-medium shadow-md transition-all duration-300 hover:scale-105 ${
                      darkMode
                        ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
                        : "bg-blue-500/60 hover:bg-blue-500/80 text-white backdrop-blur-sm"
                    }`}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </div>
  );
}

export default Projects;
