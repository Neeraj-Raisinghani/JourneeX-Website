import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import HowItWasBuilt from "@/components/HowItWasBuilt";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Features />
      <HowItWasBuilt variant="home" />
      <CTA />
    </main>
  );
}
