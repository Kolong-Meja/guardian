import {
  Email,
  IsFloat,
  IsInteger,
  IsString,
  MaxLength,
  MinLength,
  URL,
} from "./decorators/guardian.decorator.ts";

import {
  Decimal,
  Float,
  Integer,
  Long,
  UInteger,
  ULong,
} from "./generators/value.generator.ts";

class User {
  @IsString()
  fullname: string = "Faisal Ramadhan";

  @IsInteger()
  age: number = 24;

  @MinLength(10, {
    trim: true,
    ignoreWhitespace: true,
  })
  @MaxLength(100, {
    trim: true,
    ignoreWhitespace: true,
  })
  @Email()
  email: string = "faisalramadhan1299@gmail.com";

  @URL()
  url: string = "https://faisalramadhanid.netlify.app/";

  @IsFloat()
  grade: number = 84.8;
}

if (import.meta.main) {
  const myInt = Integer(1000);
  console.log(myInt);

  const myLong = Long(1000n);
  console.log(myLong);

  const myUint = UInteger(100);
  console.log(myUint);

  const myUlong = ULong(100n);
  console.log(myUlong);

  const myFloat = Float(10.01);
  console.log(myFloat);

  const myDecimal = Decimal(10.123);
  console.log(myDecimal);
}
