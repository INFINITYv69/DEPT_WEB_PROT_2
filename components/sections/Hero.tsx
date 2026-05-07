import HeroScene from "@/components/sections/HeroScene";
import HeroContent from "@/components/sections/HeroContent";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <HeroScene />
      <HeroContent />
    </section>
  );
}
