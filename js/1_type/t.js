"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reverse(items) {
    var toReturn = [];
    for (var i = items.length - 1; i >= 0; i--) {
        toReturn.push(items[i]);
    }
    return toReturn;
}
var numbers = [1, 2, 3, 4, 5];
var numbersRev = reverse(numbers);
console.log(numbersRev);
function extend(first, second) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        result[id] = second[id];
    }
    return result;
}
var x = extend({ a: 123 }, { b: 'aaaa', a: 333 });
console.log(x);
