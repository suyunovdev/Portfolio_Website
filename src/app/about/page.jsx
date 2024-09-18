"use client";
import React, { useEffect } from "react";
import { FaGithub, FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" }); // Initialize AOS with custom duration and easing
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="flex items-center justify-center w-full h-screen pt-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-center"
    >
      <div className="left w-[80%] md:w-[60%] lg:w-[50%] p-6 gap-5  flex flex-col bg-white rounded-lg shadow-2xl bg-opacity-80 backdrop-blur-md">
        <h1
          data-aos="fade-right"
          className="text-5xl cursor-pointer font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-700 tracking-wide hover:tracking-wider transition-all duration-500 ease-in-out"
        >
          Hello I`m <strong className="text-purple-600">Ilyos Suyunov</strong>
        </h1>

        <h1
          data-aos="fade-left"
          className="text-4xl cursor-pointer font-semibold text-gray-800 hover:text-purple-600 transition-colors duration-500 ease-in-out"
        >
          <strong className="text-indigo-600">Frontend</strong> Developer
        </h1>

        <h1
          data-aos="fade-right"
          className="text-4xl cursor-pointer font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-500 ease-in-out"
        >
          <strong className="text-purple-600">Web</strong> Designer
        </h1>

        <p
          data-aos="fade-up"
          className="text-lg leading-relaxed text-gray-600 hover:text-gray-800 transition-colors duration-500"
        >
          I`m Suyunov Ilyos, a passionate developer with a keen eye for design.
          I have been in the web industry for years, constantly honing my skills
          to create visually stunning and functional websites.
        </p>

        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://github.com/suyunovdev"
            className="text-3xl text-blue-700 hover:text-blue-900 transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.youtube.com/@Frontend.dars_1"
            className="text-3xl text-pink-500 hover:text-pink-700 transition-colors duration-300"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.instagram.com/suyunovdev_01/"
            className="text-3xl text-pink-500 hover:text-pink-700 transition-colors duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://t.me/Uzbcoder_01"
            className="text-3xl text-blue-500 hover:text-blue-700 transition-colors duration-300"
          >
            <FaTelegram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
