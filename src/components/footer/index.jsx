import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaRegUserCircle,
  FaTelegram,
} from "react-icons/fa";

import { TbBrandVercel } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="flex justify-between items-center px-10 py-2 fixed bottom-0 left-0 right-0 z-50 bg-gray-200">
      <div className="flex items-center gap-5 ">
        <FaRegUserCircle className="text-3xl" />
        <h1>Suyunov_dev</h1>
      </div>
      <div className="media flex gap-5 font-semibold">
        <div className="text-3xl hover:scale-95 cursor-pointer ">
          {" "}
          <a href="https://github.com/suyunovdev">
            {" "}
            <FaGithub />
          </a>
        </div>
        <div className="text-3xl hover:scale-95 cursor-pointer ">
          {" "}
          <a href="https://vercel.com/suyunovdevs-projects">
            {" "}
            <TbBrandVercel />
          </a>
        </div>
        <div className="text-3xl hover:scale-95 cursor-pointer">
          {" "}
          <a href="https://www.instagram.com/suyunovdev_01/">
            {" "}
            <FaInstagram />
          </a>
        </div>
        <div className="text-3xl hover:scale-95 cursor-pointer">
          {" "}
          <a href="https://t.me/Uzbcoder_01">
            <FaTelegram />
          </a>
        </div>
      </div>
      <div>
        <h1>All Rights Reserved </h1>
      </div>
    </div>
  );
};

export default Footer;
