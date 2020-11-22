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
// 用一个变量定义函数类型
var add1;
var sum = function (a, b) { return a + b; };
var getLib = function () {
    var lib = (function () { });
    lib.version = "1.0.1";
    lib.doSomething = function () { };
    return lib;
};
// 创建实例
var lib1 = getLib();
lib1();
lib1.version = "1.0.2";
// 类
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = "dog";
        this.name = name;
    }
    Dog.prototype.run = function () { };
    Dog.prototype.pri = function () { }; // 私有成员
    Dog.prototype.pro = function () { }; // 受保护成员
    Dog.food = 'bones';
    return Dog;
}());
console.log(Dog.prototype); // 不包含name属性，包含run方法，name属性是实例属性，run是原型方法
var dog = new Dog('wangwang');
console.log(dog); // 包含name属性，不包含run方法
// dog.pri()
// console.log(dog.food)
// Dog的子类
var Husky = /** @class */ (function (_super) {
    __extends(Husky, _super);
    function Husky(name, color) {
        var _this = _super.call(this, name) // 父类的实例
         || this;
        _this.color = color;
        _this.pro(); // protected的成员可以被继承
        return _this;
    }
    return Husky;
}(Dog));
console.log(Dog.food);
// 抽象类
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.eat = function () {
        console.log('eat fish');
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    Cat.prototype.sleep = function () {
        console.log('cat is sleeping');
    };
    return Cat;
}(Animal));
var Duck = /** @class */ (function (_super) {
    __extends(Duck, _super);
    function Duck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Duck.prototype.sleep = function () {
        console.log('duck sleep');
    };
    return Duck;
}(Animal));
var cat = new Cat('miaomiao');
var duck = new Duck();
var animals = [cat, duck];
animals.forEach(function (i) {
    i.sleep();
});
// let animal = new Animal()  无法创建抽象类的实例
// 类的链式调用
var WorkFlow = /** @class */ (function () {
    function WorkFlow() {
    }
    WorkFlow.prototype.step1 = function () {
        return this;
    };
    WorkFlow.prototype.step2 = function () {
        return this;
    };
    return WorkFlow;
}());
new WorkFlow().step1().step2(); // 链式调用
var MyFlow = /** @class */ (function (_super) {
    __extends(MyFlow, _super);
    function MyFlow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyFlow.prototype.next = function () {
        return this;
    };
    return MyFlow;
}(WorkFlow));
new MyFlow().next().step1().next().step2();
// 用类实现一个接口
var Asian = /** @class */ (function () {
    function Asian(name) {
        this.name = name;
    }
    Asian.prototype.eat = function () { };
    Asian.prototype.sleep = function () { };
    return Asian;
}());
var boy = {
    eat: function () { },
    name: '',
    speak: function () { },
    cry: function () { },
};
var Auto = /** @class */ (function () {
    function Auto() {
        this.state = 1;
        this.state2 = 2;
    }
    return Auto;
}());
// class C implements AutoInterface {
//   state =  1
// }
var Bus = /** @class */ (function (_super) {
    __extends(Bus, _super);
    function Bus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bus;
}(Auto));
