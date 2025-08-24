import { IconType } from "react-icons";
import {
    FaDocker,
    FaGitAlt,
    FaJava,
    FaNodeJs,
    FaPython,
    FaReact,
} from "react-icons/fa";
import {
    SiCplusplus,
    SiCss3,
    SiExpress,
    SiFigma,
    SiFlask,
    SiGooglecloud,
    SiHtml5,
    SiJavascript,
    SiMongodb,
    SiNextdotjs,
    SiPostgresql,
    SiRedis,
    SiSupabase,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";

interface Skill {
  name: string;
  icon: IconType;
  className: string;  
}

export const skills: Record<string, Skill[]> = {
  Frontend: [
    { name: "React", icon: FaReact, className: "text-cyan-500" },
    { name: "Next.js", icon: SiNextdotjs, className: "text-black dark:text-white" },
    { name: "TypeScript", icon: SiTypescript, className: "text-blue-600" },
    { name: "JavaScript", icon: SiJavascript, className: "text-yellow-500" },
    { name: "HTML5", icon: SiHtml5, className: "text-orange-500" },
    { name: "CSS3", icon: SiCss3, className: "text-blue-500" },
    { name: "TailwindCSS", icon: SiTailwindcss, className: "text-teal-400" },
  ],
  Backend: [
    { name: "Node.js", icon: FaNodeJs, className: "text-green-600" },
    { name: "Flask", icon: SiFlask, className: "text-gray-700 dark:text-gray-200" },
    { name: "Express", icon: SiExpress, className: "text-gray-700 dark:text-gray-200" },
    { name: "Python", icon: FaPython, className: "text-yellow-500" },
    { name: "Java", icon: FaJava, className: "text-red-600" },
    { name: "C++", icon: SiCplusplus, className: "text-blue-500" },
  ],
  Databases: [
    { name: "PostgreSQL", icon: SiPostgresql, className: "text-sky-700" },
    { name: "MongoDB", icon: SiMongodb, className: "text-green-600" },
    { name: "Supabase", icon: SiSupabase, className: "text-green-500" },
    { name: "Redis", icon: SiRedis, className: "text-red-500" },
  ],
  Tools: [
    { name: "Docker", icon: FaDocker, className: "text-blue-500" },
    { name: "Google Cloud", icon: SiGooglecloud, className: "text-yellow-500" },
    { name: "GitHub Actions", icon: FaGitAlt, className: "text-gray-800 dark:text-gray-200" },
    { name: "Figma", icon: SiFigma, className: "text-pink-500" },
    { name: "Git", icon: FaGitAlt, className: "text-orange-600" },
  ],
};
