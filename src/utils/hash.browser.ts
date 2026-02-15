import { bufferToHex } from '@utils/buffer-to-hex.js'
import { isString } from '@blackglory/prelude'
import { TypedArray } from 'justypes'

export async function hash(
  algorithm: AlgorithmIdentifier
, input: string | DataView<ArrayBuffer> | TypedArray<ArrayBuffer>
): Promise<string> {
  const hashBuffer = await crypto.subtle.digest(algorithm, toBufferSource(input))
  return bufferToHex(hashBuffer)
}

function toBufferSource(input: string | DataView<ArrayBuffer> | TypedArray<ArrayBuffer>): ArrayBufferView<ArrayBuffer> {
  if (isString(input)) {
    const encoder = new TextEncoder()
    return encoder.encode(input)
  } else if (input instanceof DataView) {
    return input
  } else {
    return new DataView<ArrayBuffer>(input.buffer, input.byteOffset, input.byteLength)
  }
}
