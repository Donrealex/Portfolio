import React from 'react'
import { ProjectsData } from '../constant/data';
import { NavLink } from 'react-router-dom';

const Projects = () => {

  return (
    <section id='projects' className="bg-[#0f172a] text-white p-6 font-space">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
        Featured Projects
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {ProjectsData.map((project, index) => (
          <div
            key={index}
            className="bg-[#1e293b] rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* Project Details */}
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-4">
                {project.description}
              </p>
              <NavLink
                to={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#28D08A] font-medium hover:underline"
              >
                View Project →
              </NavLink>
              {project.codeBase && (
                <NavLink
                  to={project.codeBase}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#28D08A] font-medium hover:underline ml-4"
                >
                  View Code →
                </NavLink>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Projects