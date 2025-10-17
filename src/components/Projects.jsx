import React from 'react';
import ProjectCard from './ProjectCard';
import { portfolioData, uiTexts } from '../data/portfolioData';

const Projects = ({ visibleProjects }) => {
  return (
    <section id="proyectos" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-teal-600 bg-clip-text text-transparent mb-8 sm:mb-12 text-center animate-fade-in">
          {uiTexts.projects.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              isVisible={visibleProjects.includes(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
