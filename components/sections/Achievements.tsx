"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Trophy } from "lucide-react";
import { achievements } from "@/lib/siteData";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 lg:px-24 bg-cyber-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-16 text-center">
          <span className="text-neon-green">SYSTEM_</span>
          <span className="glitch-text" data-text="ACHIEVEMENTS.json">ACHIEVEMENTS.json</span>
        </h2>

        <div className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory no-scrollbar">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: i * 0.1, type: "spring", bounce: 0.4 }}
              className="flex-shrink-0 w-[320px] md:w-[420px] snap-center"
            >
              <div className="relative p-6 bg-cyber-panel border border-white/5 rounded-3xl overflow-hidden group h-full">
                <div className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-cyber-black/80 border border-white/10 flex items-center gap-2 ${rankClass(item.rank)}`}>
                  <Trophy size={14} />
                  <span className="text-[10px] font-bold tracking-tighter uppercase">{item.rank}</span>
                </div>

                <div className="relative aspect-video mb-6 overflow-hidden rounded-xl border border-white/10 group-hover:border-neon-cyan/50 transition-all">
                  <Image
                    src={item.photo}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 320px, 420px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent opacity-60" />
                </div>

                <h3 className="text-lg font-orbitron font-bold mb-3 text-text-primary group-hover:text-neon-green transition-colors">
                  {item.title}
                </h3>
                <p className="font-share-tech text-sm text-text-muted mb-6 line-clamp-4">
                  {item.description}
                </p>

                <div className="flex items-center gap-2 font-mono text-[10px] text-neon-cyan/80">
                  <span className="px-2 py-0.5 border border-neon-cyan/30 rounded">OPERATIVE: {item.student}</span>
                </div>

                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-neon-green animate-scan-y" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 p-8 border border-dashed border-neon-cyan/20 rounded-2xl bg-cyber-panel/30 text-center">
          <p className="font-mono text-sm text-text-muted">
            <span className="text-neon-cyan animate-pulse">//</span> MORE ACHIEVEMENTS COMING SOON - SYSTEM LOADING...
          </p>
          <div className="mt-4 w-48 h-1 bg-cyber-black mx-auto overflow-hidden">
            <div className="h-full bg-neon-cyan animate-loading-infinite" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan-y {
          0% { top: 0; }
          100% { top: 100%; }
        }
        .animate-scan-y {
          animation: scan-y 3s linear infinite;
        }
        @keyframes loading-infinite {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-loading-infinite {
          animation: loading-infinite 2s linear infinite;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

function rankClass(rank: string) {
  if (rank.includes("1ST")) return "text-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.3)]";
  if (rank.includes("2ND")) return "text-slate-300 shadow-[0_0_20px_rgba(203,213,225,0.3)]";
  return "text-orange-400 shadow-[0_0_20px_rgba(251,146,60,0.3)]";
}
