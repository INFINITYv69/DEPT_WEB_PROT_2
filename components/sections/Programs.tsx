"use client";

import { motion } from "framer-motion";
import { Shield, Lock, ChevronRight } from "lucide-react";
import { useState } from "react";
import { programs as programData } from "@/lib/siteData";

const programs = programData.map((program, index) => ({
  ...program,
  accent: index === 0 ? "cyan" : "magenta",
  color: index === 0 ? "#00f5ff" : "#ff00ff",
  icon: index === 0 ? Shield : Lock,
}));

export default function Programs() {
  return (
    <section id="programs" className="py-24 px-6 lg:px-24 bg-cyber-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-16 text-center">
          <span className="text-neon-cyan">PROGRAM_</span>
          <span className="glitch-text" data-text="PROTOCOLS.sys">PROTOCOLS.sys</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {programs.map((program, idx) => (
            <ProgramCard key={program.title} program={program} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

type Program = (typeof programs)[number];

function ProgramCard({ program, idx }: { program: Program, idx: number }) {
  const [loading, setLoading] = useState<string | null>(null);

  const handleDownload = (type: string) => {
    setLoading(type);
    setTimeout(() => {
      setLoading(null);
      window.open(type === "program" ? program.programLink : program.courseLink, "_blank");
    }, 2000);
  };

  const Icon = program.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: idx === 0 ? -100 : 100, rotateY: idx === 0 ? 15 : -15 }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative group p-8 bg-cyber-panel border border-white/5 rounded-2xl overflow-hidden shadow-2xl"
    >
      {/* Circuit Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 L90 10 L90 90 L10 90 Z' fill='none' stroke='${encodeURIComponent(program.color)}' stroke-width='0.5'/%3E%3Cpath d='M30 30 L70 30 M30 50 L70 50 M30 70 L70 70' stroke='${encodeURIComponent(program.color)}' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "150px 150px"
        }}
      />

      {/* Program Icon */}
      <div className="relative mb-8 flex justify-center">
        <div className="relative w-24 h-24 flex items-center justify-center">
          <div className={`absolute inset-0 rounded-full blur-2xl opacity-20`} style={{ backgroundColor: program.color }} />
          <Icon size={64} className="relative z-10 transition-transform duration-500 group-hover:scale-110" style={{ color: program.color }} />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-center mb-8 bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">
        {program.title}
      </h3>
      <p className="mb-8 text-center font-share-tech text-sm text-text-muted">
        {program.description}
      </p>

      {/* Specializations */}
      <div className="space-y-4 mb-10">
        {program.specs.map((spec: string) => (
          <div key={spec} className="flex items-center gap-3 group/item">
            <ChevronRight size={16} className={`transition-all duration-300 group-hover/item:translate-x-1`} style={{ color: program.color }} />
            <span className="font-share-tech text-text-primary/70 group-hover/item:text-text-primary transition-colors">
              {spec}
            </span>
            <span className={`w-2 h-4 animate-pulse hidden group-hover/item:block`} style={{ backgroundColor: program.color }} />
          </div>
        ))}
      </div>

      {/* Download Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button 
          onClick={() => handleDownload("program")}
          className="relative px-4 py-3 bg-cyber-black border border-white/10 hover:border-white/20 transition-all font-mono text-xs overflow-hidden"
        >
          {loading === "program" ? (
            <div className="absolute inset-0 bg-cyber-black flex items-center px-4">
              <div className="h-1 bg-neon-cyan animate-loading-bar shadow-[0_0_10px_#00f5ff]" />
              <span className="ml-2 text-neon-cyan">LOADING...</span>
            </div>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <span className={program.accent === "cyan" ? "text-neon-cyan" : "text-neon-magenta"}>$</span> ./download_program.sh
            </span>
          )}
        </button>

        <button 
          onClick={() => handleDownload("course")}
          className="relative px-4 py-3 bg-cyber-black border border-white/10 hover:border-white/20 transition-all font-mono text-xs overflow-hidden"
        >
          {loading === "course" ? (
            <div className="absolute inset-0 bg-cyber-black flex items-center px-4">
              <div className="h-1 bg-neon-green animate-loading-bar shadow-[0_0_10px_#39ff14]" />
              <span className="ml-2 text-neon-green">LOADING...</span>
            </div>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <span className={program.accent === "cyan" ? "text-neon-cyan" : "text-neon-magenta"}>$</span> ./download_course.sh
            </span>
          )}
        </button>
      </div>

      <style jsx>{`
        @keyframes loading-bar {
          0% { width: 0; }
          100% { width: 100%; }
        }
        .animate-loading-bar {
          animation: loading-bar 2s ease-in-out;
        }
      `}</style>
    </motion.div>
  );
}
