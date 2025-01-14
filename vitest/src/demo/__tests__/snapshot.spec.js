import { expect, it } from 'vitest'
import { toUpperCase } from '../../utils/toUpperCase'

it('toUpperCase', () => {
  const result = toUpperCase('vitest')
  expect(result).toMatchInlineSnapshot(`"VITEST"`)
})
