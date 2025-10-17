// ========================================
// 📝 ARCHIVO DE CONFIGURACIÓN PRINCIPAL
// Aquí puedes modificar TODO el contenido del portfolio
// ========================================

export const portfolioData = {
  // ====================
  // INFORMACIÓN PERSONAL
  // ====================
  personal: {
    name: "Bastián Moral",
    title: "Full Stack con enfoque en Automatización, Infraestructura y Datos",
    email: "bastian.moral@mail.udp.cl",
    github: "https://github.com/bastianmoral",
    linkedin: "https://www.linkedin.com/in/bastian-moral-norambuena/", // Agrega tu LinkedIn si quieres
    
    // Bio principal
    bio: "Construyo soluciones tecnológicas de principio a fin. Uno desarrollo, infraestructura, datos y automatización para resolver problemas reales en empresas. Mi enfoque: entender, optimizar y escalar",
    
    // Información adicional
    specialization: "Conecto desarrollo, infraestructura, ERP y datos para automatizar procesos reales.",
    interests: "Machine Learning aplicado, arquitectura evolutiva, herramientas inteligentes",
    objective: "transformar procesos complejos en soluciones simples, escalables y útiles",
    
    // Meta descripción para SEO
    metaDescription: "Desarrollador Full Stack especializado en React, Node.js y soluciones cloud. Creando experiencias digitales excepcionales con tecnología moderna.",
    
    // Keywords para SEO
    keywords: ["Bastián Moral", "Desarrollador Full Stack", "React Developer", "Node.js", "JavaScript", "TypeScript", "Cloud Architecture", "Santiago Chile", "Desarrollo Web", "Portfolio"]
  },

  // ====================
  // PROYECTOS
  // ====================
  projects: [
    {
      id: 1,
      title: "Estudio Rueda — Sitio web para estudio de diseño / branding",
      description: "Sitio web profesional para un estudio de diseño y branding, enfocado en mostrar portafolio visual, storytelling de marca y experiencia creativa.",
      objectives: [
        "Presentar proyectos de diseño de forma visual e impactante",
        "Transmitir identidad de marca + confianza + profesionalismo",
        "Sitio modular y escalable para futuras secciones dinámicas",
        "Rol: Full Stack Developer & Arquitecto Frontend (Trabajo directamente con el equipo de diseño → interpreto Figma → lo convierto en un producto real)"
      ],
      technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion", "GitHub"],
      liveUrl: "https://estudiorueda.cl",
      githubUrl: null, // Agrega si tienes repo público
      image: null, // Puedes agregar URL de imagen
      featured: true, // Proyecto destacado
      reflection: "Cómo transformar diseño puro en experiencia digital funcional, optimizada y técnicamente sólida."
    },
    {
      id: 2,
      title: "JetVets — Plataforma veterinaria (fase Landing funcional + MVP en desarrollo)",
      description: "Landing page profesional para una startup veterinaria, con automatización del flujo de contacto y preparación del MVP completo del sistema.",
      objectives: [
        "✅ Landing page desarrollada",
        "✅ Formulario inteligente que recopila y envía información automáticamente.",
        "🚧 MVP de plataforma clínica en construcción (citas, pacientes, historial, tarifas, blog, panel admin)",
        "Rol: Tech Lead & Full Stack Developer (trabajando junto al cliente y diseñador)"
      ],
      technologies: ["React", "Node/Express", "PostgreSQL (planificado)", "Docker (planificado)"],
      liveUrl: "https://bastianmoral.cl/jetvet",
      githubUrl: null,
      image: null,
      featured: true,
      reflection: "Diseñar productos reales desde cero, alineados con negocio, con visión de escalabilidad y experiencia de usuario final.ss"
    },
    {
      id: 3,
      title: "SiembraTienda.cl — E-commerce + ERP + Infraestructura (mi rol actual)",
      description: "E-commerce B2C y B2B del rubro agrícola/jardinería, integrado con ERP Odoo y múltiples sistemas logísticos, financieros y operativos.",
      objectives: [
        "✅ Administrador TI y responsable técnico total",
        "✅ Desarrollo de automatizaciones y flujos internos",
        "✅ Integración con ERP, logística, e-commerce y contabilidad",
        "✅ Optimización de procesos y experiencia de usuario",
        "✅ Soporte a múltiples áreas (ventas, logística, finanzas, marketing)",
      ],
      technologies: ["Odoo ERP", "Python", "PostgreSQL", "API REST", "Automatizaciones", "Integración con couriers", "Infraestructura (Starlink, redes, VPS, etc.)"],
      liveUrl: "https://www.siembratienda.com",
      githubUrl: null,
      image: null,
      featured: true,
      reflection: "Cómo liderar tecnología en una empresa real: desarrollo, operaciones, datos, infraestructura y negocio en un solo rol."
    }
    // Agrega más proyectos aquí...
  ],

  // ====================
  // CERTIFICACIONES
  // ====================
  certifications: [
    {
    id: 1,
    title: "Full-Stack Developer",
    issuer: "4Geeks Academy",
    date: "—",            
    credential: null,
    icon: "award",        // shield | medal | award | certificate
    color: "indigo",      // indigo | teal | purple | blue
    url: "https://certificate.4geeks.com/d61539672328f6558336994c7a688f72eae77ad6",
    // sin PNG/JSON
  },
  {
    id: 2,
    title: "Especialista DevOps (Especialidad)",
    issuer: "Talento Digital",
    date: "—",
    credential: null,
    icon: "shield",
    color: "teal",
    url: "https://www.acreditta.com/credential/d0d2a193-ce4d-4dd5-ba7f-a701145af153?utm_source=copy&resource_type=badge&resource=d0d2a193-…",
 /*    badgePng: "/assets/badges/devops-td.png",   
    metaJson: "/assets/badges/devops-td.json",  */
  },
  {
    id: 3,
    title: "Ciencia de Datos (Especialidad)",
    issuer: "Talento Digital",
    date: "2024",
    credential: null,
    icon: "shield",
    color: "purple",
    url: "https://www.acreditta.com/credential/eab66771-1610-4a7c-9456-b31636da7a44?utm_source=copy&resource_type=badge&resource=eab66771-…",
 /*    badgePng: "/assets/badges/datos-td.png",
    metaJson: "/assets/badges/datos-td.json", */
  },
  {
    id: 4,
    title: "Google IT Support Professional Certificate",
    issuer: "Google / Credly",
    date: "2022",
    credential: null,
    icon: "certificate",
    color: "blue",
    url: "https://www.credly.com/badges/8ae73ce9-bbee-426b-80c7-c1c51470324b/linked_in_profile",
  },
  {
    id: 5,
    title: "Especialización en Machine Learning",
    issuer: "Próximamente",
    date: "Próximamente",
    credential: null,
    icon: "medal",
    color: "indigo",
    url: null,
    status: "upcoming",   // <- marcar como “en camino”
  }

    // Agrega más certificaciones aquí...
  ],

  // ====================
  // HABILIDADES (Opcional - si quieres agregar una sección)
  // ====================
  skills: {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Vue.js"],
    backend: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"],
    tools: ["Docker", "Git", "AWS", "Google Cloud", "Kubernetes", "CI/CD"],
    soft: ["Trabajo en equipo", "Comunicación", "Liderazgo", "Resolución de problemas"]
  },

  // ====================
  // CONFIGURACIÓN DE TEMA
  // ====================
  theme: {
    // Colores principales (puedes cambiarlos)
    colors: {
      primary: "indigo",
      secondary: "teal",
      accent: "slate",
      // Puedes usar: blue, green, purple, pink, orange, yellow, red
    },
    
    // Configuración de animaciones
    animations: {
      enabled: true,
      duration: "normal", // fast, normal, slow
      type: "smooth" // smooth, bouncy, stiff
    },
    
    // Tema por defecto
    defaultTheme: "dark", // light, dark, system
    
    // Mostrar switch de tema
    showThemeToggle: false
  },

  // ====================
  // NAVEGACIÓN
  // ====================
  navigation: [
    { id: "sobre-mi", label: "Sobre mí", show: true },
    { id: "certificaciones", label: "Certificaciones", show: true },
    { id: "proyectos", label: "Proyectos", show: true },
    { id: "skills", label: "Habilidades", show: false }, // Cambiar a true si quieres mostrar
    { id: "contacto", label: "Contacto", show: true }
  ],

  // ====================
  // FOOTER
  // ====================
  footer: {
    copyright: "© 2025 Bastián Moral. Todos los derechos reservados.",
    showSocialLinks: true,
    additionalLinks: [
      // { label: "Blog", url: "https://blog.bastianmoral.cl" },
      // { label: "CV", url: "/cv.pdf" }
    ]
  },

  // ====================
  // CARACTERÍSTICAS ESPECIALES
  // ====================
  features: {
    // Mostrar botón de "Volver arriba"
    showBackToTop: true,
    
    // Mostrar indicador de progreso de scroll
    showScrollProgress: false,
    
    // Habilitar modo de impresión bonito
    printFriendly: true,
    
    // Analytics (agrega tu ID si tienes)
    googleAnalytics: null, // "G-XXXXXXXXXX"
    
    // Mostrar disponibilidad para trabajar
    availableForWork: true,
    
    // Idiomas (para futuro multiidioma)
    languages: ["es"], // ["es", "en"]
    defaultLanguage: "es"
  }
};

