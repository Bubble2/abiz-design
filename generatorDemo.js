const fs = require('fs');
const path = require('path');
const walkSync = require('walk-sync');
const antdPath = 'D:/git/ant-design-4.9.4/components/';

// const packagesPaths = ['./packages/abiz-rc-aeps/src', './packages/abiz-rc-jxc/src', './packages/abiz-rc-miccn/src']
const packagesPaths = [
  {
    fileNamePrefix: 'aeps',
    path: './packages/abiz-rc-aeps/src/',
    importPath: '@abiz/rc-aeps',
    iconImportPath: '@abiz/icons-aeps'
  },
  {
    fileNamePrefix: 'jxc',
    path: './packages/abiz-rc-jxc/src/',
    importPath: '@abiz/rc-jxc',
    iconImportPath: '@abiz/icons-jxc'
  },
  {
    fileNamePrefix: 'miccn',
    path: './packages/abiz-rc-miccn/src/',
    importPath: '@abiz/rc-miccn',
    iconImportPath: '@abiz/icons-miccn'
  },
];

const paths = walkSync(antdPath, {
  globs: ['*/demo/*.md'],
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
      // console.log(data);
      const title = data.match(/(?<=zh-CN:\s+).+/g);
      // console.log('title', title);
      let subTitle = data.match(/(?<=zh-CN\n*\s+).+/g);
      subTitle = /^\`/g.test(subTitle) ? '<span></span>' + subTitle : subTitle;
      subTitle = /^\[[\s\S]+\]/g.test(subTitle) ? subTitle + ':' : subTitle;
      // console.log('subTitle', subTitle);

      let code = data.match(/(?<=```\w+\s*\n+)[\s\S]*(?=```)/gim)[0];
      let order = data.match(/(?<=---[\s\S]+order:\s+).+(?=[\s\S]+---)/g);
      code = code.replace(
        /(ReactDOM\.render\(\s*\n*)([\s\S]+)(,\s*\n*mountNode,?\s*\n*\);?)/gim,
        (val, $1, $2, $3) => {
          return `
        export default () => {
            return (
                <ConfigProvider>
                    ${$2}
                </ConfigProvider>
            );
        };
        `;
        },
      );

      // console.log('code:', code)

      packagesPaths.forEach(pkgPath => {
        let newCode = '';
        if(/import[\s\S]+ConfigProvider.+antd'/g.test(code)){
          newCode = code.replace(
            /import\s*(\{)(.+)antd'/g,
            `import $1$2${pkgPath.importPath}'`,
          );
        }else{
          newCode = code.replace(
            /import\s*(\{)((?!import).+)antd'/g,
            `import $1ConfigProvider,$2${pkgPath.importPath}'`,
          );
        }

        newCode = newCode.replace(
          /@ant-design\/icons/g,
          pkgPath.iconImportPath,
        );
       
        //多语言antd/lib/locale这个路径还用antd的
        newCode = newCode.replace(/@abiz\/rc-\w+(\/lib\/locale)/gi, 'antd$1');

        const newData = `---
order: ${order}
---
\`\`\` tsx
    \/**
    * title: ${title}
    * desc: ${subTitle}
    *\/

    ${!/import\s+React/g.test(code) ? "import React from 'react';" : ''}
    ${newCode}
\`\`\`
                `;

        //demo文件夹不存在则创建
        if (!fs.existsSync(pkgPath.path + '' + itemArr[0] + '/' + itemArr[1])) {
          fs.mkdir(
            pkgPath.path + '' + itemArr[0] + '/' + itemArr[1],
            { recursive: true },
            err => {
              if (err) throw err;
            },
          );
        }

        const fileNameArr = itemArr[2].split('.');
        const fullPath =
          pkgPath.path +
          '' +
          itemArr[0] +
          '/' +
          itemArr[1] +
          '/' +
          fileNameArr[0] +
          '-' +
          itemArr[0] + 
          '-' +
          pkgPath.fileNamePrefix +
          '.' +
          fileNameArr[1];
        // console.log('fullPath',fullPath)
        fs.writeFile(fullPath, newData, err => {
          if (err) throw err;
          console.log(fullPath, '保存成功');
        });
      });
    }
  });
});
