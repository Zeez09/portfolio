import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

import twitter from "../assets/images/icons8-twitter-30.png";
import github from "../assets/images/icons8-github-logo-24.png";
import linkedin from "../assets/images/icons8-linkedin-48.png";
import whatsApp from "../assets/images/icons8-whatsapp-50.png";

const Hero = () => {
  const constantItem = "I am";

  const dynamicItems = [
    "an Enthusiastic Dev",
    "a Software Developer",
    "a Mobile App Developer",
    "a React Native Developer",
  ];

  const [currentItem, setCurrentItem] = useState(0);

  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const iconsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const downloadBtnRef = useRef(null);

  // Subtitle rotation
  useEffect(() => {
    const intervalId = setInterval(() => {
      gsap.to(subtitleRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          setCurrentItem((prev) => (prev + 1) % dynamicItems.length);

          gsap.to(subtitleRef.current, {
            opacity: 1,
            duration: 0.3,
          });
        },
      });
    }, 2500);

    return () => clearInterval(intervalId);
  }, []);

  // Hero entrance animation
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    tl.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    );

    tl.fromTo(
      descriptionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8 },
      "-=0.4"
    );

    tl.fromTo(
      iconsRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
      },
      "-=0.6"
    );

    tl.fromTo(
      downloadBtnRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.4"
    );

    return () => {
  tl.kill();
};
  }, []);

  const socialLinks = [
    { icon: twitter, url: "https://x.com/Zeez_IV" },
    { icon: whatsApp, url: "https://wa.me/+2348036401635" },
    { icon: github, url: "https://github.com/Zeez09" },
    {
      icon: linkedin,
      url: "https://www.linkedin.com/in/haruna-abdulazeez/",
    },
  ];

  return (
    <section className="w-full flex justify-center items-center bg-[#1e1e1e] text-center mt-30 md:mt-0 h-auto md:h-screen">
      <div className="p-3 sm:p-6 w-full max-w-6xl">
        <h1
          ref={titleRef}
          className="hero-title text-lg sm:text-3xl font-bold leading-snug"
        >
          Hey there, I'm Haruna Abdulazeez
        </h1>

        <h2
          ref={subtitleRef}
          className="hero-subtitle text-base sm:text-xl font-bold mt-1"
        >
          {constantItem} {dynamicItems[currentItem]}
        </h2>

        <p
          ref={descriptionRef}
          className="hero-description text-sm sm:text-lg text-gray-300 mt-3 px-1"
        >
          I’m a software developer who crafts scalable web apps using React and
          JavaScript — focusing on clean code, efficient solutions, and seamless
          user experiences.
        </p>

        <div className="hero-icons flex justify-center gap-3 mt-4 mb-10">
          {socialLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              ref={(el) => {
                iconsRef.current[idx] = el;
              }}
            >
              <img
                src={item.icon}
                alt="Social media"
                className="w-8 h-8 sm:w-10 sm:h-10 transition duration-300 hover:scale-125"
              />
            </a>
          ))}
        </div>

        <a
          ref={downloadBtnRef}
          href="/Haruna_Abdulazeez_CV.pdf"
          download
          className="download-btn bg-violet-600 text-white px-3 py-2 text-sm 
          min-[380px]:px-4 min-[380px]:py-2.5 min-[380px]:text-base 
          sm:px-6 sm:py-3 sm:text-base font-medium rounded-lg hover:bg-violet-700 
          transition-all duration-300 mt-4 inline-block text-center sm:w-auto"
        >
          📄 Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
