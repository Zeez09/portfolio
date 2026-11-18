import React, { useRef, useEffect, useState } from "react";
import projects from "../data/Projects";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiSanity,
  SiVite,
} from "react-icons/si";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const swiperRef = useRef(null);
  const sectionRef = useRef(null);

  const [activeTab, setActiveTab] = useState("personal");

  const filteredProjects = projects.filter(
    (project) => project.category === activeTab
  );

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  const techIcons = {
    react: <SiReact className="text-blue-500" />,
    javascript: <SiJavascript className="text-yellow-500" />,
    tailwindcss: <SiTailwindcss className="text-teal-400" />,
    typescript: <SiTypescript className="text-blue-600" />,
    nextjs: <SiNextdotjs className="text-gray-300" />,
    sanity: <SiSanity className="text-red-500" />,
    vite: <SiVite className="text-purple-500" />, 
    
  };

  return (
    <section
      ref={sectionRef}
      className="w-full text-white px-2 sm:px-2 md:px-12 relative mt-5 md:mt-0"
    >
      <div className="max-w-6xl mx-auto space-y-10 relative">
        {/* Section Heading */}
        {/* Section Heading */}
        <div className="text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Selected Projects
          </h2>

          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
            A collection of projects I've independently built and collaborative
            work I've contributed to.
          </p>

          {/* Project Toggle */}
          <div className="mx-auto flex w-full max-w-90 items-center gap-1 rounded-xl border border-white/10 bg-[#242424] p-1">
            <button
              onClick={() => setActiveTab("personal")}
              className={`flex-1 whitespace-nowrap rounded-lg px-2 sm:px-5 py-2.5 text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeTab === "personal"
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-500/20"
                  : "text-gray-400 hover:text-white hover:cursor-pointer"
              }`}
            >
              Personal Projects
            </button>

            <button
              onClick={() => setActiveTab("collaborative")}
              className={`flex-1 whitespace-nowrap rounded-lg px-2 sm:px-5 py-2.5 text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeTab === "collaborative"
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-500/20"
                  : "text-gray-400 hover:text-white hover:cursor-pointer"
              }`}
            >
              Collaborative Projects
            </button>
          </div>
        </div>

        <div className="relative">
          {/* Swiper */}

          {/* Swiper */}
          <Swiper
            key={activeTab}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            loop={filteredProjects.length > 1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="projects-swiper"
          >
            {filteredProjects.map((project) => (
              <SwiperSlide
                key={project.id}
                className="px-2 py-4 flex justify-center h-auto!"
              >
                {/* Project Card */}
                <div className="group relative flex h-full min-h-97.5 w-full max-w-none flex-col overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-[#242424] via-[#1c1c1c] to-[#151515] p-3.5 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/50 hover:shadow-[0_12px_40px_rgba(139,92,246,0.16)]">
                  {/* Project Image */}
                  <div className="relative mb-4 overflow-hidden rounded-xl bg-zinc-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-48 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-70" />
                  </div>

                  {/* Project Details */}
                  <div className="flex flex-1 flex-col px-1">
                    <h3 className="mb-2 text-lg font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-violet-300">
                      {project.title}
                    </h3>

                    <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-zinc-400">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-5 flex flex-wrap items-center gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/4 text-lg transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-500/10"
                          title={tech}
                        >
                          {techIcons[tech]}
                        </span>
                      ))}
                    </div>

                    {/* Live Preview */}
                    <div className="mt-auto">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-violet-600 to-purple-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-violet-500/10 transition-all duration-300 hover:from-violet-500 hover:to-purple-400 hover:shadow-lg hover:shadow-violet-500/25"
                      >
                        Live Preview
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <ChevronLeft
            className="absolute -left-10 top-1/2 -translate-y-1/2 text-gray-300 hover:text-violet-400 z-20 cursor-pointer hidden md:block"
            onClick={() => swiperRef.current?.slidePrev()}
          />

          <ChevronRight
            className="absolute -right-10 top-1/2 -translate-y-1/2 text-gray-300 hover:text-violet-400 z-20 cursor-pointer hidden md:block"
            onClick={() => swiperRef.current?.slideNext()}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
