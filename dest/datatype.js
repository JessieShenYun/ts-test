"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tuple = exports.arr2 = exports.arr1 = exports.str = exports.num = void 0;
// 原始类型
var bool = true;
exports.num = 123;
exports.str = 'abc1';
// 数组
exports.arr1 = [1, 2, 3];
exports.arr2 = [1, 2, 3, '4'];
// 元组
exports.tuple = [3, 'abc'];
// 函数
var add = function (x, y) { return x + y; };
var compute = function (x, y) { return x + y; };
// 对象
var obj = { x: 1, y: 2 };
// symbol
var s1 = Symbol();
var s2 = Symbol();
console.log(s1 === s2); // false
// undefined , null
var un = undefined;
var nu = null;
// viod
var noReturn = function () { };
// any
var x;
// never
var error = function () {
    throw new Error('error');
};
var endless = function () {
    while (true) { }
};
// 枚举类型
var Role;
(function (Role) {
    Role[Role["Reporter"] = 0] = "Reporter";
    Role[Role["Developer"] = 1] = "Developer";
    Role[Role["Owner"] = 2] = "Owner";
    Role[Role["Maintainer"] = 2] = "Maintainer";
    Role[Role["Guest"] = 3] = "Guest";
})(Role || (Role = {}));
console.log(Role[2]);
console.log(Role.Developer);
// 字符串枚举
var Message;
(function (Message) {
    Message["Success"] = "\u606D\u559C\u4F60\uFF0C\u6210\u529F\u4E86";
    Message["Fail"] = "\u62B1\u6B49\uFF0C\u5931\u8D25\u4E86";
})(Message || (Message = {}));
// 异构枚举
var Answer;
(function (Answer) {
    Answer[Answer["N"] = 0] = "N";
    Answer["Y"] = "yes";
})(Answer || (Answer = {}));
// 枚举成员
var a;
(function (a) {
    a[a["x"] = 'abc'.length] = "x";
    a[a["y"] = 1] = "y";
})(a || (a = {}));
var month = [0 /* Jan */, 1 /* Feb */, 2 /* Mar */];