// ====================
// TEXTOS DE LA UI
// ====================
export const uiTexts = {
  hero: {
    greeting: "Hola, soy",
    cta1: "Ver proyectos",
    cta2: "Contactar"
  },
  
  projects: {
    title: "Proyectos Destacados",
    viewProject: "Ver proyecto",
    viewCode: "Código",
    objectives: "Enfoque",
    technologies: "Tecnologías",
    reflection: "Reflexión"
  },
  
  contact: {
    title: "Trabajemos Juntos",
    description: "Siempre estoy interesado en nuevos desafíos y oportunidades de colaboración. Si tienes un proyecto en mente o simplemente quieres conversar sobre tecnología, no dudes en contactarme.",
    emailButton: "Enviar email",
    githubButton: "GitHub"
  },
  
  certifications: {
    title: "Certificaciones",
    issuedBy: "Emitido por",
    date: "Fecha",
    credential: "Credencial"
  },
  
  skills: {
    title: "Habilidades",
    frontend: "Frontend",
    backend: "Backend",
    tools: "Herramientas",
    soft: "Habilidades blandas"
  },
  
  availability: {
    available: "🟢 Disponible para proyectos",
    busy: "🟡 Agenda limitada",
    notAvailable: "🔴 No disponible actualmente"
  }
};

// ====================
// EXPORT DE CONFIGURACIÓN RÁPIDA
// ====================
export const quickConfig = {
  // Cambiar estos valores para personalización rápida
  siteName: "Bastián Moral",
  siteUrl: "https://bastianmoral.cl",
  primaryColor: "indigo", // indigo, blue, purple, teal, green
  darkModeDefault: true,
  animationsEnabled: true,
  showCertifications: true,
  showSkills: false, // Cambiar a true para mostrar sección de habilidades
};
