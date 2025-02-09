import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcssNested from 'postcss-nested';

// https://vite.dev/config/
export default defineConfig({
  base: '/ui-db',
  plugins: [react()],
  test: {
    environment: 'happy-dom',
  },
  css: {
    postcss: {
      plugins: [postcssNested],
    },
  },
});
