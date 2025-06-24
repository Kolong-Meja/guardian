import type { Mixed } from "../types/value.type.ts";
import type {
  URLOptions,
  EmailOptions,
  StringValueOptions,
  NameOptions,
  PhoneNumberOptions,
  MatchesOptions,
  MinOptions,
  MaxOptions,
  RangeOptions,
} from "../types/props.type.ts";
import chalk from "npm:chalk";
import { Validator } from "../validators/GuardianValidator.ts";
import { toTitleCase } from "../utils/string.util.ts";

export function IsString<T>() {
  return function (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) {
    return function (this: T, value: Mixed) {
      const propertyName = String(context.name);

      if (Validator.isUndefined(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) is ${chalk.bold(typeof value)}`
          )}`
        );
        Deno.exit(1);
      }

      if (!Validator.isString(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) must be a ${chalk.bold(
              "string"
            )}, but got ${chalk.bold(typeof value)}.`
          )}`
        );
        Deno.exit(1);
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
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) is ${chalk.bold(typeof value)}`
          )}`
        );
        Deno.exit(1);
      }

      if (!Validator.isNumber(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) must be a ${chalk.bold(
              "number"
            )}, but got ${chalk.bold(typeof value)}.`
          )}`
        );
        Deno.exit(1);
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
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) is ${chalk.bold(typeof value)}`
          )}`
        );
        Deno.exit(1);
      }

      if (!Validator.isArray(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) must be a ${chalk.bold(
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
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) is ${chalk.bold(typeof value)}`
          )}`
        );
        Deno.exit(1);
      }

      if (!Validator.isBoolean(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) must be a ${chalk.bold(
              "boolean"
            )}, but got ${chalk.bold(typeof value)}.`
          )}`
        );
        Deno.exit(1);
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
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) is ${chalk.bold(typeof value)}`
          )}`
        );
        Deno.exit(1);
      }

      if (!Validator.isDate(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) must be a ${chalk.bold(
              "Date"
            )}, but got ${chalk.bold(typeof value)}.`
          )}`
        );
        Deno.exit(1);
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
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) is ${chalk.bold(typeof value)}`
          )}`
        );
        Deno.exit(1);
      }

      if (!Validator.isSymbol(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) must be a ${chalk.bold(
              "Symbol"
            )}, but got ${chalk.bold(typeof value)}.`
          )}`
        );
        Deno.exit(1);
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
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) is ${chalk.bold(typeof value)}`
          )}`
        );
        Deno.exit(1);
      }

      if (!Validator.isBigInt(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) must be a ${chalk.bold(
              "bigint"
            )}, but got ${chalk.bold(typeof value)}.`
          )}`
        );
        Deno.exit(1);
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
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) is ${chalk.bold(typeof value)}`
          )}`
        );
        Deno.exit(1);
      }

      if (!Validator.isInteger(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) must be a ${chalk.bold(
              "integer"
            )}, but got ${chalk.bold(typeof value)}.`
          )}`
        );
        Deno.exit(1);
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
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) is ${chalk.bold(typeof value)}`
          )}`
        );
        Deno.exit(1);
      }

      if (!Validator.isFloat(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) must be a ${chalk.bold(
              "float"
            )}, but got ${chalk.bold(typeof value)}.`
          )}`
        );
        Deno.exit(1);
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
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) is ${chalk.bold(typeof value)}`
          )}`
        );
        Deno.exit(1);
      }

      if (!Validator.isPositive(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) must be a ${chalk.bold(
              "positive"
            )} number, but got ${chalk.bold(typeof value)}.`
          )}`
        );
        Deno.exit(1);
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
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) is ${chalk.bold(typeof value)}`
          )}`
        );
        Deno.exit(1);
      }

      if (!Validator.isNegative(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) must be a ${chalk.bold(
              "negative"
            )} number, but got ${chalk.bold(typeof value)}.`
          )}`
        );
        Deno.exit(1);
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
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) is ${chalk.bold(typeof value)}`
          )}`
        );
        Deno.exit(1);
      }

      if (!Validator.isAlpha(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) must be a ${chalk.bold(
              "alpha"
            )} string, but got ${chalk.bold(typeof value)}.`
          )}`
        );
        Deno.exit(1);
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
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) is ${chalk.bold(typeof value)}`
          )}`
        );
        Deno.exit(1);
      }

      if (!Validator.isAlphaNumeric(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) must be a ${chalk.bold(
              "alphanumeric"
            )} string, but got ${chalk.bold(typeof value)}.`
          )}`
        );
        Deno.exit(1);
      }

      return value;
    };
  };
}

