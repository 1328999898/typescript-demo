// 泛型
// 定义类型T，接收T类型的数组，返回T类型的数组
function reverse<T>(items: T[]): T[] {
  const toReturn = [];
  for(let i= items.length -1; i>=0; i-- ) {
    toReturn.push(items[i]);
  }
  return toReturn;
}

let numbers = [1,2,3,4,5];
let numbersRev = reverse(numbers);
console.log(numbersRev);
//  Type 'string' is not assignable to type 'number'.
// numbersRev[0] = 'a';

// console.log(numbers.reverse());
interface Array<T> {
  reverse(): T[];
}
// Array.prototype.newReverse = function() {
//   let items = this;
//   let result = [];
//   for (let i = items.length -1; i>=0; i--) {
//       result.push(items[i]);
//   }
//   return result;
// }

// let a = [1,3,4];
// console.log(a.newReverse());

// 交叉类型
// 从两个对象中创建一个新的对象
// 新对象拥有两个对象的全部功能
// function extend<T extends object, U extends object>(first: T, second: U): T&U {
//   const result = <T & U>{};
//   for (let id in first) {
//     (<T>result)[id] = first[id];
//   }
//   for (let id in second) {
//     (<U>result)[id] = second[id];
//   }
//   return result;
// }

// const x = extend({a: 'hello'}, {b: 11})
// console.log(x);

function extend<T extends object, U extends object>(first: T, second: U) : T & U {
  const result = <T & U> {};
  for (let id in first) {
    (<T>result)[id] = first[id];
  }
  for (let id in second) {
    (<U>result)[id] = second[id];
  }
  return result;
}
const x = extend({a: 123}, {b: 'aaaa', a: 333});
console.log(x);



export {};