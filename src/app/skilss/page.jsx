import React from "react";
import {
  FaBootstrap,
  FaGit,
  FaGitAlt,
  FaGitlab,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { SiAntdesign, SiJavascript, SiMui, SiTypescript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { TiHtml5 } from "react-icons/ti";

const Skilss = () => {
  return (
    <div className="flex items-center justify-around flex-wrap flex-col">
      <h1 className="text-3xl ">
        My <span className="text-4xl font-semibold">Skills</span>
      </h1>
      <div className=" flex items-center justify-around flex-wrap gap-5 p-[40px]">
        <div className="w-[150px] h-[150px]   flex items-center justify-center gap-1 border-2 border-black flex-col rounded-sm cursor-pointer">
          {" "}
          <FaGitAlt className="text-5xl" />
          <h1>Git</h1>
        </div>

        <div className="w-[150px] h-[150px]   flex items-center justify-center gap-1 border-2 border-black flex-col rounded-sm cursor-pointer">
          {" "}
          <SiJavascript className="text-5xl" />
          <h1>Javascript</h1>
        </div>

        <div className="w-[150px] h-[150px]   flex items-center justify-center gap-1 border-2 border-black flex-col rounded-sm cursor-pointer">
          {" "}
          <FaSass className="text-5xl" />
          <h1>Sass/Scss</h1>
        </div>

        <div className="w-[150px] h-[150px]   flex items-center justify-center gap-1 border-2 border-black flex-col rounded-sm cursor-pointer">
          {" "}
          <FaReact className="text-5xl" />
          <h1>React</h1>
        </div>

        <div className="w-[150px] h-[150px]   flex items-center justify-center gap-1 border-2 border-black flex-col rounded-sm cursor-pointer">
          {" "}
          <SiRedux className="text-5xl" />
          <h1>Redux</h1>
        </div>

        <div className="w-[150px] h-[150px]   flex items-center justify-center gap-1 border-2 border-black flex-col rounded-sm cursor-pointer">
          {" "}
          <RiTailwindCssFill className="text-5xl" />
          <h1>TailwindCss</h1>
        </div>

        <div className="w-[150px] h-[150px]   flex items-center justify-center gap-1 border-2 border-black flex-col rounded-sm cursor-pointer">
          {" "}
          <RiNextjsFill className="text-5xl" />
          <h1>Nextjs</h1>
        </div>

        <div className="w-[150px] h-[150px]   flex items-center justify-center gap-1 border-2 border-black flex-col rounded-sm cursor-pointer">
          {" "}
          <FaBootstrap className="text-5xl" />
          <h1>Bootstrap</h1>
        </div>

        <div className="w-[150px] h-[150px]   flex items-center justify-center gap-1 border-2 border-black flex-col rounded-sm cursor-pointer">
          {" "}
          <SiTypescript className="text-5xl" />
          <h1>Typescript</h1>
        </div>

        <div className="w-[150px] h-[150px]   flex items-center justify-center gap-1 border-2 border-black flex-col rounded-sm cursor-pointer">
          {" "}
          <TiHtml5 className="text-5xl" />
          <h1>HTML5</h1>
        </div>

        <div className="w-[150px] h-[150px]   flex items-center justify-center gap-1 border-2 border-black flex-col rounded-sm cursor-pointer">
          {" "}
          <SiMui className="text-5xl" />
          <h1>Mui</h1>
        </div>

        <div className="w-[150px] h-[150px]   flex items-center justify-center gap-1 border-2 border-black flex-col rounded-sm cursor-pointer">
          {" "}
          <SiAntdesign className="text-5xl" />
          <h1>AntDesign</h1>
        </div>

        <div className="w-[150px] h-[150px]   flex items-center justify-center gap-1 border-2 border-black flex-col rounded-sm cursor-pointer">
          {" "}
          <SiAntdesign className="text-5xl" />
          <h1>Git</h1>
        </div>

        <div className="w-[150px] h-[150px]   flex items-center justify-center gap-1 border-2 border-black flex-col rounded-sm cursor-pointer">
          {" "}
          <SiAntdesign className="text-5xl" />
          <h1>Git</h1>
        </div>

        <div className="w-[150px] h-[150px]   flex items-center justify-center gap-1 border-2 border-black flex-col rounded-sm cursor-pointer">
          {" "}
          <SiAntdesign className="text-5xl" />
          <h1>Git</h1>
        </div>
      </div>
    </div>
  );
};

export default Skilss;
