"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Terminal as TerminalIcon } from "lucide-react";

export default function HODMessage() {
  return (
    <section id="hod-message" className="relative py-24 px-6 lg:px-24 bg-cyber-black overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left: Holographic Photo */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-dashed border-neon-cyan/30 rounded-[2rem]"
          />
          
          <div className="relative w-full h-full overflow-hidden mask-hexagon bg-cyber-panel border-2 border-neon-cyan shadow-[0_0_30px_rgba(0,245,255,0.2)]">
            <Image 
              src="https://cy-iy.vercel.app/static/arun_bt.jpeg" 
              alt="Dr. Arun Kumar B T" 
              fill 
              className="object-cover opacity-90 grayscale hover:grayscale-0 transition-all duration-500"
            />
            
            {/* Holographic Scan Effect */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
              <div className="absolute top-[-100%] left-0 w-full h-4 bg-neon-cyan/40 shadow-[0_0_20px_#00f5ff] animate-hologram-scan" />
            </div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" 
              style={{ backgroundImage: "radial-gradient(circle, #00f5ff 1px, transparent 1px)", backgroundSize: "10px 10px" }} 
            />
          </div>

          {/* Decorative Corner Cursor */}
          <div className="absolute -bottom-4 -right-4 text-neon-magenta animate-pulse">
            <TerminalIcon size={24} />
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-8">
            <span className="text-neon-cyan">HOD_</span>
            <span className="glitch-text" data-text="MESSAGE.log">MESSAGE.log</span>
          </h2>

          <div className="space-y-6 font-share-tech text-text-primary/80 leading-relaxed text-lg">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Welcome to the Department of Cyber Security & Information Technology. Our mission is to provide excellence in education, research, and innovation in cybersecurity. We are committed to nurturing the next generation of cybersecurity professionals who will protect and secure our digital future.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Dear Students and Aspirants, It gives me great pleasure to welcome you to the Undergraduate Program in Cybersecurity and Information Security. In today's digital era, information is the most valuable asset, and securing it has become a global priority. From critical infrastructure and financial systems to personal data and national defense, the demand for skilled cybersecurity professionals is growing at an unprecedented rate.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Our program is designed to blend strong engineering foundations with specialized knowledge in cyber defense, cryptography, digital forensics, ethical hacking, and security management. With a curriculum that is both industry-oriented and research-driven, we aim to prepare graduates who can face real-world security challenges with confidence and innovation.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              At GM University, we emphasize not only technical expertise but also ethical responsibility, problem-solving skills, and lifelong learning-qualities that are essential for cybersecurity professionals in a rapidly changing technological landscape. Students will benefit from state-of-the-art laboratories, hands-on projects, collaborations with industry, and opportunities to engage in internships and certifications aligned with global standards.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              We envision our graduates as leaders, innovators, and protectors of the digital world, contributing to a safer cyberspace for individuals, businesses, and nations. I invite you to join us on this exciting journey of discovery, innovation, and excellence in Cyber and Information Security. Together, let us build a secure digital future
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="pt-8 border-t border-neon-cyan/20"
            >
              <h4 className="font-orbitron font-bold text-neon-cyan">Dr. Arun Kumar B T</h4>
              <p className="text-sm text-text-muted uppercase tracking-[0.2em]">Associate Professor & HoD</p>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .mask-hexagon {
          clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        }
        @keyframes hologram-scan {
          0% { top: -20%; }
          100% { top: 120%; }
        }
        .animate-hologram-scan {
          animation: hologram-scan 3s linear infinite;
        }
      `}</style>
    </section>
  );
}
