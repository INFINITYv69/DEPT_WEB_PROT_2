"use client";

import { motion } from "framer-motion";
import { UserCheck, FileText, ClipboardList, CreditCard } from "lucide-react";

const steps = [
  { title: "Online Application", icon: UserCheck, desc: "Fill the application form with required details and upload documents" },
  { title: "Document Verification", icon: FileText, desc: "Submit original documents for verification at college campus" },
  { title: "Counseling Process", icon: ClipboardList, desc: "Participate in counseling based on merit ranking" },
  { title: "Fee Payment", icon: CreditCard, desc: "Pay admission fee to confirm seat allocation" },
];

export default function Admissions() {
  return (
    <section id="admissions" className="py-24 px-6 lg:px-24 bg-cyber-dark/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        
        {/* Left: Coordinator */}
        <div>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-16">
            <span className="text-neon-cyan">ADMISSION_</span>
            <span className="glitch-text" data-text="PORTAL.exe">PORTAL.exe</span>
          </h2>
          
          <div className="p-8 bg-cyber-panel border border-neon-cyan/30 rounded-3xl relative overflow-hidden group">
            <div className="flex items-center gap-6 mb-8">
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden border border-neon-cyan/50">
                <img src="https://cy-iy.vercel.app/static/pavan_faculty.png" alt="Pavan Kumar N T" className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <div>
                <h4 className="font-orbitron font-bold text-text-primary">Mr. Pavan Kumar N T</h4>
                <p className="text-xs font-mono text-neon-cyan uppercase tracking-widest">Admission Coordinator</p>
              </div>
            </div>
            
            <div className="space-y-4 font-mono text-[10px] text-text-muted">
              <div className="flex items-center gap-2 group/item cursor-pointer">
                <span className="text-neon-cyan group-hover/item:translate-x-1 transition-transform">{`>`}</span>
                <span className="group-hover/item:text-neon-cyan transition-colors">TEL: +91 9113283741</span>
              </div>
              <div className="flex items-center gap-2 group/item cursor-pointer">
                <span className="text-neon-cyan group-hover/item:translate-x-1 transition-transform">{`>`}</span>
                <span className="group-hover/item:text-neon-cyan transition-colors">MAIL: pavankumaracharya007@gmail.com</span>
              </div>
            </div>

            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
              style={{ backgroundImage: "radial-gradient(circle, #00f5ff 1px, transparent 1px)", backgroundSize: "20px 20px" }}
            />
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 bg-cyber-panel border border-white/5 rounded-xl">
              <h5 className="font-orbitron font-bold text-neon-green mb-4 text-xs">ELIGIBILITY_CRITERIA</h5>
              <ul className="space-y-2 text-[10px] font-mono text-text-muted">
                <li>{`> 10+2 with PCM/PCB from recognized board`}</li>
                <li>{`> Minimum 60% aggregate marks`}</li>
                <li>{`> Valid JEE/COMEDK/State CET score`}</li>
                <li>{`> Age limit: 17-25 years as on 31st December`}</li>
              </ul>
            </div>
            <div className="p-6 bg-cyber-panel border border-white/5 rounded-xl">
              <h5 className="font-orbitron font-bold text-neon-magenta mb-4 text-xs">INTAKE_CAPACITY</h5>
              <ul className="space-y-2 text-[10px] font-mono text-text-muted">
                <li>{`> Cyber Security: 60 seats`}</li>
                <li>{`> Information Security: 60 seats`}</li>
                <li>{`> Total: 120 seats per year`}</li>
                <li>{`> 15% seats through management quota`}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right: Timeline */}
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-white/5 overflow-hidden">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="w-full bg-neon-cyan shadow-[0_0_15px_#00f5ff]"
            />
          </div>

          <div className="space-y-16">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="relative pl-16 group"
                >
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-cyber-black border-2 border-neon-cyan flex items-center justify-center group-hover:bg-neon-cyan group-hover:text-cyber-black transition-all duration-300 shadow-[0_0_15px_rgba(0,245,255,0.2)]">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-orbitron font-bold text-text-primary mb-2 group-hover:text-neon-cyan transition-colors">{step.title}</h4>
                    <p className="font-share-tech text-sm text-text-muted">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
