import React from "react";

export const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="
        bg-white/80 backdrop-blur-lg 
        flex items-center justify-center 
        gap-6 md:gap-10 
        px-6 py-3 
        rounded-full 
        shadow-lg 
        font-semibold 
        text-gray-700 
        border border-white/50
      ">

        <a href="#Home" className="hover:text-black transition">Home</a>
        <a href="#About" className="hover:text-black transition">About</a>
        <a href="#Projects" className="hover:text-black transition">Projects</a>
        <a href="#Skills" className="hover:text-black transition">Skills</a>
        <a href="#Contact" className="hover:text-black transition">Contact</a>

      </div>
    </nav>
  );
};
