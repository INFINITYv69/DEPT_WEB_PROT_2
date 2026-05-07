"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });

      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
      });

      // Trail animation
      trailRefs.current.forEach((trail, index) => {
        if (trail) {
          gsap.to(trail, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1 + index * 0.02,
            ease: "power2.out",
          });
        }
      });
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("button") || 
        target.closest("a") ||
        target.classList.contains("interactive");

      if (isInteractive) {
        gsap.to(cursor, {
          scale: 1.5,
          backgroundColor: "rgba(255, 0, 255, 0.8)",
          borderColor: "transparent",
          width: 40,
          height: 40,
          duration: 0.3,
        });
      } else {
        gsap.to(cursor, {
          scale: 1,
          backgroundColor: "transparent",
          borderColor: "#00f5ff",
          width: 30,
          height: 30,
          duration: 0.3,
        });
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-9999 overflow-hidden">
      {/* Main Cursor Ring */}
      <div
        ref={cursorRef}
        className="fixed left-0 top-0 h-[30px] w-[30px] rounded-full border-2 border-neon-cyan transition-colors duration-300"
        style={{ boxShadow: "0 0 15px rgba(0, 245, 255, 0.5)" }}
      />
      
      {/* Center Dot */}
      <div
        ref={dotRef}
        className="fixed left-0 top-0 h-1 w-1 rounded-full bg-neon-cyan"
      />

      {/* Particle Trail */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => { if (el) trailRefs.current[i] = el; }}
          className="fixed left-0 top-0 h-1 w-1 rounded-full bg-neon-cyan opacity-40"
          style={{ 
            opacity: 1 - (i / 12),
            scale: 1 - (i / 15)
          }}
        />
      ))}
    </div>
  );
}
