"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValues = void 0;
// 索引类型
var obj = {
    a: 1,
    b: 2,
    c: 3
};
function getValues(obj, keys) {
    return keys.map(function (item) { return obj[item]; });
}
exports.getValues = getValues;
// 索引类型的查询操作符 keyof T
console.log(getValues(obj, ['a']), 'getValues');
// Exclude<T, U>
/;
