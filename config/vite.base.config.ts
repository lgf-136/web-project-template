/* eslint-disable @typescript-eslint/no-var-requires */
const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');
const path = require('path');

/*
 * import { createHtmlPlugin } from 'vite-plugin-html';
 * const { createHtmlPlugin } = require('vite-plugin-html'); // 这个插件有问题： Internal server error: ejs:7
 * import {ViteEjsPlugin} from "vite-plugin-ejs";
 */
const { ViteEjsPlugin } = require('vite-plugin-ejs');
// import { viteMockServe } from 'vite-plugin-mock';
const { viteMockServe } = require('vite-plugin-mock');

module.exports = defineConfig({
  base: './',
  server: {
    port: 5173,
    open: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
  plugins: [
    react(),
    ViteEjsPlugin({
      domain: 'example.com',
      title: 'index',
    }),
    // viteMockServe(),
    viteMockServe({
      // 设置模拟.ts 文件的存储文件夹
      mockPath: 'mock',
      // 打开后，可以读取 ts ⽂件模块。请注意，打开后将⽆法监视.js ⽂件。
      supportTs: true,
      // 监视⽂件更改，并重新加载 mock 数据
      watchFiles: true,

      /*
       * 如果生产环境开启了 mock 功能,即prodEnabled=true.则该代码会被注入到injectFile对应的文件的底部。默认为main.{ts,js}
       * 这样做的好处是,可以动态控制生产环境是否开启 mock 且在没有开启的时候 mock.js 不会被打包。
       * 如果代码直接写在main.ts内，则不管有没有开启,最终的打包都会包含mock.js
       */
      injectCode: `
        import { setupProdMockServer } from '../mock/mockProdServer';
        setupProdMockServer();
      `,
      // injectFile: pathResolve('src/main.tsx')
    }),
  ],
  optimizeDeps: {
    exclude: [],
  },
  envPrefix: 'VITE_',
  css: {
    modules: {
      // css 默认类名为 dashesOnly 横杠式，但是在 react,vue 中不方便， 所以统一转为驼峰式
      localsConvention: 'camelCaseOnly',
      // 开启css 模块化， 方便协同开发
      scopeBehaviour: 'local',
      // 定义生产的类目格式
      generateScopedName: '[name]_[local]_[hash:6]',
      globalModulePaths: [],
    },
    preprocessorOptions: {
      less: {
        // less 预处理
        math: 'always',
        globalVars: {
          // less 全局变量
          primary: '#8ec2fd',
        },
      },
      sass: {
        // sass 预处理
      },
    },

    /*
     * 设置postcss的两种写法： 导入和致谢写配置都可以， 但是vite会自动帮我们读取 postcss.config.js 配置文件并按流程执行，所以这里可以不用设置postcss，
     * 这里配置的优先级要高于单独的 postcss配置文件
     * postcss: postcssConfig,
     * postcss: {
     *   // 不生成 sourcemaps
     *   map: false,
     */

    /*
     *   plugins: [
     *     // 语法校验
     *     stylelint({
     *       fix: true, // 自动修复
     *     }),
     */

    /*
     *     // 自动添加浏览器前缀
     *     autoprefixer,
     */

    /*
     *     // 使用新语法
     *     postcssPresetEnv({
     *       stage: 0,
     *     }),
     */

    /*
     *     // 单位转换：px->rem
     *     pxtorem,
     *   ],
     * },
     */
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
    assetsDir: 'assets',
    outDir: 'dist',
    // 每次构建之前先删除dist目录
    emptyOutDir: true,
    // assetsInlineLimit: 4096000, // 4000kb 以内的图片资源会转为 base64字符串格式
  },
});
