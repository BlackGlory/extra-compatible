import { sha1 } from '@src/sha1.browser.js'
import './polyfill.js'

test('sha1', async () => {
  const text = 'text'

  const result = await sha1(text)

  expect(result).toBe('372ea08cab33e71c02c651dbc83a474d32c676ea')
})
