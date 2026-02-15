import { TypedArray } from 'justypes'
import { hash } from '@utils/hash.browser.js'

export function sha1(input: string | DataView<ArrayBuffer> | TypedArray<ArrayBuffer>): Promise<string> {
  return hash('SHA-1', input)
}
