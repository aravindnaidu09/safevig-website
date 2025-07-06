import { defineConfig } from 'vite';

export default defineConfig({
  ssr: {
    noExternal: ['bootstrap'], // Prevent SSR pre-bundling Bootstrap
  },
});