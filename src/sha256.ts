import { TypedArray } from 'justypes'
import { hash } from '@utils/hash.js'

export function sha256(input: string | DataView<ArrayBuffer> | TypedArray<ArrayBuffer>): Promise<string> {
  return hash('SHA256', input)
}
