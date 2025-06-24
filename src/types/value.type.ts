import type { Decimal, Float, Integer, Long, UInteger, ULong } from "../generators/opaque-type.generator.ts";

// deno-lint-ignore-file no-explicit-any no-explicit-any
export type Numeric<T extends string, U extends boolean> = {
  __type: T;
  __unsigned: U;
  __bitWidth: number;
  __minValue: number | bigint;
  __maxValue: number | bigint;
  __bitLength: number;
};

export type Floating<T extends string, P extends number> = {
  __type: T;
  __precision: P;
  __bitWidth: number;
  __bitLength: number;
};

export type Mixed =
  | string
  | number
  | bigint
  | object
  | boolean
  | symbol
  | undefined
  | null
  | any
  | Integer
  | UInteger
  | ULong
  | Long
  | Float
  | Decimal;
