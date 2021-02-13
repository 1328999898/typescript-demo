// 函数类型

// 两种常用的定义函数的方式
// 1. 函数声明
// function sum(x, y) {
//   return x + y
// }
// 2. 函数表达式
// let mySum = function sum(x, y) {
//   return x + y;
// }

// 函数声明的类型定义
function sum(x: number, y: number): number {
  return x + y;
}
// 传入参数的数量不能多余或少于定义的参数
sum(1, 2);

// 函数表达式定义
// mySum的类型是通过赋值操作类型推论得到的
// let mySum = function sum(x:number, y:number):number {
//   return x + y;
// }
// 手动给mySum添加类型
// => 用于表示函数的定义， 左侧是输入类型、右侧是输出类型
let mySum: (x: number, y: number) => number = function(
  x: number,
  y: number
): number {
  return x + y;
};

// 用接口定义函数的形状
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  return source.search(subString) !== -1;
};

// 可选参数
// 可选参数后面不允许有必选参数
function buildName(firstName: string, lastName?: string) {
  return `${firstName} ${lastName}`;
}

buildName("Tom", "cat");
buildName("Tom");

// 参数默认值
function defaultName(firstName: string = "Tom", lastName: string) {
  return `${firstName} ${lastName}`;
}

// Es6中获取剩余参数
// function push(array, ...items) {
//   items.forEach(item => {
//     array.push(item);
//   })
// }

// function buildNameNew(firstName: string, ...restOfName: string[]) {
//   return firstName + " " + restOfName.join(" ");
// }

// // employeeName will be "Joseph Samuel Lucas MacKinzie"
// let employeeName = buildNameNew("Joseph", "Samuel", "Lucas", "MacKinzie");

function buildNameNew(firstName: string, ...restOfName: string[]) {
  return `${firstName} ${restOfName.join(" ")}`;
}

console.log("buildNameNew", buildNameNew("Tom", "Joseph", "Li"));

// function reverse(x: number): number;
// function reverse(x: string): string;
function reverse(x: number | string): number | string | undefined {
  if (typeof x === "number") {
    return Number(
      x
        .toString()
        .split("")
        .reverse()
        .join("")
    );
  } else if (typeof x === "string") {
    return x
      .split("")
      .reverse()
      .join("");
  }
}

// 函数类型
// 1.函数声明方式
function myFunc(p1: number, p2: number): number {
  return p1 + p2;
}
// 2.函数表达式方式
// 注：sn是通过类型推论推导出来的
// let sn = function(p1: number, p2: number): number {
//   return p1 + p2;
// }
// 2.1 手动指定sn的类型
// 函数定义:
// (p1:number, p2:number) => number 
// 输入类型 => 输出类型
let sn:(p1:number, p2:number) => number = function(p1:number, p2:number) {
  return p1 + p2;
}

// 1. 使用?定义可选参数
// 2. 必选参数必须定义在可选参数之前
// 3. 指定了默认值的参数，也被认为是可选参数，但没有位置的限制
function myFn1(a: string, b?: string, c:string = 'c'):boolean {
  return true
}
myFn1('a');
myFn1('a', 'b');
myFn1('a', 'b', 'mm');
// 4. 使用...定义剩余参数
function myFn2(a: string, ...argv: any[]): void {
  console.log(a, argv)
}
myFn2('a', 'b', 'c', 'd');
// 5. 重载
// 用于精确定义函数的类型
function myFn3(x: string): string;
function myFn3(x: number): number;
function myFn3(x: string| number) : string| number {
  return 1;
}
myFn3('a');


function myFn4(name: string, age?: number, score?:number): void {
  console.log('name', name);
  console.log('age', age);
  console.log('score', score);
}

myFn4('Jane', null, 20);



export {};