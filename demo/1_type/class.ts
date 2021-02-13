// 内置对象
// 一、JavaScript中的内置对象
// 1. Boolean
let b: Boolean = new Boolean(1);
// 2. Error
let e: Error = new Error('error');
// 3. RegExp
let r: RegExp = /^test$/; 
// 4. Date
let d: Date = new Date();
// 5. Number
let n: Number = new Number();
// 二、DOM & BOM
let body: HTMLElement = document.body;
let allDiv: NodeList = document.querySelectorAll('div');
document.addEventListener('click', function(e: MouseEvent) {
  console.log(e);
})

export {};