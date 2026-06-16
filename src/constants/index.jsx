import {
    FaXTwitter,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaDiscord,
    FaInstagram,
} from "react-icons/fa6";

import projectImage11 from "../assets/project11.png";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";
import projectImage7 from "../assets/project7.png";
import Ashish_Resume from "../assets/Ashish_Resume.png";
// import resume_pdf from '../assets/Ashish-kumar_Resume.pdf'

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";
import { DiJavascript, DiRedis, DiGithub, DiGit, DiBootstrap } from "react-icons/di";
import { FaNodeJs, FaJsSquare, FaDownload, FaAngleRight, FaGit, FaCode } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

import { p } from "framer-motion/client";

export const NAVIGATION_LINKS = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    // { label: "Work Experience", href: "#work" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export const HERO = {
    name: "Ashish Kumar",
    greet: "Hello there! 👋🏻",
    description:
        "Data Analyst and Founder of Notchdope, combining analytical thinking with creative problem-solving. Experienced in SQL, Power BI, Python, and data visualization."
};

export const PROJECTS = [
    {
        id: 1,
        name: "Credit Card Analytics Dashboard",
        description: 'Interactive dashboard providing insights into credit card revenue, customer demographics, spending categories, and transaction trends.',
        image: projectImage3,
        githubLink: "https://app.powerbi.com/view?r=eyJrIjoiN2ZiYjQ1ZjItMTNmNy00ZDEyLTljMzQtNWExZTJjNTQ4YjFkIiwidCI6IjM0YmQ4YmVkLTJhYzEtNDFhZS05ZjA4LTRlMGEzZjExNzA2YyJ9",
    },
    {
        id: 2,
        name: "Personal Portfolio",
        description:
            "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
        image: projectImage11,
        githubLink: "#",
    },
    {
        id: 3,
        name: "Weather App",
        description:
            "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and Tailwind CSS.",
        image: projectImage7,
        githubLink: "https://tapman-c.vercel.app/",
    },
    {
        id: 4,
        name: "ATM Transaction Dashboard",
        description: 'Power BI Dashboard for analyzing ATM costs, transactions, revenue, uptime, and profitability across different regions.',
        image: projectImage2,
        githubLink: "https://app.powerbi.com/view?r=eyJrIjoiNWFjZDhkZDItYzg3MC00MzI4LThiNmMtNWI5NWU5MGYzOGE4IiwidCI6IjM0YmQ4YmVkLTJhYzEtNDFhZS05ZjA4LTRlMGEzZjExNzA2YyJ9",
    },

    // {
    //     id: 2,
    //     name: "E-Commerce Platform",
    //     description:
    //         "An e-commerce web application developed using Next.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
    //     image: projectImage2,
    //     githubLink: "https://github.com/user/ecommerce-platform",
    // },
    // {
    //     id: 3,
    //     name: "Task Management Tool",
    //     description:
    //         "A task management application built with React and Redux for efficient task tracking and team collaboration, including features like project boards, task assignment, and progress tracking.",
    //     image: projectImage3,
    //     githubLink: "https://github.com/user/task-management-tool",
    // },
    // {
    //     id: 4,
    //     name: "Weather App",
    //     description:
    //         "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and styled-components.",
    //     image: projectImage4,
    //     githubLink: "https://github.com/user/weather-app",
    // },
    // {
    //     id: 5,
    //     name: "Blog Platform",
    //     description:
    //         "A blogging platform developed with React.js and Use Api for creating, editing, and publishing blog posts. It features a rich text editor, tag system, and user authentication.",
    //     image: projectImage5,
    //     githubLink: "https://github.com/user/blog-platform",
    // },
    // {
    //     id: 6,
    //     name: "Chat Application",
    //     description:
    //         "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
    //     image: projectImage6,
    //     githubLink: "https://github.com/user/chat-application",
    // },
];

export const BIO = [
    <p className="font-semibold"> I'm <span className="text-green-500 font-semibold" > Ashish</span>,</p>,

    "Data Analyst | Business Problem Solver | Data Storyteller",
    "I am passionate about transforming raw data into meaningful insights that drive smarter business decisions. With hands-on experience in SQL, Power BI, Python, Excel, and data visualization, I enjoy uncovering patterns, solving complex problems, and presenting findings in a clear and impactful way.",
    "My projects focus on data analysis, dashboard development, business intelligence, and predictive insights. I continuously explore new analytical techniques and tools to improve decision-making and create measurable value.",
    "Beyond analytics, I am the founder of Notchdope, where I combine creativity with data-driven strategy. I believe that the best decisions are backed by data, curiosity, and a commitment to continuous learning.",
    <div className=" p-3 ">
        <a href={Ashish_Resume} download={Ashish_Resume} className="Btn bg-green-600 m-auto sm:m-0 rounded-full font-bold mb-6  ">
            <p className="w-full" rel="noreferrer">Resume <FaAngleRight className="svg bottom-2" /></p>
        </a>

        <span className="w-full lg:w-1/2  ">
            <a href="tel:+917488708149" className="flex justify-center sm:justify-end mt-16 "><span className="text-green-500 font-normal">Phone : <span>{'\u00A0'}</span>  </span>+91-7488708149</a>
            <a href="mailto:ashishkumar4236@gmail.com" className="flex justify-center sm:justify-end"><span className="text-green-500 font-normal">Email : <span>{'\u00A0'}</span>  </span> ashishkumar4236@gmail.com</a>
        </span>

    </div>
];

