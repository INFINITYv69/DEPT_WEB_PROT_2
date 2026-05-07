"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Play, RadioTower } from "lucide-react";
import { universityVideos } from "@/lib/siteData";

export default function UniversityGallery() {
  return (
    <section id="university-gallery" className="relative overflow-hidden bg-cyber-black px-6 py-24 lg:px-24">
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[radial-gradient(circle_at_20%_20%,#ff00ff,transparent_28%),radial-gradient(circle_at_80%_0%,#00f5ff,transparent_30%)]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.35em] text-neon-green">
              <RadioTower size={16} />
              campus broadcast archive
            </p>
            <h2 className="text-4xl font-black md:text-5xl">
              <span className="text-neon-magenta">UNIVERSITY_</span>
              <span className="glitch-text" data-text="GALLERY.video">GALLERY.video</span>
            </h2>
          </div>
          <p className="font-share-tech text-sm leading-relaxed text-text-muted">
            Selected GM University video transmissions with direct YouTube access. Hover a feed to power up the preview, then open the full broadcast in a new tab.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {universityVideos.map((video, index) => (
            <motion.a
              key={video.url}
              href={video.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="group relative overflow-hidden border border-neon-cyan/20 bg-cyber-panel shadow-[inset_0_0_34px_rgba(0,245,255,0.04)] transition-all hover:-translate-y-1 hover:border-neon-magenta hover:shadow-[0_0_32px_rgba(255,0,255,0.18)]"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={video.thumbnail}
                  alt={`${video.title} thumbnail`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-cyber-black/20 to-transparent" />
                <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="absolute inset-y-0 left-0 w-1/3 bg-neon-cyan/10 blur-2xl" />
                  <div className="absolute inset-y-0 right-0 w-1/3 bg-neon-magenta/10 blur-2xl" />
                </div>

                <div className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-neon-cyan/60 bg-cyber-black/70 text-neon-cyan backdrop-blur-md transition-all group-hover:scale-110 group-hover:border-neon-magenta group-hover:text-neon-magenta">
                  <Play size={30} fill="currentColor" />
                </div>

                <div className="absolute left-4 top-4 border border-neon-green/40 bg-cyber-black/75 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-neon-green">
                  {video.code}
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 p-5">
                <div>
                  <h3 className="font-orbitron text-lg font-bold text-text-primary">{video.title}</h3>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-text-muted">
                    open youtube feed
                  </p>
                </div>
                <ExternalLink className="shrink-0 text-neon-cyan transition-colors group-hover:text-neon-magenta" size={20} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
