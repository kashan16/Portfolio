"use client"

import { freelanceWork } from "@/utils/freelanceWork"
import { projects } from "@/utils/projects"
import { skills } from "@/utils/skills"
import { Button, Card, Label, Modal, ModalBody, ModalHeader, TextInput, Timeline, TimelineBody, TimelineContent, TimelineItem, TimelinePoint, TimelineTime, TimelineTitle } from "flowbite-react"
import { useState } from "react"
import { FaGithub, FaLinkedin, FaNodeJs, FaReact } from "react-icons/fa"
import { FiExternalLink, FiGithub } from "react-icons/fi"
import { SiFlask, SiTailwindcss, SiTypescript } from "react-icons/si"

const HomePage = () => {
    const [ openModal , setOpenModal ] = useState(false);
    return (
        <div className="bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-black dark:via-gray-900 dark:to-gray-950">
            <div className="flex flex-col justify-center items-center min-h-screen px-6">
                <div className="text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
                        Hi I&apos;m {""}
                        <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                            Kashan
                        </span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                        Fullstack Developer | C++ and WEB | Freelancer
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        <a 
                            href="#projects"
                            className="min-w-[160px] text-center px-6 py-3 rounded-xl text-white font-medium bg-gradient-to-r from-blue-600 to-teal-500 shadow-lg hover:shadow-xl hover:scale-105 transition">
                                View Projects
                        </a>
                        <button 
                            onClick={() => setOpenModal(true)}
                            className="min-w-[160px] text-center px-6 py-3 rounded-xl text-white font-medium bg-gradient-to-r from-blue-600 to-teal-500 shadow-lg hover:shadow-xl hover:scale-105 transition">
                                Hire me
                        </button>
                        <a 
                            href="/resume.pdf"
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="min-w-[160px] text-center px-6 py-3 rounded-xl text-white font-medium bg-gradient-to-r from-blue-600 to-teal-500 shadow-lg hover:shadow-xl hover:scale-105 transition">
                                Resume
                            </a>                                                        
                    </div>
                </div>
                <div className="w-full max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100 text-left">
                        About <span className="text-blue-500">Me</span>
                    </h2>
                </div>
                <div className="w-full max-w-4xl">
                    <p className="max-w-2xl text-justify text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-2">
                        Hey! I&apos;m {""}
                        <span className="font-semibold text-blue-500">Kashan</span>, a {""}
                        <span className="font-medium">Fullstack Developer</span> passionate
                        about crafting clean, efficient, and impactful applications. My core
                        stack revolves around {""}
                        <span className="font-medium">
                            React + Typescript + TailwindCSS
                        </span>  {""}
                        on the frontend, and {""}
                        <span className="font-medium">Node.js / Flask</span> on the backend.
                    </p>
                    <p className="max-w-2xl text-justify text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                        Outside coding, I love to hitting the gym, exploring new tech and discovering new coffee spots.
                    </p>
                    <div className="flex flex-wrap justify-center gap-10">
                        <FaReact className="text-6xl text-cyan-500 hover:scale-110 transition-transform"/>
                        <SiTypescript className="text-6xl text-blue-600 hover:scale-110 transition-transform"/>
                        <SiTailwindcss className="text-6xl text-teal-400 hover:scale-110 transition-transform"/>
                        <FaNodeJs className="text-6xl text-green-600 hover:scale-110 transition-transform"/>
                        <SiFlask className="text-6xl text-gray-700 dark:text-gray-300 hover:scale-110 transition-transform"/>
                    </div>                    
                </div>
                <div id="freelance" className="w-full max-w-4xl mt-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 dark:text-gray-100">
                        Freelance <span className="text-blue-500">Work</span>
                    </h2>
                    <Timeline>
                        {freelanceWork.map((work, idx) => (
                            <TimelineItem
                                key={idx}>
                                    <TimelinePoint/>
                                    <TimelineContent>
                                        <TimelineTime>{work.period}</TimelineTime>
                                        <TimelineTitle>{work.title}</TimelineTitle>
                                        <TimelineBody>
                                            {work.description}
                                            <div className="flex flex-wrap gap-2 mt-3">
                                                {work.tech.map((Tech, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 hover:scale-105 hover:shadow-xl">
                                                            {Tech}
                                                        </span>
                                                ))}
                                            </div>
                                        </TimelineBody>
                                    </TimelineContent>
                                </TimelineItem>
                        ))}
                    </Timeline>
                    <div className="text-center mt-12">
                        <Button
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 rounded-xl font-semibold"
                            href="#contact">Work With Me</Button>
                    </div>
                </div>
                <div id="projects" className="w-full max-w-6xl mt-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 dark:text-gray-100 text-left">
                        My <span className="text-blue-500">Projects</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, idx) => (
                            <Card
                                key={idx}
                                //imgAlt={project.title}
                                //imgSrc={project.image}
                                className="hover:shadow-xl transition">
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {project.tech.map((t,i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 hover:scale-105 hover:shadow-xl">
                                                    {t}
                                                </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-4 mt-4">
                                        <a 
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-500 transition">
                                                <FiGithub/> Code
                                        </a>
                                        <a 
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-500 transition">
                                                <FiExternalLink/> Demo
                                        </a>
                                    </div>
                                </Card>
                        ))}
                    </div>
                </div>
                <div id="skills" className="w-full max-w-6xl mt-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 dark:text-gray-100 text-left">
                        My <span className="text-blue-500">Skills</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {Object.entries(skills).map(([category, items]) => (
                            <div key={category}>
                                <h3 className="text-xl font-semibold mb-4">{category}</h3>
                                <div className="space-y-2">
                                    {items.map((skill, idx) => {
                                        const Icon = skill.icon;
                                        return (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700">
                                                <Icon className={skill.className}/>
                                                <span>{skill.name}</span>
                                        </div>
                                    )})}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Modal show={openModal} size="lg" onClose={() => setOpenModal(false)} popup>
                    <ModalHeader/>
                    <ModalBody>
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                Let&apos;s Build Something
                            </h3>
                            <form className="flex flex-col gap-4">
                                <div>
                                    <Label htmlFor="name"/>
                                    <TextInput id="name" placeholder="John Doe" required/>
                                </div>
                                <div>
                                    <Label htmlFor="email"/>
                                    <TextInput id="email" type="email" placeholder="John@example.com" required/>
                                </div>
                                <div>
                                    <Label htmlFor="message"/>
                                    <TextInput id="message" placeholder="Tell me about your project...." required/>
                                </div>
                                <Button className="bg-gradient-to-r from-green-400 to-blue-600" type="submit">
                                    Send Message
                                </Button>                                                                
                            </form>
                            <div className="flex justify-center gap-6 mt-4 text-gray-600 dark:text-gray-300">

                            </div>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
            <footer className="mt-20 border-t border-gray-300 dark:border-gray-700 py-6 text-center">
                <div className="flex justify-center gap-6 mb-4">
                <a href="https://github.com/kashan16" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-2xl text-gray-600 dark:text-gray-300 hover:text-blue-500 transition" />
                </a>
                <a href="https://www.linkedin.com/in/mohd-kashan-yunus-0201192a3/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-2xl text-gray-600 dark:text-gray-300 hover:text-blue-500 transition" />
                </a>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                © {new Date().getFullYear()} Kashan Yunus — Built with ❤️ using React + Tailwind
                </p>
            </footer>
        </div>
    )
}

export default HomePage