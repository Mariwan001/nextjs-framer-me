'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import proj2 from '../assets/proj2.jpg';
import proj3 from '../assets/proj3.png';
import proj4 from '../assets/proj4.jpg';

const projects = [
    {
        title:"Ecommerce Digital Products",
        desc:"With extensive experience in the eCommerce sector, I have honed my skills in managing and optimizing digital products to drive online sales and enhance customer experience. My background includes working with various digital product types, including software applications, digital media, and virtual services.",
        devstack:"MonoDB, Express, React, NodeJS",
        link:"#",
        git: "#",
        src: proj4
    },
    {
        title:"Interactive E-Learning Platform",
        desc:"My experience with interactive e-learning platforms involves developing, managing, and optimizing digital learning environments that enhance user engagement and educational outcomes. I have worked extensively on creating immersive and interactive learning experiences through various digital tools and technologies.",
        devstack:"Next-JS",
        link:"#",
        git: "#",
        src: proj2
    },
    {
        title:"portfolio website",
        desc:"I have a solid background in designing, developing, and managing portfolio websites tailored to showcase professional skills, projects, and accomplishments. My work encompasses everything from crafting visually appealing designs to implementing functional features that enhance user engagement and highlight individual achievements.",
        devstack:"React, Tailwind",
        link:"#",
        git: "#",
        src: proj3
    },
];

const Portfolio = () => {
    return(
        <div className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52" id="portfolio">
            <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold my-12">Selected <span className="text-orange-400">Projects</span></h1>
            <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24">
                {projects.map((project, index) => (
                    <motion.div key={index} initial={{opacity:1, y: 0}} viewport={{once: true}} transition={{ duration: 0.5, delay: 0.25}} className={`mt-12 flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse gap-12" : "md:flex-row"}`}>
                        <div className="space-y-2 max-w-[550px]">
                            <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
                            <h2 className="text-4xl">{project.title}</h2>
                            <p className="text-lg text-white/70 break-words p-4">{project.desc}</p>
                            <p className="text-xl text-orange-400 font-semibold">{project.devstack}</p>
                            <div className="w-64 h-[1px] bg-gray-400 my-4">
                                <a href={project.link} className="mr-6">Link</a>
                                <a href={project.git}>Git</a>
                            </div>
                        </div>

                        <div className="flex justify-center items-center">
                            <Image src={project.src} alt={project.title} className="h-[350px] w-[500px] object-cover border rounded border-r-gray-700"/>
                        </div>
                    </motion.div>
                ))} 
            </div>
        </div>
    )
}

export default Portfolio;