export const SKILLS = [
    // {
    //     icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    //     name: "Next.js",
    //     experience: "70%",
    // },
    {
        icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
        name: "SQL",
        experience: "89%",
    },
    {
        icon: <SiExpress className="text-4xl text-blue-700 lg:text-5xl" />,
        name: "Power BI",
        experience: "92%",
    },
    {
        icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
        name: "Tablue",
        experience: "80%",
    },
    {
        icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
        name: "Node.js",
        experience: "80%",
    },
    {
        icon: <FaJsSquare className="text-4xl text-yellow-700 lg:text-5xl" />,
        name: "JavaScript",
        experience: "85%",
    },
    {
        icon: <SiTailwindcss className="text-4xl text-blue-700 lg:text-5xl" />,
        name: "Microsoft Excel",
        experience: "88%",
    },
    {
        icon: <DiGit className="text-4xl text-red-700 lg:text-5xl" />,
        name: "Python",
        experience: "85%",
    },
    {
        icon: <DiGithub className="text-4xl text-white lg:text-5xl" />,
        name: "GitHub",
        experience: "80%",
    },
    {
        icon: <DiBootstrap className="text-4xl text-purple-700 lg:text-5xl" />,
        name: "Powerpoint",
        experience: "87%",
    },
    {
        icon: <DiBootstrap className="text-4xl text-purple-700 lg:text-5xl" />,
        name: "SPSS Modler",
        experience: "87%",
    },


];

export const EXPERIENCES = [
    {
        title: "Lead Frontend Developer",
        company: "Innovative Tech Solutions",
        duration: "July 2020 - Present",
        description:
            "As the Lead Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
    },
    {
        title: "Frontend Engineer",
        company: "Digital Creations",
        duration: "February 2016 - June 2020",
        description:
            "At Digital Creations, I focused on building highly interactive and responsive web interfaces using HTML, CSS, JavaScript, and modern libraries like React. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role involved optimizing website performance, ensuring cross-browser compatibility, and implementing SEO best practices. ",
    },
    {
        title: "Junior Web Developer",
        company: "Bright Future Technologies",
        duration: "August 2014 - January 2016",
        description:
            "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
    },
];

export const EDUCATION = [
    {
        degree: "Master of Business Administration (MBA) – Business Analytics",
        institution: "Chandigarh University",
        duration: "2025-2027",
        description:
            "Pursuing specialization in Business Analytics with a focus on data analysis, business intelligence, statistical modelling, and data-driven decision-making..",
    },
    {
        degree: "Bachelor of Commerce (B.Com)",
        institution: "Chaudhary Ranbir Singh University, jind, Haryana",
        duration: "2021-2024",
        description:
            "Built a strong foundation in business, finance, accounting, economics, and quantitative analysis.",
    },
    {
        degree: "Certified Full Stack Developer",
        institution: "Skill Stone, Chandigarh",
        duration: "2024",
        description:
            // "A comprehensive program in full stack development, covering modern technologies like React, Node.js, Express, and databases. Gained hands-on experience building dynamic, full-stack web applications.",
            "Completed an intensive certification program focused on modern full-stack web development, covering React, Node.js, Express, MongoDB, and Bootstrap. Gained hands-on experience in developing dynamic, data-driven applications.",
    },
    {
        degree: "Higher Secondary (12th)",
        institution: "SGD Modern School, Dhanbad, Jharkhand",
        duration: "2021",
        description:
            "Focused on science and mathematics, building foundational skills in problem-solving and analytical thinking.",
    },
    {
        degree: "Secondary School (10th)",
        institution: "SGD Modern School, Dhanbad, Jharkhand",
        duration: "2019",
        description:
            "Developed core skills in academics that helped shape my problem-solving abilities and attention to detail.",
    },
];


export const SOCIAL_MEDIA_LINKS = [
    {
        href: "https://www.facebook.com/share/1EzhBh6hrg/",
        icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
    },

    {
        href: "https://www.instagram.com/ashii_saharan",
        icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
    },
    {
        href: "https://x.com/",
        icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
    },
    {
        href: "https://github.com/ashishkumar-y",
        icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
    },
    {
        href: "https://www.linkedin.com/in/ashishkumar-y",
        icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
    },
    //     {
    //     href: "https://www.linkedin.com/in/ashishkumar-y",
    //     icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
    // },
];