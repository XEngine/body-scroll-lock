import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/bodyScrollLock.ts'),
      name: 'body-scroll-lock',
      fileName: (format) => `bodyScrollLock.${format}.js`,
      formats: ['es', 'cjs'],
    },
  },
  plugins: [dts()],
});
