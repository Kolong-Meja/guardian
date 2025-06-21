import {
  Int32,
  Int64,
  Float32,
  Float64,
  UInt32,
  UInt64,
} from "../types/value.type.ts";
import { TypeNotMatchError, ValueError } from "../errors/custom-error.ts";
import chalk from "chalk";
import { getParams, getPrecisions } from "../utils/advance.utils.ts";

export function Integer(value: number): Int32 {
  const val = new Int32(value);
  const params = getParams(Integer);
  const precisions = getPrecisions(val.value);

  if (precisions > 0) {
    throw new TypeNotMatchError(
      `${chalk.red(
        `${chalk.bold(params[0])} should be an ${chalk.bold(
          val.__type
        )} and not have any precisions.`
      )}`
    );
  }

  if (value < val.__minValue) {
    throw new ValueError(
      `${chalk.red(
        `Param ${chalk.bold(params[0])} value (${chalk.bold(
          value
        )}) does not match with minimum value (${chalk.bold(val.__minValue)})`
      )}`
    );
  }

  if (value > val.__maxValue) {
    throw new ValueError(
      `${chalk.red(
        `Param ${chalk.bold(params[0])} value (${chalk.bold(
          value
        )}) does not match with maximum value (${chalk.bold(val.__maxValue)})`
      )}`
    );
  }

  return val;
}

export function Long(value: bigint): Int64 {
  const val = new Int64(value);
  const params = getParams(Long);

  if (value < val.__minValue) {
    throw new ValueError(
      `${chalk.red(
        `Param ${chalk.bold(params[0])} value (${chalk.bold(
          value
        )}) does not match with minimum value (${chalk.bold(val.__minValue)})`
      )}`
    );
  }

  if (value > val.__maxValue) {
    throw new ValueError(
      `${chalk.red(
        `Param ${chalk.bold(params[0])} value (${chalk.bold(
          value
        )}) does not match with maximum value (${chalk.bold(val.__maxValue)})`
      )}`
    );
  }

  return val;
}

export function UInteger(value: number): UInt32 {
  const val = new UInt32(value);
  const params = getParams(UInteger);
  const precisions = getPrecisions(val.value);

  if (precisions > 0) {
    throw new TypeNotMatchError(
      `${chalk.red(
        `${chalk.bold(params[0])} should be an ${chalk.bold(
          val.__type
        )} and not have any precisions.`
      )}`
    );
  }

  if (value < val.__minValue) {
    throw new ValueError(
      `${chalk.red(
        `Param ${chalk.bold(params[0])} value (${chalk.bold(
          value
        )}) does not match with minimum value (${chalk.bold(val.__minValue)})`
      )}`
    );
  }

  if (value > val.__maxValue) {
    throw new ValueError(
      `${chalk.red(
        `Param ${chalk.bold(params[0])} value (${chalk.bold(
          value
        )}) does not match with maximum value (${chalk.bold(val.__maxValue)})`
      )}`
    );
  }

  return val;
}

export function ULong(value: bigint): UInt64 {
  const val = new UInt64(value);
  const params = getParams(ULong);

  if (value < val.__minValue) {
    throw new ValueError(
      `${chalk.red(
        `Param ${chalk.bold(params[0])} value (${chalk.bold(
          value
        )}) does not match with minimum value (${chalk.bold(val.__minValue)})`
      )}`
    );
  }

  if (value > val.__maxValue) {
    throw new ValueError(
      `${chalk.red(
        `Param ${chalk.bold(params[0])} value (${chalk.bold(
          value
        )}) does not match with maximum value (${chalk.bold(val.__maxValue)})`
      )}`
    );
  }

  return val;
}

export function Float(value: number): Float32 {
  const val = new Float32(value);
  const params = getParams(Float);
  const precisions = getPrecisions(val.value);

  if (precisions < 1) {
    throw new TypeNotMatchError(
      `${chalk.red(
        `${chalk.bold(params[0])} should be an ${chalk.bold(
          val.__type
        )} and have at least one precision.`
      )}`
    );
  }

  if (precisions > val.__precision) {
    throw new TypeNotMatchError(
      `${chalk.red(
        `${chalk.bold(params[0])} should be an ${chalk.bold(
          val.__type
        )} and have maximum of (${chalk.bold(val.__precision)}).`
      )}`
    );
  }

  return val;
}

export function Decimal(value: number): Float64 {
  const val = new Float64(value);
  const params = getParams(Float);
  const precisions = getPrecisions(val.value);

  if (precisions < 1) {
    throw new TypeNotMatchError(
      `${chalk.red(
        `${chalk.bold(params[0])} should be an ${chalk.bold(
          val.__type
        )} and have at least one precision.`
      )}`
    );
  }

  if (precisions > val.__precision) {
    throw new TypeNotMatchError(
      `${chalk.red(
        `${chalk.bold(params[0])} should be an ${chalk.bold(
          val.__type
        )} and have maximum of (${chalk.bold(val.__precision)}).`
      )}`
    );
  }

  return val;
}
