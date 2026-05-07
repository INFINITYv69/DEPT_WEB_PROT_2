import type { Metadata } from "next";
import { Share_Tech_Mono, Orbitron } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import CRTOverlay from "@/components/ui/CRTOverlay";
import ScanlineSweep from "@/components/ui/ScanlineSweep";
import PerspectiveGrid from "@/components/ui/PerspectiveGrid";
import AmbientParticles from "@/components/ui/AmbientParticles";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const shareTechMono = Share_Tech_Mono({ 
  weight: "400", 
  subsets: ["latin"], 
  variable: "--font-share-tech" 
});
const orbitron = Orbitron({ 
  subsets: ["latin"], 
  variable: "--font-orbitron" 
});

export const metadata: Metadata = {
  title: "GMU Cyber Studio | Department of Cyber Security & Information Security",
  description: "A world-class cyberpunk 3D web experience for GM University.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${shareTechMono.variable} ${orbitron.variable} font-share-tech bg-cyber-black text-text-primary antialiased`}>
        <SmoothScroll>
          <div className="relative z-10">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
          
          {/* Global Background Effects */}
          <PerspectiveGrid />
          <AmbientParticles />
          <CRTOverlay />
          <ScanlineSweep />
          <CustomCursor />
        </SmoothScroll>
      </body>
    </html>
  );
}
