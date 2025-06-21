import type { IGuardianDecorator } from "../interfaces/IGuardianDecorator.ts";

export class GuardianDecorator implements IGuardianDecorator {
  private static instance: GuardianDecorator;

  private constructor() {}

  public static getInstance(): GuardianDecorator {
    if (!GuardianDecorator.instance) {
      GuardianDecorator.instance = new GuardianDecorator();
    }

    return GuardianDecorator.instance;
  }

  IsString(): void {
    throw new Error("Method not implemented.");
  }

  IsNumber(): void {
    throw new Error("Method not implemented.");
  }

  IsArray(): void {
    throw new Error("Method not implemented.");
  }

  IsBoolean(): void {
    throw new Error("Method not implemented.");
  }

  IsDate(): void {
    throw new Error("Method not implemented.");
  }

  IsSymbol(): void {
    throw new Error("Method not implemented.");
  }

  IsBigInt(): void {
    throw new Error("Method not implemented.");
  }
  IsInteger(): void {
    throw new Error("Method not implemented.");
  }
  IsFloat(): void {
    throw new Error("Method not implemented.");
  }
  IsPositive(): void {
    throw new Error("Method not implemented.");
  }
  IsNegative(): void {
    throw new Error("Method not implemented.");
  }
  IsAlpha(): void {
    throw new Error("Method not implemented.");
  }
  IsAlphaNumeric(): void {
    throw new Error("Method not implemented.");
  }
  IsNull(): void {
    throw new Error("Method not implemented.");
  }
  IsEmpty(): void {
    throw new Error("Method not implemented.");
  }
  IsFunction(): void {
    throw new Error("Method not implemented.");
  }
  IsOptional(): void {
    throw new Error("Method not implemented.");
  }
  NotNull(): void {
    throw new Error("Method not implemented.");
  }
  NotEmpty(): void {
    throw new Error("Method not implemented.");
  }
  NotBlank(): void {
    throw new Error("Method not implemented.");
  }
  Name(): void {
    throw new Error("Method not implemented.");
  }
  Email(): void {
    throw new Error("Method not implemented.");
  }
  PhoneNumber(): void {
    throw new Error("Method not implemented.");
  }
  CreditCardNumber(): void {
    throw new Error("Method not implemented.");
  }
  URL(): void {
    throw new Error("Method not implemented.");
  }
  MinLength(): void {
    throw new Error("Method not implemented.");
  }
  MaxLength(): void {
    throw new Error("Method not implemented.");
  }
  Matches(): void {
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
  ToLowerCase(): void {
    throw new Error("Method not implemented.");
  }
  ToUpperCase(): void {
    throw new Error("Method not implemented.");
  }
  ToCamelCase(): void {
    throw new Error("Method not implemented.");
  }
  ToTitleCase(): void {
    throw new Error("Method not implemented.");
  }
  ToBoolean(): void {
    throw new Error("Method not implemented.");
  }
  ToString(): void {
    throw new Error("Method not implemented.");
  }
  ToNumber(): void {
    throw new Error("Method not implemented.");
  }
  ToDate(): void {
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
