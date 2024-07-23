"use client";
import React,{useState} from "react";
import gitIcon from '../../../public/gitIcon.svg'
import linkedinIcon from '../../../public/linkedinIcon.svg'
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = ()=>{

    const [emailSubmitted, setEmailSubmitted]  = useState(false);


    // const handleSubmit = async (e) =>{
    //     e.preventDefault();
    //     const data = {
    //         email: e.target.email.value,
    //         subject: e.target.subject.value,
    //         message: e.target.message.value,
    //     }
    //     console.log("Form data:", data); // Log form data to verify

    //     const JSONdata = JSON.stringify(data);
    //     const endpoint = "/api/send";

    //       // Form the request for sending data to the server.
    // const options = {
    //     // The method is POST because we are sending data.
    //     method: "POST",
    //     // Tell the server we're sending JSON.
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     // Body of the request is the JSON data we created above.
    //     body: JSONdata,
    //   };

    // //   const response = await fetch(endpoint, options);
    // //   console.log(response);
    // //   const resData = await response.json();
    // //   console.log(resData);

    // //   if (response.status === 200) {
    // //     console.log("Message Sent");
    // //   }
      
    // try {
    //     const response = await fetch(endpoint, options);
    //     if (!response.ok) {
    //         throw new Error('Failed to sendNetwork response was not ok');
    //     }
    //     const resData = await response.json();
    //     console.log(resData);

    //     if (response.status === 200) {
    //         console.log("Message Sent");
    //         setEmailSubmitted(true);
    //     }
    // } catch (error) {
    //     console.error('There was a problem with your fetch operation:', error);
    //     // Handle the error appropriately, e.g., show a message to the user
    // }
    // }
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            email: e.currentTarget.email.value,
            subject: e.currentTarget.subject.value,
            message: e.currentTarget.message.value,
        };

        try {
            const response = await fetch('/api/send/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to send email');
            }

            const data = await response.json();
            console.log(data);
            setEmailSubmitted(true);
        } catch (error) {
            console.error('Error:', error);
            // Handle error appropriately, e.g., show an error message to the user
        }
    };

    
// const EmailSection = () => {
//     const [formData, setFormData] = useState({
//       email: '',
//       subject: '',
//       message: '',
//     });
//     const [emailSubmitted, setEmailSubmitted] = useState(false);
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
  
//       try {
//         const response = await fetch('/api/send', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(formData),
//         });
  
//         if (!response.ok) {
//           throw new Error('Failed to send email');
//         }
  
//         const data = await response.json();
//         console.log(data);
//         setEmailSubmitted(true);
//       } catch (error) {
//         console.error('Error:', error);
//         // Handle error appropriately, e.g., show an error message to the user
//       }
//     };
  
//     const handleChange = (e) => {
//       setFormData({ ...formData, [e.target.name]: e.target.value });
//     };
  

    return ( 
    <section id="contact"
    className=" grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full 
        h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
        <div className="z-10">
            <h5 
            className="text-xl font-bold text-white my-2"
            >Let's Connect</h5>
            <p 
            className="text-[#ADB7BE] mb-4 max-w-md">
                {" "}
                I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
             </p>
             <div className="socials flex flex-row gap-2">
                <Link href="https://github.com/satya7041">
                <Image 
                src={gitIcon} alt="GitHub Icon"/>
                </Link>
                <Link href="https://www.linkedin.com/in/satyam-srivastava-425a72189/">
                <Image src={linkedinIcon} alt="Linkedin Icon" />
                </Link>
             </div>
             </div>
             <div>
                <form onSubmit={handleSubmit} className="flex flex-col">

                    <div className="mb-6 font-mono">
                    <label htmlFor="email" type="email"
                     className="text-white block mb-2 text-sm font-medium"
                    >Your Email</label>
                    <input 
                    name="email"
                    type="email"
                     id="email" 
        //              value={formData.email}
        //   onChange={handleChange}

                     required 
                     className="bg-[#18191E] border border-[#33353F]
                      placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                     placeholder="your_mail@gmail.com" 
                     />
                     </div>

                     <div className="mb-6">
                    <label 
                    htmlFor="subject" 
                    type="email"
                     className="text-white block text-sm mb-2 font-medium"
                    >Subject</label>
                    <input 
                    name="subject"
                    type="text"
                     id="subject" 
        //              value={formData.subject}
        //   onChange={handleChange}
                     required 
                     className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                     placeholder="Just saying hi!" 
                     />
                     </div>
                     <div className="mb-6">
                        <label htmlFor="message"
                        className="text-white block text-sm mb-2 font-medium"
                        >
                            Message
                        </label>
                        <textarea 
                        // value={formData.message}
                        // onChange={handleChange}
                        name="message" id="message"
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                       placeholder="Let's Talk about..." 
                       />
                     </div>
                     <button type="submit"
                     className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                     >Send Message</button>
                     {emailSubmitted && (
                        <p className="text-green-500 text-sm mt-2"
                        >Email sent successfully...!</p>
                     )}
                </form>
            
            </div>
            </section>
    )
    
}
export default EmailSection;