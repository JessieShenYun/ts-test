"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var c1 = require('./a.node');
var c2 = require('./b.node');
var c3 = require('../es6/a');
// import c4 from '../es6/d'
var c4 = require("../es6/d");
console.log(c1, '---------------> c1');
console.log(c2, '---------------> c2');
console.log(c3, '---------------> c3');
console.log(c4(), '---------------> c4');
