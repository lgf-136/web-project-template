/* eslint-disable @typescript-eslint/no-explicit-any */
// import { defineConfig, optimizeDeps } from 'vite';

/*
 * export default defineConfig ({
 *   base: process.env.VITE_BASE,
 *   server:{
 *     port: process.env.VITE_PORT,
 *     open: true,
 *   },
 *   optimizeDeps:{
 *     exclude: [],
 *   },
 * });
 */

/** @type import('vite).UserConfig */

module.exports = (env: any) => ({
  base: env.VITE_BASE,
  server: {
    port: env.VITE_PORT,
    open: true,
  },
  optimizeDeps: {
    exclude: [],
  },
  css: {
    devSourcemap: true,
  },
});
