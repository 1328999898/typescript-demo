# TypeScript
> [参考文档](https://ts.xcatliu.com/introduction/what-is-typescript.html)

## 一、简介
- `TypeScript`: 是JavaScript的一个超集
- 可以编译为JavaScript，编译出来的JavaScript可以运行于任何浏览器上
- 主要提供: `类型系统` 和 `对ES6的支持`
- 开发者: Microsoft
- `TypeScript`是开源的
- 

## 二、搭建demo(包括安装)
```sh
➜  mkdir typescript-demo
➜  cd typescript-demo
➜  yarn init
➜  touch README.md
# 安装
➜  yarn add typescript
```

## 三、编译
### 方法1: 调用tsc手动编译
```sh
➜  touch index.ts
    let str:string = "hello world";
# 增加scripts
➜  vim package.json
  "scripts": {
    "compile": "tsc index.ts"
  },
➜  yarn run compile
# 生成一个index.js文件
```
### 方法2: 使用tsconfig.json自动编译
> - 文件所在目录为`TypeScript`项目的根目录
> - 文件中指定了用来编译这个项目的根文件和编译选项

#### 1. 创建`tsconfig.json`
```sh
# package.json文件中增加
"scripts": {
  "compile": "tsc index.ts",
  "init:config": "tsc --init"
  "watch:config": "tsc -w"
},
# 生成tsconfig.json文件
➜  yarn run init:config
# 启用 TypeScript 编译器的观测模式
# 
➜  yarn run  watch:config
```
#### 2. 配置`tsconfig.json`
> [参考文档](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
```sh
compilerOptions: {
  # 配置需要编译的目录为demo
  "rootDir": "./demo",
  # 配置编译完成后，生成的文件目录为js
  "outDir": "./js",
  # noEmitOnError默认为false(编译的时候即使报错了，也会生成编译结果)
  # noEmitOnError配置为true后，如果编译报错，就不会生成编译结果
  "noEmitOnError": true,
}
```
#### 3. 使用vscode自动编译
  `Terminal -> run Task -> tsc watch tsconfig.json`


## 四、使用

### 4.1 数据类型
共两种
- [原始数据类型](./demo/1_type/README.md)
- 对象数据类型

