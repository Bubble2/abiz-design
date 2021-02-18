const fs = require('fs');
const path = require('path');
const walkSync = require('walk-sync');
const antdPath = 'D:/git/ant-design-4.9.4/components/';

const packagesPaths = [
  {
    fileNamePrefix: 'aeps',
    path: './packages/abiz-rc-aeps/src/',
    importPath: '@abiz/rc-aeps',
  },
  {
    fileNamePrefix: 'jxc',
    path: './packages/abiz-rc-jxc/src/',
    importPath: '@abiz/rc-jxc',
  },
  {
    fileNamePrefix: 'miccn',
    path: './packages/abiz-rc-miccn/src/',
    importPath: '@abiz/rc-miccn',
  },
];

const paths = walkSync(antdPath, {
  globs: ['*/index.zh-CN.md'],
  ignore: [
    '_*.*',
    'locale',
    'locale-provider',
    'style',
    'version',
    'index.tsx',
  ],
});
// console.log('paths', paths)

paths.forEach(item => {
  const itemArr = item.split('/');
  fs.readFile(antdPath + '' + item, 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      let code = data.match(/(?<=---[\s\S]*---)[\s\S]*(?=```)/gim)[0];
    }
  });
});
