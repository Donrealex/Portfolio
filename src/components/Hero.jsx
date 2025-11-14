import React from 'react'
import passport from "../assets/passport.jpg"

const Hero = () => {
  return (
    <section id="home"
     className="bg-[#111827] font-space text-white h-full items-center justify-center flex flex-col p-4 pt-25">
      <img
        src={passport}
        alt="Logo"
        className="w-32 h-32 rounded-full border-4 border-gray-600 shadow-lg"
      />
      <h1 className="mt-6 text-3xl sm:text-4xl font-semibold text-center">
        Adebiyi Ridwan Ayobami
      </h1>
      <p className="text-sm sm:text-xl text-gray-300 mt-2 text-center">
        Front-End Web Developer
      </p>

      <p className="mt-4 max-w-xl text-center text-gray-400 leading-relaxed">
        I craft accessible, responsive web experiences using JavaScript, React,
        and Tailwind CSS. Passionate about innovation, I turn ideas into elegant
        solutions and thrive on learning through collaboration. Outside coding,
        I enjoy tech blogs, design, and exploring new tools.
      </p>
    </section>
  );
}

export default Hero