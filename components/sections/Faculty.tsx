"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Download, FileText, ScanFace, ShieldCheck } from "lucide-react";
import { faculty } from "@/lib/siteData";

type FacultyMember = (typeof faculty)[number];

export default function Faculty() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = faculty[activeIndex];
  const nextIndex = (activeIndex + 1) % faculty.length;
  const previousIndex = (activeIndex - 1 + faculty.length) % faculty.length;

  const profileStats = useMemo(
    () => [
      { label: "PROFILE", value: String(activeIndex + 1).padStart(2, "0") },
      { label: "STATUS", value: active.cv ? "CV_ONLINE" : "CV_PENDING" },
      { label: "SIGNAL", value: active.signal },
    ],
    [active, activeIndex]
  );

  const move = (direction: 1 | -1) => {
    setActiveIndex((current) => (current + direction + faculty.length) % faculty.length);
  };

  return (
    <section id="faculty" className="relative py-24 px-6 lg:px-24 bg-cyber-dark/30 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[linear-gradient(90deg,#00f5ff_1px,transparent_1px),linear-gradient(#00f5ff_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-neon-green">
              / faculty neural registry
            </p>
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold">
              <span className="text-neon-cyan">FACULTY_</span>
              <span className="glitch-text" data-text="COMMAND.deck">COMMAND.deck</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous faculty"
              onClick={() => move(-1)}
              className="grid h-12 w-12 place-items-center border border-neon-cyan/40 text-neon-cyan transition-all hover:bg-neon-cyan hover:text-cyber-black hover:shadow-[0_0_24px_rgba(0,245,255,0.45)]"
            >
              <ChevronLeft size={22} />
            </button>
            <div className="min-w-24 border border-white/10 bg-cyber-panel px-4 py-3 text-center font-mono text-xs text-text-muted">
              {String(activeIndex + 1).padStart(2, "0")} / {String(faculty.length).padStart(2, "0")}
            </div>
            <button
              type="button"
              aria-label="Next faculty"
              onClick={() => move(1)}
              className="grid h-12 w-12 place-items-center border border-neon-magenta/40 text-neon-magenta transition-all hover:bg-neon-magenta hover:text-cyber-black hover:shadow-[0_0_24px_rgba(255,0,255,0.45)]"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1fr)_380px]">
          <div className="relative min-h-[620px] overflow-hidden border border-neon-cyan/25 bg-cyber-panel/80 shadow-[inset_0_0_50px_rgba(0,245,255,0.05)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.name}
                initial={{ opacity: 0, x: 80, filter: "blur(12px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -80, filter: "blur(12px)" }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="grid min-h-[620px] grid-cols-1 lg:grid-cols-[46%_54%]"
              >
                <div className="relative min-h-[360px] overflow-hidden border-b border-neon-cyan/20 lg:border-b-0 lg:border-r">
                  <Image
                    src={active.photo}
                    alt={active.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-cover grayscale transition-all duration-700 hover:grayscale-0 hover:scale-105"
                    priority={activeIndex === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-cyber-black/25 to-transparent" />
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent animate-scanline" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="mb-3 inline-flex items-center gap-2 border border-neon-green/40 bg-cyber-black/70 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-neon-green">
                      <ScanFace size={14} />
                      identity verified
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {profileStats.map((stat) => (
                        <div key={stat.label} className="border border-white/10 bg-cyber-black/70 p-3">
                          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-text-muted">{stat.label}</p>
                          <p className="mt-1 truncate font-mono text-[10px] text-neon-cyan">{stat.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative flex flex-col justify-between p-8 md:p-10">
                  <div className="absolute right-8 top-8 text-neon-cyan/10">
                    <ShieldCheck size={110} strokeWidth={1} />
                  </div>

                  <div className="relative z-10">
                    <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-neon-magenta">
                      active faculty profile
                    </p>
                    <h3 className="max-w-2xl text-3xl font-black leading-tight text-text-primary md:text-5xl">
                      {active.name}
                    </h3>
                    <p className="mt-4 font-mono text-sm uppercase tracking-[0.25em] text-neon-cyan">
                      {active.role}
                    </p>

                    <div className="mt-8 border-l-2 border-neon-cyan/60 pl-5">
                      <p className="font-share-tech text-lg leading-relaxed text-text-primary/75">
                        {active.focus}
                      </p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      {active.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-neon-cyan/25 bg-neon-cyan/5 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-neon-cyan"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10 mt-10 flex flex-col gap-4 sm:flex-row">
                    {active.cv ? (
                      <a
                        href={active.cv}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center justify-center gap-3 border border-neon-magenta px-5 py-4 font-mono text-xs uppercase tracking-[0.22em] text-neon-magenta transition-all hover:bg-neon-magenta hover:text-cyber-black hover:shadow-[0_0_24px_rgba(255,0,255,0.45)]"
                      >
                        <Download size={16} />
                        $ ./download_cv.sh
                      </a>
                    ) : (
                      <span className="inline-flex items-center justify-center gap-3 border border-white/10 px-5 py-4 font-mono text-xs uppercase tracking-[0.22em] text-text-muted">
                        <FileText size={16} />
                        $ ./cv_pending.sh
                      </span>
                    )}

                    <button
                      type="button"
                      onClick={() => move(1)}
                      className="inline-flex items-center justify-center gap-3 border border-neon-cyan/40 px-5 py-4 font-mono text-xs uppercase tracking-[0.22em] text-neon-cyan transition-all hover:bg-neon-cyan hover:text-cyber-black"
                    >
                      scan next profile
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <aside className="border border-neon-magenta/20 bg-cyber-panel/70 p-4">
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon-magenta">roster</p>
              <p className="font-mono text-[10px] text-text-muted">hover / click</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
              {faculty.map((member, index) => (
                <RosterButton
                  key={member.name}
                  member={member}
                  index={index}
                  active={index === activeIndex}
                  onSelect={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </aside>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[faculty[previousIndex], active, faculty[nextIndex], faculty[(activeIndex + 2) % faculty.length]].map((member, index) => (
            <button
              key={`${member.name}-${index}`}
              type="button"
              onClick={() => setActiveIndex(faculty.findIndex((item) => item.name === member.name))}
              className="group relative h-28 overflow-hidden border border-white/10 bg-cyber-panel text-left transition-all hover:border-neon-cyan"
            >
              <Image
                src={member.photo}
                alt={member.name}
                fill
                sizes="25vw"
                className="object-cover opacity-35 grayscale transition-all group-hover:opacity-70 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-black to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 truncate font-mono text-[10px] uppercase tracking-[0.18em] text-text-primary">
                {member.name}
              </p>
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scanline {
          0% { transform: translateY(0); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateY(620px); opacity: 0; }
        }
        .animate-scanline {
          animation: scanline 3.5s linear infinite;
        }
      `}</style>
    </section>
  );
}

function RosterButton({
  member,
  index,
  active,
  onSelect,
}: {
  member: FacultyMember;
  index: number;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      onMouseEnter={onSelect}
      className={`group grid grid-cols-[56px_1fr] gap-4 border p-3 text-left transition-all ${
        active
          ? "border-neon-cyan bg-neon-cyan/10 shadow-[0_0_22px_rgba(0,245,255,0.18)]"
          : "border-white/10 bg-cyber-black/45 hover:border-neon-magenta/60"
      }`}
    >
      <div className="relative h-14 w-14 overflow-hidden border border-white/10">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          sizes="56px"
          className="object-cover grayscale transition-all group-hover:grayscale-0"
        />
      </div>
      <div className="min-w-0">
        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-text-muted">
          node_{String(index + 1).padStart(2, "0")}
        </p>
        <p className="mt-1 truncate font-orbitron text-xs text-text-primary">{member.name}</p>
        <p className="mt-1 truncate font-mono text-[10px] uppercase text-neon-cyan/80">{member.role}</p>
      </div>
    </button>
  );
}
