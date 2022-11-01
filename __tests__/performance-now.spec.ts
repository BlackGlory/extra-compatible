import { performanceNow } from '@src/performance-now'
import { isNumber } from '@blackglory/prelude'

test('performanceNow', () => {
  const result = performanceNow()

  expect(isNumber(result)).toBe(true)
})
