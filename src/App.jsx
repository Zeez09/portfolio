
import React, { useState, useEffect, useRef } from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import About from "./components/About";
import Tech from "./components/Tech";
import ContactForm from "./components/ContactForm";

const App = () => {
  const [activeSection, setActiveSection] = useState("portfolio");
  const [showNavbar, setShowNavbar] = useState(true);

  const lastScrollY = useRef(0);

  // Section observer
  useEffect(() => {
    const ids = ["portfolio", "about", "contact"];

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }),
      { rootMargin: "-30% 0px -60% 0px", threshold: 0.1 }
    );

    ids.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Hide navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScrollY.current && current > 60) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col bg-[#1e1e1e] text-white overflow-x-hidden px-4 sm:px-10 pt-10 pb-20">

      {/* NAVBAR */}
      <NavBar
        activeSection={activeSection}
        showNavbar={showNavbar}
      />

      {/* HERO */}
      <HeroSection />

      {/* PORTFOLIO */}
      <section id="portfolio" className="mt-10 sm:mt-0 px-4 sm:px-8">
        <Projects />
      </section>

      {/* ABOUT */}
      <About />

      {/* TECH STACK */}
      <Tech />

      {/* CONTACT */}
      <section id="contact" className="mt-4">
        <div className="flex flex-col justify-center items-center gap-10 px-3 text-center">
          <ContactForm />
        </div>
      </section>

    </div>
  );
};

export default App;
