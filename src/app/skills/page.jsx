"use client";
import React from "react";
import {
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaReact,
  FaSass,
} from "react-icons/fa";
import {
  SiAntdesign,
  SiJavascript,
  SiMui,
  SiTypescript,
  SiRedux,
  SiVercel,
  SiCss3,
  SiShadcnui,
  SiNetlify,
  SiFigma,
  SiScratch,
} from "react-icons/si";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { TiHtml5 } from "react-icons/ti";

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-b from-gray-100 via-purple-50 to-gray-200 py-16">
      {/* Title */}
      <h1 className="text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
        My <span className="text-6xl font-semibold">Skills</span>
      </h1>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 p-10">
        {/* Skill Card */}
        {[
          { Icon: SiJavascript, name: "JavaScript" },
          { Icon: SiTypescript, name: "TypeScript" },
          { Icon: RiNextjsFill, name: "Next.js" },
          { Icon: FaReact, name: "React" },
          { Icon: SiRedux, name: "Redux" },
          { Icon: TiHtml5, name: "HTML5" },
          { Icon: RiTailwindCssFill, name: "Tailwind CSS" },
          { Icon: FaBootstrap, name: "Bootstrap" },
          { Icon: FaSass, name: "Sass/Scss" },
          { Icon: SiCss3, name: "CSS" },
          { Icon: SiMui, name: "MUI" },
          { Icon: SiAntdesign, name: "Ant Design" },
          { Icon: SiShadcnui, name: "Shadcn UI" },
          { Icon: SiVercel, name: "Vercel" },
          { Icon: FaGitAlt, name: "Git" },
          { Icon: FaGithub, name: "GitHub" },
          { Icon: SiNetlify, name: "Netlify" },
          { Icon: SiFigma, name: "Figma" },
          { Icon: SiScratch, name: "Scratch" },
        ].map((skill, index) => (
          <div
            key={index}
            className="w-40 h-40 flex items-center justify-center flex-col bg-white border-2 border-gray-300 shadow-lg rounded-xl cursor-pointer transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:border-indigo-500 hover:bg-gradient-to-r from-purple-500 to-indigo-500 group"
          >
            <skill.Icon className="text-5xl mb-3 text-indigo-500 group-hover:text-white transition-colors duration-300" />
            <h2 className="text-lg font-semibold text-gray-700 group-hover:text-white transition-colors duration-300">
              {skill.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
