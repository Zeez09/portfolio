import React, { useRef, useEffect } from "react";
import projects from "../data/Projects";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SiReact, SiJavascript, SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const swiperRef = useRef(null);
  const sectionRef = useRef(null);

  // ✅ Entrance animation
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
};

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#0b0b0b] text-white py-12 px-7 sm:px-10 md:px-12 relative rounded-2xl shadow-[0_0_20px_3px_rgba(139,92,246,0.2)] pb-16"
    >
      <div className="max-w-6xl mx-auto space-y-12 relative">
        <div className="relative">
          {/* Swiper */}
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Pagination, Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="buttons"
          >
            {projects.map((project) => (
              <SwiperSlide
                key={project.id}
                className="px-2 py-4 flex justify-center"
              >
                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-gradient-to-br from-zinc-900/90 to-zinc-800/60 rounded-xl border border-zinc-700/40 shadow-lg hover:shadow-violet-500/20 p-5 transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/40">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-44 sm:h-48 md:h-52 object-cover rounded-lg mb-3 shadow-md"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-violet-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-3 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex gap-2 mb-4">
                    {project.tech.map((tech) => (
                    <span key={tech}>{techIcons[tech]}</span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-amber-200 to-amber-400 text-black px-4 py-1.5 rounded-lg font-semibold shadow-md hover:shadow-amber-300/50 hover:scale-105 transition-transform text-sm"
                  >
                    Live Preview
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom navigation arrows */}
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