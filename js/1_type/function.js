"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sum(x, y) {
    return x + y;
}
sum(1, 2);
var mySum = function (x, y) {
    return x + y;
};
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
function buildName(firstName, lastName) {
    return firstName + " " + lastName;
}
buildName("Tom", "cat");
buildName("Tom");
function defaultName(firstName, lastName) {
    if (firstName === void 0) { firstName = "Tom"; }
    return firstName + " " + lastName;
}
function buildNameNew(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
console.log("buildNameNew", buildNameNew("Tom", "Joseph", "Li"));
function reverse(x) {
    if (typeof x === "number") {
        return Number(x
            .toString()
            .split("")
            .reverse()
            .join(""));
    }
    else if (typeof x === "string") {
        return x
            .split("")
            .reverse()
            .join("");
    }
}
function myFunc(p1, p2) {
    return p1 + p2;
}
var sn = function (p1, p2) {
    return p1 + p2;
};
function myFn1(a, b, c) {
    if (c === void 0) { c = 'c'; }
    return true;
}
myFn1('a');
myFn1('a', 'b');
myFn1('a', 'b', 'mm');
function myFn2(a) {
    var argv = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        argv[_i - 1] = arguments[_i];
    }
    console.log(a, argv);
}
myFn2('a', 'b', 'c', 'd');
function myFn3(x) {
    return 1;
}
myFn3('a');
function myFn4(name, age, score) {
    console.log('name', name);
    console.log('age', age);
    console.log('score', score);
}
myFn4('Jane', null, 20);
