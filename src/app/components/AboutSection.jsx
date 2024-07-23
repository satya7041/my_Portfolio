"use client";

import React, {useTransition, useState} from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const Tab_Data = [
    {
        title: "skills",
        id: "skills",
        content:(
            
            <div className="flex justify-between">

            <ul className="list-disc pl-2">
                <li>Java</li>
                <li>HTML & CSS</li>
                <li>JavScript</li>
                <li>Typescript</li>
                <li>Manual Testing</li>
                <li>Git & GitHub</li>
               
            </ul>
            <ul className="list-disc pl-2 mr-10">
                <li>Postman API</li>
                <li>Nextjs</li>
                <li>Reactjs</li>
                <li>PostgreSQL</li>
                <li>Mongoose</li>
                <li>Tailwind CSS</li>  
            </ul>
            </div>
        )
    },
    {
        title: "education",
        id: "education",
        content:(
            <ul className="list-disc pl-2">
                <li>M.C.A (Masters of Computer Application) from V.B.S Purvanchal University 2021-2023</li>
                <li>B.Sc (Bachelor of Science) from V.B.S Purvanchal University 2018-2021</li>
               
            </ul>
        )
    },
    {
        title: "certifications",
        id: "certifications",
        content:(
            <ul className="list-disc pl-2">
                <li>Core Java from Internshala</li>
                <li>Angular Basics from SimpliLearn</li>
               
            </ul>
        )
    },
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange= (id) =>{
        startTransition(() => {
            setTab(id);
        })
    }
    
    return<section
    id="about"
     className="text-white ">
  <div className="md:grid md:grid-cols-2 gap-8 items-center
   py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
        className="rounded-xl"
         src='/images/about.jpg'width={500} height={500}
            alt="about_image"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base md:text-lg">
                Currently working as a Intern gaining valuable experience at Lambert Fisher Technologies, eager to secure a full-time
position in the field of technology or IT. Proficient in utilizing various technologies and collaborating with team
members to troubleshoot and resolve challenges. Actively seeking an opportunity to apply and expand my skills in
a dynamic work environment. Committed to contributing effectively to project development and driving positive
outcomes for the team and organization
</p>
<div className="flex flex-row justify-start mt-8">
    <TabButton selectTab = {() =>handleTabChange("skills")}
     active={tab === "skills"}>{" "}
     Skills
     {" "}</TabButton>

    <TabButton selectTab = {() =>handleTabChange("education")}
     active={tab === "education"}>{" "}
     Education
     {" "}</TabButton>

    <TabButton selectTab = {() =>handleTabChange("certifications")}
     active={tab === "certifications"}>{" "}
     Certifications
     {" "}</TabButton>
</div>
<div className="mt-8">{Tab_Data.find((t) =>t.id === tab) .content}

</div>
        </div>
        </div>
    </section>
    
}

export default AboutSection;
