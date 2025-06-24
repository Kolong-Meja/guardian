// deno-lint-ignore-file no-empty-interface
import chalk from "chalk";
import { TypeNotMatchError } from "../errors/valid.error.ts";
import type { Floating, Mixed, Numeric } from "../types/value.type.ts";
import { getParams, getPrecisions } from "../utils/advance.utils.ts";
import { ValueError } from "../errors/value.error.ts";

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

export class Integer
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

    Integer.validate(value, this);
  }

  private static validate(value: number, instance: Integer) {
    const [paramName] = getParams(this.validate);
    const precisions = getPrecisions(value);

    if (precisions > 0) {
      throw new TypeNotMatchError(
        `${chalk.red(
          `${chalk.bold(paramName)} should be an ${chalk.bold(
            instance.__type
          )} and not have any precisions.`
        )}`
      );
    }

    if (value < instance.__minValue) {
      throw new ValueError(
        `${chalk.red(
          `Param ${chalk.bold(paramName)} value (${chalk.bold(
            value
          )}) does not match with minimum value (${chalk.bold(
            instance.__minValue
          )})`
        )}`
      );
    }

    if (value > instance.__maxValue) {
      throw new ValueError(
        `${chalk.red(
          `Param ${chalk.bold(paramName)} value (${chalk.bold(
            value
          )}) does not match with maximum value (${chalk.bold(
            instance.__maxValue
          )})`
        )}`
      );
    }
  }

  static of(value: number) {
    return new Integer(value);
  }

  override toString(): string {
    return this.value.toString();
  }

  override valueOf(): number {
    return this.value;
  }
}

export class Long
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

    Long.validate(value, this);
  }

  private static validate(value: bigint, instance: Long) {
    const [paramName] = getParams(this.validate);

    if (value < instance.__minValue) {
      throw new ValueError(
        `${chalk.red(
          `Param ${chalk.bold(paramName)} value (${chalk.bold(
            value
          )}) does not match with minimum value (${chalk.bold(
            instance.__minValue
          )})`
        )}`
      );
    }

    if (value > instance.__maxValue) {
      throw new ValueError(
        `${chalk.red(
          `Param ${chalk.bold(paramName)} value (${chalk.bold(
            value
          )}) does not match with maximum value (${chalk.bold(
            instance.__maxValue
          )})`
        )}`
      );
    }
  }

  static of(value: bigint) {
    return new Long(value);
  }

  override toString(): string {
    return this.value.toString();
  }

  override valueOf(): bigint {
    return this.value;
  }
}

export class UInteger
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

    UInteger.validate(value, this);
  }

  private static validate(value: number, instance: UInteger) {
    const [paramName] = getParams(this.validate);
    const precisions = getPrecisions(value);

    if (precisions > 0) {
      throw new TypeNotMatchError(
        `${chalk.red(
          `${chalk.bold(paramName)} should be an ${chalk.bold(
            instance.__type
          )} and not have any precisions.`
        )}`
      );
    }

    if (value < instance.__minValue) {
      throw new ValueError(
        `${chalk.red(
          `Param ${chalk.bold(paramName)} value (${chalk.bold(
            value
          )}) does not match with minimum value (${chalk.bold(
            instance.__minValue
          )})`
        )}`
      );
    }

    if (value > instance.__maxValue) {
      throw new ValueError(
        `${chalk.red(
          `Param ${chalk.bold(paramName)} value (${chalk.bold(
            value
          )}) does not match with maximum value (${chalk.bold(
            instance.__maxValue
          )})`
        )}`
      );
    }
  }

  static of(value: number) {
    return new UInteger(value);
  }

  override toString(): string {
    return this.value.toString();
  }

  override valueOf(): number {
    return this.value;
  }
}

export class ULong
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

    ULong.validate(value, this);
  }

  private static validate(value: bigint, instance: ULong) {
    const [paramName] = getParams(this.validate);

    if (value < instance.__minValue) {
      throw new ValueError(
        `${chalk.red(
          `Param ${chalk.bold(paramName)} value (${chalk.bold(
            value
          )}) does not match with minimum value (${chalk.bold(
            instance.__minValue
          )})`
        )}`
      );
    }

    if (value > instance.__maxValue) {
      throw new ValueError(
        `${chalk.red(
          `Param ${chalk.bold(paramName)} value (${chalk.bold(
            value
          )}) does not match with maximum value (${chalk.bold(
            instance.__maxValue
          )})`
        )}`
      );
    }
  }

  static of(value: bigint) {
    return new ULong(value);
  }

  override toString(): string {
    return this.value.toString();
  }

  override valueOf(): bigint {
    return this.value;
  }
}

export class Float
  extends OpaqueFloating<"float", 7, number>
  implements Floating<"float", 7>
{
  override readonly __type = "float";
  override readonly __precision = 7;
  override readonly __bitWidth = 32;
  override readonly __bitLength = 4;

  constructor(value: number) {
    super(value);

    Float.validate(value, this);
  }

  private static validate(value: number, instance: Float) {
    const [paramName] = getParams(this.validate);
    const precisions = getPrecisions(value);

    if (precisions < 1) {
      throw new TypeNotMatchError(
        `${chalk.red(
          `${chalk.bold(paramName)} should be an ${chalk.bold(
            instance.__type
          )} and have at least one precision.`
        )}`
      );
    }

    if (precisions > instance.__precision) {
      throw new TypeNotMatchError(
        `${chalk.red(
          `${chalk.bold(paramName)} should be an ${chalk.bold(
            instance.__type
          )} and have maximum of (${chalk.bold(instance.__precision)}).`
        )}`
      );
    }
  }

  static of(value: number) {
    return new Float(value);
  }

  override toString(): string {
    return this.value.toString();
  }

  override valueOf(): number {
    return this.value;
  }
}

export class Decimal
  extends OpaqueFloating<"decimal", 15, number>
  implements Floating<"decimal", 15>
{
  override readonly __type = "decimal";
  override readonly __precision = 15;
  override readonly __bitWidth = 64;
  override readonly __bitLength = 8;

  constructor(value: number) {
    super(value);

    Decimal.validate(value, this);
  }

  private static validate(value: number, instance: Decimal) {
    const [paramName] = getParams(this.validate);
    const precisions = getPrecisions(value);

    if (precisions < 1) {
      throw new TypeNotMatchError(
        `${chalk.red(
          `${chalk.bold(paramName)} should be an ${chalk.bold(
            instance.__type
          )} and have at least one precision.`
        )}`
      );
    }

    if (precisions > instance.__precision) {
      throw new TypeNotMatchError(
        `${chalk.red(
          `${chalk.bold(paramName)} should be an ${chalk.bold(
            instance.__type
          )} and have maximum of (${chalk.bold(instance.__precision)}).`
        )}`
      );
    }
  }

  static of(value: number) {
    return new Decimal(value);
  }

  override toString(): string {
    return this.value.toString();
  }

  override valueOf(): number {
    return this.value;
  }
}

export interface Integer {}

export interface Long {}

export interface UInteger {}

export interface ULong {}

export interface Float {}

export interface Decimal {}
