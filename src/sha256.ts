import * as crypto from 'crypto'

export async function sha256(text: string): Promise<string> {
  return crypto.createHash('sha256')
    .update(text)
    .digest('hex')
}
