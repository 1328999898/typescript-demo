// 枚举类型
// 普通枚举，编译过程中不会被删除
enum Days {
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
}
// 支持key value的正向映射和反向映射
console.log(Days);
console.log(Days[0]);
console.log(Days['Sun']);
// 手动赋值
enum Days1 {
  'Sun'=7,
  'Mon'=1,
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
}
console.log(Days1);
// 枚举项
// 1. 常数项
// 2. 计算所得项
enum Color {
  Red,
  Green,                 // 常数项
  Blue = "blue".length   // 计算所得项
}
// 计算所得项后面不可以放常数项，否则会因为无法初始化二报错

// 常数枚举
// 使用`const enum`定义
// 会在编译过程中删除
const enum Directions {
  Up,
  Down,
  // Blue = "blue".length,    // 常数枚举中不能定义计算所得项
}
let directions = [Directions.Up, Directions.Down];

// 外部枚举
// 使用`declare enum`定义
// 会在编译过程中删除
declare enum dEnum {
  Red,
  Green,
  Blue
}
let de = [dEnum.Red, dEnum.Green, dEnum.Blue];
// 
declare const enum dCEnum {
  Red,
  Green,
  Blue
}
let dce = [dCEnum.Red, dCEnum.Green, dCEnum.Blue];




