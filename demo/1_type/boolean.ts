// 布尔类型
// 定义
let isBoolean1: boolean = true
let isBoolean2: boolean = Boolean(1)
// let isBoolean3: boolean = new Boolean(1)
let isBoolean4: Boolean = new Boolean(1)
/**
 * 注：
 * new Boolean(1) 通过构造函数创建的是布尔对象
 * Boolean(1)     布尔类型
 */
// 布尔值
console.log(isBoolean1)
console.log(isBoolean2)
// console.log(isBoolean3)
console.log(isBoolean4)

let b: boolean = true;
let bFalse: boolean = false;
let bBoolean: boolean = Boolean(1);
let bBooleanFalse: boolean = Boolean(0);
// let bNewBooleanTrue: boolean = new Boolean(1);

console.log('-------------');
console.log(bBoolean);
console.log(bBooleanFalse);

export {};