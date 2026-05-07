"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "@/lib/siteData";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="gallery" className="relative py-24 px-6 overflow-hidden bg-cyber-dark/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-16 text-center">
          <span className="text-neon-magenta">MISSION_</span>
          <span className="glitch-text" data-text="RECON.log">RECON.log</span>
        </h2>

        <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            {galleryImages.map((img, i) => {
              const offset = (i - index + galleryImages.length) % galleryImages.length;
              const isActive = offset === 0;
              const isPrev = offset === galleryImages.length - 1;
              const isNext = offset === 1;

              if (!isActive && !isPrev && !isNext) return null;

              return (
                <motion.div
                  key={img.url}
                  custom={direction}
                  initial={{ opacity: 0, scale: 0.8, x: direction > 0 ? 300 : -300 }}
                  animate={{ 
                    opacity: isActive ? 1 : 0.4, 
                    scale: isActive ? 1 : 0.8,
                    x: isActive ? 0 : isNext ? 400 : -400,
                    zIndex: isActive ? 10 : 5,
                    rotateY: isActive ? 0 : isNext ? -30 : 30,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute w-[300px] md:w-[500px] h-[200px] md:h-[350px] cursor-pointer"
                >
                  <div className="relative w-full h-full group overflow-hidden rounded-xl border border-neon-cyan/30 bg-cyber-panel shadow-[0_0_20px_rgba(0,245,255,0.1)]">
                    <Image 
                      src={img.url} 
                      alt={img.title} 
                      fill 
                      className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-[2px]" 
                    />
                    
                    {/* Chromatic Aberration Overlay on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300">
                      <div className="absolute inset-0 bg-red-500/20 mix-blend-screen translate-x-1" />
                      <div className="absolute inset-0 bg-blue-500/20 mix-blend-screen -translate-x-1" />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent opacity-60" />
                    
                    <div className="absolute bottom-0 left-0 w-full p-6">
                      <p className="text-neon-cyan font-share-tech text-sm md:text-lg tracking-widest uppercase glow-text-cyan">
                        {isActive ? (
                          <Typewriter text={img.title} />
                        ) : img.title}
                      </p>
                      {isActive && (
                        <p className="mt-2 line-clamp-2 text-xs text-text-primary/70">
                          {img.description}
                        </p>
                      )}
                    </div>

                    {/* Scanline Sweep on Hover */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-neon-cyan/50 shadow-[0_0_10px_#00f5ff] -translate-y-full group-hover:animate-scan-vertical pointer-events-none" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-8 z-20">
            <button onClick={prev} className="p-4 border border-neon-magenta text-neon-magenta hover:bg-neon-magenta hover:text-cyber-black transition-all rounded-full group">
              <ChevronLeft className="group-hover:scale-125 transition-transform" />
            </button>
            <button onClick={next} className="p-4 border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-cyber-black transition-all rounded-full group">
              <ChevronRight className="group-hover:scale-125 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scan-vertical {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(500%); }
        }
        .animate-scan-vertical {
          animation: scan-vertical 2s linear infinite;
        }
      `}</style>
    </section>
  );
}

function Typewriter({ text }: { text: string }) {
  const [display, setDisplay] = useState("");
  
  useEffect(() => {
    let i = 0;
    setDisplay("");
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplay((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [text]);

  return <span>{display}</span>;
}
