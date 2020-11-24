/// <reference path="a.ts" />
namespace Shape {
  export function square(x: number) {
    return x * x
  }
}
console.log(Shape.circle(3))
console.log(Shape.square(3))
import circle = Shape.circle
console.log(circle(1))
