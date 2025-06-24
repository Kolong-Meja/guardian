import type {
  EmailOptions,
  MatchesOptions,
  NameOptions,
  PhoneNumberOptions,
  StringValueOptions,
  URLOptions,
} from "../types/props.type.ts";
import type { Mixed } from "../types/value.type.ts";

export interface IGuardianDecorator {
  IsString<T>(): (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) => (this: T, value: Mixed) => Mixed;
  IsNumber<T>(): (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) => (this: T, value: Mixed) => Mixed;
  IsArray<T>(): (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) => (this: T, value: Mixed) => Mixed;
  IsBoolean<T>(): (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) => (this: T, value: Mixed) => Mixed;
  IsDate<T>(): (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) => (this: T, value: Mixed) => Mixed;
  IsSymbol<T>(): (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) => (this: T, value: Mixed) => Mixed;
  IsBigInt<T>(): (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) => (this: T, value: Mixed) => Mixed;
  IsInteger<T>(): (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) => (this: T, value: Mixed) => Mixed;
  IsFloat<T>(): (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) => (this: T, value: Mixed) => Mixed;
  IsPositive<T>(): (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) => (this: T, value: Mixed) => Mixed;
  IsNegative<T>(): (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) => (this: T, value: Mixed) => Mixed;
  IsAlpha<T>(): (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) => (this: T, value: Mixed) => Mixed;
  IsAlphaNumeric<T>(): (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) => (this: T, value: Mixed) => Mixed;

  NotNull<T>(): (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) => (this: T, value: Mixed) => Mixed;
  NotEmpty<T>(): (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) => (this: T, value: Mixed) => Mixed;
  NotBlank<T>(): (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) => (this: T, value: Mixed) => Mixed;

  Name<T>(
    options?: NameOptions
  ): (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) => (this: T, value: Mixed) => Mixed;
  Email<T>(
    options?: EmailOptions
  ): (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) => (this: T, value: Mixed) => Mixed;
  PhoneNumber<T>(
    options?: PhoneNumberOptions
  ): (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) => (this: T, value: Mixed) => Mixed;
  URL<T>(
    options?: URLOptions
  ): (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) => (this: T, value: Mixed) => Mixed;

  MinLength<T>(
    minLength: number,
    options?: StringValueOptions
  ): (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) => (this: T, value: Mixed) => Mixed;
  MaxLength<T>(
    maxLength: number,
    options?: StringValueOptions
  ): (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) => (this: T, value: Mixed) => Mixed;
  Matches<T>(
    regex: RegExp,
    options?: MatchesOptions
  ): (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) => (this: T, value: Mixed) => Mixed;
  LowerCase<T>(): (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) => (this: T, value: Mixed) => Mixed;
  UpperCase<T>(): (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) => (this: T, value: Mixed) => Mixed;
  CamelCase<T>(): (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) => (this: T, value: Mixed) => Mixed;
  TitleCase<T>(): (
    _target: unknown,
    context: ClassFieldDecoratorContext<T, unknown>
  ) => (this: T, value: Mixed) => Mixed;

  Min(): void;
  Max(): void;
  Range(): void;

  ArrayMinSize(): void;
  ArrayMaxSize(): void;
  ArrayUnique(): void;
  EachElement(): void;
}
