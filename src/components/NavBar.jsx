import React, { useState } from "react";
import Hamburger from "hamburger-react";
import gmail from "../assets/images/icons8-gmail-48.png";

const NavBar = ({ activeSection, showNavbar }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = ["Portfolio", "About", "Contact"];

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      {/* NAVBAR */}
      <div className="flex items-center justify-between w-full relative sm:justify-center">
        <nav
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black border border-gray-800 rounded-full
          px-3 py-2 sm:px-6 sm:py-3 w-[92%] sm:w-full max-w-150 backdrop-blur-md shadow-lg transition-all duration-300
          ${showNavbar ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          {/* Mobile */}
          <div className="flex w-full items-center justify-between sm:hidden">
            <button>
              <Hamburger
                toggled={sidebarOpen}
                toggle={setSidebarOpen}
                size={18}
              />
            </button>

            <a
              href="mailto:harunaabdulazeez766@gmail.com"
              className="bg-violet-600 hover:bg-violet-700 text-white px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1 transition duration-300"
            >
              let's work
              <img src={gmail} alt="gmail" className="w-4 h-4" />
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
                      className={`transition ${
                        isActive
                          ? "text-violet-400 font-semibold"
                          : "hover:text-violet-400"
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
              className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-2xl font-semibold flex items-center gap-2 ml-10"
            >
              Let's work
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
        <div className="flex justify-between px-6 py-4 border-b border-gray-700">
          <button
            className="text-white text-2xl"
            onClick={closeSidebar}
          >
            &times;
          </button>
        </div>

        <div className="flex flex-col gap-4 px-6 py-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeSidebar}
              className={`${
                activeSection === item.toLowerCase()
                  ? "text-violet-400 font-semibold"
                  : "hover:text-violet-400"
              }`}
            >
              {item}
            </a>
          ))}

          <a
            href="mailto:harunaabdulazeez766@gmail.com"
            className="bg-violet-600 hover:bg-violet-700 text-white px-3 py-2 rounded-xl flex items-center gap-2"
          >
            let's work
            <img src={gmail} alt="gmail" className="w-4 h-4" />
          </a>
        </div>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={closeSidebar}
        />
      )}
    </>
  );
};

export default NavBar;