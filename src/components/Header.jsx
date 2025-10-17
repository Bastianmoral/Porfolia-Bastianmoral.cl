import React from 'react';
import ThemeToggle from './ThemeToggle';
import { portfolioData } from '../data/portfolioData';

const Header = ({ scrolled, theme, toggleTheme }) => {
  const { navigation } = portfolioData;
  const activeNavItems = navigation.filter(item => item.show);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-indigo-600 to-teal-600 bg-clip-text text-transparent animate-gradient">
            BM<span className="text-indigo-500">.</span>
          </h1>
          
          <div className="flex items-center gap-2 sm:gap-6">
            {/* Desktop Navigation */}
            <div className="hidden sm:flex gap-6">
              {activeNavItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-sm text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-teal-400 transition-all duration-300 hover:scale-105"
                >
                  {item.label}
                </a>
              ))}
            </div>
            
            {/* Theme Toggle */}
            {portfolioData.theme.showThemeToggle && (
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            )}
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className="flex sm:hidden gap-4 mt-3 pt-3 border-t border-slate-200 dark:border-slate-700 overflow-x-auto">
          {activeNavItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-xs whitespace-nowrap text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-teal-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
