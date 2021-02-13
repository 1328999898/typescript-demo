"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var str = "我是任意值";
var n1 = str;
var type;
type = 12;
type = '我也是任意值';
var age = 18;
var moreType = 1;
moreType = '我是联合类型';
var tom = {
    id: 1,
    name: 'Tom',
    age: 12,
    gender: 'male'
};
console.log(tom);
var t1 = {
    id: 2,
    age: 12,
    sex: 'male',
    favorite: 'football',
    score: 100
};
var a = 124;
a = 'abc';
var tUndefined;
tUndefined = 'abcd';
tUndefined = 123;
var uNumber = 123;
var uArray = [1, 3, 5];
var uArrayAny = [1, 'a', 3];
var u1 = 123;
u1 = 'abc';
console.log(u1.length);
function fn1(params) {
    return params.toString();
}
