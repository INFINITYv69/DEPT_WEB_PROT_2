"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Faculty", href: "#faculty" },
  { name: "Videos", href: "#university-gallery" },
  { name: "Research", href: "#research" },
  { name: "Achievements", href: "#achievements" },
  { name: "Placements", href: "#placements" },
  { name: "Admissions", href: "#admissions" },
  { name: "Dev Team", href: "#dev-team" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
        scrolled ? "bg-cyber-black/85 backdrop-blur-md border-b border-neon-cyan/30" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative w-12 h-12 transition-all duration-300 group-hover:scale-110">
            <Image 
              src="https://cy-iy.vercel.app/static/gmuniversity.png" 
              alt="GM University Logo" 
              fill
              sizes="48px"
              className="object-contain drop-shadow-[0_0_8px_#00f5ff]"
            />
          </div>
          <div className="hidden sm:block font-orbitron text-sm font-bold tracking-tighter leading-tight">
            <span className="text-neon-cyan glow-text-cyan">GM UNIVERSITY</span>
            <br />
            <span className="text-[10px] text-text-muted">CYBER SECURITY & IS</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="relative group py-2 text-sm uppercase tracking-widest font-share-tech text-text-primary/80 hover:text-neon-cyan transition-colors"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-neon-cyan -translate-x-1/2 group-hover:w-full transition-all duration-300 shadow-[0_0_10px_#00f5ff]" />
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-neon-cyan p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[1001] bg-cyber-black/95 backdrop-blur-xl lg:hidden flex flex-col items-center justify-center gap-8"
          >
            <button 
              className="absolute top-6 right-6 text-neon-cyan"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} className="animate-pulse" />
            </button>
            
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-orbitron text-text-primary hover:text-neon-cyan glow-text-cyan transition-all"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
