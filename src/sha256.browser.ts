import { bufferToHex } from '@utils/buffer-to-hex'

export async function sha256(text: string): Promise<string> {
  const encoder = new TextEncoder()
  const buffer = encoder.encode(text)
  const hashBuffer = await crypto.subtle.digest('SHA-256', buffer)
  return bufferToHex(hashBuffer)
}
