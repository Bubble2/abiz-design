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
  //       libraryName: 'antd',
  //       libraryDirectory: 'es',
  //       style: true,
  //     },
  //   ],
  // ],
  resolve: {
    includes: ['docs'],
  },
  alias: {
    '@abiz-rc-core': path.resolve(__dirname, 'packages/abiz-rc-core/src'),
    '@abiz-rc-miccn': path.resolve(__dirname, 'packages/abiz-rc-miccn/src'),
    '@abiz-rc-aeps': path.resolve(__dirname, 'packages/abiz-rc-aeps/src'),
    '@abiz-rc-jxc': path.resolve(__dirname, 'packages/abiz-rc-jxc/src'),
    'antd': path.resolve(__dirname, 'packages/abiz-rc-core/node_modules/antd'),
    'miccn-antd': path.resolve(__dirname, 'packages/abiz-rc-miccn/node_modules/@abiz/rc-core/node_modules/antd'),
    'aeps-antd': path.resolve(__dirname, 'packages/abiz-rc-aeps/node_modules/@abiz/rc-core/node_modules/antd'),
    'jxc-antd': path.resolve(__dirname, 'packages/abiz-rc-jxc/node_modules/@abiz/rc-core/node_modules/antd'),
  },
  styles: [
    `[class$="-previewer-demo"] [class*="-btn"]{
        margin-right: 8px;
        margin-bottom: 12px;
     }`,
  ],
  // more config: https://d.umijs.org/config
});
