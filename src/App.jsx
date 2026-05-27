import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import "./index.css";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="app">
      <Navbar scrolled={scrolled} />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
      <footer className="footer">
        <p>© 2025 Tushar Poonia · Built with React + Vite</p>
      </footer>
    </div>
  );
}
