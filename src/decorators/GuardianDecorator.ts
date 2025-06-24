import chalk from "chalk";
import type { IGuardianDecorator } from "../interfaces/IGuardianDecorator.ts";
import type { Mixed } from "../types/value.type.ts";
import { Validator } from "../validators/GuardianValidator.ts";
import type {
  EmailOptions,
  MatchesOptions,
  NameOptions,
  PhoneNumberOptions,
  URLOptions,
  ValueLengthOptions,
} from "../types/props.type.ts";

export class GuardianDecorator implements IGuardianDecorator {
  private static instance: GuardianDecorator;

  private constructor() {}

  public static getInstance(): GuardianDecorator {
    if (!GuardianDecorator.instance) {
      GuardianDecorator.instance = new GuardianDecorator();
    }

    return GuardianDecorator.instance;
  }

  IsString<T>() {
    return function (
      _target: unknown,
      context: ClassFieldDecoratorContext<T, unknown>
    ) {
      return function (this: T, value: Mixed) {
        const propertyName = String(context.name);

        if (Validator.isUndefined(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} is ${chalk.bold(typeof value)}`
            )}`
          );
          Deno.exit(1);
        }

        if (!Validator.isString(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} must be a ${chalk.bold(
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

  IsNumber<T>() {
    return function (
      _target: Mixed,
      context: ClassFieldDecoratorContext<T, Mixed>
    ) {
      return function (this: T, value: Mixed) {
        const propertyName = String(context.name);

        if (Validator.isUndefined(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} is ${chalk.bold(typeof value)}`
            )}`
          );
          Deno.exit(1);
        }

        if (!Validator.isNumber(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} must be a ${chalk.bold(
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

  IsArray<T>() {
    return function (
      _target: unknown,
      context: ClassFieldDecoratorContext<T, unknown>
    ) {
      return function (this: T, value: Mixed) {
        const propertyName = String(context.name);

        if (Validator.isUndefined(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} is ${chalk.bold(typeof value)}`
            )}`
          );
          Deno.exit(1);
        }

        if (!Validator.isArray(value)) {
          console.error(
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

  IsBoolean<T>() {
    return function (
      _target: unknown,
      context: ClassFieldDecoratorContext<T, unknown>
    ) {
      return function (this: T, value: Mixed) {
        const propertyName = String(context.name);

        if (Validator.isUndefined(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} is ${chalk.bold(typeof value)}`
            )}`
          );
          Deno.exit(1);
        }

        if (!Validator.isBoolean(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} must be a ${chalk.bold(
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

  IsDate<T>() {
    return function (
      _target: unknown,
      context: ClassFieldDecoratorContext<T, unknown>
    ) {
      return function (this: T, value: Mixed) {
        const propertyName = String(context.name);

        if (Validator.isUndefined(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} is ${chalk.bold(typeof value)}`
            )}`
          );
          Deno.exit(1);
        }

        if (!Validator.isDate(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} must be a ${chalk.bold(
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

  IsSymbol<T>() {
    return function (
      _target: unknown,
      context: ClassFieldDecoratorContext<T, unknown>
    ) {
      return function (this: T, value: Mixed) {
        const propertyName = String(context.name);

        if (Validator.isUndefined(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} is ${chalk.bold(typeof value)}`
            )}`
          );
          Deno.exit(1);
        }

        if (!Validator.isSymbol(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} must be a ${chalk.bold(
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

  IsBigInt<T>() {
    return function (
      _target: unknown,
      context: ClassFieldDecoratorContext<T, unknown>
    ) {
      return function (this: T, value: Mixed) {
        const propertyName = String(context.name);

        if (Validator.isUndefined(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} is ${chalk.bold(typeof value)}`
            )}`
          );
          Deno.exit(1);
        }

        if (!Validator.isBigInt(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} must be a ${chalk.bold(
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

  IsInteger<T>() {
    return function (
      _target: unknown,
      context: ClassFieldDecoratorContext<T, unknown>
    ) {
      return function (this: T, value: Mixed) {
        const propertyName = String(context.name);

        if (Validator.isUndefined(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} is ${chalk.bold(typeof value)}`
            )}`
          );
          Deno.exit(1);
        }

        if (!Validator.isInteger(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} must be an ${chalk.bold(
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

  IsLong<T>() {
    return function (
      _target: unknown,
      context: ClassFieldDecoratorContext<T, unknown>
    ) {
      return function (this: T, value: Mixed) {
        const propertyName = String(context.name);

        if (Validator.isUndefined(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} is ${chalk.bold(typeof value)}`
            )}`
          );
          Deno.exit(1);
        }

        if (!Validator.isLong(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} must be a ${chalk.bold(
                "long"
              )}, but got ${chalk.bold(typeof value)}.`
            )}`
          );
          Deno.exit(1);
        }

        return value;
      };
    };
  }

  IsFloat<T>() {
    return function (
      _target: unknown,
      context: ClassFieldDecoratorContext<T, unknown>
    ) {
      return function (this: T, value: Mixed) {
        const propertyName = String(context.name);

        if (Validator.isUndefined(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} is ${chalk.bold(typeof value)}`
            )}`
          );
          Deno.exit(1);
        }

        if (!Validator.isFloat(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} must be a ${chalk.bold(
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

  IsPositive<T>() {
    return function (
      _target: unknown,
      context: ClassFieldDecoratorContext<T, unknown>
    ) {
      return function (this: T, value: Mixed) {
        const propertyName = String(context.name);

        if (Validator.isUndefined(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} is ${chalk.bold(typeof value)}`
            )}`
          );
          Deno.exit(1);
        }

        if (!Validator.isPositive(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} must be a ${chalk.bold(
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

  IsNegative<T>() {
    return function (
      _target: unknown,
      context: ClassFieldDecoratorContext<T, unknown>
    ) {
      return function (this: T, value: Mixed) {
        const propertyName = String(context.name);

        if (Validator.isUndefined(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} is ${chalk.bold(typeof value)}`
            )}`
          );
          Deno.exit(1);
        }

        if (!Validator.isNegative(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} must be a ${chalk.bold(
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

  IsAlpha<T>() {
    return function (
      _target: unknown,
      context: ClassFieldDecoratorContext<T, unknown>
    ) {
      return function (this: T, value: Mixed) {
        const propertyName = String(context.name);

        if (Validator.isUndefined(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} is ${chalk.bold(typeof value)}`
            )}`
          );
          Deno.exit(1);
        }

        if (!Validator.isAlpha(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} must be a ${chalk.bold(
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

  IsAlphaNumeric<T>() {
    return function (
      _target: unknown,
      context: ClassFieldDecoratorContext<T, unknown>
    ) {
      return function (this: T, value: Mixed) {
        const propertyName = String(context.name);

        if (Validator.isUndefined(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} is ${chalk.bold(typeof value)}`
            )}`
          );
          Deno.exit(1);
        }

        if (!Validator.isAlphaNumeric(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} must be a ${chalk.bold(
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

  NotNull<T>() {
    return function (
      _target: unknown,
      context: ClassFieldDecoratorContext<T, unknown>
    ) {
      return function (this: T, value: Mixed) {
        const propertyName = String(context.name);

        if (Validator.isUndefined(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} is ${chalk.bold(typeof value)}`
            )}`
          );
          Deno.exit(1);
        }

        if (Validator.isNull(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} must be a ${chalk.bold(
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

  NotEmpty<T>() {
    return function (
      _target: unknown,
      context: ClassFieldDecoratorContext<T, unknown>
    ) {
      return function (this: T, value: Mixed) {
        const propertyName = String(context.name);

        if (Validator.isUndefined(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} is ${chalk.bold(typeof value)}`
            )}`
          );
          Deno.exit(1);
        }

        if (Validator.isNull(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} is ${chalk.bold(value)}.`
            )}`
          );
          Deno.exit(1);
        }

        if (Validator.isEmpty(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} is empty (${chalk.bold(value)}).`
            )}`
          );
          Deno.exit(1);
        }

        return value;
      };
    };
  }

  NotBlank<T>() {
    return function (
      _target: unknown,
      context: ClassFieldDecoratorContext<T, unknown>
    ) {
      return function (this: T, value: Mixed) {
        const propertyName = String(context.name);

        if (!Validator.isString(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} must be a ${chalk.bold(
                "string"
              )}, but got ${chalk.bold(typeof value)}.`
            )}`
          );
        }

        if (Validator.isUndefined(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} is ${chalk.bold(typeof value)}.`
            )}`
          );
          Deno.exit(1);
        }

        if (Validator.isNull(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} is ${chalk.bold(value)}.`
            )}`
          );
          Deno.exit(1);
        }

        if (Validator.isEmpty(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} is empty (${chalk.bold(value)}).`
            )}`
          );
          Deno.exit(1);
        }

        if (Validator.isBlank(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} is empty (${chalk.bold(value)}).`
            )}`
          );
          Deno.exit(1);
        }

        return value;
      };
    };
  }

  Name<T>(options?: NameOptions) {
    return function (
      _target: unknown,
      context: ClassFieldDecoratorContext<T, unknown>
    ) {
      return function (this: T, value: Mixed) {
        const propertyName = String(context.name);

        let nameRegex = /^[a-zA-Z\s,.'\-\p{Letter}]+$/u;
        let errorMsg = `${chalk.red(
          `${chalk.bold(propertyName)} value ${chalk.bold(
            value
          )} is not a valid name.`
        )}`;

        if (Validator.isUndefined(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} is ${chalk.bold(typeof value)}`
            )}`
          );
          Deno.exit(1);
        }

        if (!Validator.isString(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} must be a ${chalk.bold(
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

  Email<T>(options?: EmailOptions) {
    return function (
      _target: unknown,
      context: ClassFieldDecoratorContext<T, unknown>
    ) {
      return function (this: T, value: Mixed) {
        const propertyName = String(context.name);

        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let errorMsg = `${chalk.red(
          `${chalk.bold(propertyName)} value ${chalk.bold(
            value
          )} is not a valid email.`
        )}`;

        if (Validator.isUndefined(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} is ${chalk.bold(typeof value)}`
            )}`
          );
          Deno.exit(1);
        }

        if (!Validator.isString(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} must be a ${chalk.bold(
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
            const found = options.domainBlackList.some((d) =>
              words.includes(d)
            );

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

  PhoneNumber<T>(options?: PhoneNumberOptions) {
    return function (
      _target: unknown,
      context: ClassFieldDecoratorContext<T, unknown>
    ) {
      return function (this: T, value: Mixed) {
        const propertyName = context.name;

        let phoneNumberRegex =
          /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
        let errorMsg = `${chalk.red(
          `${chalk.bold(propertyName)} value ${chalk.bold(
            value
          )} is not a phone number.`
        )}`;

        if (Validator.isUndefined(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} is ${chalk.bold(typeof value)}`
            )}`
          );
          Deno.exit(1);
        }

        if (!Validator.isString(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} must be a ${chalk.bold(
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

  URL<T>(options?: URLOptions) {
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
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} is ${chalk.bold(typeof value)}`
            )}`
          );
          Deno.exit(1);
        }

        if (!Validator.isString(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} must be a ${chalk.bold(
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

  MinLength<T>(minLength: number, options?: ValueLengthOptions) {
    return function (
      _target: unknown,
      context: ClassFieldDecoratorContext<T, unknown>
    ) {
      return function (this: T, value: Mixed) {
        const propertyName = context.name;

        if (Validator.isUndefined(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} is ${chalk.bold(typeof value)}`
            )}`
          );
          Deno.exit(1);
        }

        if (!Validator.isString(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} must be a ${chalk.bold(
                "string"
              )}, but got ${chalk.bold(typeof value)}.`
            )}`
          );
          Deno.exit(1);
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
            valueLength = String(value).replace(
              whitespaceIgnoreRegex,
              ""
            ).length;
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

  MaxLength<T>(maxLength: number, options?: ValueLengthOptions) {
    return function (
      _target: unknown,
      context: ClassFieldDecoratorContext<T, unknown>
    ) {
      return function (this: T, value: Mixed) {
        const propertyName = context.name;

        if (Validator.isUndefined(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} is ${chalk.bold(typeof value)}`
            )}`
          );
          Deno.exit(1);
        }

        if (!Validator.isString(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} must be a ${chalk.bold(
                "string"
              )}, but got ${chalk.bold(typeof value)}.`
            )}`
          );
          Deno.exit(1);
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
            valueLength = String(value).replace(
              whitespaceIgnoreRegex,
              ""
            ).length;
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

  Matches<T>(regex: RegExp, options?: MatchesOptions) {
    return function (
      _target: unknown,
      context: ClassFieldDecoratorContext<T, unknown>
    ) {
      return function (this: T, value: Mixed) {
        const propertyName = String(context.name);

        let errorMsg = `${chalk.red(
          `${chalk.bold(propertyName)} value not match with ${chalk.bold(
            regex
          )} regex.`
        )}`;

        if (Validator.isUndefined(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} is ${chalk.bold(typeof value)}.`
            )}`
          );
          Deno.exit(1);
        }

        if (!Validator.isString(value)) {
          console.error(
            `${chalk.red(
              `${chalk.bold(propertyName)} must be a ${chalk.bold(
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

  LowerCase(): void {
    throw new Error("Method not implemented.");
  }

  UpperCase(): void {
    throw new Error("Method not implemented.");
  }

  CamelCase(): void {
    throw new Error("Method not implemented.");
  }

  TitleCase(): void {
    throw new Error("Method not implemented.");
  }

  Min(): void {
    throw new Error("Method not implemented.");
  }

  Max(): void {
    throw new Error("Method not implemented.");
  }

  Range(): void {
    throw new Error("Method not implemented.");
  }

  ArrayMinSize(): void {
    throw new Error("Method not implemented.");
  }

  ArrayMaxSize(): void {
    throw new Error("Method not implemented.");
  }

  ArrayUnique(): void {
    throw new Error("Method not implemented.");
  }

  EachElement(): void {
    throw new Error("Method not implemented.");
  }
}

export const Decorator = GuardianDecorator.getInstance();
