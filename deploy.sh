#!/bin/bash

echo "🚀 Iniciando deploy rápido del portfolio..."
echo ""

# Instalar dependencias si no existen
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependencias..."
    npm install
fi

# Build del proyecto
echo "🔨 Construyendo proyecto..."
npm run build

echo ""
echo "✅ Build completado!"
echo ""
echo "📁 Los archivos están listos en la carpeta 'dist/'"
echo ""
echo "🌐 Opciones de deploy:"
echo ""
echo "1. FTP/SFTP: Sube el contenido de 'dist/' a tu servidor"
echo ""
echo "2. Vercel (más rápido):"
echo "   npx vercel --prod"
echo ""
echo "3. Netlify:"
echo "   Arrastra la carpeta 'dist' a https://app.netlify.com"
echo ""
echo "4. GitHub Pages:"
echo "   git add ."
echo "   git commit -m 'deploy'"
echo "   git push origin main"
echo ""
echo "Después configura tu dominio bastianmoral.cl en el proveedor elegido"
