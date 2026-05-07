"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PerspectiveGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.to(containerRef.current, {
      y: "-20%",
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-cyber-black">
      <div 
        ref={containerRef}
        className="absolute inset-0 h-[200%] w-full"
        style={{
          perspective: "1000px",
          perspectiveOrigin: "50% 50%",
        }}
      >
        <div 
          className="absolute inset-0 h-full w-full"
          style={{
            transform: "rotateX(60deg)",
            transformOrigin: "center center",
            backgroundSize: "60px 60px",
            backgroundImage: `
              linear-gradient(to right, rgba(0, 245, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 245, 255, 0.1) 1px, transparent 1px)
            `,
            maskImage: "linear-gradient(to bottom, transparent, black 40%, black 60%, transparent)",
          }}
        >
          {/* Pulsing Glow Layer */}
          <div className="absolute inset-0 h-full w-full animate-pulse opacity-50"
            style={{
              backgroundSize: "60px 60px",
              backgroundImage: `
                linear-gradient(to right, rgba(0, 245, 255, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0, 245, 255, 0.05) 1px, transparent 1px)
              `,
            }}
          />
        </div>
      </div>
    </div>
  );
}
