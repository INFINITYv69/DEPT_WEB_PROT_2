"use client";

export default function CRTOverlay() {
  return (
    <>
      {/* Repeating Scanlines */}
      <div className="pointer-events-none fixed inset-0 z-[100] h-full w-full opacity-[0.03] crt-lines" />
      
      {/* Subtle Noise Texture Overlay */}
      <div className="pointer-events-none fixed inset-0 z-[101] h-full w-full opacity-[0.02]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Screen Vignette */}
      <div className="pointer-events-none fixed inset-0 z-[102] h-full w-full bg-[radial-gradient(circle_at_center,transparent_0%,rgba(1,4,9,0.3)_100%)]" />
    </>
  );
}
