# Portafolio Web con Astro, Tailwind y Supabase
![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)


## Descripción
Implementación de un portafolio profesional usando Astro con SSR, Tailwind para estilos, y Supabase para datos dinámicos (herramientas, certificados y proyectos). Se añadieron:
- Navbar fija con animación basada en scroll.
- Secciones: Sobre mí, Trayectoria, Proyectos y Herramientas.
- Modales para herramientas mostrando proyectos y certificaciones relacionadas.
- Optimización de componentes (icónicos SVG reutilizables) y limpieza de estilos.

## Lo aprendido
- Cómo configurar un entorno completo con Astro SSR.
- Integración práctica con Supabase.
- Construcción de UI con Tailwind CSS.
- Flujo eficiente trabajando con pnpm.
- Creación de una arquitectura modular y mantenible.
- Buenas prácticas de UX para portafolios modernos.

<img width="1920" height="1080" alt="427shots_so" src="https://github.com/user-attachments/assets/88e05285-39d9-4f2c-a383-540c1795ee73" />

## Estructura del proyecto

```
astro-portafolio/
├── src/
│   ├── components/
│   │   ├── Header.astro            # Navbar con animación
│   │   ├── Footer.astro            # Pie de página
│   │   ├── AboutMe.astro           # Sección sobre mí
│   │   ├── Experience.astro        # Trayectoria profesional
│   │   ├── Projects.astro          # Proyectos destacados
│   │   ├── Tools.astro             # Herramientas y tecnologías
│   │   ├── SectionContainer.astro  # Contenedor de secciones
│   │   ├── TitleSection.astro      # Títulos de sección
│   │   └── icons/                  # Iconos SVG
│   │       ├── GitHub.astro
│   │       ├── LinkedIn.astro
│   │       ├── CodeIcon.astro
│   │       └── ...
│   ├── layouts/
│   │   └── Layout.astro            # Layout principal
│   ├── pages/
│   │   └── index.astro             # Página principal
│   ├── styles/
│   │   └── global.css              # Estilos globales
│   └── db/
│       └── supabase.ts             # Cliente de Supabase
├── public/
│   └── favicon.svg
├── astro.config.mjs                # Configuración de Astro
├── tailwind.config.mjs             # Configuración de Tailwind
├── package.json
└── README.md
```
⭐ Si te gusta este proyecto, ¡dale una estrellita en GitHub!
