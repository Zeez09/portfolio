import React, { useEffect, useRef } from "react";
import { FaReact, FaNode } from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiExpo,
  SiSanity,
} from "react-icons/si";
import TechSkills from "./TechSkills";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const GSAPIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="256" cy="256" r="256" fill="#88CE02" />
    <text
      x="50%"
      y="55%"
      textAnchor="middle"
      fontSize="150"
      fill="#fff"
      fontFamily="Arial, sans-serif"
      dominantBaseline="middle"
    >
      GSAP
    </text>
  </svg>
);

function TechStack() {
  const iconsContainerRef = useRef(null);

  useEffect(() => {
    // Animate when the container scrolls into view
    gsap.fromTo(
      iconsContainerRef.current.children,
      { opacity: 0, y: 20, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.2,
        duration: 0.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: iconsContainerRef.current,
          start: "top 80%", // when top of container hits 80% of viewport
          toggleActions: "play none none none", // play once
        },
      }
    );
  }, []);

  return (
    <div className="mt-16 pb-16">
      <h1 className="text-2xl md:text-5xl text-center font-bold">My Tech Stack</h1>

      <div
        className="flex gap-10 justify-center flex-wrap p-10 mt-10"
        ref={iconsContainerRef}
      >
        <TechSkills text="React">
          <FaReact size={40} color="#00D8FF" />
        </TechSkills>

        <TechSkills text="Next.js">
          <SiNextdotjs size={40} color="#000" />
        </TechSkills>

        <TechSkills text="JavaScript">
          <SiJavascript size={40} color="#F5DE19" />
        </TechSkills>

        <TechSkills text="TailwindCss">
          <SiTailwindcss size={40} color="#764ABC" />
        </TechSkills>

        <TechSkills text="NodeJs">
          <FaNode size={40} color="#215732" />
        </TechSkills>

        <TechSkills text="ExpressJs">
          <SiExpress size={40} color="#333" />
        </TechSkills>

        <TechSkills text="Expo">
          <SiExpo size={40} color="#000" />
        </TechSkills>

        <TechSkills text="Sanity">
          <SiSanity size={40} color="#FF3E00" />
        </TechSkills>

        <TechSkills text="GSAP">
          <GSAPIcon />
        </TechSkills>
      </div>
    </div>
  );
}

export default TechStack;