export function NotNull<T>() {
  return function (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) {
    return function (this: T, value: Mixed) {
      const propertyName = String(context.name);

      if (Validator.isUndefined(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) is ${chalk.bold(typeof value)}`
          )}`
        );
        Deno.exit(1);
      }

      if (Validator.isNull(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) must be a ${chalk.bold(
              "alphanumeric"
            )} string, but got ${chalk.bold(typeof value)}.`
          )}`
        );
        Deno.exit(1);
      }

      return value;
    };
  };
}

export function NotEmpty<T>() {
  return function (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) {
    return function (this: T, value: Mixed) {
      const propertyName = context.name;

      if (Validator.isUndefined(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) is ${chalk.bold(typeof value)}`
          )}`
        );
        Deno.exit(1);
      }

      if (Validator.isNull(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) is ${chalk.bold(value)}.`
          )}`
        );
        Deno.exit(1);
      }

      if (Validator.isEmpty(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) is empty (${chalk.bold(value)}).`
          )}`
        );
        Deno.exit(1);
      }

      return value;
    };
  };
}

export function NotBlank<T>() {
  return function (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, string>
  ) {
    const propertyName = String(context.name);
    return function (this: T, value: Mixed) {
      if (!Validator.isString(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) must be a ${chalk.bold(
              "string"
            )}, but got ${chalk.bold(typeof value)}.`
          )}`
        );
      }

      if (Validator.isUndefined(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) is ${chalk.bold(typeof value)}.`
          )}`
        );
        Deno.exit(1);
      }

      if (Validator.isNull(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) is ${chalk.bold(value)}.`
          )}`
        );
        Deno.exit(1);
      }

      if (Validator.isEmpty(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) is empty (${chalk.bold(value)}).`
          )}`
        );
        Deno.exit(1);
      }

      if (Validator.isBlank(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) is empty (${chalk.bold(value)}).`
          )}`
        );
        Deno.exit(1);
      }

      return value;
    };
  };
}

export function Name<T>(options?: NameOptions) {
  return function (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) {
    return function (this: T, value: Mixed) {
      const propertyName = String(context.name);

      let nameRegex = /^[a-zA-Z\s,.'\-\p{Letter}]+$/u;
      let errorMsg = `${chalk.red(
        `(${chalk.bold(propertyName)}) value ${chalk.bold(
          value
        )} is not a valid name.`
      )}`;

      if (Validator.isUndefined(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) is ${chalk.bold(typeof value)}`
          )}`
        );
        Deno.exit(1);
      }

      if (!Validator.isString(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) must be a ${chalk.bold(
              "string"
            )}, but got ${chalk.bold(typeof value)}.`
          )}`
        );
        Deno.exit(1);
      }

      if (options !== undefined) {
        if (options.regex) {
          nameRegex = options.regex;
        }

        if (options.message) {
          errorMsg = `${chalk.red(options.message)}`;
        }

        if (options.allowTitles) {
          nameRegex = /^[\p{Letter}\s\-.']+$/u;
        }
      }

      if (!String(value).toLocaleLowerCase("en-US").match(nameRegex)) {
        console.error(errorMsg);
        Deno.exit(1);
      }

      return value;
    };
  };
}

export function Email<T>(options?: EmailOptions) {
  return function (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) {
    return function (this: T, value: Mixed) {
      const propertyName = String(context.name);

      let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      let errorMsg = `${chalk.red(
        `(${chalk.bold(propertyName)}) value ${chalk.bold(
          value
        )} is not a valid email.`
      )}`;

      if (Validator.isUndefined(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) is ${chalk.bold(typeof value)}`
          )}`
        );
        Deno.exit(1);
      }

      if (!Validator.isString(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) must be a ${chalk.bold(
              "string"
            )}, but got ${chalk.bold(typeof value)}.`
          )}`
        );
        Deno.exit(1);
      }

      if (options !== undefined) {
        if (options.regex) {
          emailRegex = options.regex;
        }

        if (options.message) {
          errorMsg = `${chalk.red(options.message)}`;
        }

        if (options.domainBlackList !== undefined) {
          const words = value.split("@");
          const found = options.domainBlackList.some((d) => words.includes(d));

          if (found) {
            errorMsg = `${chalk.red(
              `${chalk.bold(value)} email domain is on the blacklist.`
            )}`;

            console.error(errorMsg);
            Deno.exit(1);
          }
        }
      }

      if (!String(value).toLocaleLowerCase("en-US").match(emailRegex)) {
        console.error(errorMsg);
        Deno.exit(1);
      }

      return value;
    };
  };
}

