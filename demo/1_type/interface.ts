// 接口类型

// 1. 使用内联注解
declare const myPoint: {x: number, y: number};
// 2. 使用接口
interface Point {
  x: number;
  y: number;
}
declare const myPoint1: Point;
// 新增属性，扩展Point属性
interface Point {
  z: number;
}

// ts的接口是开放式的，可扩展

// 在类中使用接口
class myPoint2 implements Point {
  x: number;
  y: number;
  z: number;
  a: string;
}
let foo: Point = new myPoint2();
console.log(foo);

// 接口可以声明JavaScript中可能存在的任意结构

// interface Crazy {
//   new (): {
//     hello: number;
//   };
// }

// class CrazyClass implements Crazy {
//   constructor() {
//     return { hello: 123 };
//   }
// }

// const crazy = new CrazyClass();

interface String {
  endsWith(suffix: string): boolean;
}

String.prototype.endsWith = function(suffix: string): boolean {
  const str: string = this;
  return str && str.indexOf(suffix, str.length - suffix.length) !== -1;
};


export {};