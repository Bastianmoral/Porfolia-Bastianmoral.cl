import React from 'react';
import { Github, Mail, Code2, Briefcase, User } from 'lucide-react';
import { portfolioData, uiTexts } from '../data/portfolioData';

const Hero = () => {
  const { personal } = portfolioData;

  return (
    <section id="sobre-mi" className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
          {/* Nombre con efecto */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-teal-600 rounded-lg blur opacity-25 animate-pulse"></div>
            <div className="relative">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 to-indigo-900 dark:from-white dark:to-indigo-200 bg-clip-text text-transparent mb-4 animate-text-reveal">
                {personal.name}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-indigo-300 animate-slide-in-right">
                {personal.title}
              </p>
            </div>
          </div>
          
          {/* Bio */}
          <div className="max-w-2xl">
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-6 animate-fade-in">
              {personal.bio}
            </p>
            
            {/* Info adicional */}
            <div className="space-y-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300">
                <Code2 className="w-4 h-4 text-indigo-500" />
                <span>Especialización: {personal.specialization}</span>
              </div>
              <div className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300">
                <Briefcase className="w-4 h-4 text-teal-500" />
                <span>Intereses: {personal.interests}</span>
              </div>
              <div className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300">
                <User className="w-4 h-4 text-indigo-500" />
                <span>Objetivo: {personal.objective}</span>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-lg hover:from-indigo-700 hover:to-indigo-800 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              GitHub
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border-2 border-slate-300 dark:border-indigo-400 text-slate-700 dark:text-indigo-300 rounded-lg hover:border-indigo-400 dark:hover:border-teal-400 hover:bg-indigo-50 dark:hover:bg-indigo-950 transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              {uiTexts.hero.cta2}
            </a>
          </div>
          
          {/* Badge de disponibilidad */}
          {portfolioData.features.availableForWork && (
            <div className="pt-1 pb-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                {uiTexts.availability.available}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
