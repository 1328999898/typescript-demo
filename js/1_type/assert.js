"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
function getName(animal) {
    return animal.name;
}
function isFish(animal) {
    if (typeof animal.swim === 'function') {
        return true;
    }
    return false;
}
function isApiError(error) {
    if (typeof error.code === 'number') {
        return true;
    }
    return false;
}
var ApiError = (function (_super) {
    __extends(ApiError, _super);
    function ApiError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.code = 0;
        return _this;
    }
    return ApiError;
}(Error));
var HttpError = (function (_super) {
    __extends(HttpError, _super);
    function HttpError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.statusCode = 200;
        return _this;
    }
    return HttpError;
}(Error));
function checkIsApiError(error) {
    if (error instanceof ApiError) {
        return true;
    }
    return false;
}
var foo = 1;
window.foo = 1;
function getCacheData(key) {
    return window.cache[key];
}
var tom = getCacheData('tom');
tom.run();
var tom1 = getCacheData('tom');
tom1.run();
var tom2 = {
    name: 'Tom2',
    run: function () {
        console.log('run');
    }
};
var animal = tom2;
function testAnimal(animal) {
    return animal;
}
function testCat(cat) {
    return cat;
}
function testCatNew(cat) {
    return cat;
}
function getCacheDataNew(key) {
    return window.cache[key];
}
var tom3 = getCacheDataNew('Tom');
tom3.run();
