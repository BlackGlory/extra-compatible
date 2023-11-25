import { TypedArray } from '@blackglory/prelude'
import { digest } from '@utils/digest.browser.js'

export function sha1(input: string | DataView | TypedArray): Promise<string> {
  return digest('SHA-1', input)
}
