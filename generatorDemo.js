const fs = require('fs');
const path = require('path');
const walkSync = require('walk-sync');
const antdPath = 'D:/git/ant-design-4.9.4/components/';

function delDir(path){
  let files = [];
  if(fs.existsSync(path)){
      files = fs.readdirSync(path);
     
      files.forEach((file, index) => {
          let curPath = path + "/" + file;
          if(fs.statSync(curPath).isDirectory()){
              delDir(curPath); //递归删除文件夹
          } else {
              fs.unlinkSync(curPath); //删除文件
              // console.log('删除文件成功')
          }
      });
      // console.log('files:', files)
      // console.log('开始删除文件夹')
      fs.rmdirSync(path);
  }
  // console.log('结束删除')
}

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

//删除所有demo目录文件
packagesPaths.forEach((pkgPath)=>{
  paths.forEach((item)=>{
    const itemArr = item.split('/');
    delDir(pkgPath.path + '' + itemArr[0] + '/' + itemArr[1]);
    // console.log('完成删除')
  })
})

paths.forEach(item => {
  const itemArr = item.split('/');
  fs.readFile(antdPath + '' + item, 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(data);
      const title = data.match(/(?<=zh-CN:\s+).+/g);
      // console.log('title', title);
      let subTitle = data.match(/(?<=zh-CN\n*\s+)((?!\n)[\s\S]+)(?=\n*##\s*en-US)/gms);
      if(subTitle && subTitle.length){
        subTitle = subTitle[0];
        subTitle = subTitle.replace(/[\s\r\n]*/gs, '');
        subTitle = /^\`/g.test(subTitle) ? '<span></span>' + subTitle : subTitle;
        subTitle = /^\[[\s\S]+\]/g.test(subTitle) ? subTitle + ':' : subTitle;
        subTitle = subTitle.replace(/\`\`\`/g, '\\\`\`\`');
      }
      

      //提取order属性
      let order = data.match(/(?<=---[\s\S]+order:\s+).+(?=[\s\S]+---)/g);

      //提取代码
      let code = data.match(/(?<=```(jsx|tsx)\s*\n+)[\s\S]*(?=```)/gim)[0];

      //包裹ConfigProvider组件并暴露
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
        if(/import[\s\S]+ConfigProvider.*antd'/igs.test(code)){
          newCode = code.replace(
            /import\s*(\{)(((?!import).)*)antd'/igs,
            `import $1$2${pkgPath.importPath}'`,
          );
        }else if(/import\s*(\{)(((?!import).)*)antd'/igs.test(code)){
          newCode = code.replace(
            /import\s*(\{)(((?!import).)*)antd'/igs,
            `import $1ConfigProvider,$2${pkgPath.importPath}'`,
          );
        }else{
          newCode = code.replace(
            /(.+)/igs,
            `import {ConfigProvider} from '${pkgPath.importPath}'
            $1`,
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
          fs.mkdirSync(
            pkgPath.path + '' + itemArr[0] + '/' + itemArr[1],
            { recursive: true },
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
        fs.writeFileSync(fullPath, newData);
        console.log(fullPath, '保存成功');
      });
    }
  });
});
