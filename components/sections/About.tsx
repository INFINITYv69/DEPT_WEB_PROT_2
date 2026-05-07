"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { label: "EST. 2024", value: "2024", sub: "Pulsing System", type: "pulse" },
  { label: "120 SEATS", value: "120", sub: "Capacity Limit", type: "bar" },
  { label: "2 PROGRAMS", value: "2", sub: "Binary Switch", type: "binary" },
  { label: "100% PRACTICAL", value: "100", sub: "Skill Based", type: "pie" },
];

const binaryColumns = Array.from({ length: 20 }, (_, column) => ({
  delay: `${(column % 7) * 0.27}s`,
  text: Array.from({ length: 50 }, (_, bit) => ((column * 17 + bit * 11) % 3 === 0 ? "1" : "0")).join(""),
}));

const featureTags = [
  "Industry-Ready Curriculum",
  "Established 2024",
  "Practical Applications",
  "Expert Collaboration",
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const [binaryRain, setBinaryRain] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isInView) {
      setBinaryRain(true);
      const timer = setTimeout(() => setBinaryRain(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section id="about" ref={containerRef} className="relative py-24 px-6 lg:px-24 overflow-hidden">
      {/* Binary Rain Background (Temporary) */}
      {binaryRain && mounted && (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20 flex justify-around overflow-hidden">
          {binaryColumns.map((column, i) => (
            <div 
              key={i} 
              className="text-neon-cyan font-mono text-xs break-all animate-matrix-fall"
              style={{ animationDelay: column.delay }}
            >
              {column.text}
            </div>
          ))}
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Stats Grid */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-cyber-panel/50 border border-neon-cyan/20 rounded-lg backdrop-blur-sm group hover:border-neon-cyan/50 transition-all"
            >
              <div className="flex items-center gap-2 mb-4">
                {stat.type === "pulse" && <div className="w-2 h-2 rounded-full bg-neon-green animate-ping shadow-[0_0_10px_#39ff14]" />}
                <span className="text-[10px] text-text-muted tracking-widest uppercase">{stat.label}</span>
              </div>
              
              <div className="text-4xl font-orbitron font-bold text-text-primary mb-2 group-hover:text-neon-cyan transition-colors">
                {stat.type === "binary" ? (
                  <span className="animate-pulse">11</span>
                ) : (
                  stat.value
                )}
                {stat.label.includes("%") && "%"}
              </div>
              
              <div className="text-[10px] text-text-muted font-mono uppercase tracking-tighter">
                {stat.sub}
              </div>

              {stat.type === "bar" && (
                <div className="mt-4 h-1 w-full bg-cyber-black overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "80%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-neon-cyan shadow-[0_0_10px_#00f5ff]"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Right: Text Content */}
        <div>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 leading-tight">
            <span className="text-neon-cyan">ABOUT_</span>
            <span className="glitch-text max-w-full break-all sm:break-normal" data-text="DEPARTMENT.exe">DEPARTMENT.exe</span>
          </h2>

          <div className="space-y-6 font-share-tech text-text-primary/70 leading-relaxed text-lg">
            <p>
              The Department of CS-Cybersecurity and the Department of CS-Information Security at GM University is at the forefront of network analytics, network security, and topologies, dedicated to advancing the field of cybersecurity through innovative research and quality education. Established in 2024, our department has quickly become a center of excellence for cybersecurity education and research.
            </p>
            <p>
              We offer comprehensive programs that blend theoretical foundations with practical applications, preparing students for careers in the rapidly evolving field of cybersecurity. Our curriculum is designed in collaboration with industry experts to ensure relevance and employability.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {featureTags.map((tag, i) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="px-4 py-2 bg-neon-cyan/10 border border-neon-cyan/30 rounded-full text-[10px] font-bold uppercase tracking-widest text-neon-cyan hover:bg-neon-cyan/20 transition-all cursor-crosshair"
              >
                {tag}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes matrix-fall {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(1000%); }
        }
        .animate-matrix-fall {
          animation: matrix-fall linear infinite;
        }
      `}</style>
    </section>
  );
}
