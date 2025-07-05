"use client";
import React,{useState} from "react";
import NavLink from './NavLink'
import Link from "next/link";
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';
import ThemeToggle from './ThemeToggle';


const navLinks = [
    {
        title : "About",
        path : "#about"
    },
    {
        title : "Projects",
        path : "#projects"
    },
    {
        title : "Contact",
        path : "#contact"
    },
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
return (

    <nav className="fixed mx-auto border border-b-[#33353F] top-0 left-0 right-0 z-10 bg-[#fcfcfc] bg-opacity-90 dark:bg-black dark:text-white">
        <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
       
        <Link href={"/"}
         className="flex flex-row text-2xl md:text-2xl text-black font-semibold font-serif tracking-widest dark:bg-black dark:text-white"
         
         > 
        Satyam Srivastava
            </Link>
            <ThemeToggle/>
        <div
         className="mobile-menu block md:hidden">

            {!navbarOpen ? (
                <button
                 onClick={()=> setNavbarOpen(true)} 
                 className="flex items-center px-3 py-2 border rounded
                 border-slate-200 text-black hover:text-gray-500 dark:bg-black dark:text-white"
                 >
                    <Bars3Icon className="h-5 w-5"/>
                    </button>
            ):(
                <button 
                onClick={()=> setNavbarOpen(false)} 
                className="flex items-center px-3 py-2 border rounded
                border-slate-200 text-black hover:text-black dark:bg-black dark:text-white">
                   <XMarkIcon className="h-5 w-5"/></button>
            
            )}

        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
               {
               navLinks.map((link, index) => (
                    <li key={index}>
                        <NavLink href={link.path} title={link.title}/>
                    </li>
               ))
               }
            </ul>
        </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks}/> : null }
        </nav>
)
}
export default Navbar;