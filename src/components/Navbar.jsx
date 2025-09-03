
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
    // <nav className="font-space bg-[#111827] text-white p-6 flex flex-col">
    //   {/* Top nav bar */}
    //   <div className="flex items-center justify-between  w-full">
    //     <div className="text-lg font-bold md:ml-12">My Portfolio</div>

    //     {/* Desktop Menu */}
    //     <div className="hidden md:flex items-center  md:space-x-32 justify-between space-x-4 lg:space-x-24">
    //       <NavLink
    //         to="#about"
    //         className="hover:text-gray-400">
    //          About
    //       </NavLink>

    //       <NavLink
    //         to="#projects"
    //         className={({ isActive }) =>
    //           isActive ? "underline underline-offset-10 " : ""
    //         }>
    //         Projects
    //       </NavLink>

    //       <NavLink to="#contact" className="hover:text-gray-400">
    //         Contact
    //       </NavLink>
    //     </div>

    //     {/* Mobile Menu Icon */}
    //     <IoMenuSharp
    //       className="text-3xl md:hidden cursor-pointer"
    //       onClick={handleNav}
    //     />
    //   </div>

    //   {/* Mobile Menu */}
    //   <div
    //     className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-white text-black z-50 transform transition-transform duration-300 ease-in-out ${
    //       nav ? "translate-x-0" : "translate-x-full"
    //     }`}
    //   >
    //     <div className="p-6 flex justify-end">
    //       <IoClose className="text-3xl cursor-pointer" onClick={handleNav} />
    //     </div>
    //     <ul className="flex flex-col items-center justify-center gap-10 mt-10 text-lg font-medium">
    //       <li>
    //         <NavLink
    //           to="#about"
    //           onClick={handleNav}
    //           className="hover:text-gray-600"
    //         >
    //           About
    //         </NavLink>
    //       </li>
    //       <li>
    //         <NavLink
    //           to="#projects"
    //           onClick={handleNav}
    //           className="hover:text-gray-600"
    //         >
    //           Projects
    //         </NavLink>
    //       </li>
    //       <li>
    //         <NavLink
    //           to="#contact"
    //           onClick={handleNav}
    //           className="hover:text-gray-600"
    //         >
    //           Contact
    //         </NavLink>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>

    <nav className="font-space bg-[#111827] text-white p-6 flex flex-col items-center justify-between">
      <div className="flex lg:space-x-32 items-center justify-between w-full">
        <div className="text-lg font-bold md:ml-12">
          <h1>My Portfolio</h1>
        </div>
        <div className="hidden md:flex items-center justify-center gap-15">
          <ul className="flex space-x-4 lg:space-x-24">
            <li>
              <NavLink to="#about">About</NavLink>
            </li>
            <li>
              <NavLink
                to="#projects"
                className={({ isActive }) =>
                  isActive ? " underline underline-offset-10" : ""
                }
              >
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
      <div
        className={`fixed top-0 right-0 pb-8 w-1/2 bg-[#161b20] text-white z-50 transform transition-transform duration-300 ease-in-out ${
          nav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-start">
          <IoClose className="text-3xl cursor-pointer" onClick={handleNav} />
        </div>
        <ul className="flex flex-col items-center justify-center gap-10 mt-10 text-lg font-medium">
          <li>
            <NavLink
              to="#about"
              onClick={handleNav}
              className="hover:text-gray-600"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#projects"
              onClick={handleNav}
              className="hover:text-gray-600"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#contact"
              onClick={handleNav}
              className="hover:text-gray-600"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
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