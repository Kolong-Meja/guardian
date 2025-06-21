// deno-lint-ignore-file no-explicit-any
type Numeric<T extends string, U extends boolean> = {
  __type: T;
  __unsigned: U;
  __bitWidth: number;
  __minValue: number | bigint;
  __maxValue: number | bigint;
  __bitLength: number;
};

type Floating<T extends string, P extends number> = {
  __type: T;
  __precision: P;
  __bitWidth: number;
  __bitLength: number;
};

abstract class OpaqueNumeric<
  T extends string,
  U extends boolean,
  V extends Mixed
> {
  abstract readonly __type: T;
  abstract readonly __unsigned: U;
  abstract readonly __bitWidth: number;
  abstract readonly __minValue: number | bigint;
  abstract readonly __maxValue: number | bigint;
  abstract readonly __bitLength: number;

  constructor(public readonly value: V) {}
  toString() {
    return String(this.value);
  }
  valueOf() {
    return this.value;
  }
}

abstract class OpaqueFloating<
  T extends string,
  P extends number,
  V extends Mixed
> {
  abstract readonly __type: T;
  abstract readonly __precision: P;
  abstract readonly __bitWidth: number;
  abstract readonly __bitLength: number;

  constructor(public readonly value: V) {}
  toString() {
    return String(this.value);
  }
  valueOf() {
    return this.value;
  }
}

export class Int32
  extends OpaqueNumeric<"integer", false, number>
  implements Numeric<"integer", false>
{
  override readonly __type = "integer";
  override readonly __unsigned = false;
  override readonly __bitWidth = 32;
  override readonly __minValue = -(2 ** 31);
  override readonly __maxValue = 2 ** 31;
  override readonly __bitLength = 4;
  constructor(value: number) {
    super(value);
  }
}

export class Int64
  extends OpaqueNumeric<"long", false, bigint>
  implements Numeric<"long", false>
{
  override readonly __type = "long";
  override readonly __unsigned = false;
  override readonly __bitWidth = 64;
  override readonly __minValue = -(2 ** 63);
  override readonly __maxValue = 2 ** 63;
  override readonly __bitLength = 8;
  constructor(value: bigint) {
    super(value);
  }
}

export class UInt32
  extends OpaqueNumeric<"unsigned integer", true, number>
  implements Numeric<"unsigned integer", true>
{
  override readonly __type = "unsigned integer";
  override readonly __unsigned = true;
  override readonly __bitWidth = 32;
  override readonly __minValue = 0;
  override readonly __maxValue = 2 ** 32;
  override readonly __bitLength = 4;
  constructor(value: number) {
    super(value);
  }
}

export class UInt64
  extends OpaqueNumeric<"unsigned long", true, bigint>
  implements Numeric<"unsigned long", true>
{
  override readonly __type = "unsigned long";
  override readonly __unsigned = true;
  override readonly __bitWidth = 64;
  override readonly __minValue = 0;
  override readonly __maxValue = 2 ** 64;
  override readonly __bitLength = 8;
  constructor(value: bigint) {
    super(value);
  }
}

export class Float32
  extends OpaqueFloating<"float", 7, number>
  implements Floating<"float", 7>
{
  override readonly __type = "float";
  override readonly __precision = 7;
  override readonly __bitWidth = 32;
  override readonly __bitLength = 4;

  constructor(value: number) {
    super(value);
  }
}

export class Float64
  extends OpaqueFloating<"decimal", 15, number>
  implements Floating<"decimal", 15>
{
  override readonly __type = "decimal";
  override readonly __precision = 15;
  override readonly __bitWidth = 64;
  override readonly __bitLength = 8;

  constructor(value: number) {
    super(value);
  }
}

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
  | Int32
  | Int64
  | Float32
  | Float64;
