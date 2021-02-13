# 原始数据类型

- 布尔值 `boolean`
- 数值 `number`
- 字符串 `string`
- 空值 `void`
- null `null`
- undefined `undefined`
- Symbol

## strictNullChecks
位置：`tsconfig.js`
配置：默认值：true

## 不同文件中定义同样名字的变量
报异常：`Cannot redeclare block-scoped variable `
原因：全局的变量出现重名
解决方式：将每个文件都封装到module中，module有自己的作用域，因此不会产生冲突
```js
...
export {};
```

## 声明空间
- 类型声明空间：用于类型注解
- 变量声明空间：提供类型注解的同时，提供了变量声明

## 模块
- 全局模块
  - 创建ts文件时，默认是使用的全局模块
  - 全局模块的变量，都是数据全局命名空间的，即不同文件共用同一个命名空间，会导致不同文件的同一个变量名冲突
- 文件模块
  - 也被称为外部模块
  - 判断方式：文件中是否包含`import`或者`export`
  - 每个文件作为一个本地作用域，不会污染全局命名空间
  


