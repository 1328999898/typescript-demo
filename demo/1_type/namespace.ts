// 匿名函数向现有对象添加内容
// 或者创建一个新的对象
// 确保创建的变量不会泄露至全局命名空间
// let something;
// (function(something) {
//   something.foo = 123;
// })(something || (something={}))
// console.log(something);

// ts通过命名空间定义匿名函数
namespace Utility {
  export function log(msg: string) {
    console.log(msg);
  }
  export function error(msg: string) {
    console.log(error);
  }
}

// 命名空间可以嵌套使用
