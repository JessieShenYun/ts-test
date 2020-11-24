"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = exports.G = exports.add = exports.d = exports.c = exports.b = exports.a = void 0;
// 单独导出变量
exports.a = 111;
// 批量导出变量
var b = 'hello';
exports.b = b;
var c = 'world';
exports.c = c;
exports.d = 'shenyun';
// 导出函数
function add() { }
exports.add = add;
// 导出起别名
function g() { }
exports.G = g;
// 默认导出，无需函数名
function default_1() {
    console.log('default export');
}
exports.default = default_1;
var b_1 = require("./b");
Object.defineProperty(exports, "hello", { enumerable: true, get: function () { return b_1.str; } });
