export class TypeNotMatchError extends Error {
  constructor(message: string | undefined) {
    super(message);
    this.name = "TypeNotMatchError";
    Object.setPrototypeOf(this, TypeNotMatchError.prototype);
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