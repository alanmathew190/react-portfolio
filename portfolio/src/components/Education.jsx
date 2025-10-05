import React, { useRef } from "react";
import { motion, useScroll, useSpring, useInView } from "framer-motion";

function Education() {
  const timelineRef = useRef(null);

  const experiences = [
    {
      title: "Python Full Stack Web Developer Trainee",
      org: "Arcite PMC",
      duration: "Jun 2025 - Present",
      desc: [
        "Developing scalable full-stack applications using React, Flask, and MySQL.",
        "Implementing real-time features and API integrations.",
      ],
    },
    {
      title: "Web Development Intern",
      org: "CodSoft, Kolkata",
      duration: "Sep 2024 - Oct 2024",
      desc: [
        "Built a Personal Portfolio, Landing Page, and Calculator.",
        "Enhanced skills in HTML, CSS, and JavaScript.",
        "Received Certificate of Completion from CodSoft.",
      ],
    },
  ];

  const education = [
    {
      title: "BTech in Computer Science",
      org: "APJ Abdul Kalam Technological University",
      duration: "Nov 2021 - May 2025",
      desc: ["CGPA: 7.69"],
    },
    {
      title: "Higher Secondary Education",
      org: "C.V.K.M HSS",
      duration: "Jun 2019 - Mar 2021",
      desc: ["Computer Science, Percentage: 85.7%"],
    },
    {
      title: "High School Education",
      org: "C.V.K.M",
      duration: "Jun 2016 - Mar 2019",
      desc: ["Class 8-10, Percentage: 95%"],
    },
  ];

  const timeline = [...experiences, ...education];

  // Scroll progress for the vertical timeline line
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section
      id="education-experience"
      className="bg-[#FFFDF2] pt-10 pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-12 relative pb-3 inline-block">
          Education & Experience
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-green-500 rounded"></span>
        </h2>

        <div className="relative" ref={timelineRef}>
          {/* Timeline line */}
          <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-1 bg-green-200 hidden md:block"></div>
          <motion.div
            className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-1 bg-green-500 origin-top hidden md:block"
            style={{ scaleY }}
          />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <BlurCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// 👇 Custom card component with scroll-based blur reveal effect
function BlurCard({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <div
      ref={ref}
      className={`flex ${
        index % 2 === 0
          ? "md:justify-start justify-end"
          : "justify-end md:justify-end"
      } w-full`}
    >
      <div
        className={`w-full md:w-1/2 relative ${
          index % 2 === 0 ? "md:pr-10" : "md:pl-10"
        }`}
      >
        {/* Timeline dot */}
        <div
          className={`absolute ${
            index % 2 === 0 ? "right-[-10px]" : "left-[-10px]"
          } top-5 h-5 w-5 rounded-full bg-green-500 border-4 border-[#FFFDF2] hidden md:block`}
        ></div>

        {/* Card with blur transition */}
        <motion.div
          initial={{ opacity: 0.4, filter: "blur(12px)", y: 10 }}
          animate={
            inView
              ? { opacity: 1, filter: "blur(0px)", y: 0 }
              : { opacity: 0.3, filter: "blur(10px)", y: 10 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#1A1A2E]/100 backdrop-blur-lg text-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
        >
          <h3 className="text-2xl font-semibold mb-1">{item.title}</h3>
          <p className="italic text-green-300 mb-1">{item.org}</p>
          <p className="italic text-green-300 text-sm mb-3">{item.duration}</p>
          <ul className="list-disc list-inside space-y-2">
            {item.desc.map((point, i) => (
              <li key={i} className="text-gray-200">
                {point}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export default Education;
