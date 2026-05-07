"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const developers = [
  { 
    name: "Abhiram Girish Naik", 
    role: "Lead Developer", 
    year: "3rd Year",
    id: "DEVELOPER_0",
    photo: "https://cy-iy.vercel.app/static/abhi.jpeg",
    color: "neon-cyan"
  },
  { 
    name: "Sanjana N Patel D", 
    role: "UI Architect", 
    year: "3rd Year",
    id: "DEVELOPER_1",
    photo: "https://cy-iy.vercel.app/static/sanj.jpeg",
    color: "neon-magenta"
  },
  { 
    name: "Pranav S Chakrapani", 
    role: "Security Research", 
    year: "2nd Year",
    id: "DEVELOPER_2",
    photo: "https://cy-iy.vercel.app/static/pranav_avatar.jpeg",
    color: "neon-green"
  }
];

const codeSnippets = [
  "import hashlib",
  "def crack_hash(hash_val):",
  "nmap -sV -A target.com",
  "ssl.wrap_socket(sock)",
  "payload = b'A' * 64",
  "while True: listen()",
  "nc -lvnp 4444",
  "SELECT * FROM users --",
  "sudo apt update",
  "git commit -m 'initial breach'",
  "docker run -it kali-linux",
  "metasploit > use exploit/multi/handler"
];

export default function DevTeam() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="dev-team" className="relative py-24 px-6 lg:px-24 bg-cyber-black overflow-hidden">
      {/* Scrolling Code Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex justify-around">
        {mounted && Array.from({ length: 15 }).map((_, i) => (
          <div 
            key={i} 
            className="text-[8px] font-mono whitespace-nowrap animate-code-float"
            style={{ 
              animationDuration: `${15 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * -20}s`
            }}
          >
            {codeSnippets.map((code, j) => (
              <div key={j} className="mb-8">{code}</div>
            ))}
            {codeSnippets.map((code, j) => (
              <div key={`dup-${j}`} className="mb-8">{code}</div>
            ))}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-16 text-center">
          <span className="text-neon-magenta">BUILT_</span>
          <span className="glitch-text" data-text="BY.sys">BY.sys</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {developers.map((dev, i) => (
            <motion.div
              key={dev.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ translateZ: 50, scale: 1.05 }}
              transition={{ delay: i * 0.1 }}
              className="perspective-1000 group"
            >
              <div className="relative p-8 bg-cyber-panel border border-white/5 rounded-3xl overflow-hidden text-center transition-all duration-500 group-hover:border-neon-cyan/50 shadow-2xl">
                
                {/* Photo with Neon Ring */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className={`absolute inset-0 rounded-full border-2 border-${dev.color} animate-spin-slow opacity-50 group-hover:opacity-100 transition-opacity shadow-[0_0_15px_#00f5ff]`} />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-cyber-black p-1">
                    <Image 
                      src={dev.photo} 
                      alt={dev.name} 
                      fill 
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500" 
                    />
                    {/* Holographic Overlay on Hover */}
                    <div className="absolute inset-0 bg-neon-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay" />
                  </div>
                </div>

                <p className="font-orbitron font-bold text-lg text-text-primary mb-1">{dev.name}</p>
                <div className="font-mono text-[10px] text-neon-cyan/60 mb-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  {`> `}{dev.id}
                </div>
                
                <div className="space-y-1">
                  <p className="font-share-tech text-xs uppercase tracking-widest text-text-muted">{dev.role}</p>
                  <p className="font-mono text-[10px] text-neon-magenta/80">{dev.year}</p>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-neon-cyan/20 group-hover:border-neon-cyan transition-colors" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-neon-magenta/20 group-hover:border-neon-magenta transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes code-float {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-code-float {
          animation: code-float linear infinite;
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .perspective-1000 { perspective: 1000px; }
      `}</style>
    </section>
  );
}
