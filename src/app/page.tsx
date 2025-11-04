import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { SwimGroups } from "@/components/SwimGroups";
import { Pool } from "@/components/Pool";
import { Events } from "@/components/Events";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <SwimGroups />
        <Pool />
        <Events />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
