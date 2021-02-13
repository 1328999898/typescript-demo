// 任意值 any
// 表示允许赋值为任意类型
// 所有类型都可以赋值给any
// any类型的数值也可以赋值给任何类型;

let str: any = "我是任意值";
// str = 121;
let n1: number = str;

// 如果变量声明的时候没有指定类型，则认为是任意值类型

let type;
type = 12
type = '我也是任意值'


// 类型推论
// 定义的时候如果没有指定类型，会根据指定的值，推断出一个类型
let age = 18;
// age = "我是年龄"


// 联合类型
// 值可以为多个类型中的一种
let moreType: string | number = 1;
moreType = '我是联合类型'


// 接口
// 用于定义对象的类型
// 建议接口的名称加上 I 前缀。
interface Person {
  readonly id: number;  // 只读属性
  name: string;
  age: number;
  score?: number;  // ?: 可选属性
  [propName: string]: string | number | undefined;  // 任意属性
  // [propName: string]: any;  // 任意属性
}
// 定义变量Tom的类型为Person
// 变量中不允许多写或少写属性
let tom:Person = {
  id: 1,
  name: 'Tom',
  age: 12,
  gender: 'male'
}
// tom.id = 10;  // 只读属性只能在定义的时候赋值

console.log(tom)


// 接口类型
interface ITest {
  readonly id: number; // readonly 只读属性，只读属性只能在定义的时候赋值
  age: number;         // 必须有的属性
  sex: string;         // 必须有的属性
  favorite?: string;   // ? 可选属性
  [anyProps: string]: any; // 定义任意属性，其他属性的类型，必须是当前属性类型的子集
  // [anyString: string]: number | string | undefined; // 定义任意属性，其他属性的类型，必须是当前属性类型的子集
}
let t1:ITest = {
  id: 2,    // id是只读属性，只读属性只能在定义的时候赋值
  age: 12,
  sex: 'male',
  favorite: 'football',
  score: 100
}
// t1.id = 33; // Cannot assign to 'id' because it is a read-only property.


// 定义为any后，可以赋值为任何类型的值
// any类型的值，可以访问任何属性，也可以调用任何方法
let a: any = 124;
a = 'abc';

// 类型推论
// 1. 定义的时候未赋值，则会被推断为any类型
let tUndefined;
tUndefined = 'abcd';
tUndefined = 123;
// 2. 定义的时候赋值，则会根据赋值的类型推断出相应的类型
// eg：
let uNumber = 123;  // uNumber被推断为number类型
let uArray = [1, 3, 5]; // 推断为number类型数组
let uArrayAny = [1, 'a', 3];  // 推断为any类型数组


// 联合类型
// 一个变量可以同时定义多种类型，通过|分割
// 1. 联合类型的变量，被赋值时，会根据被赋予的值，推断出类型
// 2. 每个类型只能使用相应类型的属性和方法
// 3. 当一个变量有多种类型，且不确定是哪一种类型时，则只能使用这几种类型共有的属性的方法
let u1: string | number = 123;    // u1被推断为number类型
u1 = 'abc';                       // u1被推断为string类型
console.log(u1.length);
function fn1(params: string| number):string {
  // 变量params不确定是string类型还是number类型
  // 因此只能访问string和number类型共有的属性和方法
  return params.toString();
}


export {};
