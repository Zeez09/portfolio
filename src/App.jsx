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
    'a Front End Developer',
    'a ReactJs|React Native Developer',
    
    
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
    <div className="flex flex-col min-h-screen bg-[#1e1e1e] text-white overflow-x-hidden p-20">
      <div className="flex items-center justify-between w-full relative sm:justify-center">
      <nav className={`mt-2 fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black border
    border-gray-800 rounded-full px-6 py-3 w-full max-w-[600px] backdrop-blur-md shadow-lg
     transition-all duration-300 ease-in-out ${showNavbar ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'}`}>

{/* mobile */}
          <div className="flex w-full items-center justify-between sm:hidden py-3 px-6">
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



      <section className="w-full min-h-screen flex justify-center items-center bg-[#1e1e1e]">
        <div className="text-center p-6 w-full max-w-2xl">
        <h1 className="text-2xl md:text-4xl font-bold">Hey there, I'm Haruna Abdulazeez</h1>
          <h2 className="text-xl font-bold animate-pulse">{constantItem} {dynamicItems[currentItem]}</h2>
          <p className="text-base sm:text-lg text-gray-300">I am a software developer who crafts scalable web applications with HTML, CSS,
            React, and JavaScript — focusing on clean code, efficient solutions, and seamless user experiences.</p>
            <div className="flex flex-row justify-center gap-3">
              <img src={twitter} alt="" className="h-5 w-5" />
              <img src={github} alt="" className="h-5 w-5" />
              <img src={linkedin} alt="" className="h-5 w-5" />
            </div>
  </div>
</section>

<section id="portfolio" className="leading-12">
<h1 className="text-2xl md:text-7xl font-bold mb-10">Portfolio</h1>
  <Projects />
</section>

<section id="about">
<div className="w-full px-4 py-12">
  <h1 className="text-2xl md:text-7xl font-bold"> About</h1>
  <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl mx-auto">
    
    <p className="text-base sm:text-lg text-gray-300 text-center md:text-left leading-relaxed">
      "I'm a highly motivated and innovative frontend web developer,<br />
  passionate about developing and creating web solutions for industry<br />
  and individuals alike. I have an excellent trouble shooting and communication skills,<br />
  I help make connections between products, businesses and end-users. Bringing prototype to working<br />
  solution, employing the best practices to making sure the prototype and the product are as close as can be<br />
  "</p>
  <div className="">
    <img src={avatar} alt="" className="w-[120px] h-[160px] rounded-2xl object-cover"/>
  </div>

  </div>

  </div>

</section>


  <section id="contact" className="leading-loose">
  <div className="w-full px-4 py-12 leading-loose">
  <h1 className="text-2xl md:text-7xl font-bold"> Say hello</h1>
  <h3 className="text-2xl">
    Have any project in mind? shoot me a message let's work
  </h3>

  <div className="flex flex-col sm:flex-row justify-between items-center gap-10 sm:gap-20 mt-20 px-4 text-center sm:text-left">
    <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="blank" rel= "noopener noreferrer"> 
    <h1 className="text-gray-500 hover:text-white transition duration-300 text-3xl">Harunaabdulazeez766@gmail.com</h1>
    </a>

    <div className="flex flex-col sm:flex-row gap-5">

    <a href="https://x.com/Zeez_IV"
    target="blank"
    rel="noopener noreferrer">
    <img src={twitter} alt="" className="w-10 h-10 transition duration-300 hover:scale-125" />
      </a>
      <a href="https://wa.me/+2348036401635"
    target="blank"
    rel="noopener noreferrer">
    <img src={whatsApp} alt="" className="w-10 h-10 transition duration-300 hover:scale-125" />
    </a>

    <img src={linkedin} alt="" className="w-10 h-10 transition duration-300 hover:scale-125" />

    <a href="https://github.com/Zeez09"
    target="blank"
    rel="noopener noreferrer">
    <img src={github} alt="" className="w-10 h-10 transition duration-300 hover:scale-125" />
    </a>

  </div>
  </div>
  

  </div>
  </section>


 







</div>






    </>
  );
};

export default App;
