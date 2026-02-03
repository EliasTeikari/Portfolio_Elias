import Hero from "@/components/Hero";
import IntroMessage from "@/components/IntroMessage";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Social from "@/components/Social";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <Hero />

      {/* Intro Message */}
      <IntroMessage />

      {/* Journey Timeline */}
      <div id="journey">
        <Timeline />
      </div>

      {/* Projects Showcase */}
      <div id="projects">
        <Projects />
      </div>

      {/* Marquee Background */}
      <Skills />

      {/* Social & Connect */}
      <Social />

      {/* Footer */}
      <Footer />
    </main>
  );
}
