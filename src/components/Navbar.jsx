// import React from "react";
// import { useEffect, useState } from "react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 8);
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const navItems = [
//     { label: "HOME", href: "#home" },
//     { label: "CONTACT", href: "#contact" },
//     { label: "PROJECTS", href: "#projects" },
//   ];

//   return (
//     <nav
//       aria-label="Primary"
//       className={`font-space fixed inset-x-0 top-0 z-50 transition-all duration-300
//         ${
//           scrolled
//             ? "bg-[#0B1220]/85 backdrop-blur border-b border-white/10 shadow-lg"
//             : "bg-[#111827]/80 backdrop-blur-sm"
//         }`}
//     >
//       {/* Skip link for accessibility */}
//       <a
//         href="#main"
//         className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:text-slate-900"
//       >
//         Skip to content
//       </a>

//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="flex h-16 items-center justify-between">
//           {/* Brand */}
//           <a
//             href="#home"
//             className="text-base md:text-lg font-extrabold tracking-tight
//               bg-gradient-to-r from-teal-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent hover:opacity-90"
//           >
//             ADEBIYI RIDWAN
//           </a>

//           {/* Desktop nav */}
//           <div className="hidden lg:flex items-center gap-8">
//             {navItems.map((item) => (
//               <a
//                 key={item.href}
//                 href={item.href}
//                 className="relative px-1 py-2 text-sm font-medium text-gray-300 hover:text-white transition group
//                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/60
//                            focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
//               >
//                 <span>{item.label}</span>
//                 <span
//                   className="pointer-events-none absolute left-0 -bottom-0.5 h-[2px] w-full origin-left
//                                   scale-x-0 transform bg-teal-400 transition-transform duration-300
//                                   group-hover:scale-x-100"
//                 />
//               </a>
//             ))}
//           </div>

//           {/* Mobile menu button */}
//           <button
//             type="button"
//             className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-300
//                        hover:text-white hover:bg-white/5 focus:outline-none focus-visible:ring-2
//                        focus-visible:ring-teal-500/60"
//             aria-controls="primary-menu"
//             aria-expanded={open}
//             aria-label="Toggle menu"
//             onClick={() => setOpen((prev) => !prev)}
//           >
//             {open ? (
//               <svg
//                 className="h-6 w-6"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth={2}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 className="h-6 w-6"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth={2}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M3 6h18M3 12h18M3 18h18"
//                 />
//               </svg>
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div
//         id="primary-menu"
//         className={`lg:hidden transition-all duration-300 ease-out
//           ${
//             open
//               ? "pointer-events-auto opacity-100 translate-y-0"
//               : "pointer-events-none opacity-0 -translate-y-2"
//           }`}
//       >
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-4">
//           <div className="overflow-hidden rounded-xl border border-white/10 bg-[#111827] shadow-xl">
//             <div className="flex flex-col divide-y divide-white/10">
//               {navItems.map((item) => (
//                 <a
//                   key={item.href}
//                   href={item.href}
//                   onClick={() => setOpen(false)}
//                   className="px-4 py-3 text-sm font-medium text-gray-200 hover:bg-white/5 hover:text-white
//                              focus:outline-none focus-visible:bg-white/10"
//                 >
//                   {item.label}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }


import { useState } from "react";
import { Menu, X } from "lucide-react"; // or use any icon library
import { navItems } from "../constant/data";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="font-space bg-gradient-to-r from-[#111827] to-[#1f2937] text-white fixed w-full top-0 z-50 shadow-lg backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
             <a
            href="#home"
            className="text-base md:text-lg font-extrabold tracking-tight
              bg-gradient-to-r from-teal-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent hover:opacity-90"
          >
            ADEBIYI RIDWAN
          </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm lg:text-base font-medium transition-all duration-300 hover:scale-105 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-[#111827] shadow-lg">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-white hover:bg-gray-700 block px-3 py-3 rounded-md text-base font-medium transition-all duration-200 transform hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;