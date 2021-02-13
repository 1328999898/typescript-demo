// 声明文件

// 声明语句
// eg: 使用JQuery获取id或foo
// $("#id")
// JQuery("#foo")
// 在ts中编译器不知道$或JQuery是什么东西，因此需要定义一下
// declare 仅用于编译检查，并没有真正的定义一个变量
// declare var JQuery: (selector: string) => any;
JQuery("#foo")

// 声明文件
// 将声明语句单独放到一个文件中，这个文件就是声明文件
// 声明文件的命名规则：后缀必须为.d.ts