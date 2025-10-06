import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import weather from "../images/weatherapp.png";
import todo from "../images/toda.png";
import form1 from "../images/form.png";
import netflix from "../images/netflix.png";
import notesapp from "../images/notesapp.png";
import port from '../images/port.png'

function Projects() {
  const projects = [
    {
      img: todo,
      title: "To-do List React App",
      desc: "Strengthened skills in component-based design, state management, and dynamic UI interactions. 🔹 Features: Add, delete, reorder tasks seamlessly.",
      live: "https://alanmathew190.github.io/React_to-do-list-app/",
      git: "https://github.com/alanmathew190/React_to-do-list-app.git",
      tags: ["React", "JS", "UI"],
    },
    {
      img: weather,
      title: "React Weather App",
      desc: "Real-time weather updates for any city with a responsive UI and dynamic backgrounds. 🔧 Tech: React, OpenWeatherMap API, Vercel.",
      live: "https://react-weather-app-nine-nu.vercel.app/",
      git: "https://github.com/alanmathew190/React-Weather-App.git",
      tags: ["React", "API", "Weather"],
    },
    {
      img: form1,
      title: "React Form Validation App",
      desc: "Sign-up and login app with real-time input validation and responsive design.",
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
      desc: "A modern, interactive portfolio built with React and Tailwind CSS, showcasing my skills, projects, and passion for clean, responsive web design. ",
      live: "https://react-portfolio-c8ri.vercel.app/",
      git: "https://github.com/alanmathew190/react-portfolio.git",
      tags: ["React", "Components", "TailwindCss"],
    },
  ];

  return (
    <div
      className="relative min-h-screen bg-[#000011] py-16 px-6 flex flex-col items-center"
      id="projects"
    >
      <h2 className="text-3xl font-bold mb-12 text-white text-center z-10 underline underline-offset-8">
        My Projects
      </h2>

      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-10 z-10">
        {projects.map((project, index) => (
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.05}
            scale={1.02}
            transitionSpeed={500}
            key={index}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: index * 0.15,
              }}
              className="bg-[#0d0d1a] rounded-2xl border border-gray-700 shadow-lg overflow-hidden hover:shadow-cyan-500/30 hover:-translate-y-2 transform transition duration-300"
            >
              {/* Project Image */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-xs text-white rounded-full shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-5">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 rounded-lg bg-gradient-to-r from-orange-400 to-yellow-500 text-white font-medium shadow-md hover:opacity-90 transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.git}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium shadow-md hover:opacity-90 transition"
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
