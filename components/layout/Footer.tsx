"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-cyber-black pt-24 pb-12 px-6 lg:px-24 overflow-hidden border-t border-neon-cyan/30 shadow-[0_-20px_40px_rgba(0,245,255,0.05)]">
      {/* Circuit Texture Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 L50 10 L50 50 L10 50 Z' fill='none' stroke='%2300f5ff' stroke-width='0.5'/%3E%3Ccircle cx='10' cy='10' r='1' fill='%2300f5ff'/%3E%3Ccircle cx='50' cy='50' r='1' fill='%2300f5ff'/%3E%3C/svg%3E")`, backgroundSize: "120px 120px" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          
          {/* Left: Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16">
                <Image 
                  src="https://cy-iy.vercel.app/static/gmuniversity.png" 
                  alt="GMU Logo" 
                  fill 
                  sizes="64px"
                  className="object-contain drop-shadow-[0_0_8px_#00f5ff]" 
                />
              </div>
              <div className="font-orbitron font-bold">
                <p className="text-neon-cyan">GM UNIVERSITY</p>
                <p className="text-[10px] text-text-muted">DEPT OF CYBER SECURITY</p>
              </div>
            </div>
            <p className="font-share-tech text-sm text-text-muted leading-relaxed">
              Empowering the next generation of security professionals through innovation, ethics, and technical mastery.
            </p>
            <div className="flex items-center gap-2 text-neon-green font-mono text-[10px] uppercase tracking-tighter">
              <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
              [ SYSTEM: ONLINE ]
            </div>
          </div>

          {/* Center: Links */}
          <div>
            <h4 className="font-orbitron font-bold text-text-primary mb-8 tracking-[0.2em]">QUICK_LINKS</h4>
            <div className="grid grid-cols-2 gap-4">
              {["ABOUT", "PROGRAMS", "FACULTY", "RESEARCH", "ADMISSIONS", "TEAM"].map((link) => (
                <Link 
                  key={link} 
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="font-mono text-xs text-text-muted hover:text-neon-cyan transition-colors flex items-center gap-2 group"
                >
                  <span className="text-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity">{`>`}</span>
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Contact */}
          <div className="space-y-4">
            <h4 className="font-orbitron font-bold text-text-primary mb-8 tracking-[0.2em]">CONTACT_INFO</h4>
            <div className="space-y-4 font-mono text-[10px] text-text-muted">
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-neon-cyan" />
                <span>hod.iycy@gmu.ac.in</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-neon-cyan" />
                <span>+91 99452 21208</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-neon-cyan shrink-0" />
                <span>Davangere, Karnataka, India - 577006</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[10px] text-text-muted text-center md:text-left">
            © 2025 GM UNIVERSITY — ALL RIGHTS RESERVED
          </p>
          <p className="font-mono text-[10px] text-neon-magenta animate-pulse tracking-widest uppercase">
            DESIGNED & DEVELOPED WITH ❤ FOR CYBERSECURITY
          </p>
        </div>
      </div>
    </footer>
  );
}
