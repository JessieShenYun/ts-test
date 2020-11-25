// 索引类型
let obj = {
  a: 1,
  b: 2,
  c: 3
}

export function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map(item => obj[item])
}

// 索引类型的查询操作符 keyof T
console.log(getValues(obj, ['a']), 'getValues')

interface Obj {
  a: number,
  b: string,
  c: number
}

type ReadOnlyObj = Readonly<Obj>
type PartialObj = Partial<Obj>
type PickObj = Pick<Obj, "b" | "c">


type Diff<T, U> = T extends U ? never : T
type T4 = Diff<'a' | 'b' | 'c', 'a' | 'b' | 'c'>
// 拆解为 Diff<'a', 'a'> | Diff<'b', 'a'> | Diff<'c', 'a'>
type NotNull<T> = Diff<T, undefined | null>
type T5 = NotNull<string | number | null>

// Exclude<T, U>

// console.log(Shape.circle(2), '111'
// )

interface A {
  x: number;
  // y: string;
  foo(bar: number): number
  foo(bar: 'a'): number
}
interface A {
  y: number;
  foo(bar: string): string
  foo(bar: 'b'): number
}

let a: A = {
  x: 1,
  y: 2,
  foo(bar: any) {
    return bar
  }
}

function Lib() {}
namespace Lib {
  export let version = '1.0'
}
console.log(Lib.version)
