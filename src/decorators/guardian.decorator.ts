import {
  NotValidEmailError,
  NotValidURLError,
  NullValueError,
  ValueLengthError,
  TypeNotMatchError,
  UndefinedValueError,
  ValueNotMatchError,
} from "../errors/custom-error.ts";
import type { Mixed } from "../types/value.type.ts";
import type {
  URLOptionsProps,
  EmailOptionsProps,
  LengthOptionsProps,
} from "../types/props.type.ts";
import chalk from "npm:chalk";
import { Validator } from "../validators/GuardianValidator.ts";

export function IsString<T>() {
  return function (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) {
    return function (this: T, value: Mixed) {
      const propertyName = String(context.name);

      if (Validator.isUndefined(value)) {
        throw new UndefinedValueError(
          `${chalk.red(
            `${chalk.bold(propertyName)} is ${chalk.bold(typeof value)}`
          )}`
        );
      }

      if (!Validator.isString(value)) {
        throw new TypeNotMatchError(
          `${chalk.red(
            `${chalk.bold(propertyName)} must be a ${chalk.bold(
              "string"
            )}, but got ${chalk.bold(typeof value)}.`
          )}`
        );
      }
      return value;
    };
  };
}

export function IsNumber<T>() {
  return function (
    _target: Mixed,
    context: ClassFieldDecoratorContext<T, Mixed>
  ) {
    return function (this: T, value: Mixed) {
      const propertyName = String(context.name);

      if (Validator.isUndefined(value)) {
        throw new UndefinedValueError(
          `${chalk.red(
            `${chalk.bold(propertyName)} is ${chalk.bold(typeof value)}`
          )}`
        );
      }

      if (!Validator.isNumber(value)) {
        throw new TypeNotMatchError(
          `${chalk.red(
            `${chalk.bold(propertyName)} must be a ${chalk.bold(
              "number"
            )}, but got ${chalk.bold(typeof value)}.`
          )}`
        );
      }

      return value;
    };
  };
}

export function IsArray<T>() {
  return function (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) {
    return function (this: T, value: Mixed) {
      const propertyName = String(context.name);

      if (Validator.isUndefined(value)) {
        throw new UndefinedValueError(
          `${chalk.red(
            `${chalk.bold(propertyName)} is ${chalk.bold(typeof value)}`
          )}`
        );
      }

      if (!Validator.isArray(value)) {
        throw new TypeNotMatchError(
          `${chalk.red(
            `${chalk.bold(propertyName)} must be a ${chalk.bold(
              "array"
            )}, but got ${chalk.bold(typeof value)}.`
          )}`
        );
      }
      return value;
    };
  };
}

export function IsBoolean<T>() {
  return function (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) {
    return function (this: T, value: Mixed) {
      const propertyName = String(context.name);

      if (Validator.isUndefined(value)) {
        throw new UndefinedValueError(
          `${chalk.red(
            `${chalk.bold(propertyName)} is ${chalk.bold(typeof value)}`
          )}`
        );
      }

      if (!Validator.isBoolean(value)) {
        throw new TypeNotMatchError(
          `${chalk.red(
            `${chalk.bold(propertyName)} must be a ${chalk.bold(
              "boolean"
            )}, but got ${chalk.bold(typeof value)}.`
          )}`
        );
      }
      return value;
    };
  };
}

export function IsDate<T>() {
  return function (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) {
    return function (this: T, value: Mixed) {
      const propertyName = String(context.name);

      if (Validator.isUndefined(value)) {
        throw new UndefinedValueError(
          `${chalk.red(
            `${chalk.bold(propertyName)} is ${chalk.bold(typeof value)}`
          )}`
        );
      }

      if (!Validator.isDate(value)) {
        throw new TypeNotMatchError(
          `${chalk.red(
            `${chalk.bold(propertyName)} must be a ${chalk.bold(
              "Date"
            )}, but got ${chalk.bold(typeof value)}.`
          )}`
        );
      }
      return value;
    };
  };
}

export function IsSymbol<T>() {
  return function (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) {
    return function (this: T, value: Mixed) {
      const propertyName = String(context.name);

      if (Validator.isUndefined(value)) {
        throw new UndefinedValueError(
          `${chalk.red(
            `${chalk.bold(propertyName)} is ${chalk.bold(typeof value)}`
          )}`
        );
      }

      if (!Validator.isSymbol(value)) {
        throw new TypeNotMatchError(
          `${chalk.red(
            `${chalk.bold(propertyName)} must be a ${chalk.bold(
              "Symbol"
            )}, but got ${chalk.bold(typeof value)}.`
          )}`
        );
      }
      return value;
    };
  };
}

