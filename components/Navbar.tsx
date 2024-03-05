import React from "react";
import { ThemeToggle } from "./ui/theme-toggle";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="z-10 sticky top-0 w-full h-20 flex justify-between items-center px-4 lg:px-8 bg-background">
      <div>
        <a href="#">
          <Image
            src="/logo.png"
            alt="Logo"
            className="max-[340px]:hidden w-5 sm:w-10 mr-2 sm:mr-8 inline-block sm:block "
            width={100}
            height={100}
          />
        </a>
      </div>
      <div className="flex items-center">
        <div className="mr-2 sm:mr-8">
          <ThemeToggle />
        </div>

        <a href="#about" className="mr-2 sm:mr-8">
          About
        </a>
        <a href="#projects" className="mr-2 sm:mr-8">
          Projects
        </a>
        <a href="#contact" className="mr-2 sm:mr-8">
          Contact
        </a>
        <a href="/Stoyanov-Resume-24.pdf" download>
          <button>Resume</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
