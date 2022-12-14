import * as crypto from 'crypto'
import { TypedArray } from '@blackglory/prelude'

export async function sha256(input: string | DataView | TypedArray): Promise<string> {
  return crypto.createHash('sha256')
    .update(input)
    .digest('hex')
}
