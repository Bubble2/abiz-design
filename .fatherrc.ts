import path from 'path';

console.log('nsaidhasoidjsaoidj',path.join(__dirname, 'packages', '/abiz-rc-aeps/src'))
export default {
  // target: 'node',
  disableTypeCheck: true,
  cjs: { type: 'babel', lazy: true },
  esm: {
    type: 'babel',
    importLibToEs: true,
  },
  lessInBabelMode: {
    paths : [
      path.join(__dirname, 'packages', '/abiz-rc-aeps/src'),
      path.join(__dirname, 'packages', '/abiz-rc-core/src'),
      path.join(__dirname, 'packages', '/abiz-rc-jxc/src'),
      path.join(__dirname, 'packages', '/abiz-rc-miccn/src')  
    ],
    javascriptEnabled: true
  }
};
