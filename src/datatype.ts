// 原始类型
let bool: boolean = true
export let num: number = 123
export let str: string = 'abc1'

// 数组
export let arr1: number[] = [1,2,3]
export let arr2: Array<number | string> = [1, 2, 3, '4']

// 元组
export let tuple: [number, string] = [3, 'abc']

// 函数
let add = (x: number,y: number) => x + y
let compute: (x: number, y: number) => number = (x, y) => x + y

// 对象
let obj: { x: number, y: number} = {x: 1, y: 2}

// symbol
let s1 : symbol = Symbol()
let s2 = Symbol()
console.log(s1 === s2)   // false

// undefined , null
let un: undefined = undefined
let nu: null = null

// viod
let noReturn = () => {}

// any
let x: any

// never
let error = () => {
  throw new Error('error')
}
let endless = () => {
  while(true) {}
}

// 枚举类型
enum Role {
  Reporter = 0,
  Developer = 1,
  Owner = 2,
  Maintainer = 2,
  Guest = 3
}
console.log(Role[2])
console.log(Role.Developer)

// 字符串枚举
enum Message {
  Success = '恭喜你，成功了',
  Fail = '抱歉，失败了'
}

// 异构枚举
enum Answer {
  N,
  Y = 'yes'
}

// 枚举成员
enum a {
  x = 'abc'.length,
  y = 1
}

// 常量枚举
const enum Month {
  Jan,
  Feb,
  Mar
}

let month = [Month.Jan, Month.Feb, Month.Mar]

// 外部枚举
declare enum Enum {
  A = 1,
  B,
  C = 2
}

// 用一个变量定义函数类型
let add1 : (x: number, y: number) => number

// 定义函数类型接口
interface Add1 {
  (x: number, y: number): number
}

// 类型别名
type Add2 = (x: number, y: number) => number

let sum: Add2 = (a, b)=> a + b

// 混合类型接口，一个接口既可以定义一个函数，也可以拥有属性和方法
interface Lib {
  () : void;
  version: string;
  doSomething(): void
}

let getLib = () => {
  let lib: Lib = (() => {}) as Lib
  lib.version = "1.0.1"
  lib.doSomething = () => {}
  return lib
}

// 创建实例
let lib1 = getLib()
lib1()
lib1.version = "1.0.2"

// 类
class Dog {
  constructor(name: string) {
    this.name = name
  }
  name: string = "dog";
  run(){}
  private pri(){} // 私有成员
  protected pro(){} // 受保护成员
  static food: string = 'bones'
}
console.log(Dog.prototype) // 不包含name属性，包含run方法，name属性是实例属性，run是原型方法
let dog = new Dog('wangwang')
console.log(dog) // 包含name属性，不包含run方法
// dog.pri()
// console.log(dog.food)

// Dog的子类
class Husky extends Dog {
  constructor(name: string, color: string) {
    super(name) // 父类的实例
    this.color = color
    this.pro() // protected的成员可以被继承
  }
  color: string
}
console.log(Dog.food)

// 抽象类
abstract class Animal {
  eat(): void {
    console.log('eat fish')
  }
  abstract sleep():void // 抽象方法
}

class Cat extends Animal {
  constructor(name: string) {
    super()
    this.name = name
  }
  name: string
  sleep() {
    console.log('cat is sleeping')
  }
}

class Duck extends Animal {
  sleep() {
    console.log('duck sleep')
  }
}

let cat = new Cat('miaomiao')
let duck = new Duck()

let animals: Animal[] = [cat, duck]
animals.forEach((i) => {
  i.sleep()
})

// let animal = new Animal()  无法创建抽象类的实例

// 类的链式调用
class WorkFlow {
  step1() {
    return this
  }
  step2() {
    return this
  }
}

new WorkFlow().step1().step2() // 链式调用

class MyFlow extends WorkFlow {
  next() {
    return this
  }
}

new MyFlow().next().step1().next().step2()

interface Human {
  name: string;
  eat(): void
}

// 用类实现一个接口
class Asian implements Human {
  constructor(name: string){
    this.name = name
  }
  name: string
  eat() {}
  sleep() {}
}

interface Man extends Human {
  speak(): void
}

interface Child {
  cry(): void
}

interface Boy extends Man, Child {}

let boy: Boy = {
  eat() {},
  name: '',
  speak() {},
  cry() {},
}

class Auto {
  state = 1
  private state2 = 2
}

interface AutoInterface extends Auto {

}

// class C implements AutoInterface {
//   state =  1
// }

class Bus extends Auto implements AutoInterface {}