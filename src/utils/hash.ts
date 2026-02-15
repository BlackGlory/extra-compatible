import * as crypto from 'crypto'
import { TypedArray } from 'justypes'

export async function hash(
  algorithm: string
, input: string | DataView<ArrayBuffer> | TypedArray
): Promise<string> {
  return crypto.createHash(algorithm)
    .update(input)
    .digest('hex')
}
