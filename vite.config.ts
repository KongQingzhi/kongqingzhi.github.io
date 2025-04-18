import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { fileURLToPath } from 'url';
import { visualizer } from 'rollup-plugin-visualizer';
import ViteCompressionPlugin from 'vite-plugin-compression';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    outDir: './dist',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const ext = assetInfo?.name?.split('.').pop();
          if (ext === 'css') {
            return 'css/[name]-[hash].css';
          }
          return 'assets/[name]-[hash].[ext]';
        },
        chunkFileNames: (chunkInfo) => {
          const name = chunkInfo.facadeModuleId;
          const path = name?.match(/src\/(.+\/.+)\..+$/)?.[1];
          if (path) {
            return `${path}-[hash].js`;
          }
          return 'js/[name]-[hash].js';
        },
        entryFileNames: (chunkInfo) => {
          const name = chunkInfo.facadeModuleId;
          const path = name?.match(/src\/(.+\/.+)\..+$/)?.[1];
          if (path) {
            return `${path}-[hash].js`;
          }
          return 'js/[name]-[hash].js';
        },
      },
    },
  },
  plugins: [vue(), visualizer({ open: false }), ViteCompressionPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
