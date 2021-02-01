import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  title: 'abiz-design',
  favicon: '/images/favicon.ico',
  logo: '/images/logo.jpg',
  outputPath: 'docs-dist',
  base: 'http://git.vemic.com/abiz-fe/abiz-design/',
  publicPath: 'http://git.vemic.com/abiz-fe/abiz-design/',
  repo: 'http://git.vemic.com/abiz-fe/abiz-design.git', 
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
    'node_modules': path.resolve(__dirname, "packages/abiz-rc-core/node_modules")
  }
  // more config: https://d.umijs.org/config
});
