import path from 'path';

export default {
  // target: 'node',
  disableTypeCheck: true,
  cjs: { type: 'babel', lazy: true },
  esm: {
    type: 'babel',
    importLibToEs: true,
  },
  pkgs: [
    'abiz-icons-aeps',
    'abiz-icons-jxc',
    'abiz-icons-miccn',
    // "abiz-rc-core",
    // "abiz-rc-aeps",
    // "abiz-rc-jxc",
    // "abiz-rc-miccn"
  ],
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
      },
      'antd',
    ],
    [
      'babel-plugin-import',
      {
        libraryName: '@abiz/rc-core',
      },
      '@abiz/rc-core',
    ],
  ],
  lessInBabelMode: {
    paths: [
      path.join(__dirname, 'packages', '/abiz-rc-aeps/src'),
      path.join(__dirname, 'packages', '/abiz-rc-jxc/src'),
      path.join(__dirname, 'packages', '/abiz-rc-miccn/src'),
    ],
    javascriptEnabled: true,
    modifyVars: {
      'primary-color': '#1DA57A',
      'link-color': '#1DA57A',
      'border-radius-base': '2px',
    },
  },
};
