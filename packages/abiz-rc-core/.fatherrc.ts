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
        libraryName: 'antd'
      },
      'antd'
    ]
  ]
};
