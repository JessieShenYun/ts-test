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