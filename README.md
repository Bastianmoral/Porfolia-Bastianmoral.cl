# Portfolio - Bastián Moral

## 🚀 Quick Start

### Instalación
```bash
npm install
```

### Desarrollo
```bash
npm run dev
```

### Build para producción
```bash
npm run build
```

## 📦 Deploy en tu servidor (bastianmoral.cl)

### Opción 1: Deploy manual via FTP/SFTP

1. Genera el build:
```bash
npm run build
```

2. Sube el contenido de la carpeta `dist/` a tu servidor

### Opción 2: Deploy con GitHub Pages + Custom Domain

1. Crea un repositorio en GitHub
2. Agrega este workflow en `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - run: npm ci
      - run: npm run build
      
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

3. Configura tu dominio en GitHub Pages settings
4. Agrega un archivo CNAME en `public/` con: `bastianmoral.cl`

### Opción 3: Deploy con Vercel/Netlify (Recomendado para rapidez)

#### Vercel:
```bash
npm i -g vercel
vercel
```
Luego configura tu dominio personalizado en el dashboard de Vercel.

#### Netlify:
1. Arrastra la carpeta `dist` al dashboard de Netlify
2. Configura tu dominio personalizado

## 🔧 Personalización rápida

### Cambiar proyectos:
Edita el array `projects` en `src/App.jsx`

### Cambiar información personal:
Busca y reemplaza:
- "Bastián Moral" con tu nombre
- "contacto@bastianmoral.cl" con tu email
- URLs de los proyectos

### Cambiar colores:
- Color principal: Busca `blue-600` y reemplaza con tu color preferido
- Dark mode: Los colores ya se adaptan automáticamente

## 📝 Checklist para la evaluación

✅ Nombre y presentación personal  
✅ Mínimo 3 proyectos con:
  - Descripción
  - Objetivos
  - Tecnologías utilizadas
  - Reflexión personal
  - Enlaces a demos/código

✅ Diseño limpio y profesional  
✅ Navegación clara  
✅ Responsive design  
✅ Accesible online  

## 🎯 Tiempo estimado: 30 minutos

1. Instalar dependencias: 2 min
2. Personalizar contenido: 15 min
3. Build: 1 min
4. Deploy: 10 min
5. Verificación: 2 min

---
**Desarrollado para evaluación Módulo 11 - IT Academy by Kibernum**
