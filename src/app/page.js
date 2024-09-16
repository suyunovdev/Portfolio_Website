"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { FaRegUserCircle } from "react-icons/fa";
import Image from "next/image";
import shaxsiy from "../../public/shaxsiy.jpg";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true, // Animations happen only once
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      {/* Hero Section */}
      <div
        className="flex flex-col items-center justify-center text-center gap-8 px-4 py-12"
        data-aos="fade-up"
      >
        <Image
          src={shaxsiy}
          alt="Logo"
          width={150}
          height={150}
          className="rounded-full"
        ></Image>{" "}
        {/* Main Text */}
        <h1 className="text-5xl font-extrabold tracking-wide leading-tight">
          Hello, I'm Ilyos!
        </h1>
        <p
          className="text-lg font-medium tracking-wide leading-relaxed text-gray-200 max-w-3xl"
          data-aos="fade-right"
        >
          Click the button below to explore my portfolio and learn more about my
          skills, experiences, and projects.
        </p>
        {/* Button */}
        <div data-aos="flip-left" data-aos-delay="500">
          <Link href="/about">
            <button className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-indigo-600 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105">
              Go to My Portfolio
            </button>
          </Link>
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-purple-700 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-400 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-600 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
    </div>
  );
};

export default Portfolio;
