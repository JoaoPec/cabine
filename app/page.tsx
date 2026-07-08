import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Genres } from "@/components/Genres";
import { Roster } from "@/components/Roster";
import { HowItWorks } from "@/components/HowItWorks";
import { ForDJs } from "@/components/ForDJs";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Genres />
      <Roster />
      <HowItWorks />
      <ForDJs />
      <FinalCTA />
      <Footer />
    </main>
  );
}
