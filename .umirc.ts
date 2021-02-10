import { defineConfig } from 'dumi';
import path from 'path';

const isProduction = process.env.NODE_ENV === 'production';
export default defineConfig({
  title: 'abiz-design',
  favicon: (isProduction ? '/abiz-design' : '') + '/images/favicon.ico',
  logo: (isProduction ? '/abiz-design' : '') + '/images/logo.jpg',
  outputPath: 'docs-dist',
  base: '/abiz-design',
  publicPath: '/abiz-design/',
  mode: 'site',
  // extraBabelPlugins: [
  //   [
  //     'babel-plugin-import',
  //     {
  //       libraryName: '@abiz/rc-aeps',
  //       libraryDirectory: 'es',
  //       style: (name) => {
  //         return `@abiz/rc-aeps/es/style/all.css`;
  //       }
  //     },
  //     '@abiz/rc-aeps'
  //   ],
  //   [
  //     'babel-plugin-import',
  //     {
  //       libraryName: '@abiz/rc-jxc',
  //       libraryDirectory: 'es',
  //       style: (name) => {
  //         return `@abiz/rc-jxc/es/style/all.css`;
  //       }
  //     },
  //     '@abiz/rc-jxc'
  //   ],
  //   [
  //     'babel-plugin-import',
  //     {
  //       libraryName: '@abiz/rc-miccn',
  //       libraryDirectory: 'es',
  //       style: (name) => {
  //         return `@abiz/rc-miccn/es/style/all.css`;
  //       }
  //     },
  //     '@abiz/rc-miccn'
  //   ]
  // ],
  resolve: {
    includes: ['docs'],
  },
  alias: {
    '@abiz-rc-core': path.resolve(__dirname, 'packages/abiz-rc-core/src'),
    '@abiz-rc-miccn': path.resolve(__dirname, 'packages/abiz-rc-miccn/src'),
    '@abiz-rc-aeps': path.resolve(__dirname, 'packages/abiz-rc-aeps/src'),
    '@abiz-rc-jxc': path.resolve(__dirname, 'packages/abiz-rc-jxc/src'),
    '@docs-common': path.resolve(__dirname, 'docs-common')
  },
  styles: [
    `[class$="-previewer-demo"] [class*="-btn"]{
        margin-right: 8px;
        margin-bottom: 12px;
     }`,
  ],
  // more config: https://d.umijs.org/config
});
