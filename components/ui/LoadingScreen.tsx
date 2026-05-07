"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const bootLines = [
  "INITIALIZING SECURE CONNECTION...",
  "LOADING CYBERSECURITY PROTOCOLS...",
  "DECRYPTING FACULTY DATABASE...",
  "MOUNTING NEURAL INTERFACE...",
  "ESTABLISHING VPN TUNNEL...",
  "GM UNIVERSITY - DEPT. OF CYBER SECURITY",
  "ACCESS GRANTED. WELCOME, OPERATIVE."
];

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    if (currentLine < bootLines.length) {
      const timer = setTimeout(() => {
        setLines(prev => [...prev, bootLines[currentLine]]);
        setCurrentLine(prev => prev + 1);
      }, 280);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(onComplete, 900);
      return () => clearTimeout(timer);
    }
  }, [currentLine, onComplete]);

  return (
    <motion.div 
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-cyber-black flex flex-col items-start justify-center p-8 md:p-24 font-mono text-xs md:text-lg text-neon-green overflow-hidden"
    >
      <div className="space-y-2">
        {lines.map((line, i) => (
          <div key={i} className="flex gap-4">
            <span className="text-neon-cyan/60">&gt;</span>
            <span className={i === lines.length - 1 ? "animate-pulse" : ""}>{line}</span>
          </div>
        ))}
      </div>
      
      {/* Background Glitch Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] animate-glitch-bg" />
      <div className="absolute bottom-0 left-0 h-1 bg-neon-cyan shadow-[0_0_20px_#00f5ff] animate-boot-progress" />
      
      <style jsx>{`
        @keyframes glitch-bg {
          0% { transform: translate(0); }
          20% { transform: translate(-5px, 5px); }
          40% { transform: translate(-5px, -5px); }
          60% { transform: translate(5px, 5px); }
          80% { transform: translate(5px, -5px); }
          100% { transform: translate(0); }
        }
        .animate-glitch-bg {
          animation: glitch-bg 0.1s infinite;
        }
        @keyframes boot-progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-boot-progress {
          animation: boot-progress 2.9s ease-out forwards;
        }
      `}</style>
    </motion.div>
  );
}
