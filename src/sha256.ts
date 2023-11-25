import { TypedArray } from '@blackglory/prelude'
import { digest } from '@utils/digest.js'

export function sha256(input: string | DataView | TypedArray): Promise<string> {
  return digest('SHA256', input)
}
