import { assert, expect, test, describe, bench } from 'vitest'
import { sum } from '../../utils/sum'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('dynamic skip', context => {
  expect(sum(1, 2)).toBe(3)
  context.skip()
  expect(sum(1, 2)).toBe(4)
})

test.skip('skip', () => {
  assert.equal(Math.sqrt(4), 3)
})

// test.only('test', () => {
//   expect(sum(1, 2)).toBe(3)
// })

describe.concurrent('suite', () => {
  let a = 1
  test('concurrent test 1', async () => {
    assert.equal(a, 1)
    a += 1
    /* ... */
  })
  test('concurrent test 2', async () => {
    assert.equal(a, 2)
    a += 1
    /* ... */
  })

  test.sequential('sequential test 1', async () => {
    /* ... */
    assert.equal(a, 3)
  })
  test.sequential('sequential test 2', async () => {
    assert.equal(a, 3)
    /* ... */
  })
})

// fail test
// test.fails('fail test', () => {
//   assert.equal(Math.sqrt(4), 2)
// })

test.each([
  [1, 2, 3],
  [3, 4, 7]
])('add(%i, %i) -> %i', (a, b, expected) => {
  expect(a + b).toBe(expected)
})

test.each([
  { a: 1, b: 2, expected: 3 },
  { a: 3, b: 6, expected: 9 }
])('add($a, $b) -> $expected', ({ a, b, expected }) => {
  expect(a + b).toBe(expected)
})

test.each`
  a           | b      | expected
  ${{ a: 1 }} | ${'b'} | ${'1b'}
  ${{ a: 3 }} | ${'d'} | ${'3d'}
`('add($a.a, $b) -> $expected', ({ a, b, expected }) => {
  expect(a.a + b).toBe(expected)
})

test.concurrent.for([
  [1, 1],
  [1, 2],
  [2, 1]
])('add(%i, %i)', ([a, b], { expect }) => {
  expect(a + b).matchSnapshot()
})
