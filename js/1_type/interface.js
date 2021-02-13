"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myPoint2 = (function () {
    function myPoint2() {
    }
    return myPoint2;
}());
var foo = new myPoint2();
console.log(foo);
String.prototype.endsWith = function (suffix) {
    var str = this;
    return str && str.indexOf(suffix, str.length - suffix.length) !== -1;
};
