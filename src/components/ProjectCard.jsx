import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { uiTexts } from '../data/portfolioData';

const ProjectCard = ({ project, index, isVisible }) => {
  return (
    <article
      className={`project-card group bg-white dark:bg-slate-800 rounded-xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-700 hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)' }}
    >
      <div className="space-y-4">
        {/* Título con efecto */}
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-teal-600 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur"></div>
          <h3 className="relative text-lg sm:text-xl font-semibold text-slate-900 dark:text-white">
            {project.title}
          </h3>
          {project.featured && (
            <span className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">★</span>
            </span>
          )}
        </div>
        
        {/* Descripción */}
        <p className="text-sm text-slate-600 dark:text-slate-400">
          {project.description}
        </p>
        
        {/* Objetivos */}
        <div>
          <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-wider mb-2">
            {uiTexts.projects.objectives}
          </h4>
          <ul className="space-y-1">
            {project.objectives.slice(0, 4).map((obj, idx) => (
              <li key={idx} className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <span className="line-clamp-4">{obj}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Tecnologías */}
        <div>
          <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-wider mb-2">
            {uiTexts.projects.technologies}
          </h4>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 sm:py-1 bg-gradient-to-r from-indigo-100 to-teal-100 dark:from-indigo-900 dark:to-teal-900 text-slate-700 dark:text-slate-300 text-xs rounded-md hover:scale-110 transition-transform duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Reflexión */}
        <div className="pt-3 sm:pt-4 border-t border-slate-100 dark:border-slate-700">
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 italic line-clamp-3">
            {project.reflection}
          </p>
        </div>
        
        {/* Enlaces */}
        <div className="flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs sm:text-sm text-indigo-600 hover:text-teal-600 dark:text-indigo-400 dark:hover:text-teal-400 transition-all duration-300 hover:scale-105"
            >
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
              {uiTexts.projects.viewProject}
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs sm:text-sm text-slate-600 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300 transition-all duration-300 hover:scale-105"
            >
              <Github className="w-3 h-3 sm:w-4 sm:h-4" />
              {uiTexts.projects.viewCode}
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
