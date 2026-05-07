"use client";

export default function Placement() {
  return (
    <section id="placements" className="py-24 px-6 lg:px-24 bg-cyber-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-8">
              <span className="text-neon-magenta">PLACEMENT_</span>
              <span className="glitch-text" data-text="EXCELLENCE.log">EXCELLENCE.log</span>
            </h2>
            <p className="font-share-tech text-lg text-text-muted leading-relaxed">
              Our graduates are prepared to secure the digital world. With a strong focus on practical skills and industry certifications, we ensure 100% placement support for our students in top-tier organizations.
            </p>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8">
              <StatItem label="HIRING COMPANIES" value="20+" color="text-neon-cyan" />
              <StatItem label="AVG PACKAGE" value="Rs. 6.5 LPA" color="text-neon-magenta" />
              <StatItem label="PLACEMENT RATE" value="85%" color="text-neon-green" />
            </div>
          </div>

          <div className="w-full lg:w-96">
            <div className="p-8 bg-cyber-panel border border-neon-magenta/30 rounded-3xl relative overflow-hidden group">
              <div className="flex items-center gap-6 mb-8">
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden border border-neon-magenta/50">
                  <img src="https://cy-iy.vercel.app/static/Rachana_faculty.jpeg" alt="Dr. Rachana P G" className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div>
                  <h4 className="font-orbitron font-bold text-text-primary">Dr. Rachana P G</h4>
                  <p className="text-xs font-mono text-neon-magenta uppercase tracking-widest">Placement Coordinator</p>
                </div>
              </div>
              <div className="space-y-2 font-mono text-[10px] text-text-muted">
                <p>{`> TEL: +91 63606 01253`}</p>
                <p>{`> MAIL: rachanapg@gmit.ac.in`}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Logo Ticker */}
        <div className="relative py-12 border-y border-white/5 bg-cyber-panel/30">
          <div className="flex whitespace-nowrap animate-ticker hover:pause-animation">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex items-center gap-16 px-8">
                <img src="https://res.cloudinary.com/dkg60zkba/image/upload/v1774188373/placement/recruitment_partners.png" alt="Recruitment Partners" className="h-16 object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 20s linear infinite;
        }
        .pause-animation {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

function StatItem({ label, value, color }: { label: string, value: string, color: string }) {
  return (
    <div className="space-y-1">
      <p className={`text-3xl font-orbitron font-bold ${color}`}>{value}</p>
      <p className="text-[10px] font-mono text-text-muted uppercase tracking-tighter">{label}</p>
    </div>
  );
}