export function PhoneNumber<T>(options?: PhoneNumberOptions) {
  return function (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) {
    return function (this: T, value: Mixed) {
      const propertyName = context.name;

      let phoneNumberRegex =
        /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
      let errorMsg = `${chalk.red(
        `(${chalk.bold(propertyName)}) value ${chalk.bold(
          value
        )} is not a phone number.`
      )}`;

      if (Validator.isUndefined(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) is ${chalk.bold(typeof value)}`
          )}`
        );
        Deno.exit(1);
      }

      if (!Validator.isString(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) must be a ${chalk.bold(
              "string"
            )}, but got ${chalk.bold(typeof value)}.`
          )}`
        );
        Deno.exit(1);
      }

      if (options !== undefined) {
        if (options.regex) {
          phoneNumberRegex = options.regex;
        }

        if (options.message) {
          errorMsg = `${chalk.red(options.message)}`;
        }
      }

      if (!String(value).toLocaleLowerCase().match(phoneNumberRegex)) {
        console.error(errorMsg);
        Deno.exit(1);
      }

      return value;
    };
  };
}

export function URL<T>(options?: URLOptions) {
  return function (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) {
    return function (this: T, value: Mixed) {
      const propertyName = context.name;

      let urlRegex =
        /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i;
      let errorMsg = `${chalk.red(
        `(${chalk.bold(propertyName)}) value ${chalk.bold(
          value
        )} is not a valid URL.`
      )}`;

      if (Validator.isUndefined(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) is ${chalk.bold(typeof value)}`
          )}`
        );
        Deno.exit(1);
      }

      if (!Validator.isString(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) must be a ${chalk.bold(
              "string"
            )}, but got ${chalk.bold(typeof value)}.`
          )}`
        );
        Deno.exit(1);
      }

      if (options !== undefined) {
        if (options.regex) {
          urlRegex = options.regex;
        }

        if (options.message) {
          errorMsg = `${chalk.red(options.message)}`;
        }
      }

      if (!String(value).toLocaleLowerCase().match(urlRegex)) {
        console.error(errorMsg);
        Deno.exit(1);
      }

      return value;
    };
  };
}

export function MinLength<T>(minLength: number, options?: StringValueOptions) {
  return function (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) {
    return function (this: T, value: Mixed) {
      const propertyName = context.name;

      if (Validator.isUndefined(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) is ${chalk.bold(typeof value)}`
          )}`
        );
        Deno.exit(1);
      }

      if (!Validator.isString(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) must be a ${chalk.bold(
              "string"
            )}, but got ${chalk.bold(typeof value)}.`
          )}`
        );
        Deno.exit(1);
      }

      const whitespaceIgnoreRegex = /\s/g;
      let valueLength: number = String(value).length;
      let errorMsg: string = `${chalk.red(
        `Length of (${chalk.bold(propertyName)}) value (${chalk.bold(
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

        if (options.message) {
          errorMsg = `${chalk.red(options.message)}`;
        }
      }

      if (valueLength < minLength) {
        console.error(errorMsg);
        Deno.exit(1);
      }

      return value;
    };
  };
}

export function MaxLength<T>(maxLength: number, options?: StringValueOptions) {
  return function (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) {
    return function (this: T, value: Mixed) {
      const propertyName = context.name;

      if (Validator.isUndefined(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) is ${chalk.bold(typeof value)}`
          )}`
        );
        Deno.exit(1);
      }

      if (!Validator.isString(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) must be a ${chalk.bold(
              "string"
            )}, but got ${chalk.bold(typeof value)}.`
          )}`
        );
        Deno.exit(1);
      }

      const whitespaceIgnoreRegex = /\s/g;
      let valueLength: number = String(value).length;
      let errorMsg: string = `${chalk.red(
        `Length of (${chalk.bold(propertyName)}) value (${chalk.bold(
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

        if (options.message) {
          errorMsg = `${chalk.red(options.message)}`;
        }
      }

      if (valueLength > maxLength) {
        console.error(errorMsg);
        Deno.exit(1);
      }

      return value;
    };
  };
}

export function Matches<T>(regex: RegExp, options?: MatchesOptions) {
  return function (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) {
    return function (this: T, value: Mixed) {
      const propertyName = String(context.name);

      let errorMsg = `${chalk.red(
        `(${chalk.bold(propertyName)}) value not match with ${chalk.bold(
          regex
        )} regex.`
      )}`;

      if (Validator.isUndefined(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) is ${chalk.bold(typeof value)}.`
          )}`
        );
        Deno.exit(1);
      }

      if (!Validator.isString(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) must be a ${chalk.bold(
              "string"
            )}, but got ${chalk.bold(typeof value)}.`
          )}`
        );
        Deno.exit(1);
      }

      if (options !== undefined) {
        if (options.message) {
          errorMsg = `${chalk.red(options.message)}`;
        }
      }

      if (String(value).match(regex)) {
        return value;
      } else {
        console.error(errorMsg);
        Deno.exit(1);
      }
    };
  };
}

