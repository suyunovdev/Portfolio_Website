import Image from "next/image";
import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaRegUserCircle,
  FaTelegram,
} from "react-icons/fa";
import { TbBrandVercel } from "react-icons/tb";
import shaxsiy from "../../../public/shaxsiy.jpg";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-2 fixed bottom-0 left-0 ring-0 w-full">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Brand Section */}
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <Image
            src={shaxsiy}
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full  transition-transform transform hover:scale-110"
          />
          <h1 className="text-2xl font-bold tracking-wide">Suyunov_dev</h1>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-6 mb-4 md:mb-0">
          <a
            href="https://github.com/suyunovdev"
            className="text-3xl hover:text-gray-400 transition-transform transform hover:scale-110"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://vercel.com/suyunovdevs-projects"
            className="text-3xl hover:text-gray-400 transition-transform transform hover:scale-110"
            aria-label="Vercel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbBrandVercel />
          </a>
          <a
            href="https://www.instagram.com/suyunovdev_01/"
            className="text-3xl hover:text-gray-400 transition-transform transform hover:scale-110"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://t.me/Uzbcoder_01"
            className="text-3xl hover:text-gray-400 transition-transform transform hover:scale-110"
            aria-label="Telegram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram />
          </a>
        </div>
      </div>
      <div className="text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Suyunov_dev. All Rights Reserved.
        </p>
      </div>

      {/* Footer Text */}
    </footer>
  );
};

export default Footer;
