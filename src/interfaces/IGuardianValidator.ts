import type { Mixed } from "../types/value.type.ts";

export interface IGuardianValidator {
  isString(value: Mixed): boolean;
  isNumber(value: Mixed): boolean;
  isArray(value: Mixed): boolean;
  isBoolean(value: Mixed): boolean;
  isDate(value: Mixed): boolean;
  isSymbol(value: Mixed): boolean;
  isBigInt(value: Mixed): boolean;
  isObject(value: Mixed): boolean;
  isInteger(value: Mixed): boolean;
  isFloat(value: Mixed): boolean;
  isPositive(value: Mixed): boolean;
  isNegative(value: Mixed): boolean;
  isAlpha(value: Mixed): boolean;
  isAlphaNumeric(value: Mixed): boolean;
  isNull(value: Mixed): boolean;
  isUndefined(value: Mixed): boolean;
  isEmpty(value: Mixed): boolean;
  isFunction(value: Mixed): boolean;
}
