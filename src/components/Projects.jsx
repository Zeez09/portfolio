import React, { useRef } from "react";
import projects from "../data/Projects";
import { ChevronLeft, ChevronRight } from "lucide-react";
import react from "../assets/images/icons8-react-40.png";
import java from "../assets/images/icons8-javascript-64.png";
import tailwind from "../assets/images/icons8-tailwindcss-48.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Projects = () => {
  const swiperRef = useRef(null);

  return (
    <section className="w-full bg-[#0b0b0b] text-white py-12 px-7 sm:px-10 md:px-12 relative overflow-hidden rounded-2xl shadow-[0_0_20px_3px_rgba(139,92,246,0.2)]">
      <div className="max-w-6xl mx-auto space-y-12 relative">
        

        <div className="relative">
          

          {/* Swiper */}
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Navigation, Pagination, Autoplay]}
            navigation={true}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="buttons"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="px-2 py-4">
                <div className="min-w-[70%] sm:min-w-[45%] md:min-w-[30%] bg-gradient-to-br from-zinc-900/90 to-zinc-800/60 rounded-xl border border-zinc-700/40 shadow-lg hover:shadow-violet-500/20 p-5 transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/40">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-44 object-cover rounded-lg mb-3 shadow-md"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-violet-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-3 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex gap-2 mb-4">
                    <img src={react} alt="React" className="w-6 h-6 opacity-80" />
                    <img src={java} alt="JavaScript" className="w-6 h-6 opacity-80" />
                    <img src={tailwind} alt="TailwindCSS" className="w-6 h-6 opacity-80" />
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

          {/* Navigation buttons */}
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
