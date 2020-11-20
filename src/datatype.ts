// 原始类型
let bool: boolean = true
export let num: number = 123
export let str: string = 'abc1'

// 数组
export let arr1: number[] = [1,2,3]
export let arr2: Array<number | string> = [1, 2, 3, '4']

// 元组
export let tuple: [number, string] = [3, 'abc']
tuple.push(2)

console.log(tuple)