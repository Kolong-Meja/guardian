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
