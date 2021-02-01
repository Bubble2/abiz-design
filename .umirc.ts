import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  title: 'abiz-design',
  favicon: '/images/favicon.ico',
  logo: '/images/logo.jpg',
  outputPath: 'docs-dist',
  base: '/abiz-design',
  publicPath: '/abiz-design/',
  mode: 'site',
  extraBabelPlugins: [
    ['babel-plugin-import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true
    }]
  ],
  // lessLoader:{
  //   paths: [path.resolve(__dirname, "packages")],
  // },
  resolve: {
    includes: ['docs']
  },
  alias: {
    '@abiz-rc-core': path.resolve(__dirname, 'packages/abiz-rc-core/src'),
    'antd': path.resolve(__dirname, "packages/abiz-rc-core/node_modules/antd")
  }
  // more config: https://d.umijs.org/config
});
