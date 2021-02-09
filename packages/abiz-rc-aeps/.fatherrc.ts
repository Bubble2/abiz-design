import path from 'path';
const theme = require('./src/style/themes/variables')

export default {
  // target: 'node',
  disableTypeCheck: true,
  cjs: { type: 'babel', lazy: true },
  esm: {
    type: 'babel',
    importLibToEs: true,
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: '@abiz/rc-core'
      },
      '@abiz/rc-core'
    ]
  ],
  lessInBabelMode: {
    paths : [
      path.join(__dirname, 'packages/abiz-rc-aeps/node_modules/', '@abiz/rc-core')   
    ],
    javascriptEnabled: true,
    modifyVars: theme
  }
};
