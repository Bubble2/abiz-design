import path from 'path';

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
      path.join(__dirname, 'packages/abiz-rc-jxc/node_modules/', '@abiz/rc-core')  
    ],
    javascriptEnabled: true,
    modifyVars: {
      'ant-prefix': 'jxc',
      'primary-color': '#f0f',
      'link-color': '#1DA57A',
      'border-radius-base': '2px'
    }
  }
};
