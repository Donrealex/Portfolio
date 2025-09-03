
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
      const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav className="font-space bg-[#111827] text-white p-4 flex items-center justify-center">
      <div className="flex gap-28 items-center justify-center w-full">
        <div>
          <h1 className="text-lg font-bold">My Portfolio</h1>
        </div>
        <div className="hidden md:flex items-center justify-center gap-15">
          <ul className="flex space-x-4 lg:space-x-24">
            <li>
              <NavLink to="#about" className="hover:text-gray-400">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="#projects" className="hover:text-gray-400">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="#contact" className="hover:text-gray-400">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <IoMenuSharp className="text-3xl md:hidden" onClick={handleNav} />
      </div>
      {/* mobile menu */}
      {/* <div
        className={`fixed top-0 left-0 w-full max-h-screen bg-white z-40 transform transition-transform duration-500 ${
          nav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <IoClose className="text-3xl" onClick={handleNav} />
        <ul className="flex flex-col items-center justify-center min-h-screen space-y-8">
          <li>
            <NavLink to="#about" className="hover:text-gray-400">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="#projects" className="hover:text-gray-400">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="#contact" className="hover:text-gray-400">
              Contact
            </NavLink>
          </li>
        </ul>
      </div> */}
    </nav>
  );
}

export default Navbar