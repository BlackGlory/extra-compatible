import { test, expect } from 'vitest'
import { performanceNow } from '@src/performance-now.js'
import { isNumber } from '@blackglory/prelude'

test('performanceNow', () => {
  const result = performanceNow()

  expect(isNumber(result)).toBe(true)
})
