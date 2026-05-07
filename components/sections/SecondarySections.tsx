"use client";

import { Mail, Phone, ExternalLink } from "lucide-react";

export function IQAC() {
  return (
    <section id="iqac" className="py-24 px-6 lg:px-24 bg-cyber-dark/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-3xl font-orbitron font-bold mb-6 text-neon-cyan tracking-widest">IQAC_COORDINATOR</h2>
          <p className="font-share-tech text-text-muted mb-8 leading-relaxed">
            The Internal Quality Assurance Cell (IQAC) ensures the highest standards of education and research within the department. Led by Dr. Rachana P G, the cell focuses on continuous improvement and academic excellence.
          </p>
        </div>
        <div className="w-full md:w-96 p-8 bg-cyber-panel border border-neon-cyan/20 rounded-3xl relative group">
          <div className="flex items-center gap-6">
            <div className="relative w-24 h-24 rounded-2xl overflow-hidden border border-neon-cyan/50">
              <img src="https://cy-iy.vercel.app/static/Rachana_faculty.jpeg" alt="Dr. Rachana P G" className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="font-mono text-[10px]">
              <p className="text-neon-cyan mb-2 tracking-widest uppercase font-bold">Dr. Rachana P G</p>
              <div className="space-y-1 text-text-muted">
                <div className="flex items-center gap-2"><Phone size={10} /> +91-63606 01253</div>
                <div className="flex items-center gap-2"><Mail size={10} /> rachanapg@gmit.ac.in</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Research() {
  return (
    <section id="research" className="py-24 px-6 lg:px-24 bg-cyber-black border-y border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-orbitron font-bold mb-6 text-neon-magenta tracking-widest">RESEARCH_HUB</h2>
          <div className="p-8 bg-cyber-panel border border-neon-magenta/20 rounded-3xl relative group overflow-hidden">
            <div className="relative z-10">
              <h4 className="font-orbitron font-bold text-text-primary mb-4">Dr. Arun Kumar B T</h4>
              <p className="font-share-tech text-sm text-text-muted mb-6">Research Coordinator</p>
              <div className="space-y-2 font-mono text-[10px] text-neon-magenta">
                <p>{`> TEL: +91 98765 43210`}</p>
                <p>{`> MAIL: hod.iycy@gmu.ac.in`}</p>
                <p>{`> STATUS: ADVANCING KNOWLEDGE IN CYBERSECURITY`}</p>
              </div>
            </div>
            {/* Floating Paper Icons Effect */}
            <div className="absolute top-4 right-4 text-neon-magenta/20 animate-bounce">
              <ExternalLink size={64} />
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-3xl font-orbitron font-bold mb-6 text-neon-green tracking-widest">STUDENT_PROJECTS</h2>
          <div className="p-8 bg-cyber-panel border border-neon-green/20 rounded-3xl h-full flex flex-col justify-center text-center">
            <p className="font-mono text-xs text-text-muted mb-4 uppercase tracking-[0.3em]">Project Repository</p>
            <div className="h-1 w-full bg-cyber-black mb-4 overflow-hidden">
              <div className="h-full bg-neon-green animate-pulse" style={{ width: "65%" }} />
            </div>
            <p className="font-share-tech text-neon-green text-sm italic">
              // MORE PROJECTS COMING SOON — SYSTEM LOADING...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
