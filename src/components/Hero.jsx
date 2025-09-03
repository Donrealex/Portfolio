import React from 'react'

const Hero = () => {
  return (
    <section className="bg-[#111827] font-space text-white h-full items-center justify-center flex flex-col p-4">
      <img
        src="/src/assets/passport.jpg"
        alt="Logo"
        className="w-32 h-32 rounded-full border-4 border-gray-600 shadow-lg"
      />
      <h1 className="mt-6 text-3xl sm:text-4xl font-semibold text-center">
        Adebiyi Ridwan Ayobami
      </h1>
      <p className="text-sm sm:text-xl text-gray-300 mt-2 text-center">
        FrontEnd Web Developer
      </p>

      <p className="mt-4 max-w-xl text-center text-gray-400 leading-relaxed">
        I build exceptional and accessible digital experiences for the web.
        Focused on creating elegant solutions to complex problems.
      </p>
    </section>
  );
}

export default Hero