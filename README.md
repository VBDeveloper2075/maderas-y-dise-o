# Carpintería Tres de Febrero

Sitio web de portafolio y servicios para carpintero artesano especializado en muebles a medida, diseño de interiores y soluciones para espacios reducidos.

## Stack Tecnológico

- **Next.js 16** (App Router)
- **Tailwind CSS**
- **TypeScript**
- **Sanity.io** (headless CMS para proyectos e imágenes)

## Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

## Configuración de Sanity

1. Crea un proyecto en [sanity.io/manage](https://www.sanity.io/manage)
2. Copia `.env.example` a `.env.local`
3. Configura `NEXT_PUBLIC_SANITY_PROJECT_ID` y `NEXT_PUBLIC_SANITY_DATASET`

Sin Sanity configurado, el sitio muestra proyectos de ejemplo con imágenes placeholder.

## Personalización

- **Hero**: Edita nombre, subtítulo y número de WhatsApp en `src/components/Hero.tsx`
- **Contacto**: Actualiza email y WhatsApp en `src/components/Contact.tsx`
- **Navbar**: Cambia el nombre en `src/components/Navbar.tsx`
- **Imágenes**: Reemplaza URLs de Unsplash por tus propias fotos o configura Sanity

## Estructura

```
src/
├── app/           # App Router (layout, page)
├── components/    # Navbar, Hero, Services, ProjectGrid, About, Contact, Footer
├── lib/           # Sanity client, queries, image helper
├── types/         # TypeScript interfaces
sanity/
├── schemas/       # Esquema de proyectos para Sanity Studio
```
