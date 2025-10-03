// src/components/Contact/Contact.jsx (Light Theme with Tailwind CSS + Form)

import React, { useState } from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";
import { Element } from "react-scroll";

const Contact = () => {
  // State for form management (needed for React)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactInfo = [
    // Reduced contact list for better layout alongside the form
    {
      icon: FaEnvelope,
      label: "Email",
      value: "alanmathew190@gmail.com",
      link: "mailto:alanmathew190@gmail.com",
      color: "text-blue-600",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "9446631601",
      link: "https://wa.me/919446631601",
      color: "text-green-500",
    },
  ];

  const socialInfo = [
    {
      icon: FaLinkedinIn,
      link: "https://www.linkedIn.com/in/alan-j-mathew",
      label: "LinkedIn",
      color: "text-blue-600",
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/alan.j.mathew",
      label: "Instagram",
      color: "text-pink-500",
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Note: To make this form *actually* send an email, you will need a backend service
  // like Formspree, Netlify Forms, or a custom API endpoint.
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted! Data: ${JSON.stringify(formData)}`);
    // Here you would typically call an API endpoint to send the email
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Element name="contact" className="bg-white text-gray-800">
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Let's Connect
          </h2>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* --- COLUMN 1: CONTACT FORM --- */}
            <div className="lg:w-7/12 p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300"
                >
                  <FaPaperPlane />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* --- COLUMN 2: DIRECT LINKS & SOCIALS --- */}
            <div className="lg:w-5/12 space-y-8">
              {/* Direct Contact Links */}
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Direct Contact
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 group"
                    >
                      <item.icon
                        className={`text-2xl ${item.color} group-hover:scale-110 transition duration-200`}
                      />
                      <span className="text-gray-700 group-hover:text-gray-900 transition duration-200">
                        {item.value}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Media Links */}
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  My Socials
                </h3>
                <div className="flex space-x-6">
                  {socialInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-4xl ${item.color} hover:text-opacity-80 transition duration-200`}
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

      {/* Footer Component */}
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
