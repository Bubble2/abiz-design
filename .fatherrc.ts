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
    "abiz-icons",
    "abiz-rc-core",
    "abiz-rc-aeps",
    "abiz-rc-jxc",
    "abiz-rc-miccn"
  ],
  lessInBabelMode: {
    paths : [
      path.join(__dirname, 'packages', '/abiz-icons/src'),
      path.join(__dirname, 'packages', '/abiz-rc-core/src'),
      path.join(__dirname, 'packages', '/abiz-rc-aeps/src'),
      path.join(__dirname, 'packages', '/abiz-rc-jxc/src'),
      path.join(__dirname, 'packages', '/abiz-rc-miccn/src')  
    ],
    javascriptEnabled: true
  }
};
