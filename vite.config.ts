import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { fileURLToPath } from 'url';
import { visualizer } from 'rollup-plugin-visualizer';
import ViteCompressionPlugin from 'vite-plugin-compression';
import viteImagemin from 'vite-plugin-imagemin';

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
  plugins: [
    vue(),
    visualizer({ open: true }),
    viteImagemin({
      gifsicle: {
        interlaced: true, // 隔行扫描
        optimizationLevel: 3, // 压缩级别（0-3）
      },
      optipng: {
        optimizationLevel: 7, // 压缩级别（0-7），值越大压缩率越高
      },
      mozjpeg: {
        quality: 20, // 压缩质量（0-100）
        progressive: true, // 渐进式加载
        smooth: 2, // 平滑处理，减少色彩失真
      },
      svgo: {
        plugins: [
          { name: 'removeViewBox', active: false }, // 保留 viewBox 以防止 SVG 变形
          { name: 'removeEmptyAttrs', active: true }, // 移除空属性
          { name: 'convertColors', params: { currentColor: true } }, // 颜色转换
        ],
      },
      webp: {
        quality: 80, // WebP 质量（0-100）
        lossless: false, // 是否无损压缩
        method: 6, // 压缩方法（0-6），数值越大，压缩率越高但速度变慢
      },
      pngquant: {
        quality: [0.4, 0.5], // PNG 质量范围
        speed: 2, // 压缩速度（1-10），数值越大速度越快但压缩率降低
      },
      disable: false, // 仅在生产环境启用
      /** 是否在控制台输出压缩结果 */
      verbose: true,
    }),
    ViteCompressionPlugin({
      algorithm: 'brotliCompress',
      ext: '.br',
      deleteOriginFile: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
