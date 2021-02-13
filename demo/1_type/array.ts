// 数组类型

// 定义数组
// 1. 类型+方括号
let test: number[] = [1,2,3,4,5];
test.push(9);
// test.push('89');  // 不允许增加或修改number之外的其他类型数据
console.log(test);

// 2. 使用泛型
let test1: Array<number> = [1,2,3,4,5];

// 3. 使用接口 - 常用于定义类数组
interface numberArray {
  [index: number]: number;    // 索引的类型是number，值是number类型
}
let infArray: numberArray = [1,2,3,4,5];

// 4. 类数组
interface IArguments {
  [index:number] :number;
  length: number;
  callee: Function
}


// 数组定义方式
// 1. 使用[]
const nArray: number[] = [1,2,3,4,5];
// 2. 使用泛型
const nArrayGen: Array<string> = ['a', 'b', 'c'];
// 3. 使用接口
interface INumberArray {
  [index:number]: number;
}
const nArrayI: INumberArray = [1,2,3,4,5];
// 使用any可以定义包含任意类型数据的数组
const nArrayAny: any = [1, 'a', ['a', 'b'], 333];