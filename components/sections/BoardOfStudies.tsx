"use client";

import { motion } from "framer-motion";

const nodes = [
  { id: "chair", title: "CHAIRPERSONS", names: ["Dr. S. R. Shankapal", "Dr. H.D. Maheshappa"], level: 0 },
  { id: "principal", title: "PRINCIPAL", names: ["Dr. Sanjay Pande M B"], level: 1 },
  { id: "external", title: "EXTERNAL MEMBERS", names: ["Dr. B N Veerappa", "Dr. Shreedhar K S"], level: 2 },
  { id: "internal", title: "INTERNAL MEMBER", names: ["Dr. Arun Kumar B T"], level: 2 },
];

export default function BoardOfStudies() {
  return (
    <section id="board-of-studies" className="py-24 px-6 lg:px-24 bg-cyber-dark/40 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-24 text-center">
          <span className="text-neon-cyan">BOARD_</span>
          <span className="glitch-text" data-text="OF_STUDIES.chart">OF_STUDIES.chart</span>
        </h2>

        <div className="relative flex flex-col items-center gap-16">
          {/* Vertical Connection Lines */}
          <div className="absolute top-0 bottom-0 w-[2px] bg-neon-cyan/10 pointer-events-none">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5 }}
              className="w-full bg-neon-cyan shadow-[0_0_15px_#00f5ff]"
            />
            {/* Traveling Data Packet */}
            <motion.div 
              animate={{ top: ["0%", "100%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-neon-cyan shadow-[0_0_10px_#00f5ff]"
            />
          </div>

          {nodes.map((node, i) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className={`relative z-10 w-full max-w-lg p-6 bg-cyber-panel border border-neon-cyan/30 rounded-2xl text-center group hover:border-neon-cyan transition-all duration-500 shadow-xl`}
            >
              <h4 className="text-[10px] font-mono text-neon-cyan mb-4 tracking-[0.3em] uppercase">{node.title}</h4>
              <div className="space-y-2">
                {node.names.map(name => (
                  <p key={name} className="font-orbitron font-bold text-lg text-text-primary group-hover:text-neon-cyan transition-colors">
                    {name}
                  </p>
                ))}
              </div>
              
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-neon-cyan/20 group-hover:border-neon-cyan" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-neon-cyan/20 group-hover:border-neon-cyan" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
