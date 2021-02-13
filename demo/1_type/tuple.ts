// 元组
// 数组合并了相同类型的对象
// 元组合并了不同类型的对象

// 1. 初始化或者直接赋值时，需提供所有元组类型中指定的项
let tom: [string, number] = ['a', 1];

let t1: [string, number];
t1= ['a', 1];  // 初始化时，需要提供每个属性的值
t1[0] = 'b';
t1[1] = 10;
console.log(t1);

export {};