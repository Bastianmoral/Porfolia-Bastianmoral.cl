import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { footer } = portfolioData;

  return (
    <footer className="py-6 px-4 sm:px-6 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 text-center sm:text-left">
            {footer.copyright}
          </p>
          
          {footer.additionalLinks && footer.additionalLinks.length > 0 && (
            <div className="flex gap-4">
              {footer.additionalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
