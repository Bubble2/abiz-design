# abiz-design

## 快速开始

### 安装依赖项

```bash
$ npm run init
```

### 修改组件源码

1. ##### 打包组件源码

```bash
$ npm run build  //打包所有组件包

$ npm run build:miccn  //打包内贸站组件包
$ npm run build:aeps  //打包大优采组件包
$ npm run build:jxc  //打包小优采组件包

$ npm run build:icons-miccn  //打包内贸站图标组件包
$ npm run build:icons-aeps  //打包大优采图标组件包
$ npm run build:icons-jxc  //打包小优采图标组件包
```

2. ##### 本地调试组件

```bash
$ npm run link
```

然后在你的项目中执行以下命令以获取依赖包

```bash
$ npm link [包名称]  //包名称查看packages/[文件夹]/package.json下的name字段
```

3. ##### 提交开发分支代码至`git`

```bash
$ git add .
$ git commit -m "update"
$ git push 或者 git push origin dev-2021:dev-2021
```

4. ##### 发布组件源码至`npm`

> 发布之前必须保证所有代码都提交到 git，版本号改动不需要手动改动，在发布时候会提示让你修改

```bash
//该命令会发布变动的包，没有修改的包不会发布
$ npm run publish

//如果上面命令发布失败，则可以尝试以下命令
$ npm run publish:git

//如果上面命令发布失败，则可以尝试以下命令
$ npm run publish:package

```

上面`publish`命令具体理解可以参考[https://github.com/lerna/lerna/tree/main/commands/publish#readme](https://github.com/lerna/lerna/tree/main/commands/publish#readme)

##### 上面看不懂？来举个栗子

当你修改了`abiz-icons-miccn`下的代码后执行以下命令

1. 打包组件库代码

```bash
$ npm run build:icons-miccn
```

2. 通过 link 命令进行本地调试

//当前根目录下执行

```bash
$ npm run link
```

依赖`@abiz/icons-miccn`包的项目根目录下执行

```bash
$ npm link @abiz/icons-miccn
```

3. 提交代码至`git`仓库

```bash
$ git add .
$ git commit -m "update"
$ git push 或者 git push origin dev-2021:dev-2021
```

4. 发布代码至`npm`

```bash
$ npm run publish
```

### 文档站点更新

1. ##### 启动组件文档开发

```bash
$ npm run docs:dev
```

2. ##### 打包组件文档

```bash
$ npm run docs:build
```

3. ##### 提交开发分支代码至`git`

```bash
$ git add .
$ git commit -m "update"
$ git push 或者 git push origin dev-2021:dev-2021
```

4. ##### 合并分支代码至`master`主干

> 合并之后 git 会自动部署跟新文档站点
