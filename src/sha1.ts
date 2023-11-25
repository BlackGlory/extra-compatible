import { TypedArray } from '@blackglory/prelude'
import { digest } from '@utils/digest.js'

export function sha1(input: string | DataView | TypedArray): Promise<string> {
  return digest('SHA1', input)
}
