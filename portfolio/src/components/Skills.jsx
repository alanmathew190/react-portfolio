import React from "react";
import { motion } from "framer-motion";

function Skills() {
  const icons = [
    { src: "/src/images/java-script.png", alt: "JavaScript" },
    { src: "/src/images/css-3.png", alt: "CSS" },
    { src: "/src/images/logo.png", alt: "React" },
    { src: "/src/images/node-js.png", alt: "NodeJS" },
    { src: "/src/images/physics.png", alt: "Physics" },
    { src: "/src/images/social.png", alt: "Social" },
    { src: "/src/images/ghub.png", alt: "GitHub" },
    { src: "/src/images/html-5.png", alt: "HTML" },
    { src: "/src/images/python.png", alt: "Python" },
    { src: "/src/images/cloud-api.png", alt: "API" },
  ];

  const skillLevels = [
    { name: "React", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "Python", level: 75 },
    { name: "TailwindCSS", level: 70 },
    { name: "Git & GitHub", level: 85 },
    { name: "Full Stack Development", level: 65 },
  ];

  return (
    <div className="h-fit py-20 bg-[#FFFDF2]" id="skills">
      {/* Heading */}
      <div className="concave relative -mt-45">
        <p className="border-e-2 pr-10">#React</p>
        <p className="border-e-2 pr-10 pl-10">#Git</p>
        <p className="border-e-2 pr-10 pl-10">#JavaScript</p>
        <p className="border-e-2 pr-10 pl-10">#Tailwindcss</p>
        <p className="border-e-2 pr-10 pl-10">#Python</p>
        <p className="pl-10">#Web Developer</p>
      </div>
      <h1 className="text-4xl font-bold text-center pt-10 mb-20">
        Skills & Services
      </h1>

      {/* Floating Icons */}
      <div className="relative p-20 h-60 flex justify-center items-center -left-25">
        {icons.map((icon, i) => (
          <motion.img
            key={i}
            src={icon.src}
            alt={icon.alt}
            className="h-14 w-14 absolute"
            initial={{ y: 0 }}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3 + i * 0.3, repeat: Infinity }}
            style={{ left: `${i * 10 + 10}%`, top: `${(i % 2) * 50}%` }}
          />
        ))}
      </div>

      {/* My Services */}
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
            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            {skill}
          </motion.p>
        ))}
      </div>

      {/* Circular Progress Bars */}
      <h1 className="mt-20 text-2xl font-bold text-center">
        Skill Proficiency
      </h1>
      <div className="max-w-4xl mx-auto mt-10 grid grid-cols-2 md:grid-cols-3 gap-12">
        {skillLevels.map((skill, i) => (
          <div key={i} className="flex flex-col items-center">
            <motion.div
              className="relative w-28 h-28"
              initial={{ strokeDashoffset: 472 }}
              whileInView={{
                strokeDashoffset: 472 - (472 * skill.level) / 100,
              }}
              transition={{ duration: 1.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <svg className="w-28 h-28 transform -rotate-90">
                <circle
                  cx="56"
                  cy="56"
                  r="75"
                  className="stroke-gray-200"
                  strokeWidth="12"
                  fill="transparent"
                />
                <motion.circle
                  cx="56"
                  cy="56"
                  r="75"
                  className="stroke-blue-500"
                  strokeWidth="12"
                  strokeLinecap="round"
                  fill="transparent"
                  strokeDasharray="472"
                  strokeDashoffset="472"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center font-bold text-gray-800">
                {skill.level}%
              </div>
            </motion.div>
            <p className="mt-3 font-semibold text-gray-700">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
