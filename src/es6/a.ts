// 单独导出变量
export let a = 111

// 批量导出变量
let b = 'hello'
let c = 'world'
export { b, c }


export let d = 'shenyun'

// 导出接口
export interface A {
  a: string
}

// 导出函数
export function add() { }

// 导出起别名
function g() { }
export { g as G }

// 默认导出，无需函数名
export default function () {
  console.log('default export')
}

export { str as hello } from './b'