import { expect, test } from 'vitest'

// expect 用于创建断言
test('expect test', () => {
  expect(1 + 1).toBe(2)
  expect.soft(1 + 1).toBe(3)
  expect(1 + 1).toBe(2)
})
