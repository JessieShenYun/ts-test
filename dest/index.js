"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var datatype_1 = require("./datatype");
var type_1 = require("./type");
var dom = document.querySelector('.app');
if (dom) {
    dom.innerHTML = datatype_1.str;
}
console.log(type_1.getValues);
