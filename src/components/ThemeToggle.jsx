import React from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-110 hover:rotate-12"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? 
        <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700 dark:text-slate-300" /> : 
        <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
      }
    </button>
  );
};

export default ThemeToggle;
