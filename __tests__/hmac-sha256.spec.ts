import { test, expect } from 'vitest'
import { hmacSHA256 } from '@src/hmac-sha256.js'

test('hmacSHA256', async () => {
  const secret = 'secret'
  const text = 'text'

  const result = await hmacSHA256(secret, text)

  expect(result).toBe('2f443685592900e619f2f3b2350c3c8a5738e2e7a26bc9a244d3393c3cd6abd6')
})
