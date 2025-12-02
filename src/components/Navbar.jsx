import React from "react";

export const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-3 w-[420px] sm:w-[500px]">
      <div
        className="
          bg-white/80 backdrop-blur-lg 
          flex flex-wrap justify-center items-center
          gap-3 sm:gap-5 md:gap-10
          px-4 py-3
          shadow-lg 
          font-semibold 
          text-gray-700 
          border border-white/50
          rounded-full
        "
      >
        <a href="#Home" className="hover:text-black transition whitespace-nowrap">Home</a>
        <a href="#About" className="hover:text-black transition whitespace-nowrap">About</a>
        <a href="#Projects" className="hover:text-black transition whitespace-nowrap">Projects</a>
        <a href="#Skills" className="hover:text-black transition whitespace-nowrap">Skills</a>
        <a href="#Contact" className="hover:text-black transition whitespace-nowrap">Contact</a>
      </div>
    </nav>
  );
};
