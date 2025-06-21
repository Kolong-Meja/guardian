export interface IGuardianDecorator {
  IsString(): void;
  IsNumber(): void;
  IsArray(): void;
  IsBoolean(): void;
  IsDate(): void;
  IsSymbol(): void;
  IsBigInt(): void;
  IsInteger(): void;
  IsFloat(): void;
  IsPositive(): void;
  IsNegative(): void;
  IsAlpha(): void;
  IsAlphaNumeric(): void;
  IsNull(): void;
  IsEmpty(): void;
  IsFunction(): void;
  IsOptional(): void;

  NotNull(): void;
  NotEmpty(): void;
  NotBlank(): void;

  Name(): void;
  Email(): void;
  PhoneNumber(): void;
  CreditCardNumber(): void;
  URL(): void;

  MinLength(): void;
  MaxLength(): void;
  Matches(): void;
  ToLowerCase(): void;
  ToUpperCase(): void;
  ToCamelCase(): void;
  ToTitleCase(): void;

  Min(): void;
  Max(): void;
  Range(): void;

  ToBoolean(): void;
  ToString(): void;
  ToNumber(): void;
  ToDate(): void;

  ArrayMinSize(): void;
  ArrayMaxSize(): void;
  ArrayUnique(): void;
  EachElement(): void;
}
