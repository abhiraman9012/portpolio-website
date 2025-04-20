import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import StaticContact from "@/components/sections/StaticContact";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function StaticHome() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <StaticContact />
      </main>
      <Footer />
    </div>
  );
}