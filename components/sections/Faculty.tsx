"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FileText, Download } from "lucide-react";
import { faculty } from "@/lib/siteData";
type FacultyMember = (typeof faculty)[number];

export default function Faculty() {
  return (
    <section id="faculty" className="py-24 px-6 lg:px-24 bg-cyber-dark/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-16 text-center">
          <span className="text-neon-cyan">FACULTY_</span>
          <span className="glitch-text" data-text="REGISTRY.db">REGISTRY.db</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map((member, i) => (
            <FacultyCard key={member.name} member={member} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FacultyCard({ member, i }: { member: FacultyMember, i: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1 }}
      className="perspective-1000 h-[350px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="relative w-full h-full transform-style-3d duration-500"
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden">
          <div className="relative w-full h-full bg-cyber-panel border border-neon-cyan/20 rounded-2xl overflow-hidden group">
            <Image 
              src={member.photo} 
              alt={member.name} 
              fill 
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 w-full p-6">
              <p className="font-orbitron font-bold text-lg text-text-primary mb-1">{member.name}</p>
              <p className="font-share-tech text-xs text-neon-cyan uppercase tracking-widest">{member.role}</p>
            </div>
            
            {/* Holographic Border Overlay */}
            <div className="absolute inset-0 border border-neon-cyan/30 rounded-2xl pointer-events-none group-hover:border-neon-cyan animate-pulse" />
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="w-full h-full bg-cyber-panel border-2 border-neon-magenta rounded-2xl flex flex-col items-center justify-center p-6 text-center shadow-[0_0_20px_rgba(255,0,255,0.2)]">
            <div className="w-16 h-16 rounded-full bg-neon-magenta/10 flex items-center justify-center mb-4">
              <FileText size={32} className="text-neon-magenta" />
            </div>
            <p className="font-orbitron font-bold text-text-primary mb-2">{member.name}</p>
            <p className="font-share-tech text-sm text-text-muted mb-8">{member.role}</p>
            
            {member.cv ? (
              <a 
                href={member.cv} 
                target="_blank"
                className="px-6 py-2 bg-transparent border border-neon-magenta text-neon-magenta font-mono text-xs uppercase tracking-widest hover:bg-neon-magenta hover:text-cyber-black transition-all flex items-center gap-2"
              >
                <Download size={14} />
                $ ./view_cv.sh
              </a>
            ) : (
              <span className="px-6 py-2 border border-white/10 text-text-muted font-mono text-xs uppercase tracking-widest">
                $ ./cv_pending.sh
              </span>
            )}
          </div>
        </div>

        {/* Glitch Frame (Visible during flip) */}
        {isFlipped && (
          <div className="absolute inset-0 z-50 pointer-events-none opacity-0 animate-glitch-once bg-white/10 blur-sm" />
        )}
      </motion.div>

      <style jsx>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        
        @keyframes glitch-once {
          0% { opacity: 0.5; transform: scale(1.05) skew(5deg); }
          50% { opacity: 0; transform: scale(1) skew(0); }
          100% { opacity: 0; }
        }
        .animate-glitch-once {
          animation: glitch-once 0.3s ease-out;
        }
      `}</style>
    </motion.div>
  );
}
