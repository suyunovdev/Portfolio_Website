import Link from "next/link";
import React from "react";
import { FaDownload, FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between px-10 py-2 fixed top-0 left-0 right-0 z-50 bg-gray-200">
      <Link href="/">
        {" "}
        <div className="flex items-center gap-5 ">
          <FaRegUserCircle className="text-3xl" />
          <h1>Personal</h1>
        </div>
      </Link>
      <div className="flex items-center gap-5 ">
        <Link
          href="/about"
          className="hover:underline hover:scale-95 cursor-pointer">
          About Me
        </Link>
        <Link
          href="/skilss"
          className="hover:underline hover:scale-95 cursor-pointer">
          Skills
        </Link>
        <Link
          href="/project"
          className="hover:underline hover:scale-95 cursor-pointer">
          Project
        </Link>
        <Link
          href="/contact"
          className="hover:underline hover:scale-95 cursor-pointer">
          Contact me
        </Link>
      </div>
      <button className="flex items-center gap-2 text-xl bg-black text-white px-4 py-2 rounded-xl hover:scale-95 cursor-pointer">
        <h2>Resume</h2> <FaDownload />
      </button>
    </div>
  );
};

export default Header;
