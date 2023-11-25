import * as crypto from 'crypto'
import { TypedArray } from '@blackglory/prelude'

export async function sha1(input: string | DataView | TypedArray): Promise<string> {
  return crypto.createHash('SHA1')
    .update(input)
    .digest('hex')
}