export function LowerCase<T>(locale: string, options?: StringValueOptions) {
  return function (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) {
    return function (this: T, value: Mixed) {
      const propertyName = String(context.name);
      const whitespaceIgnoreRegex = /\s/g;

      if (Validator.isUndefined(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) is ${chalk.bold(typeof value)}.`
          )}`
        );
        Deno.exit(1);
      }

      if (!Validator.isString(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) must be a ${chalk.bold(
              "string"
            )}, but got ${chalk.bold(typeof value)}.`
          )}`
        );
        Deno.exit(1);
      }

      if (options !== undefined) {
        if (options.trim) {
          value = String(value).trim();
        }

        if (options.ignoreWhitespace) {
          value = String(value).replace(whitespaceIgnoreRegex, "");
        }
      }

      return value.toLocaleLowerCase(locale);
    };
  };
}

export function UpperCase<T>(locale: string, options?: StringValueOptions) {
  return function (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) {
    return function (this: T, value: Mixed) {
      const propertyName = String(context.name);
      const whitespaceIgnoreRegex = /\s/g;

      if (Validator.isUndefined(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) is ${chalk.bold(typeof value)}.`
          )}`
        );
        Deno.exit(1);
      }

      if (!Validator.isString(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) must be a ${chalk.bold(
              "string"
            )}, but got ${chalk.bold(typeof value)}.`
          )}`
        );
        Deno.exit(1);
      }

      if (options !== undefined) {
        if (options.trim) {
          value = String(value).trim();
        }

        if (options.ignoreWhitespace) {
          value = String(value).replace(whitespaceIgnoreRegex, "");
        }
      }

      return value.toLocaleUpperCase(locale);
    };
  };
}

export function TitleCase<T>(locale: string, options?: StringValueOptions) {
  return function (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) {
    return function (this: T, value: Mixed) {
      const propertyName = String(context.name);
      const whitespaceIgnoreRegex = /\s/g;

      if (Validator.isUndefined(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) is ${chalk.bold(typeof value)}.`
          )}`
        );
        Deno.exit(1);
      }

      if (!Validator.isString(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) must be a ${chalk.bold(
              "string"
            )}, but got ${chalk.bold(typeof value)}.`
          )}`
        );
        Deno.exit(1);
      }

      value = toTitleCase(value, locale);

      if (options !== undefined) {
        if (options.trim) {
          value = String(value).trim();
        }

        if (options.ignoreWhitespace) {
          value = String(value).replace(whitespaceIgnoreRegex, "");
        }
      }

      return value;
    };
  };
}

export function Min<T>(minValue: number, options?: MinOptions) {
  return function (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) {
    return function (this: T, value: Mixed) {
      const propertyName = String(context.name);

      let errorMsg = `${chalk.red(
        `(${chalk.bold(propertyName)}) value (${chalk.bold(
          value
        )}) does not match with minimum value (${chalk.bold(minValue)}).`
      )}`;

      if (Validator.isUndefined(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) is ${chalk.bold(typeof value)}.`
          )}`
        );
        Deno.exit(1);
      }

      if (!Validator.isNumber(value)) {
        console.error(
          `${chalk.red(
            `(${chalk.bold(propertyName)}) must be a ${chalk.bold(
              "number"
            )}, but got ${chalk.bold(typeof value)}.`
          )}`
        );
        Deno.exit(1);
      }

      if (options !== undefined) {
        if (options.message) {
          errorMsg = `${chalk.red(options.message)}`;
        }
      }

      if (value < minValue) {
        console.error(errorMsg);
        Deno.exit(1);
      }
    };
  };
}

export function Max<T>(maxValue: number, options?: MaxOptions) {
  return function (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) {
    return function (this: T, value: Mixed) {
      const propertyName = String(context.name);

      let errorMsg = `${chalk.red(
        `((${chalk.bold(propertyName)})) value (${chalk.bold(
          value
        )}) does not match with maximum value (${chalk.bold(maxValue)}).`
      )}`;

      if (Validator.isUndefined(value)) {
        console.error(
          `${chalk.red(
            `((${chalk.bold(propertyName)})) is ${chalk.bold(typeof value)}.`
          )}`
        );
        Deno.exit(1);
      }

      if (!Validator.isNumber(value)) {
        console.error(
          `${chalk.red(
            `((${chalk.bold(propertyName)})) must be a ${chalk.bold(
              "number"
            )}, but got ${chalk.bold(typeof value)}.`
          )}`
        );
        Deno.exit(1);
      }

      if (options !== undefined) {
        if (options.message) {
          errorMsg = `${chalk.red(options.message)}`;
        }
      }

      if (value > maxValue) {
        console.error(errorMsg);
        Deno.exit(1);
      }
    };
  };
}

export function Range<T>(
  initial: number,
  end: number,
  options?: RangeOptions
) {
  
}

export function ArrayMinSize<T>() {}

export function ArrayMaxSize<T>() {}

export function ArrayUnique<T>() {}

export function EachElement<T>() {}
