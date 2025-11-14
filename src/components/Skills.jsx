import React from "react";
import { SkillsData } from "../constant/data";

const Skills = () => {
  return (
    <section className="bg-[#0f172a] text-white p-6 font-space">
      {/* Title */}
      <h2 className="text-2xl gap sm:text-3xl font-bold text-center mb-3">
        Skills & Technologies
      </h2>
      <p className="m:text-1xl text-center text-gray-400 leading-relaxed mb-3">
        I am always looking to add more skills, but these are the few skills I
        am able to apply.
      </p>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {SkillsData.map((skill, index) => (
          <div
            key={index}
            className="bg-[#1e293b] rounded-lg shadow-lg py-6 px-4 flex items-center justify-center text-center text-lg hover:text-xl font-medium hover:font-extrabold hover:border-t-2 hover:text-black scale-100 hover:scale-110 transition-transform duration-500"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
