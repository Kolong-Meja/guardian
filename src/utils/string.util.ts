export const titleCase = <S extends string>(s: S, locale: string = "en-US") =>
  (s.charAt(0).toLocaleUpperCase(locale) +
    s.slice(1).toLocaleLowerCase(locale)) as Capitalize<typeof s>;

export const toTitleCase = <S extends string>(
  s: S,
  locale: string = "en-US"
) => {
  return s
    .split(" ")
    .map((a) => titleCase(a, locale))
    .join(" ");
};
