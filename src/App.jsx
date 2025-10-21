import React from "react";
import './App.css';
import gmail from "./assets/images/icons8-gmail-48.png";
import Hamburger from 'hamburger-react';
import { useState, useEffect } from "react";
import twitter from "./assets/images/icons8-twitter-30.png";
import github from "./assets/images/icons8-github-logo-24.png";
import linkedin from "./assets/images/icons8-linkedin-48.png";
import Projects from "../src/components/Projects";
import avatar from "./assets/images/medium-shot-anime-style-man-portrait.jpg";
import whatsApp from "./assets/images/icons8-whatsapp-50.png";
import ContactForm from "./components/ContactForm";




const App = () => {

  const [activeSection, setActiveSection] = useState('portfolio');


  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navItems = ['Portfolio', 'About', 'Contact'];

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  const constantItem = 'I am';
  const dynamicItems = [
    'an Enthusiastic Dev',
    'a software Developer',
    'a mobile App Developer',
    'a React Native Developer',
    
    
  ];
  
  const [currentItem, setCurrentItem] = useState(0);


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentItem((prevItem) => (prevItem + 1) % dynamicItems.length);
    }, 2500);

    return () => clearInterval(intervalId); 
  }, []);

  useEffect(() => {
    const sectionIds = ['portfolio', 'about', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -60% 0px', 
        threshold: 0.1,
      }
    );
  
    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
  
    return () => observer.disconnect();
  }, []);


  const [showNavbar, setShowNavbar] = useState(true);
