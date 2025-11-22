## GRUPO MAYIN · Sitio corporativo

Aplicación web construida con Next.js (App Router + Tailwind CSS) para comunicar la misión de GRUPO MAYIN y destacar a ⚜️MAYIN EXPRESS⚜️ como servicio de entregas 24/7 en Zaragoza, Puebla y municipios cercanos.

### Características principales
- Diseño adaptado al branding regional con gradientes y tarjetas informativas.
- Secciones que presentan la visión del grupo, el alcance de Mayin Express, cobertura, procesos y unidades adicionales.
- CTAs directas a WhatsApp y teléfono para activar pedidos de inmediato.
- Metadatos y copy en español optimizados para compartir en redes y buscadores.

### Requisitos
- Node.js 18.18 o superior
- npm (incluido con Node.js)

### Scripts disponibles
```bash
npm install          # instala dependencias
npm run dev          # inicia modo desarrollo en http://localhost:3000
npm run build        # genera build de producción
npm start            # sirve la build de producción
npm run lint         # ejecuta ESLint
```

### Estructura relevante
- `src/app/page.tsx` – Página principal con todas las secciones del sitio.
- `src/app/layout.tsx` – Metadatos, fuentes y configuración global.
- `src/app/globals.css` – Estilos globales y gradientes de fondo.

### Despliegue
La aplicación está lista para desplegar en Vercel. Ejecuta:
```bash
npm run build
```
Si el build concluye sin errores, usa:
```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-60d7d1ff
```
