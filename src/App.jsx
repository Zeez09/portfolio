import React, { useState, useEffect } from "react";
import "./App.css";
import gmail from "./assets/images/icons8-gmail-48.png";
import Hamburger from "hamburger-react";
import twitter from "./assets/images/icons8-twitter-30.png";
import github from "./assets/images/icons8-github-logo-24.png";
import linkedin from "./assets/images/icons8-linkedin-48.png";
import Projects from "./components/Projects";
import avatar from "./assets/images/medium-shot-anime-style-man-portrait.jpg";
import whatsApp from "./assets/images/icons8-whatsapp-50.png";
import ContactForm from "./components/ContactForm";

const App = () => {
  const [activeSection, setActiveSection] = useState("portfolio");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navItems = ["Portfolio", "About", "Contact"];
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  const constantItem = "I am";
  const dynamicItems = [
    "an Enthusiastic Dev",
    "a Software Developer",
    "a Mobile App Developer",
    "a React Native Developer",
  ];
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentItem((prev) => (prev + 1) % dynamicItems.length);
    }, 2500);
    return () => clearInterval(intervalId);
  }, []);

  // Section observer
  useEffect(() => {
    const ids = ["portfolio", "about", "contact"];
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
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
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastScrollY && current > 60) setShowNavbar(false);
      else setShowNavbar(true);
      setLastScrollY(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div className="flex flex-col bg-[#1e1e1e] text-white overflow-x-hidden px-4 sm:px-10 pt-10 pb-20">
        {/* NAVBAR */}
        <div className="flex items-center justify-between w-full relative sm:justify-center">
          <nav
            className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black border border-gray-800 rounded-full
            px-3 py-2 sm:px-6 sm:py-3 w-[92%] sm:w-full max-w-[600px] backdrop-blur-md shadow-lg transition-all duration-300
            ${showNavbar ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            {/* Mobile Nav */}
            <div className="flex w-full items-center justify-between sm:hidden">
              <button onClick={toggleSidebar}>
                <Hamburger toggled={sidebarOpen} toggle={setSidebarOpen} size={18} />
              </button>
              <a
                href="mailto:harunaabdulazeez766@gmail.com"
                className="bg-violet-600 hover:bg-violet-700 text-white px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1 transition duration-300"
              >
                let’s work
                <img src={gmail} alt="gmail" className="w-4 h-4" />
              </a>
            </div>

            {/* Desktop Nav */}
            <div className="hidden sm:flex items-center justify-center w-full">
              <div className="flex items-center gap-6 text-white text-base font-medium">
                {navItems.map((item, index) => {
                  const href = `#${item.toLowerCase()}`;
                  const isActive = activeSection === item.toLowerCase();
                  return (
                    <React.Fragment key={item}>
                      <a
                        href={href}
                        className={`transition ${
                          isActive ? "text-violet-400 font-semibold" : "hover:text-violet-400"
                        }`}
                      >
                        {item}
                      </a>
                      {index !== navItems.length - 1 && (
                        <span className="text-gray-600">|</span>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
              <a
                href="mailto:harunaabdulazeez766@gmail.com"
                className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-2xl font-semibold flex items-center gap-2 transition duration-300 focus:ring-4 focus:ring-violet-300 ml-10"
              >
                Let’s work
                <img src={gmail} alt="gmail" className="w-5 h-5" />
              </a>
            </div>
          </nav>
        </div>

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-black border-r border-gray-800 shadow-lg z-50 transform transition-transform duration-300 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
            <button className="text-white text-2xl" onClick={closeSidebar}>
              &times;
            </button>
          </div>
          <div className="flex flex-col gap-4 px-6 py-6 text-white text-base font-medium">
            {navItems.map((item) => {
              const href = `#${item.toLowerCase()}`;
              const isActive = activeSection === item.toLowerCase();
              return (
                <a
                  key={item}
                  href={href}
                  className={`transition ${
                    isActive ? "text-violet-400 font-semibold" : "hover:text-violet-400"
                  }`}
                  onClick={closeSidebar}
                >
                  {item}
                </a>
              );
            })}
            <a
              href="mailto:harunaabdulazeez766@gmail.com"
              className="bg-violet-600 hover:bg-violet-700 text-white px-3 py-1.5 rounded-xl font-semibold flex items-center gap-1 transition duration-300 text-sm"
            >
              let’s work
              <img src={gmail} alt="gmail" className="w-4 h-4" />
            </a>
          </div>
        </div>

        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
            onClick={closeSidebar}
          />
        )}

        {/* HERO SECTION */}
        <section className="w-full mt-30 flex justify-center items-center bg-[#1e1e1e] text-center">
          <div className="p-3 sm:p-6 w-full max-w-6xl">
            <h1 className="text-lg sm:text-3xl font-bold leading-snug">
              Hey there, I'm Haruna Abdulazeez
            </h1>
            <h2 className="text-base sm:text-xl font-bold animate-pulse mt-1">
              {constantItem} {dynamicItems[currentItem]}
            </h2>
            <p className="text-sm sm:text-lg text-gray-300 mt-3 px-1">
              I’m a software developer who crafts scalable web apps using React and JavaScript —
              focusing on clean code, efficient solutions, and seamless user experiences.
            </p>
            <div className="flex justify-center gap-3 mt-4 mb-10">
              <a href="https://x.com/Zeez_IV" target="blank">
                <img
                  src={twitter}
                  alt="Twitter"
                  className="w-8 h-8 sm:w-10 sm:h-10 transition duration-300 hover:scale-125"
                />
              </a>
              <a href="https://wa.me/+2348036401635" target="blank">
                <img
                  src={whatsApp}
                  alt="WhatsApp"
                  className="w-8 h-8 sm:w-10 sm:h-10 transition duration-300 hover:scale-125"
                />
              </a>
              <a href="https://github.com/Zeez09" target="blank">
                <img
                  src={github}
                  alt="GitHub"
                  className="w-8 h-8 sm:w-10 sm:h-10 transition duration-300 hover:scale-125"
                />
              </a>
              <a href="https://www.linkedin.com/in/haruna-abdulazeez/" target="blank">
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  className="w-8 h-8 sm:w-10 sm:h-10 transition duration-300 hover:scale-125"
                />
              </a>
            </div>

            {/* Responsive Download Button */}
            <a
              href="/Abdulazeez_Haruna_cv.pdf"
              download
              className="bg-violet-600 text-white px-3 py-2 text-sm [380px]:px-4 [380px]:py-2.5 [380px]:text-base sm:px-6 sm:py-3 sm:text-base font-medium rounded-lg hover:bg-violet-700 transition-all duration-300 mt-4 inline-block text-center  sm:w-auto"
            >
              📄 Download Resume
            </a>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio" className="mt-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-violet-400 to-amber-300 bg-clip-text text-transparent">
          My Projects
        </h2>
          <Projects />
        </section>

        {/* ABOUT */}
        <section id="about" className="mt-16">
          <div className="w-full px-3 py-8 sm:px-6">
            <h1 className="text-2xl sm:text-5xl font-bold flex justify-center mb-8">About</h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:max-w-4xl mx-auto">
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed text-center md:text-left px-2">
                I’m a passionate and innovative software developer dedicated to building intuitive
                and impactful web solutions. I transform ideas into user-focused products through
                clean code, creativity, and attention to detail.
              </p>
              <img
                src={avatar}
                alt="avatar"
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-16">
          <div className="flex flex-col justify-center items-center gap-10 px-3 text-center">
            <ContactForm />
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
