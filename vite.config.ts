import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import autoprefixer from 'autoprefixer';
import tailwindcssPostCSS from '@tailwindcss/postcss';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcssPostCSS,
        autoprefixer,
      ],
    },
  },
});
