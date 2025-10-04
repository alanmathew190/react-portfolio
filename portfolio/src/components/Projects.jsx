import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

function Projects() {
  const projects = [
    {
      img: "images/todo.png",
      title: "To-do List React App",
      desc: "Strengthened skills in component-based design, state management, and dynamic UI interactions. 🔹 Features: Add, delete, reorder tasks seamlessly.",
      live: "https://alanmathew190.github.io/React_to-do-list-app/",
      git: "https://github.com/alanmathew190/React_to-do-list-app.git",
      tags: ["React", "JS", "UI"],
    },
    {
      img: "images/weatherapp.png",
      title: "React Weather App",
      desc: "Real-time weather updates for any city with a responsive UI and dynamic backgrounds. 🔧 Tech: React, OpenWeatherMap API, Vercel.",
      live: "https://react-weather-app-nine-nu.vercel.app/",
      git: "https://github.com/alanmathew190/React-Weather-App.git",
      tags: ["React", "API", "Weather"],
    },
    {
      img: "images/form.png",
      title: "React Form Validation App",
      desc: "Sign-up and login app with real-time input validation and responsive design.",
      live: "https://alanmathew190.github.io/form-validation/",
      git: "https://github.com/alanmathew190/form-validation.git",
      tags: ["React", "Form", "Validation"],
    },
    {
      img: "images/notes.png",
      title: "React Notes App",
      desc: "A simple notes application to create, update, and delete notes with persistent storage.",
      live: "https://react-arcite.vercel.app/",
      git: "https://github.com/alanmathew190/reactArcite/tree/737ff9fc4129763f1e86320fb20ad03d98993ad2/assignments/note-app",
      tags: ["React", "Notes", "Storage"],
    },
    {
      img: "images/netflix.png",
      title: "Netflix Clone (React)",
      desc: "A Netflix clone built with React, fetching data from TMDB API with Top Rated, Popular, and LocalStorage-based persistence.",
      live: "https://netflix-clone-app-bp9p.vercel.app/",
      git: "https://github.com/alanmathew190/Netflix-Clone-App.git",
      tags: ["React", "API", "TMDB"],
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

      <div className="w-full max-w-3xl flex flex-col gap-12 z-10">
        {projects.map((project, index) => (
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.1}
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
                delay: index * 0.2,
              }}
              className="relative rounded-2xl group"
            >
              {/* Continuous Shimmer/Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-70 animate-gradient-shimmer blur-md transition duration-500"></div>

              {/* Card Content */}
              <div className="relative bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-transparent">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-t-2xl transition-transform duration-300 hover:scale-105"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mt-3 leading-relaxed">
                    {project.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-800 text-xs text-white rounded-full border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-5">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-lg bg-gradient-to-r from-orange-400 to-yellow-500 text-white font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.git}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition"
                    >
                      GitHub Repo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>

      {/* Gradient Shimmer Animation */}
      <style>{`
        @keyframes gradient-shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-shimmer {
          background-size: 200% 200%;
          animation: gradient-shimmer 3s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default Projects;
