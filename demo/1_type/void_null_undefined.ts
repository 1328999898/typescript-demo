// 空值
// 用于定义没有任何返回值的函数
function alertName(): void {
  alert('My Name is Tom')
  // 不能return
}

// strictNullChecks为true时，void只能分配undefined
// strictNullChecks为false时，void可以分配undefined和null
let v: void = undefined
// let vn: void = null

// strictNullChecks为true时，null和undefined只能分配给unknown、any和自身的类型
// strictNullChecks为false时，null和undefined是所有类型的子类型，可以分配给所有类型
let u: undefined = undefined;
let n: null = null;

// let str0: number = u
// let str1: string = n;
// let str2: boolean = n;
let str3: unknown = u;
let str4: any = u;
// let str5: string = u;
// unknown类型只能赋值给unknown类型本身和any类型


function vFunc(): void {
  console.log('This is void Function');
}

