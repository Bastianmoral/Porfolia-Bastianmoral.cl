import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(portfolioData.theme.defaultTheme);
  const [visibleProjects, setVisibleProjects] = useState([]);

  // Inicializar tema
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 
      (portfolioData.theme.defaultTheme === 'system' 
        ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
        : portfolioData.theme.defaultTheme);
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  // Manejar scroll y animaciones
  useEffect(() => {
    if (!portfolioData.theme.animations.enabled) {
      setVisibleProjects(portfolioData.projects.map((_, index) => index));
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Animación de proyectos al scroll
      const projectElements = document.querySelectorAll('.project-card');
      projectElements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setTimeout(() => {
            setVisibleProjects(prev => [...new Set([...prev, index])]);
          }, index * 100);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para cambiar tema
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-950 transition-all duration-500">
      <Header scrolled={scrolled} theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Certifications />
      <Projects visibleProjects={visibleProjects} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
