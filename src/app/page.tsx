import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProjectGrid from "@/components/ProjectGrid";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { fetchProjects } from "@/lib/sanity";

export default async function Home() {
  const projects = await fetchProjects();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ProjectGrid projects={projects} />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
