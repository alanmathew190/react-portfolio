// src/components/Contact/Contact.jsx

import React, { useState } from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";
import { Element } from "react-scroll";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [step, setStep] = useState(1); // controls reveal step

  // Dynamic code snippet with live input values
  const codeSnippet = [
    "// Initialize Alan's contact form API client",
    "const client = new ContactClient('alan-j-mathew.dev');",
    "",
    "// Prepare the message payload",
    "const payload = {",
    `  senderName: "${formData.name || "senderName"}",`,
    `  senderEmail: "${formData.email || "senderEmail"}",`,
    `  content: "${formData.message || "Your message here"}"`,
    "};",
    "",
    "// Attempt to send the message",
    "client.send(payload).then(response => {",
    "  console.log('Message sent successfully!', response.id);",
    "}).catch(error => {",
    "  console.error('Failed to send:', error);",
    "});",
  ];

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "alanmathew190@gmail.com",
      link: "mailto:alanmathew190@gmail.com",
      color: "text-cyan-600",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "+91 9446631601",
      link: "https://wa.me/919446631601",
      color: "text-green-500",
    },
  ];

  const socialInfo = [
    {
      icon: FaLinkedinIn,
      link: "https://www.linkedIn.com/in/alan-j-mathew",
      label: "LinkedIn",
      color: "hover:text-blue-700",
    },
    {
      icon: FaGithub,
      link: "https://github.com/alanmathew190",
      label: "GitHub",
      color: "hover:text-gray-900",
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/alan.j.mathew",
      label: "Instagram",
      color: "hover:text-pink-600",
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Progress to next step when field is filled
    if (e.target.name === "name" && e.target.value.trim() !== "") setStep(2);
    if (e.target.name === "email" && e.target.value.trim() !== "") setStep(3);
    if (e.target.name === "message" && e.target.value.trim() !== "") setStep(4);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted! Data: ${JSON.stringify(formData)}`);
    setFormData({ name: "", email: "", message: "" });
    setStep(1); // reset
  };

  return (
    <Element name="contact" className="bg-[#FFFDF2] text-gray-800">
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            <span className="relative pb-2 inline-block">
              Let&apos;s Connect
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-cyan-500 rounded"></span>
            </span>
          </h2>

          <div className="flex flex-col lg:flex-row gap-12 lg:items-start">
            {/* --- COLUMN 1: CODE BLOCK --- */}
            <div className="lg:w-7/12">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <div className="flex items-center p-3 bg-gray-800 text-gray-300 rounded-t-xl">
                  <div className="flex space-x-2 mr-3">
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  </div>
                  <span className="text-sm font-mono">
                    src/components/Contact.js
                  </span>
                </div>

                <div className="p-6 bg-gray-900 overflow-x-auto">
                  <pre className="text-sm font-mono leading-relaxed">
                    {codeSnippet.map((line, index) => (
                      <p
                        key={index}
                        className={
                          line.includes("//")
                            ? "text-gray-500"
                            : line.includes("const") || line.includes("return")
                            ? "text-yellow-400"
                            : line.includes("client.") ||
                              line.includes("log") ||
                              line.includes("error")
                            ? "text-blue-400"
                            : line.includes("{") ||
                              line.includes("}") ||
                              line.includes("(")
                            ? "text-white"
                            : "text-green-300"
                        }
                      >
                        <span className="inline-block w-5 text-right text-gray-500 mr-2 select-none">
                          {index + 1}
                        </span>
                        {line}
                      </p>
                    ))}
                  </pre>
                </div>
              </div>

              {/* --- FORM --- */}
              <div className="p-6 mt-4 bg-white border border-gray-200 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                  Input Parameters
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  {step >= 1 && (
                    <div className="transition-all duration-500 ease-in-out">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Name:
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-cyan-500 focus:border-cyan-500 transition duration-150"
                        placeholder="senderName"
                      />
                    </div>
                  )}

                  {/* Email */}
                  {step >= 2 && (
                    <div className="transition-all duration-500 ease-in-out">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email:
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-cyan-500 focus:border-cyan-500 transition duration-150"
                        placeholder="senderEmail"
                      />
                    </div>
                  )}

                  {/* Message */}
                  {step >= 3 && (
                    <div className="transition-all duration-500 ease-in-out">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Message (content):
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-cyan-500 focus:border-cyan-500 transition duration-150"
                        placeholder="Your message content here..."
                      ></textarea>
                    </div>
                  )}

                  {/* Submit */}
                  {step >= 4 && (
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center space-x-2 px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-white bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50 transition transform hover:-translate-y-0.5 duration-300"
                    >
                      <FaPaperPlane className="text-lg" />
                      <span>Execute Client.Send()</span>
                    </button>
                  )}
                </form>
              </div>
            </div>

            {/* --- COLUMN 2: CONTACT INFO --- */}
            <div className="lg:w-5/12">
              <div className="p-8 bg-white border border-gray-200 rounded-lg shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-2 border-cyan-100">
                  Reach Out Directly
                </h3>

                <div className="space-y-4 mb-10">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-3 -ml-3 rounded-lg hover:bg-gray-50 transition duration-200 group"
                    >
                      <item.icon
                        className={`text-2xl ${item.color} group-hover:scale-105 transition duration-300`}
                      />
                      <div>
                        <span className="block text-sm font-semibold text-gray-900">
                          {item.label}
                        </span>
                        <span className="block text-sm text-gray-600">
                          {item.value}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-4 text-gray-900 border-b pb-2 border-cyan-100">
                  Connect Online
                </h3>
                <div className="flex space-x-6 pt-2">
                  {socialInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-3xl text-gray-500 transition duration-200 ${item.color} hover:scale-110`}
                      aria-label={item.label}
                    >
                      <item.icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-100 border-t border-gray-200 py-4">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-500">
            &copy; 2025 Alan J Mathew. All rights reserved.
          </p>
        </div>
      </footer>
    </Element>
  );
};

export default Contact;