export function IsBigInt<T>() {
  return function (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) {
    return function (this: T, value: Mixed) {
      const propertyName = String(context.name);

      if (Validator.isUndefined(value)) {
        throw new UndefinedValueError(
          `${chalk.red(
            `${chalk.bold(propertyName)} is ${chalk.bold(typeof value)}`
          )}`
        );
      }

      if (!Validator.isBigInt(value)) {
        throw new TypeNotMatchError(
          `${chalk.red(
            `${chalk.bold(propertyName)} must be a ${chalk.bold(
              "bigint"
            )}, but got ${chalk.bold(typeof value)}.`
          )}`
        );
      }
      return value;
    };
  };
}

export function IsInteger<T>() {
  return function (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) {
    return function (this: T, value: Mixed) {
      const propertyName = String(context.name);

      if (Validator.isUndefined(value)) {
        throw new UndefinedValueError(
          `${chalk.red(
            `${chalk.bold(propertyName)} is ${chalk.bold(typeof value)}`
          )}`
        );
      }

      if (!Validator.isInteger(value)) {
        throw new TypeNotMatchError(
          `${chalk.red(
            `${chalk.bold(propertyName)} must be an ${chalk.bold(
              "integer"
            )}, but got ${chalk.bold(typeof value)}.`
          )}`
        );
      }

      return value;
    };
  };
}

export function IsFloat<T>() {
  return function (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) {
    return function (this: T, value: Mixed) {
      const propertyName = String(context.name);

      if (Validator.isUndefined(value)) {
        throw new UndefinedValueError(
          `${chalk.red(
            `${chalk.bold(propertyName)} is ${chalk.bold(typeof value)}`
          )}`
        );
      }

      if (!Validator.isFloat(value)) {
        if (Validator.isInteger(value)) {
          throw new TypeNotMatchError(
            `${chalk.red(
              `${chalk.bold(propertyName)} must be a ${chalk.bold(
                "float"
              )}, but got ${chalk.bold("integer")}.`
            )}`
          );
        } else {
          throw new TypeNotMatchError(
            `${chalk.red(
              `${chalk.bold(propertyName)} must be a ${chalk.bold(
                "float"
              )}, but got ${chalk.bold(typeof value)}.`
            )}`
          );
        }
      }

      return value;
    };
  };
}

export function IsPositive<T>() {
  return function (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) {
    return function (this: T, value: Mixed) {
      const propertyName = String(context.name);

      if (Validator.isUndefined(value)) {
        throw new UndefinedValueError(
          `${chalk.red(
            `${chalk.bold(propertyName)} is ${chalk.bold(typeof value)}`
          )}`
        );
      }

      if (!Validator.isPositive(value)) {
        if (Validator.isNegative(value)) {
          throw new TypeNotMatchError(
            `${chalk.red(
              `${chalk.bold(propertyName)} must be a ${chalk.bold(
                "positive"
              )} number, but got ${chalk.bold("negative")} number.`
            )}`
          );
        } else {
          throw new TypeNotMatchError(
            `${chalk.red(
              `${chalk.bold(propertyName)} must be a ${chalk.bold(
                "positive"
              )} number, but got ${chalk.bold(typeof value)}.`
            )}`
          );
        }
      }

      return value;
    };
  };
}

export function IsNegative<T>() {
  return function (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) {
    return function (this: T, value: Mixed) {
      const propertyName = String(context.name);

      if (Validator.isUndefined(value)) {
        throw new UndefinedValueError(
          `${chalk.red(
            `${chalk.bold(propertyName)} is ${chalk.bold(typeof value)}`
          )}`
        );
      }

      if (!Validator.isNegative(value)) {
        if (Validator.isPositive(value)) {
          throw new TypeNotMatchError(
            `${chalk.red(
              `${chalk.bold(propertyName)} must be a ${chalk.bold(
                "negative"
              )} number, but got ${chalk.bold("positive")} number.`
            )}`
          );
        } else {
          throw new TypeNotMatchError(
            `${chalk.red(
              `${chalk.bold(propertyName)} must be a ${chalk.bold(
                "negative"
              )} number, but got ${chalk.bold(typeof value)}.`
            )}`
          );
        }
      }

      return value;
    };
  };
}

