import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Projects() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {};

  const projects = [
    {
      img: "images/todo.png",
      title: "To-do List React App",
      desc: "Strengthened skills in component-based design, state management, and dynamic UI interactions. 🔹 Features: Add, delete, reorder tasks seamlessly.",
      live: "https://alanmathew190.github.io/React_to-do-list-app/",
      git: "https://github.com/alanmathew190/React_to-do-list-app.git",
    },
    {
      img: "images/weatherapp.png",
      title: "React Weather App",
      desc: "Real-time weather updates for any city with a responsive UI and dynamic backgrounds. 🔧 Tech: React, OpenWeatherMap API, Vercel.",
      live: "https://react-weather-app-nine-nu.vercel.app/",
      git: "https://github.com/alanmathew190/React-Weather-App.git",
    },
    {
      img: "images/form.png",
      title: "React Form Validation App",
      desc: "Sign-up and login app with real-time input validation and responsive design.",
      live: "https://alanmathew190.github.io/form-validation/",
      git: "https://github.com/alanmathew190/form-validation.git",
    },
    {
      img: "images/notes.png",
      title: "React Notes App",
      desc: "A simple notes application to create, update, and delete notes with persistent storage.",
      live: "https://react-arcite.vercel.app/",
      git: "https://github.com/alanmathew190/reactArcite/tree/737ff9fc4129763f1e86320fb20ad03d98993ad2/assignments/note-app",
    },
    {
      img: "images/netflix.png",
      title: "Netflix Clone (React)",
      desc: "A Netflix clone built with React, fetching data from TMDB API with Top Rated, Popular, and LocalStorage-based persistence.",
      live: "https://netflix-clone-app-bp9p.vercel.app/",
      git: "https://github.com/alanmathew190/Netflix-Clone-App.git",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#000011] py-16 px-6 flex flex-col items-center" id='projects'>
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: "#00ffff" },
            shape: { type: "circle" },
            opacity: { value: 0.2 },
            size: { value: 3, random: true },
            move: { enable: true, speed: 0.5, direction: "none", random: true },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      <h2 className="text-3xl font-bold mb-12 text-white text-center z-10">
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
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-800"
            >
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
            </motion.div>
          </Tilt>
        ))}
      </div>
    </div>
  );
}

export default Projects;
