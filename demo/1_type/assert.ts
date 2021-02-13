// 类型断言
// 值 as 类型
// 类型断言只能够欺骗TypeScript编译器，无法避免运行时的错误
// 类型断言是会影响编译时的类型，类型断言语句会在编译结果中删除
// 类型断言不会转换类型
// 用途
// 1. 将联合类型断言为其中一个类型
interface Cat {
  name: string,
  run(): void
}

interface Fish {
  name: string,
  swim() : void
}

function getName(animal: Cat | Fish) {
  return animal.name;
}

// function isFish(animal: Cat | Fish) {
//   // Property 'swim' does not exist on type 'Cat'
//   if (typeof animal.swim === 'function') {
//     return true
//   }
//   return false;
// }

function isFish(animal: Cat|Fish) {
  // 将animal断言为Fish类型
  if (typeof (animal as Fish).swim === 'function') {
    return true
  }
  return false;
}

// 2. 将父类断言为更加具体的子类
// 使用接口定义
interface IApiError extends Error {
  code: number;
}

interface IHttpError extends Error {
  statusCode: number;
}

function isApiError(error: Error) {
  if (typeof (error as IApiError).code === 'number') {
    return true;
  }
  return false;
}
// 使用类定义
class ApiError extends Error {
  code:number = 0;
}

class HttpError extends Error {
  statusCode:number = 200;
}

function checkIsApiError(error: Error) {
  if (error instanceof ApiError) {
    return true
  }
  return false;
}

// 3. 将任何一个类型断言为any
const foo:number = 1;
//  Property 'foo' does not exist on type 'Window & typeof globalThis'.
// window.foo =  1;
// any类型，访问任何属性都可以
(window as any).foo = 1;

// 4. 将any断言为具体的类型
function getCacheData(key: string): any {
  return (window as any).cache[key];
}

interface Cat {
  name: string;
  run(): void;
}

// 将getCacheData('tom')的返回值断言为Cat类型
// 方法1
let tom = getCacheData('tom') as Cat;
tom.run()
// 方法2
let tom1: Cat = getCacheData('tom');
tom1.run()

// 类型断言的限制
// 1. 如果A兼容B，那么A可以被断言为B，B也可以被断言为A
// 父类可以被断言为子类
// 子类也可以被断言为父类
interface Animal {
  name: string;
}

// interface Cat {
//   name: string;
//   run(): void;
// }
// Cat接口定义等价于
interface Cat extends Animal {
  run(): void;
}

let tom2: Cat = {
  name: 'Tom2',
  run: () => {
    console.log('run');
  }
}
let animal: Animal = tom2;

// 互为类型断言
function testAnimal(animal: Animal) {
  return (animal as Cat);
}
function testCat(cat: Cat) {
  return (cat as Animal);
}

// 双重断言
// 任何类型都可以被断言为any
// any也可以被断言为任何类型
interface Cat {
  run(): void;
}

interface Fish {
  swim(): void;
}

function testCatNew(cat: Cat) {
  return (cat as any as Fish)
}

// 类型断言 vs 泛型  最优
// 使用泛型
function getCacheDataNew<T>(key:string): T {
  return (window as any).cache[key];
}
const tom3 = getCacheDataNew<Cat>('Tom');
tom3.run();


export {};