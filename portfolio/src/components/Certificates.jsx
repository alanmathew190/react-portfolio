import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Award } from "lucide-react";

function Certificates() {
  const certificates = [
    {
      id: 1,
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "Feb 2024",
      link: "https://www.freecodecamp.org/certification/fcc13f7c373-87f7-4da2-a3ab-377893146af6/responsive-web-design",
    },
    {
      id: 2,
      title: "Introduction to Career Skills in Software Development.",
      issuer: "linkedIn",
      date: "Nov 2024",
      link: "https://www.linkedin.com/learning/certificates/c408c03e8fc2df4ee4c79c47f54f91479c66696ef56d19b80f5fb4d6461d2813",
    },
    {
      id: 3,
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "Dec 2024",
      link: "https://www.freecodecamp.org/certification/fcc13f7c373-87f7-4da2-a3ab-377893146af6/javascript-algorithms-and-data-structures-v8",
    },
  ];

  return (
    <div className="h-fit py-20 px-6 bg-gray-950 text-white" id="certificates">
      <h2 className="text-4xl font-bold text-center mb-12">📜 Certificates</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <a
            key={cert.id}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.05}
              transitionSpeed={1500}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-900 p-6 rounded-2xl sm:hover:border-purple-500 shadow-lg hover:shadow-xl border border-gray-800 hover:border-purple-500 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <Award className="w-10 h-10 text-purple-400" />
                  <h3 className="text-xl font-semibold">{cert.title}</h3>
                </div>
                <p className="mt-3 text-gray-400">{cert.issuer}</p>
                <p className="text-sm text-gray-500">{cert.date}</p>
              </motion.div>
            </Tilt>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Certificates;
