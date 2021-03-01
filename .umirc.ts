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
    includes: ['./docs'],
    // includes: ['docs/index.md', 'docs/guide', 'docs/components-aeps'],
  },
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: 'GitLab',
      path: 'http://git.vemic.com/abiz-fe/abiz-design',
    },
  ],
  alias: {
    '@abiz-rc-core': path.resolve(__dirname, 'packages/abiz-rc-core/src'),
    '@abiz-rc-miccn': path.resolve(__dirname, 'packages/abiz-rc-miccn/src'),
    '@abiz-rc-aeps': path.resolve(__dirname, 'packages/abiz-rc-aeps/src'),
    '@abiz-rc-jxc': path.resolve(__dirname, 'packages/abiz-rc-jxc/src'),
    '@docs-common': path.resolve(__dirname, 'docs-common'),
  },
  styles: [
    `${
      isProduction ? 'http://abiz-fe.git.vemic.com/' : 'http://localhost:8000'
    }/abiz-design/styles/markdown.css`,
  ],
  externals: {
    react: 'window.React',
    'react-dom': 'window.ReactDOM',
  },
  scripts: [
    'https://gw.alipayobjects.com/os/lib/react/16.13.1/umd/react.development.js',
    'https://gw.alipayobjects.com/os/lib/react-dom/16.13.1/umd/react-dom.development.js',
  ],
  // targets: {
  //   chrome: 79,
  //   firefox: false,
  //   safari: false,
  //   edge: false,
  //   ios: false,
  // },
  dynamicImport: {},
  chunks: ['vendors', 'umi'],
  chainWebpack: function(config, { webpack }) {
    config.merge({
      optimization: {
        splitChunks: {
          chunks: 'all',
          minSize: 30000,
          minChunks: 3,
          automaticNameDelimiter: '.',
          cacheGroups: {
            vendor: {
              name: 'vendors',
              test({ resource }) {
                return /[\\/]node_modules[\\/]/.test(resource);
              },
              priority: 10,
            },
          },
        },
      },
    });
  },
  polyfill: false,
  // exportStatic: {},
  nodeModulesTransform: {
    type: 'none',
  },
  // more config: https://d.umijs.org/config
});
