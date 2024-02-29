import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 w-full h-20 flex justify-between items-center px-4 lg:px-8 bg-background">
      <div>
        <img
          src="/logo.png"
          alt="Logo"
          className="w-5 sm:w-10 mr-2 sm:mr-8 inline-block sm:block "
        />
      </div>
      <div>
        <button className="mr-2 sm:mr-8">About</button>
        <button className="mr-2 sm:mr-8">Projects</button>
        <button className="mr-2 sm:mr-8">Contact</button>
        <button>Resume</button>
      </div>
    </nav>
  );
};

export default Navbar;
