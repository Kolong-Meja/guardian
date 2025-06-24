import {
  Decimal,
  Float,
  Integer,
  Long,
  UInteger,
  ULong,
} from "../generators/opaque-type.generator.ts";
import type { Mixed } from "../types/value.type.ts";

export function isString(value: Mixed): boolean {
  return typeof value === "string";
}

export function isNumber(value: Mixed): boolean {
  return typeof value === "number";
}

export function isArray(value: Mixed): boolean {
  return Array.isArray(value);
}

export function isBoolean(value: Mixed): boolean {
  return typeof value === "boolean";
}

export function isDate(value: Mixed): boolean {
  return value instanceof Date;
}

export function isSymbol(value: Mixed): boolean {
  return typeof value === "symbol";
}

export function isBigInt(value: Mixed): boolean {
  return typeof value === "bigint";
}

export function isObject(value: Mixed): boolean {
  return typeof value === "object" && value !== null;
}

export function isInteger(value: Mixed): value is Integer {
  return value instanceof Integer;
}

export function isUInteger(value: Mixed): value is UInteger {
  return value instanceof UInteger;
}

export function isLong(value: Mixed): value is Long {
  return value instanceof Long;
}

export function isULong(value: Mixed): value is ULong {
  return value instanceof ULong;
}

export function isFloat(value: Mixed): value is Float {
  return value instanceof Float;
}

export function isDecimal(value: Mixed): value is Decimal {
  return value instanceof Decimal;
}

export function isPositive(value: Mixed): boolean {
  return typeof value === "number" && value > 0;
}

export function isNegative(value: Mixed): boolean {
  return typeof value === "number" && value < 0;
}

export function isAlpha(value: Mixed): boolean {
  return typeof value === "string" && /^[a-zA-Z]*$/.test(value);
}

export function isAlphaNumeric(value: Mixed): boolean {
  return typeof value === "string" && /^[a-z0-9]*$/i.test(value);
}

export function isNull(value: Mixed): boolean {
  return value === null;
}

export function isUndefined(value: Mixed): boolean {
  return value === undefined && value !== null;
}

export function isEmpty(value: Mixed): boolean {
  return (
    (typeof value === "string" && value === "") ||
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === "object" &&
      value !== null &&
      Object.keys(value).length === 0)
  );
}

export function isOptional(value: Mixed): boolean {
  return value === null || value === undefined;
}

export function isFunction(value: Mixed): boolean {
  return typeof value === "function";
}
