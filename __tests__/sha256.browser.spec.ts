import { sha256 } from '@src/sha256.browser'
import './polyfill'

test('sha256', async () => {
  const text = 'text'

  const result = await sha256(text)

  expect(result).toBe('982d9e3eb996f559e633f4d194def3761d909f5a3b647d1a851fead67c32c9d1')
})
