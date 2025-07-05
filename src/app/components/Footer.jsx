import Image from "next/image";
import Link from "next/link";
import React from "react";
    
const Footer = () =>{
    return(
        <footer className="footer border z-10 border-t-[#33353F]
         border-l-transparent border-r-transparent text-black  dark:text-white">
            <div className="container p-12 flex justify-between">
                
                    <Link href={"/"}
                    className="text-black font-serif text-2xl md:text-2xl dark:text-white"
         >Satyam Srivastava
      
            </Link>
              
                    <p className="text-black dark:text-white">
                        All rights reserved.
                        </p>
                    </div>
                    </footer>
    )
}

export default Footer;