const [lastScrollY, setLastScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 60) {
      setShowNavbar(false); // scrolling down
    } else {
      setShowNavbar(true); // scrolling up
    }
    setLastScrollY(currentScrollY);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [lastScrollY]);



  


  return (
    <>
    <div className="flex flex-col bg-[#1e1e1e] text-white overflow-x-hidden p-20">
      <div className="flex items-center justify-between w-full relative sm:justify-center">
      <nav className={`fixed top-9 left-1/2 transform -translate-x-1/2 z-50 bg-black border border-gray-800 rounded-full
px-4 py-2 sm:px-6 sm:py-3 w-[90%] sm:w-full max-w-[600px] backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out
${showNavbar ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'}`}>


{/* mobile */}
          <div className="flex w-full items-center justify-between sm:hidden p-1">
            <button onClick={toggleSidebar}>
              <Hamburger toggled={sidebarOpen} toggle={setSidebarOpen} size={16} />
            </button>
            
            <a
  href="mailto:harunaabdulazeez766@gmail.com"
  className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2
   rounded-2xl font-semibold flex items-center gap-2 transition duration-300 whitespace-nowrap"
>
  let’s work
  <span>
    <img src={gmail} alt="gmail" className="w-4 h-4" />
  </span>
</a>

          </div>

          {/* Desktop */}
<div className="hidden sm:flex items-center justify-center w-full">
  <div className="flex items-center gap-6 text-white text-base font-medium">
    {navItems.map((item, index) => {
      const href = `#${item.toLowerCase()}`;
      const isActive = activeSection === item.toLowerCase();

      return (
        <React.Fragment key={item}>
          <a
            href={href}
            className={`whitespace-nowrap transition ${isActive ? 'text-violet-400 font-semibold' : 'hover:text-violet-400'}`}
          >
            {item}
          </a>
          {index !== navItems.length - 1 && <span className="text-gray-600">|</span>}
        </React.Fragment>
      );
    })}
  </div>

  <a
  href="mailto:harunaabdulazeez766@gmail.com"
  className="bg-violet-600 hover:bg-violet-700 text-white px-6
   py-3 rounded-2xl font-semibold flex items-center gap-2 transition duration-300 whitespace-nowrap
    focus:ring-4 focus:ring-violet-300 ml-10"
>
  Let’s work
  <span>
    <img src={gmail} alt="gmail" className="w-5 h-5" />
  </span>
</a>


</div>
</nav>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black border-r border-gray-800 shadow-lg z-50 transform
           transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
          <button className="text-white text-2xl" onClick={closeSidebar}>
            &times;
          </button>
        </div>

        <div className="flex flex-col gap-4 px-6 py-6 text-white text-base font-medium">
          {navItems.map((item) =>{
            const href = `#${item.toLowerCase()}`;
            const isActive = activeSection === item.toLowerCase();
          return (
            <a
            key={item}
            href={href}
            className={`cursor-pointer transition ${
              isActive ? 'text-violet-400 font-semibold' : 'hover:text-violet-400'
            }`}
            onClick={closeSidebar}
          >
            {item}
          </a>
          );
})}

<a
  href="mailto:harunaabdulazeez766@gmail.com"
  className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-2xl 
  font-semibold flex items-center gap-2 transition duration-300 whitespace-nowrap"
>
  let’s work
  <span>
    <img src={gmail} alt="gmail" className="w-4 h-4" />
  </span>
</a>

        </div>
      </div>

      {/* sidebar actions */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
          onClick={closeSidebar}
        />
      )}



     <section className="w-full min-h-[80vh] sm:min-h-[85vh] lg:min-h-screen flex justify-center items-center bg-[#1e1e1e]">

  <div className="text-center p-6 w-full max-w-6xl">
    <h1 className="text-xl md:text-3xl font-bold">Hey there, I'm Haruna Abdulazeez</h1>
    <h2 className="text-xl font-bold animate-pulse">{constantItem} {dynamicItems[currentItem]}</h2>
    <p className="text-base sm:text-lg text-gray-300">
      I am a software developer who crafts scalable web applications with HTML, CSS,
      React, and JavaScript — focusing on clean code, efficient solutions, and seamless user experiences.
    </p>
    <div className="flex flex-row justify-center gap-3 mt-4 mb-10">
      <a href="https://x.com/Zeez_IV"
    target="blank"
    rel="noopener noreferrer">
      <img src={twitter} alt="Twitter" className="w-10 h-10 transition duration-300 hover:scale-125" />
      </a>

      <a href="https://wa.me/+2348036401635" target="blank" rel="noopener noreferrer">
            <img src={whatsApp} alt="WhatsApp" className="w-10 h-10 transition duration-300 hover:scale-125" />
          </a>

      <a href="https://github.com/Zeez09"
    target="blank"
    rel="noopener noreferrer">
      <img src={github} alt="GitHub" className="w-10 h-10 transition duration-300 hover:scale-125" />
      </a>

      <a href="https://www.linkedin.com/in/haruna-abdulazeez/"
    target="blank"
    rel="noopener noreferrer">
      <img src={linkedin} alt="LinkedIn" className="w-10 h-10 transition duration-300 hover:scale-125 hover:cursor-pointer" /></a>
    </div>

<a
  href="/HARUNA ABDULAZEEZ OLORUNFEMI updated.pdf"
  download
  className="bg-violet-600 text-white px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-medium rounded-lg hover:bg-violet-700 transition-all duration-300 mt-6 inline-block text-center w-full sm:w-auto"
>
  📄 Download Resume
</a>


  </div>
</section>

<section id="portfolio" className="leading-12 ">
<h1 className="text-2xl md:text-7xl font-bold mb-10 flex justify-center">Portfolio</h1>
  <Projects />
</section>

<section id="about">
<div className="w-full px-4 py-12">
  <h1 className="text-2xl md:text-7xl font-bold flex justify-center"> About</h1>
  <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:max-w-4xl mx-auto">
    
    <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed text-center md:text-left sm:max-w-4xl mx-auto px-4">
  I’m a passionate and innovative software developer dedicated to building intuitive and impactful web solutions. I transform ideas into user-focused products through clean code, creativity, and attention to detail.
</p>

  <div className="">
    <img src={avatar} alt="" className="w-42 h-38 rounded-full object-cover"/>
  </div>

  </div>

  </div>

</section>


  <section id="contact" className="leading-loose">
  

  

    <div className="flex flex-col justify-center items-center gap-10 mt-5 px-4 text-center">
  <ContactForm />


  
  
  

  </div>
  </section>


 







</div>






    </>
  );
};

export default App;
