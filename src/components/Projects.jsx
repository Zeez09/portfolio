import React from 'react';
import projects from '../data/Projects';
import react from "../assets/images/icons8-react-40.png";
import java from "../assets/images/icons8-javascript-64.png";
import tailwind from "../assets/images/icons8-tailwindcss-48.png";

const Projects = () => {
  return (
    <section className="w-full bg-[#121212] text-white py-16 px-4 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-2xl shadow-xl p-6 hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover rounded-xl mb-5"
              />
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>

              <div className="flex gap-3 mb-5">
                <img src={react} alt="React" className="w-8 h-8" />
                <img src={java} alt="JavaScript" className="w-8 h-8" />
                <img src={tailwind} alt="TailwindCSS" className="w-8 h-8" />
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-amber-100 hover:bg-amber-600 text-black px-4 py-2 rounded-xl font-semibold"
              >
                Live Preview
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
