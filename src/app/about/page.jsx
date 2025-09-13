"use client";
import React, { useEffect } from "react";
import { FaGithub, FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-in-out" });
  }, []);

  return (
    <section
      data-aos="fade-up"
      className="flex items-center justify-center min-h-screen pt-20 px-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
    >
      <div className="w-full max-w-3xl p-8 sm:p-10 md:p-12 bg-white/80 rounded-2xl shadow-2xl backdrop-blur-md border border-white/40">
        {/* Title */}
        <h1
          data-aos="fade-right"
          className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-700 text-center mb-6"
        >
          Hello, I’m <span className="text-purple-600">Ilyos Suyunov</span> 👋
        </h1>

        {/* Subtitle */}
        <h2
          data-aos="fade-left"
          className="text-2xl sm:text-3xl font-semibold text-gray-800 text-center mb-2"
        >
          <span className="text-indigo-600">Frontend</span> Developer
        </h2>

        <h2
          data-aos="fade-right"
          className="text-2xl sm:text-3xl font-semibold text-gray-800 text-center mb-6"
        >
          <span className="text-purple-600">Web</span> Designer
        </h2>

        {/* Description */}
        <p
          data-aos="fade-up"
          className="text-base sm:text-lg leading-relaxed text-gray-700 text-center mb-6"
        >
          I’m a passionate developer with a strong focus on creating{" "}
          <span className="font-semibold text-indigo-600">
            modern and responsive websites
          </span>
          . My goal is to blend functionality with beautiful design while
          constantly improving my skills.
        </p>

        {/* Social Links */}
        <div
          data-aos="zoom-in"
          className="flex justify-center flex-wrap gap-6 mt-4"
        >
          <a
            href="https://github.com/suyunovdev"
            target="_blank"
            className="text-3xl p-3 rounded-full bg-white/70 shadow-lg text-gray-800 hover:bg-indigo-500 hover:text-white transition-all transform hover:scale-110 ring-2 ring-white/40"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.youtube.com/@Frontend.dars_1"
            target="_blank"
            className="text-3xl p-3 rounded-full bg-white/70 shadow-lg text-red-600 hover:bg-red-500 hover:text-white transition-all transform hover:scale-110 ring-2 ring-white/40"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.instagram.com/suyunovdev_01/"
            target="_blank"
            className="text-3xl p-3 rounded-full bg-white/70 shadow-lg text-pink-500 hover:bg-pink-600 hover:text-white transition-all transform hover:scale-110 ring-2 ring-white/40"
          >
            <FaInstagram />
          </a>
          <a
            href="https://t.me/suyunovdev_01"
            target="_blank"
            className="text-3xl p-3 rounded-full bg-white/70 shadow-lg text-sky-500 hover:bg-sky-600 hover:text-white transition-all transform hover:scale-110 ring-2 ring-white/40"
          >
            <FaTelegram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
