"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaDownload, FaBars, FaTimes } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import shaxsiy from "../../../public/shaxsiy.jpg";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Resume download + toast
  const handleResumeDownload = () => {
    toast.info("Redirecting to resume...", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    window.open(
      "https://www.canva.com/design/DAGJDY9zWUk/X4Hgxle4jKp1TBVTYuS_Aw/edit?utm_content=DAGJDY9zWUk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      "_blank"
    );
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg">
      <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 cursor-pointer"
          onClick={closeMobileMenu}
        >
          <Image
            src={shaxsiy}
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <h1 className="text-2xl sm:text-3xl font-semibold text-white hover:scale-105 transition-transform">
            Suyunovdev
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-white text-lg font-medium">
          <Link
            href="/about"
            className="hover:underline hover:text-yellow-200 transition-colors duration-300"
          >
            About Me
          </Link>
          <Link
            href="/skills"
            className="hover:underline hover:text-yellow-200 transition-colors duration-300"
          >
            Skills
          </Link>
          <Link
            href="/project"
            className="hover:underline hover:text-yellow-200 transition-colors duration-300"
          >
            Project
          </Link>
          <Link
            href="/contact"
            className="hover:underline hover:text-yellow-200 transition-colors duration-300"
          >
            Contact Me
          </Link>
        </nav>

        {/* Resume Button - Desktop */}
        <div className="hidden md:flex">
          <button
            onClick={handleResumeDownload}
            className="flex items-center gap-2 text-lg bg-white text-indigo-600 px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
          >
            <span className="font-semibold">Resume</span>
            <FaDownload className="text-xl" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center text-white">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle Mobile Menu"
            className="text-2xl"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-indigo-700 text-white px-6 py-4 space-y-4 animate-slide-down">
          <Link
            href="/about"
            onClick={closeMobileMenu}
            className="block text-lg hover:text-yellow-200 transition-colors"
          >
            About Me
          </Link>
          <Link
            href="/skills"
            onClick={closeMobileMenu}
            className="block text-lg hover:text-yellow-200 transition-colors"
          >
            Skills
          </Link>
          <Link
            href="/project"
            onClick={closeMobileMenu}
            className="block text-lg hover:text-yellow-200 transition-colors"
          >
            Project
          </Link>
          <Link
            href="/contact"
            onClick={closeMobileMenu}
            className="block text-lg hover:text-yellow-200 transition-colors"
          >
            Contact Me
          </Link>
          <button
            onClick={() => {
              handleResumeDownload();
              closeMobileMenu();
            }}
            className="flex items-center gap-2 text-lg bg-white text-indigo-600 px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition duration-300 w-full justify-center mt-2"
          >
            <span className="font-semibold">Resume</span>
            <FaDownload className="text-xl" />
          </button>
        </div>
      )}

      {/* Toast Notifications */}
      <ToastContainer />
    </header>
  );
};

export default Header;
