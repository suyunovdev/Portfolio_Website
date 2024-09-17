"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaDownload, FaRegUserCircle } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import shaxsiy from "../../../public/shaxsiy.jpg";

const Header = () => {
  // Function to handle resume download and toast notification
  const handleResumeDownload = () => {
    // Show toast notification
    toast.info("Redirecting to resume...", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    // Redirect to external link
    window.open(
      "https://www.canva.com/design/DAGJDY9zWUk/gzDb4IFfwjyywoXWxPNL0w/view",
      "_blank"
    ); // Opens in a new tab
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg">
      <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer">
            <Image
              src={shaxsiy}
              alt="Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <h1 className="text-3xl font-semibold text-white transition-transform transform hover:scale-105">
              Personal
            </h1>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 text-white">
          <Link
            href="/about"
            className="hover:underline hover:text-yellow-200 transition-colors duration-300 text-lg font-medium"
          >
            About Me
          </Link>
          <Link
            href="/skills"
            className="hover:underline hover:text-yellow-200 transition-colors duration-300 text-lg font-medium"
          >
            Skills
          </Link>
          <Link
            href="/project"
            className="hover:underline hover:text-yellow-200 transition-colors duration-300 text-lg font-medium"
          >
            Project
          </Link>
          <Link
            href="/contact"
            className="hover:underline hover:text-yellow-200 transition-colors duration-300 text-lg font-medium"
          >
            Contact Me
          </Link>
        </div>

        {/* Resume Button */}
        <button
          onClick={handleResumeDownload}
          className="flex items-center gap-2 text-lg bg-white text-indigo-600 px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300 hover:shadow-lg"
        >
          <span className="font-semibold">Resume</span>
          <FaDownload className="text-xl" />
        </button>
      </div>

      {/* ToastContainer for notifications */}
      <ToastContainer />
    </div>
  );
};

export default Header;
