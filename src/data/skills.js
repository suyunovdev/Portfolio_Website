import {
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaReact,
  FaSass,
  FaNodeJs,
  FaDocker,
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
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiPostgresql,
  SiPrisma,
  SiJsonwebtokens,
  SiSocketdotio,
  SiPostman,
  SiSwagger,
} from "react-icons/si";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { TiHtml5 } from "react-icons/ti";

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
      { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
      { icon: FaReact, name: "React", color: "#61DAFB" },
      { icon: RiNextjsFill, name: "Next.js", color: "#000000" },
      { icon: SiRedux, name: "Redux", color: "#764ABC" },
      { icon: TiHtml5, name: "HTML5", color: "#E34F26" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { icon: FaNodeJs, name: "Node.js", color: "#339933" },
      { icon: SiExpress, name: "Express.js", color: "#000000" },
      { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
      { icon: SiMongoose, name: "Mongoose", color: "#880000" },
      { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
      { icon: SiPrisma, name: "Prisma", color: "#2D3748" },
      { icon: SiJsonwebtokens, name: "JWT", color: "#000000" },
      { icon: SiSocketdotio, name: "Socket.io", color: "#010101" },
    ],
  },
  {
    title: "Styling",
    skills: [
      { icon: SiCss3, name: "CSS3", color: "#1572B6" },
      { icon: RiTailwindCssFill, name: "Tailwind", color: "#06B6D4" },
      { icon: FaBootstrap, name: "Bootstrap", color: "#7952B3" },
      { icon: FaSass, name: "Sass/SCSS", color: "#CC6699" },
      { icon: SiMui, name: "MUI", color: "#007FFF" },
      { icon: SiAntdesign, name: "Ant Design", color: "#0170FE" },
      { icon: SiShadcnui, name: "Shadcn UI", color: "#000000" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { icon: FaGitAlt, name: "Git", color: "#F05032" },
      { icon: FaGithub, name: "GitHub", color: "#181717" },
      { icon: SiVercel, name: "Vercel", color: "#000000" },
      { icon: SiNetlify, name: "Netlify", color: "#00C7B7" },
      { icon: SiPostman, name: "Postman", color: "#FF6C37" },
      { icon: SiSwagger, name: "Swagger", color: "#85EA2D" },
      { icon: FaDocker, name: "Docker", color: "#2496ED" },
      { icon: SiFigma, name: "Figma", color: "#F24E1E" },
    ],
  },
];
