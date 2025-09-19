// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({

  output: 'server', // Esto activa SSR en Astro
  adapter: vercel({
    
  }),
  
  vite: {
    plugins: [tailwindcss()]
    
  }
});