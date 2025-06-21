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

export function isInteger(value: Mixed): boolean {
  return typeof value === "number" && Number.isInteger(value);
}

export function isFloat(value: Mixed): boolean {
  return typeof value === "number" && Number.isFinite(value) && value % 1 !== 0;
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

export function isFunction(value: Mixed): boolean {
  return typeof value === "function";
}
