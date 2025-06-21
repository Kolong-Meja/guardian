import type { IGuardianValidator } from "../interfaces/IGuardianValidator.ts";
import type { Mixed } from "../types/value.type.ts";

class GuardianValidator implements IGuardianValidator {
  private static instance: GuardianValidator;

  private constructor() {}

  public static getInstance(): GuardianValidator {
    if (!GuardianValidator.instance) {
      GuardianValidator.instance = new GuardianValidator();
    }
    return GuardianValidator.instance;
  }

  isString(value: Mixed): boolean {
    return typeof value === "string";
  }

  isNumber(value: Mixed): boolean {
    return typeof value === "number";
  }

  isArray(value: Mixed): boolean {
    return Array.isArray(value);
  }

  isBoolean(value: Mixed): boolean {
    return typeof value === "boolean";
  }

  isDate(value: Mixed): boolean {
    return value instanceof Date;
  }

  isSymbol(value: Mixed): boolean {
    return typeof value === "symbol";
  }

  isBigInt(value: Mixed): boolean {
    return typeof value === "bigint";
  }

  isObject(value: Mixed): boolean {
    return typeof value === "object" && value !== null;
  }

  isInteger(value: Mixed): boolean {
    return typeof value === "number" && Number.isInteger(value);
  }

  isFloat(value: Mixed): boolean {
    return (
      typeof value === "number" && Number.isFinite(value) && value % 1 !== 0
    );
  }

  isPositive(value: Mixed): boolean {
    return typeof value === "number" && value > 0;
  }

  isNegative(value: Mixed): boolean {
    return typeof value === "number" && value < 0;
  }

  isAlpha(value: Mixed): boolean {
    return typeof value === "string" && /^[a-zA-Z]*$/.test(value);
  }

  isAlphaNumeric(value: Mixed): boolean {
    return typeof value === "string" && /^[a-z0-9]*$/i.test(value);
  }

  isNull(value: Mixed): boolean {
    return value === null;
  }

  isUndefined(value: Mixed): boolean {
    return value === undefined && value !== null;
  }

  isEmpty(value: Mixed): boolean {
    return (
      (typeof value === "string" && value === "") ||
      (Array.isArray(value) && value.length === 0) ||
      (typeof value === "object" &&
        value !== null &&
        Object.keys(value).length === 0)
    );
  }

  isFunction(value: Mixed): boolean {
    return typeof value === "function";
  }
}

export const Validator = GuardianValidator.getInstance();
