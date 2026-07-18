import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const SECTION_IDS = ["about", "skills", "experience", "projects", "education", "contact"];

export default function Home() {
  useEffect(() => {
    let ticking = false;

    const updateActiveLink = () => {
      const sections = SECTION_IDS.map((id) => document.getElementById(id));
      const navLinks = document.querySelectorAll(".nav-link");
      const scrollPos = window.scrollY + 140;
      let currentId = "";

      for (const sec of sections) {
        if (sec && sec.offsetTop <= scrollPos) currentId = sec.id;
      }

      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
      });
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveLink);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ background: "var(--bg)", color: "var(--ink)", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
