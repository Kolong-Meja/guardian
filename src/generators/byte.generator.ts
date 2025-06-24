import { Integer, Long } from "./opaque-type.generator.ts";

export function int32ToBytes(value: number): number[] {
  const byteLength = 4;
  const bytes = [];
  const buffer = new ArrayBuffer(byteLength);
  const view = new DataView(buffer);
  view.setInt32(0, value, true);

  for (let i = 0; i < 4; i++) {
    bytes.push(view.getUint8(i));
  }

  return bytes;
}

export function int64ToBytes(value: bigint): number[] {
  const byteLength = 8;
  const bytes = [];
  const buffer = new ArrayBuffer(byteLength);
  const view = new DataView(buffer);
  view.setBigInt64(0, value, true);

  for (let i = 0; i < 4; i++) {
    bytes.push(view.getUint8(i));
  }

  return bytes;
}

export function bytesToInt32(bytes: number[]): Integer {
  const buffer = new Int8Array(bytes).buffer;
  const view = new DataView(buffer);
  const originalNum = new Integer(view.getInt32(0, true));
  return originalNum;
}

export function bytesToInt64(bytes: number[]): Long {
  const buffer = new Int8Array(bytes).buffer;
  const view = new DataView(buffer);
  const originalNum = new Long(view.getBigInt64(0, true));
  return originalNum;
}
