"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import UniversityGallery from "@/components/sections/UniversityGallery";
import HODMessage from "@/components/sections/HODMessage";
import VisionMission from "@/components/sections/VisionMission";
import Programs from "@/components/sections/Programs";
import Faculty from "@/components/sections/Faculty";
import BoardOfStudies from "@/components/sections/BoardOfStudies";
import Achievements from "@/components/sections/Achievements";
import Placement from "@/components/sections/Placement";
import Admissions from "@/components/sections/Admissions";
import DevTeam from "@/components/sections/DevTeam";
import { IQAC, Research } from "@/components/sections/SecondarySections";
import LoadingScreen from "@/components/ui/LoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [isCompromised, setIsCompromised] = useState(false);

  // Easter Egg & Konami Listener
  useEffect(() => {
    let input = "";
    const konami = "ARROWUPARROWUPARROWDOWNARROWDOWNARROWLEFTARROWRIGHTARROWLEFTARROWRIGHTBA";
    
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase();
      input += key;
      
      // HACK easter egg
      if (input.endsWith("HACK")) {
        setShowEasterEgg(true);
        setTimeout(() => setShowEasterEgg(false), 3000);
        input = "";
      }
      
      // Konami Code
      if (input.includes(konami)) {
        setIsCompromised(true);
        setTimeout(() => setIsCompromised(false), 2000);
        input = "";
      }
      
      if (input.length > 100) input = input.slice(-100);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <main className={isLoading ? "h-screen overflow-hidden" : ""}>
        <Hero />
        <About />
        <Gallery />
        <UniversityGallery />
        <HODMessage />
        <VisionMission />
        <Programs />
        <Faculty />
        <BoardOfStudies />
        <IQAC />
        <Research />
        <Achievements />
        <Placement />
        <Admissions />
        <DevTeam />
      </main>

      {/* Easter Egg Overlay */}
      <AnimatePresence>
        {showEasterEgg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-cyber-black pointer-events-none flex flex-wrap gap-2 p-4 overflow-hidden"
          >
            {Array.from({ length: 1000 }).map((_, i) => (
              <span key={i} className="text-neon-green font-mono text-xs animate-pulse">
                {Math.random() > 0.5 ? "1" : "0"}
              </span>
            ))}
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-6xl md:text-9xl font-orbitron font-black text-neon-green glow-text-green animate-bounce">
                SYSTEM_HACKED
              </h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Konami Glitch Overlay */}
      <AnimatePresence>
        {isCompromised && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[11000] bg-red-900/20 backdrop-blur-[2px] pointer-events-none overflow-hidden mix-blend-difference"
          >
            <div className="absolute inset-0 animate-scramble flex items-center justify-center">
              <h1 className="text-9xl font-orbitron font-black text-white glow-text-magenta">SYSTEM_COMPROMISED</h1>
            </div>
            <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/o0vwzuFwCGAFO/giphy.gif')] opacity-20 bg-cover mix-blend-overlay" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-neon-cyan z-[1001] shadow-[0_0_10px_#00f5ff] origin-left"
        style={{ scaleX: 0 }}
        id="scroll-progress"
      />

      <style jsx global>{`
        #scroll-progress {
          animation: scroll-grow linear;
          animation-timeline: scroll();
        }
        @keyframes scroll-grow {
          from { scale: 0 1; }
          to { scale: 1 1; }
        }
        @keyframes scramble {
          0% { transform: translate(0) skew(0); filter: hue-rotate(0); }
          10% { transform: translate(-10px, 10px) skew(10deg); filter: hue-rotate(90deg); }
          20% { transform: translate(10px, -10px) skew(-10deg); filter: hue-rotate(180deg); }
          100% { transform: translate(0) skew(0); filter: hue-rotate(360deg); }
        }
        .animate-scramble {
          animation: scramble 0.1s infinite;
        }
      `}</style>
    </>
  );
}
