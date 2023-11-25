import { TypedArray } from '@blackglory/prelude'
import { digest } from '@utils/digest.browser.js'

export function sha256(input: string | DataView | TypedArray): Promise<string> {
  return digest('SHA-256', input)
}
