const maths = require('../src/math')

test('add: 1 + 1 = 2', () => {
  expect(maths.add(1,1)).toBe(2)
})

test('sub: 1 - 2 = -1', () => {
  expect(maths.sub(1,2)).toBe(-1)
})