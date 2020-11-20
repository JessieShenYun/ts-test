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
exports.tuple.push(2);
console.log(exports.tuple);