export function IsAlpha<T>() {
  return function (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) {
    return function (this: T, value: Mixed) {
      const propertyName = String(context.name);

      if (Validator.isUndefined(value)) {
        throw new UndefinedValueError(
          `${chalk.red(
            `${chalk.bold(propertyName)} is ${chalk.bold(typeof value)}`
          )}`
        );
      }

      if (!Validator.isAlpha(value)) {
        if (Validator.isAlphaNumeric(value)) {
          throw new TypeNotMatchError(
            `${chalk.red(
              `${chalk.bold(propertyName)} must be a ${chalk.bold(
                "alpha"
              )} string, but got ${chalk.bold("alphanumeric")} string.`
            )}`
          );
        } else {
          throw new TypeNotMatchError(
            `${chalk.red(
              `${chalk.bold(propertyName)} must be a ${chalk.bold(
                "alpha"
              )} string, but got ${chalk.bold(typeof value)}.`
            )}`
          );
        }
      }

      return value;
    };
  };
}

export function IsAlphaNumeric<T>() {
  return function (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) {
    return function (this: T, value: Mixed) {
      const propertyName = String(context.name);

      if (Validator.isUndefined(value)) {
        throw new UndefinedValueError(
          `${chalk.red(
            `${chalk.bold(propertyName)} is ${chalk.bold(typeof value)}`
          )}`
        );
      }

      if (!Validator.isAlphaNumeric(value)) {
        if (Validator.isAlpha(value)) {
          throw new TypeNotMatchError(
            `${chalk.red(
              `${chalk.bold(propertyName)} must be a ${chalk.bold(
                "alphanumeric"
              )} string, but got ${chalk.bold("alpha")} string.`
            )}`
          );
        } else {
          throw new TypeNotMatchError(
            `${chalk.red(
              `${chalk.bold(propertyName)} must be a ${chalk.bold(
                "alphanumeric"
              )} string, but got ${chalk.bold(typeof value)}.`
            )}`
          );
        }
      }

      return value;
    };
  };
}

export function IsNull<T>() {
  return function (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) {
    return function (this: T, value: Mixed) {
      const propertyName = String(context.name);

      if (Validator.isUndefined(value)) {
        throw new UndefinedValueError(
          `${chalk.red(
            `${chalk.bold(propertyName)} is ${chalk.bold(typeof value)}`
          )}`
        );
      }

      if (Validator.isNull(value)) {
        throw new NullValueError(
          `${chalk.red(
            `${chalk.bold(propertyName)} is a ${chalk.bold("null")}.`
          )}`
        );
      }

      return value;
    };
  };
}

export function IsEmpty<T>() {
  return function (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) {
    return function (this: T, value: Mixed) {
      const propertyName = String(context.name);
    };
  };
}

export function Email<T>(options?: EmailOptionsProps) {
  return function (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) {
    return function (this: T, value: Mixed) {
      const propertyName = String(context.name);

      let emailRegex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      let errorMsg = `${chalk.red(
        `${chalk.bold(propertyName)} value ${chalk.bold(
          value
        )} is not a valid email.`
      )}`;

      if (Validator.isUndefined(value)) {
        throw new UndefinedValueError(
          `${chalk.red(
            `${chalk.bold(propertyName)} is ${chalk.bold(typeof value)}`
          )}`
        );
      }

      if (!Validator.isString(value)) {
        throw new TypeNotMatchError(
          `${chalk.red(
            `${chalk.bold(propertyName)} must be a ${chalk.bold(
              "string"
            )}, but got ${chalk.bold(typeof value)}.`
          )}`
        );
      }

      if (options !== undefined) {
        if (options.regex) {
          emailRegex = options.regex;
        }

        if (options.errorMsg) {
          errorMsg = `${chalk.red(options.errorMsg)}`;
        }
      }

      if (!String(value).toLocaleLowerCase("en-US").match(emailRegex)) {
        throw new NotValidEmailError(errorMsg);
      }

      return value;
    };
  };
}

export function URL<T>(options?: URLOptionsProps) {
  return function (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) {
    return function (this: T, value: Mixed) {
      const propertyName = context.name;

      let urlRegex =
        /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i;
      let errorMsg = `${chalk.red(
        `${chalk.bold(propertyName)} value ${chalk.bold(
          value
        )} is not a valid URL.`
      )}`;

      if (Validator.isUndefined(value)) {
        throw new UndefinedValueError(
          `${chalk.red(
            `${chalk.bold(propertyName)} is ${chalk.bold(typeof value)}`
          )}`
        );
      }

      if (!Validator.isString(value)) {
        throw new TypeNotMatchError(
          `${chalk.red(
            `${chalk.bold(propertyName)} must be a ${chalk.bold(
              "string"
            )}, but got ${chalk.bold(typeof value)}.`
          )}`
        );
      }

      if (options !== undefined) {
        if (options.regex) {
          urlRegex = options.regex;
        }

        if (options.errorMsg) {
          errorMsg = `${chalk.red(options.errorMsg)}`;
        }
      }

      if (!String(value).toLocaleLowerCase().match(urlRegex)) {
        throw new NotValidURLError(errorMsg);
      }

      return value;
    };
  };
}

