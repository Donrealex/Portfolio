import React from 'react'
import { SkillsData } from '../constant/data';

const Skills = () => {
    
  return (
    <section className="bg-[#0f172a] text-white py-16 px-6">
      {/* Title */}
      <h2 className="text-2xl gap sm:text-3xl font-bold text-center mb-10">
        Skills & Technologies
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {SkillsData.map((skill, index) => (
          <div
            key={index}
            className="bg-[#1e293b] rounded-lg shadow-lg py-6 px-4 flex items-center justify-center text-center text-lg font-medium hover:border-t-2 hover:text-black scale-100 hover:scale-110 transition-transform duration-500"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills