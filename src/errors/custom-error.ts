export class TypeNotMatchError extends Error {
  constructor(message: string | undefined) {
    super(message);
    this.name = "TypeNotMatchError";
    Object.setPrototypeOf(this, TypeNotMatchError.prototype);
  }
}

export class NullValueError extends Error {
  constructor(message: string | undefined) {
    super(message);
    this.name = "NullValueError";
    Object.setPrototypeOf(this, NullValueError.prototype);
  }
}

export class UndefinedValueError extends Error {
  constructor(message: string | undefined) {
    super(message);
    this.name = "UndefinedValueError";
    Object.setPrototypeOf(this, UndefinedValueError.prototype);
  }
}

export class NotValidEmailError extends Error {
  constructor(message: string | undefined) {
    super(message);
    this.name = "NotValidEmailError";
    Object.setPrototypeOf(this, NotValidEmailError.prototype);
  }
}

export class NotValidURLError extends Error {
  constructor(message: string | undefined) {
    super(message);
    this.name = "NotValidURLError";
    Object.setPrototypeOf(this, NotValidURLError.prototype);
  }
}

export class ValueError extends Error {
  constructor(message: string | undefined) {
    super(message);
    this.name = "ValueError";
    Object.setPrototypeOf(this, ValueError.prototype);
  }
}

export class ValueLengthError extends Error {
  constructor(message: string | undefined) {
    super(message);
    this.name = "ValueLengthError";
    Object.setPrototypeOf(this, ValueLengthError.prototype);
  }
}

export class ValueNotMatchError extends Error {
  constructor(message: string | undefined) {
    super(message);
    this.name = "ValueNotMatchError";
    Object.setPrototypeOf(this, ValueNotMatchError.prototype);
  }
}
