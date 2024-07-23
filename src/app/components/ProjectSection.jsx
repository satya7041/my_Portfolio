"use client"
import React, {useState,useRef} from "react";
import ProjectCard from './ProjectCard';
import ProjectTag from "./ProjectTag"; 
import { animate, motion, useInView } from "framer-motion";

const projectData = [
    {
        id: 1,
        title: "E-Library",
        description: "Developed a student-centric web application using Visual Studio Code,integrating HTML, CSS, MySQL,and PHP technologies.",
        Image: "/images/Projects/p-1.jpg",
        tag: ["All", "Web", "Mobile"],
        gitUrl: "https://github.com/satya7041/E-library-Project",
        previewUrl: "https://github.com/satya7041/E-library-Project"
    },
    {
        id: 2,
        title: "Connect4 Game",
        description: "Created a Connect Four game using Intellij Idea, implementing Core Java and JavaFX technologies",
        Image: "/images/Projects/p-2.jpg",
        tag: ["All", "Web", "Mobile"],
        gitUrl: "https://github.com/satya7041/Connect4-Project",
        previewUrl: "/"
    },
    // {
    //     id: 3,
    //     title: "Max Payne",
    //     description: "This is Our Connect4 Game project description",
    //     Image: "/images/Projects/p-2.jpg",
    //     tag: ["All", "Web"],
    //     gitUrl: "/",
    //     previewUrl: "/"
    // },
    // {
    //     id: 4,
    //     title: "Fox Game",
    //     description: "This is Our Connect4 Game project description",
    //     Image: "/images/Projects/p-2.jpg",
    //     tag: ["All", "Mobile"],
    //     gitUrl: "/",
    //     previewUrl: "/"
    // },
]

const ProjectSection = () => {
    const [tag, setTag] = useState("All")

    const ref = useRef(null);
    const  isInView = useInView(ref,{once:true});

    const handleTagChange = (newTag) => {
        setTag(newTag);

    }
        const filteredProject = projectData.filter((project) => 
            project.tag.includes(tag)
        );

        const cardVarients = {
            initial:{y:50, opacity: 0 },
            animate:{y:0, opacity: 1 },
        };

    return (
        <section id="projects">
        <h2 className="text-center text-4xl font-bold text-white mt-4">
            My Projects</h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
             <ProjectTag 
              onClick ={handleTagChange}
              name="All"
                isSelected={tag==="All"} 
                />  

             <ProjectTag 
              onClick ={handleTagChange}
               name="Web"
                isSelected={tag==="Web"} 
                />  

             <ProjectTag 
              onClick ={handleTagChange}
              name="Mobile"
                isSelected={tag==="Mobile"} 
                />  
            </div>
        <ul  ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
            {filteredProject.map((project, index) => (
                <motion.li 
                key={index}
                variants={cardVarients} 
                initial="initial" 
                animate= {isInView ? "animate" : "initial"}
                transition={{duration:0.3, delay:index * 0.3}}>
            <ProjectCard
         key={project.id} title={project.title}
          description={project.description} 
          imageUrl={project.Image}
          tags={project.tag}
          gitUrl={project.gitUrl}
          previewUrl={project.previewUrl    }
          />
          </motion.li>
          ))}
          </ul>
        </section>
    )
}

export default ProjectSection;