export function MinLength<T>(minLength: number, options?: LengthOptionsProps) {
  return function (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) {
    return function (this: T, value: Mixed) {
      const propertyName = context.name;

      if (Validator.isUndefined(value)) {
        throw new UndefinedValueError(
          `${chalk.red(
            `${chalk.bold(propertyName)} is ${chalk.bold(typeof value)}`
          )}`
        );
      }

      if (!Validator.isString(value)) {
        throw new TypeNotMatchError(
          `${chalk.red(
            `${chalk.bold(propertyName)} must be a ${chalk.bold(
              "string"
            )}, but got ${chalk.bold(typeof value)}.`
          )}`
        );
      }

      const whitespaceIgnoreRegex = /\s/g;
      let valueLength: number = String(value).length;
      let errorMsg: string = `${chalk.red(
        `Length of ${chalk.bold(propertyName)} value (${chalk.bold(
          valueLength
        )}) does not match with minimum length (${chalk.bold(minLength)})`
      )}`;

      if (options !== undefined) {
        if (options.trim && options.ignoreWhitespace) {
          valueLength = String(value)
            .trim()
            .replace(whitespaceIgnoreRegex, "").length;
        }

        if (options.trim) {
          valueLength = String(value).trim().length;
        }

        if (options.ignoreWhitespace) {
          valueLength = String(value).replace(whitespaceIgnoreRegex, "").length;
        }

        if (options.errorMsg) {
          errorMsg = `${chalk.red(options.errorMsg)}`;
        }
      }

      if (valueLength < minLength) {
        throw new ValueLengthError(errorMsg);
      }

      return value;
    };
  };
}

export function MaxLength<T>(maxLength: number, options?: LengthOptionsProps) {
  return function (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) {
    return function (this: T, value: Mixed) {
      const propertyName = context.name;

      if (Validator.isUndefined(value)) {
        throw new UndefinedValueError(
          `${chalk.red(
            `${chalk.bold(propertyName)} is ${chalk.bold(typeof value)}`
          )}`
        );
      }

      if (!Validator.isString(value)) {
        throw new TypeNotMatchError(
          `${chalk.red(
            `${chalk.bold(propertyName)} must be a ${chalk.bold(
              "string"
            )}, but got ${chalk.bold(typeof value)}.`
          )}`
        );
      }

      const whitespaceIgnoreRegex = /\s/g;
      let valueLength: number = String(value).length;
      let errorMsg: string = `${chalk.red(
        `Length of ${chalk.bold(propertyName)} value (${chalk.bold(
          valueLength
        )}) does not match with maximum length (${chalk.bold(maxLength)})`
      )}`;

      if (options !== undefined) {
        if (options.trim && options.ignoreWhitespace) {
          valueLength = String(value)
            .trim()
            .replace(whitespaceIgnoreRegex, "").length;
        }

        if (options.trim) {
          valueLength = String(value).trim().length;
        }

        if (options.ignoreWhitespace) {
          valueLength = String(value).replace(whitespaceIgnoreRegex, "").length;
        }

        if (options.errorMsg) {
          errorMsg = `${chalk.red(options.errorMsg)}`;
        }
      }

      if (valueLength > maxLength) {
        throw new ValueLengthError(errorMsg);
      }

      return value;
    };
  };
}

export function Matches<T>(regex: RegExp) {
  return function (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) {
    return function (this: T, value: Mixed) {
      const propertyName = String(context.name);

      if (Validator.isUndefined(value)) {
        throw new UndefinedValueError(
          `${chalk.red(
            `${chalk.bold(propertyName)} is ${chalk.bold(typeof value)}.`
          )}`
        );
      }

      if (!Validator.isString(value)) {
        throw new TypeNotMatchError(
          `${chalk.red(
            `${chalk.bold(propertyName)} must be a ${chalk.bold(
              "string"
            )}, but got ${chalk.bold(typeof value)}.`
          )}`
        );
      }

      if (String(value).match(regex)) {
        return value;
      } else {
        throw new ValueNotMatchError(
          `${chalk.red(
            `${chalk.bold(propertyName)} value not match with ${chalk.bold(
              regex
            )} regex.`
          )}`
        );
      }
    };
  };
}
