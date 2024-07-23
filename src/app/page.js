import Image from "next/image";
import HeroSecction from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from './components/AboutSection'
import ProjectSection from './components/ProjectSection';
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';
import AchievementsSection from './components/AchievementsSection'
import { motion } from "framer-motion";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] font-serif">
      <Navbar/>
      <div className="container  mt-24 mx-auto px-12 py-4">
      <HeroSecction />
      <AchievementsSection/>
      <AboutSection/>
      <ProjectSection/>
      <EmailSection/>
      </div>
      <Footer/>
    </main>
  );
}
