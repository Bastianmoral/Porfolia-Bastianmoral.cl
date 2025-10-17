import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { portfolioData, uiTexts } from '../data/portfolioData';

const Contact = () => {
  const { personal } = portfolioData;

  return (
    <section id="contacto" className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-indigo-100 to-teal-100 dark:from-slate-800 dark:to-indigo-900">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-teal-600 dark:from-indigo-300 dark:to-teal-300 bg-clip-text text-transparent mb-6 animate-fade-in">
          {uiTexts.contact.title}
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto animate-fade-in-up">
          {uiTexts.contact.description}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 animate-fade-in-up">
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-indigo-600 to-teal-600 text-white rounded-lg hover:from-indigo-700 hover:to-teal-700 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            {personal.email}
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border-2 border-slate-700 dark:border-indigo-400 text-slate-700 dark:text-indigo-300 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:scale-105"
          >
            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            {uiTexts.contact.githubButton}
          </a>
          {personal.linkedin && (
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border-2 border-slate-700 dark:border-indigo-400 text-slate-700 dark:text-indigo-300 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
