import Image from "next/image";
import Link from "next/link";
import React from "react";
    
const Footer = () =>{
    return(
        <footer className="footer border z-10 border-t-[#33353F]
         border-l-transparent border-r-transparent text-white">
            <div className="container p-12 flex justify-between">
                
                    <Link href={"/"}
                    className="text-slate-500 font-serif text-2xl"
         >SaTyAm
      
            </Link>
              
                    <p className="text-slate-500 ">
                        All rights reserved.
                        </p>
                    </div>
                    </footer>
    )
}

export default Footer;