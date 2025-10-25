import React from 'react'

const Experience = () => {
  return (
    <section className="bg-[#0f172a] w-full text-white scrollmt-24 font-space p-6 lg:px-16">
     
      {/* Title */}
      <h2 className="text-center text-3xl sm:text-4xl font-bold mb-2">
        Experience
      </h2>
      <p className="text-center text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
        A snapshot of my recent roles and what I worked on.
      </p>
      {/* Experience List */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-lg sm:text-xl font-semibold">
              Freelance Developer
            </h3>
            <time className="text-sm text-slate-500">Feb 2024 — Jan 2025</time>
          </div>
          <p className="mt-2 text-slate-400 text-base sm:text-lg leading-relaxed">
            Worked on diverse projects from Upwork, Fiverr, and other
            freelancing networks.
          </p>

        {/* Item 2 */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-lg sm:text-xl font-semibold">
              Front‑End Intern <br />
              <span className="text-emerald-700">Larva Coding Academy</span>
            </h3>
            <time className="text-sm text-slate-500">Feb 2024 — Jan 2025</time>
          </div>
          <p className="mt-1 text-slate-400 text-base sm:text-lg leading-relaxed">
            Built responsive UIs with HTML, CSS, and React using reusable
            components. Translated designs into functional pages, collaborated
            with designers, and followed best practices through code reviews.
          </p>
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
            <h3 className="text-lg sm:text-xl font-semibold">
              <span className="text-emerald-700">ATB Tech</span>
            </h3>
            <time className="text-sm text-slate-500">Feb 2024 — Jan 2025</time>
          </div>
          <p className="mt-1 text-slate-400 text-base sm:text-lg leading-relaxed ">
            Developed responsive user interfaces using HTML, CSS, and React.
            Wrote reusable React components to speed up development.
            Collaborated with designers to turn wireframes into functional web
            pages. Participated in code reviews and learned industry best
            practices for clean coding.
          </p>
    </section>
  );
}

export default Experience