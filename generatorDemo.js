const fs = require('fs');
const path = require('path');
const walkSync = require('walk-sync');
const antdPath = 'D:/git/ant-design-4.9.4/components/';

// const packagesPaths = ['./packages/abiz-rc-aeps/src', './packages/abiz-rc-jxc/src', './packages/abiz-rc-miccn/src']
const packagesPaths = ['./packages/abiz-rc-aeps/src/']
const paths = walkSync(antdPath, {
    globs: ['**/demo/*.md'],
    ignore: ['_*.*', 'locale', 'locale-provider', 'style', 'version', 'index.tsx'] 
})
console.log('paths', paths)

paths.forEach(item=>{
    fs.readFile(antdPath+''+item, 'utf-8', (err, data)=>{
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        //     const title = data.match(/(?<=zh-CN:\s+).+/g);
        //     console.log('title', title);
        //     const subTitle = data.match(/(?<=zh-CN\n*\s+).+/g);
        //     console.log('subTitle', subTitle);

        //     let code = data.match(/(?<=```\w+\s*\n+)[\s\S]*(?=```)/igm)[0];
            
        //     code = code.replace(/import\s*(\{)([\s\S]+)antd/g, 'import $1ConfigProvider,$2@abiz/rc-aeps')

        //     code = code.replace(/(ReactDOM\.render\()(\<[\s\S]+\/\>)(,\s*mountNode\);)/g, (val, $1, $2, $3)=>{
        // return `
        // export default () => {
        //     return (
        //         <ConfigProvider>
        //         ${$2}
        //         </ConfigProvider>
        //     );
        // };
        // `
        //     });

        //     console.log('code:', code)
        //     const newData = `
        //     \`\`\` tsx
        //     \/**
        //     * title: ${title}
        //     * desc: ${subTitle}
        //     *\/

        //     ${code}
        //     \`\`\`
        //     `
        //     packagesPaths.forEach(pkgPath=>{
        //         fs.writeFile(pkgPath+''+item, newData, (err)=>{
        //             if (err) throw err;
        //             console.log('文件已被保存');
        //         })
        //     })
            
        }
    })
})

