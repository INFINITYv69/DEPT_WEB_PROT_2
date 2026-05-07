"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const content = [
  {
    id: "VISION.sh",
    title: "VISION",
    accent: "text-neon-cyan",
    border: "border-neon-cyan/30",
    glow: "shadow-[0_0_15px_rgba(0,245,255,0.1)]",
    text: "Department of CS-Cyber Security (CY) will have a transformative impact on society through continual innovation in cybersecurity education, research, ethical hacking, digital forensics, and secure software development - fostering creativity, skill development, and entrepreneurship."
  },
  {
    id: "MISSION.sh",
    title: "MISSION",
    accent: "text-neon-magenta",
    border: "border-neon-magenta/30",
    glow: "shadow-[0_0_15px_rgba(255,0,255,0.1)]",
    points: [
      "Understand cybersecurity concepts in real-time applications and problem-solving.",
      "Design robust tools and applications for secure data management.",
      "To foster research, entrepreneurship, and industry partnerships that accelerate technological advancements.",
      "To empower students with digital leadership skills, creativity, and global perspectives in Cybersecurity.",
      "Apply innovative methods for digital security in automation."
    ]
  },
  {
    id: "OBJECTIVES.sh",
    title: "OBJECTIVES",
    accent: "text-neon-green",
    border: "border-neon-green/30",
    glow: "shadow-[0_0_15px_rgba(57,255,20,0.1)]",
    points: [
      "To equip students with the skills to meet global-level cybersecurity challenges.",
      "To empower graduates to secure digital data while upholding ethical values.",
      "To build professionals capable of developing automated and innovative digital security systems."
    ]
  }
];

export default function VisionMission() {
  return (
    <section id="vision" className="py-24 px-6 lg:px-24 bg-cyber-dark/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {content.map((panel, idx) => (
          <TerminalPanel key={panel.id} panel={panel} delay={idx * 0.2} />
        ))}
      </div>
    </section>
  );
}

type TerminalPanelData = (typeof content)[number];

function TerminalPanel({ panel, delay }: { panel: TerminalPanelData, delay: number }) {
  const [typed, setTyped] = useState("");
  
  useEffect(() => {
    let i = 0;
    const fullText = panel.text ?? panel.points?.join("\n- ") ?? "";
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setTyped(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 20);
    return () => clearInterval(interval);
  }, [panel]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`relative flex flex-col bg-cyber-panel border ${panel.border} ${panel.glow} rounded-lg overflow-hidden h-full min-h-[400px]`}
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-cyber-black/50 border-b border-white/5">
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-neon-magenta/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-neon-cyan/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-neon-green/50" />
        </div>
        <div className="text-[10px] font-mono text-text-muted opacity-50">{panel.id}</div>
      </div>

      {/* Terminal Content */}
      <div className="p-6 font-mono text-sm leading-relaxed flex-1">
        <div className={`mb-4 font-bold tracking-widest ${panel.accent}`}>
          {`> ${panel.title}`}
        </div>
        
        <div className="text-text-primary/80 whitespace-pre-wrap">
          {typed}
          <span className={`inline-block w-2 h-4 ml-1 ${panel.accent} animate-pulse bg-current`} />
        </div>
      </div>

      {/* Background Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "20px 20px" }}
      />
    </motion.div>
  );
}
