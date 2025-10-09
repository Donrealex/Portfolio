import React from "react";
const Navbar = () => {
  return (
    <nav className="font-space bg-[#111827] text-white p-6 flex flex-col items-center justify-between fixed w-full top-0 z-50 shadow-md">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-lg font-bold md:ml-12">My Portfolio</h1>
      </div>
    </nav>
  );
};

export default Navbar;
