import type { Mixed } from "../types/value.type.ts";

export function getParams(func: Mixed) {
  const STRIP_COMMENTS =
    /(\/\/.*$)|(\/\*[\s\S]*?\*\/)|(\s*=[^,\)]*(('(?:\\'|[^'\r\n])*')|("(?:\\"|[^"\r\n])*"))|(\s*=[^,\)]*))/gm;
  const ARGUMENT_NAMES = /([^\s,]+)/g;

  const fnStr = func.toString().replace(STRIP_COMMENTS, "");
  const result = fnStr
    .slice(fnStr.indexOf("(") + 1, fnStr.indexOf(")"))
    .match(ARGUMENT_NAMES);

  return result;
}

export function getPrecisions(value: Mixed) {
  if (!isFinite(value)) return 0;

  let e = 1;
  let p = 0;

  while (Math.round(value * e) / e !== value) {
    e *= 10;
    p++;
  }

  return p;
}
