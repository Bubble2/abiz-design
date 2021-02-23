const fs = require('fs');
const path = require('path');
const walkSync = require('walk-sync');
const antdPath = 'D:/git/ant-design-4.9.4/components/';

const docsPaths = [
  {
    nav: {
      title: '大优采组件',
      order: 2,
    },
    group: {
      path: '/components-aeps/components',
      title: '组件',
      order: 2
    },
    path: './docs/components-aeps/',
    demoUrlPrefix: '@abiz-rc-aeps',
    project: 'aeps'
  },
  {
    nav: {
      title: '小优采组件',
      order: 3,
    },
    group: {
      path: '/components-jxc/components',
      title: '组件',
      order: 2
    },
    path: './docs/components-jxc/',
    demoUrlPrefix: '@abiz-rc-jxc',
    project: 'jxc'
  },
  {
    nav: {
      title: '内贸站组件',
      order: 4,
    },
    group: {
      path: '/components-miccn/components',
      title: '组件',
      order: 2
    },
    path: './docs/components-miccn/',
    demoUrlPrefix: '@abiz-rc-miccn',
    project: 'miccn'
  }
];

const docsCommonPath = './docs-common/';

const paths = walkSync(antdPath, {
  globs: ['*/index.zh-CN.md'],
  ignore: [
    '_*.*',
    'locale',
    'locale-provider',
    'style',
    'version',
    'index.tsx',
    'overview/*'
  ],
});
// console.log('paths', paths)

paths.forEach(item => {
  const itemArr = item.split('/');
  fs.readFile(antdPath + '' + item, 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
    } else {

      //生成docs-common中的文件

      //匹配开始到#API之间的内容
      let docIndexContent = data.match(/(?<=---[\s\S]*---)[\s\S]*(?=##\s*API)/gim)[0];
      docIndexContent = docIndexContent.replace(/(```\s*\w+)/gi, '$1 | pure\n');

      //匹配##API以下的所有内容
      let docIndexApiContent = data.match(/##\s*API[\s\S]*/gim)[0];
      //删除代码前面的> 
      docIndexApiContent = docIndexApiContent.replace(/^\>([^\u4e00-\u9fa5])/gim, '$1');
      docIndexApiContent = docIndexApiContent.replace(/(```\s*\w+)/gi, '$1 | pure\n');
      


      if (!fs.existsSync(docsCommonPath + '' + itemArr[0])) {
        fs.mkdir(
          docsCommonPath + '' + itemArr[0],
          { recursive: true },
          err => {
            if (err) throw err;
          },
        );
      }
      const fullIndexPath =
          docsCommonPath +
          '' +
          itemArr[0] +
          '/' +
          'index.md'
      fs.writeFile(fullIndexPath, docIndexContent, err => {
        if (err) throw err;
        console.log(fullIndexPath, '生成成功');
      });
      const fullIndexApiPath =
          docsCommonPath +
          '' +
          itemArr[0] +
          '/' +
          'index-api.md'
      fs.writeFile(fullIndexApiPath, docIndexApiContent, err => {
        if (err) throw err;
        console.log(fullIndexApiPath, '生成成功');
      });

      //生成docs中的文件
      const titleEn = data.match(/(?<=[^sub]title:\s+).+/);
      const titleCn = data.match(/(?<=subtitle:\s+).+/);
      let cols = data.match(/(?<=cols:\s+).+/);
      cols = (cols && cols[0]) || 2;
      docsPaths.forEach((docPath, index) => {

        
        //文档上面部分
        const templateHd = `---
title: ${titleEn} ${titleCn}
order: ${index}
nav:
  order: ${docPath.nav.order}
  title: ${docPath.nav.title}
group:
  path: ${docPath.group.path}
  order: ${docPath.group.order}
  title: ${docPath.group.title}
---

## ${titleCn}

<div>
<embed src="@docs-common/${itemArr[0]}/index.md"></embed>
</div>
        `;


        //文档中间demo部分
        const demoPaths = walkSync.entries(`./packages/abiz-rc-${docPath.project}/src`, {
          globs: [itemArr[0]+'/demo/*.md']
        });
       
        const demoArr = [];
        demoPaths.forEach(demoItem=>{
          let order = 0;
          const demoObj = {
            basePath: demoItem.basePath,
            relativePath: demoItem.relativePath
          };

          const demoFileData = fs.readFileSync(demoItem.basePath + '/'+demoItem.relativePath, 'utf-8')

          order = demoFileData.match(/(?<=order:\s+).+/g);
          demoObj.order = order?+order:0;
          demoArr.push(demoObj);

        })
        // console.log('demoArr', demoArr)
        // console.log('demoArrEnd')
        demoArr.sort((a, b) => a.order - b.order);
        
        let demoStr = '';
        let demoStrArr= new Array(cols);
        for(let i=0;i< cols;i++){
          demoStrArr[i] = [];
        }
        demoArr.forEach((demoItem, index)=>{
          
          demoStrArr[index%cols].push(`
  <div class="code-box"><embed src="${docPath.demoUrlPrefix}/${itemArr[0]}/demo/${path.basename(demoItem.relativePath)}"></embed></div>
          `)
        })
        for(let i=0;i<cols;i++){
          demoStr+=`
  <Col span=${24/cols}>
    ${demoStrArr[i].join('')}
  </Col>
          `
        }

        const templateBd = `
## 代码演示

<Row gutter=8>
${demoStr}
</Row>
        `;

        //文档下面api及以下部分
        const templatefd = `
<div><embed src="@docs-common/${itemArr[0]}/index-api.md"></embed><div>
        `
        const docsContent = templateHd+ ''+ templateBd+ '' + templatefd;

        if (!fs.existsSync(docPath.path + '' + itemArr[0])) {
          fs.mkdir(
            docPath.path + '' + itemArr[0],
            { recursive: true },
            err => {
              if (err) throw err;
            },
          );
        }
        const fullPath =
          docPath.path +
            '' +
            itemArr[0] +
            '/' +
            'index.md'
        fs.writeFile(fullPath, docsContent, err => {
          if (err) throw err;
          console.log(fullPath, '生成成功');
        });
      })

    }
  });
});
