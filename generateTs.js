const fs = require('fs');
const path = require('path');
const walkSync = require('walk-sync');

const packagesPaths = [
    {
        fileNamePrefix: 'aeps',
        path: './packages/abiz-rc-aeps/src/',
        importPath: '@abiz/rc-aeps',
        iconImportPath: '@abiz/icons-aeps',
    },
    {
        fileNamePrefix: 'jxc',
        path: './packages/abiz-rc-jxc/src/',
        importPath: '@abiz/rc-jxc',
        iconImportPath: '@abiz/icons-jxc',
    },
    {
        fileNamePrefix: 'miccn',
        path: './packages/abiz-rc-miccn/src/',
        importPath: '@abiz/rc-miccn',
        iconImportPath: '@abiz/icons-miccn',
    },
];

const antdPathEs = './node_modules/antd/es/';

packagesPaths.forEach(pkg => {
    componentsPath = walkSync(pkg.path, {ignore: ['index.tsx'], globs: ['*'] });
    // console.log('componentsPath', componentsPath)
    fs.stat(antdPathEs+'index.d.ts', (err, data) => {
        if (err) {
            console.log('asdsad', err);
        } else {
            fs.copyFile(antdPathEs+'index.d.ts', pkg.path+'index.d.ts', err => {
                if (err) {
                    console.log(err);
                    return;
                } else {
                    console.log('小成功');
                }
            });
        }
    });
    componentsPath.forEach(item => {
        let declarationFiles = walkSync(antdPathEs + '' + item, {globs: ['*.d.ts'] });
        declarationFiles.forEach(df => {
            var _src = antdPathEs + '' + item + '' + df,
                _dst = pkg.path + '' + item + '' + df;

            console.log('_src', _src, '_dst', _dst);
            fs.stat(_src, (err, data) => {
                if (err) {
                    console.log('asdsad', err);
                } else {
                    fs.copyFile(_src, _dst, err => {
                        if (err) {
                            console.log(err);
                            return;
                        } else {
                            console.log('全部成功');
                        }
                    });
                }
            });
        })
    });
});
