/// <reference types="vitest" />
/// <reference types="vite/client" />

import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslintPlugin()],
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/.{idea,git,cache,output,temp}/**',
      './src/config/**',
    ],
    coverage: {
      exclude: [
        '*.js',
        '*.cjs',
        '**/src/services/**',
        'space-saver-client/src',
        'src/components/UsersTable_v1.jsx',
        'src/components/dashboard/previous-versions/ListContent_v1.jsx',
        'src/contexts',
        'src/App.jsx',
        'src/main.jsx',
        'src/auth/**',
        'src/pages',
        'src/layout',
        'src/services',
        'src/features/home/',
        'src/features/home/previous-versions',
        'src/features/spaces',
        'src/features/space',
        'src/features/rooms',
        'src/features/room',
        'src/features/bookings',
        'src/features/settings',
        'src/hooks',
      ],
    },
  },
});
