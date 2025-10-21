import React, { useRef } from "react";
import projects from "../data/Projects";
import { ChevronLeft, ChevronRight } from "lucide-react";
import react from "../assets/images/icons8-react-40.png";
import java from "../assets/images/icons8-javascript-64.png";
import tailwind from "../assets/images/icons8-tailwindcss-48.png";

const Projects = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount =
        direction === "left" ? -current.offsetWidth / 1.2 : current.offsetWidth / 1.2;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
<section className="w-full bg-[#0b0b0b] text-white py-6 px-3 sm:py-10 sm:px-8 md:py-14 md:px-10 relative overflow-hidden rounded-xl md:rounded-2xl shadow-[0_0_15px_2px_rgba(139,92,246,0.3)] md:shadow-[0_0_30px_5px_rgba(139,92,246,0.3)]" >
      <div className="max-w-6xl mx-auto space-y-12 relative">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-violet-400 to-amber-300 bg-clip-text text-transparent">
          My Projects
        </h2>

        <div className="relative">
          {/* Fade Shadows */}
          <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-[#0b0b0b] to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[#0b0b0b] to-transparent pointer-events-none z-10"></div>

          {/* Chevron Buttons (hidden on mobile) */}
          <button
            onClick={() => scroll("left")}
            className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-zinc-900 to-transparent hover:scale-105 transition-transform p-3 rounded-full z-20 shadow-[0_0_30px_5px_rgba(139,92,246,0.3)]"
          >
            <ChevronLeft size={26} />
          </button>

          <button
            onClick={() => scroll("right")}
            className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-l from-zinc-900 to-transparent hover:scale-105 transition-transform p-3 rounded-full z-20 shadow-[0_0_30px_5px_rgba(139,92,246,0.3)]"
          >
            <ChevronRight size={26} />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scroll-smooth no-scrollbar relative pb-2 snap-x snap-mandatory"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="snap-center min-w-[70%] sm:min-w-[45%] md:min-w-[30%] bg-gradient-to-br from-zinc-900/90 to-zinc-800/60 backdrop-blur-md rounded-xl border border-zinc-700/40 shadow-lg hover:shadow-violet-500/20 p-3 sm:p-5 flex-shrink-0 transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/40"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-36 sm:h-48 object-cover rounded-lg mb-3 shadow-md"
                />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-violet-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-3 text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex gap-2 mb-4">
                  <img src={react} alt="React" className="w-5 h-5 sm:w-6 sm:h-6 opacity-80" />
                  <img src={java} alt="JavaScript" className="w-5 h-5 sm:w-6 sm:h-6 opacity-80" />
                  <img src={tailwind} alt="TailwindCSS" className="w-5 h-5 sm:w-6 sm:h-6 opacity-80" />
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-amber-200 to-amber-400 text-black px-3 sm:px-4 py-1.5 rounded-lg font-semibold shadow-md hover:shadow-amber-300/50 hover:scale-105 transition-transform text-xs sm:text-sm"
                >
                  Live Preview
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
