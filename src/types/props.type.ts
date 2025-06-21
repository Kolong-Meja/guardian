type RegexBaseOptionsProps = {
  regex?: RegExp | undefined;
  errorMsg?: string | undefined;
};

export type EmailOptionsProps = RegexBaseOptionsProps;

export type URLOptionsProps = RegexBaseOptionsProps;

export type LengthOptionsProps = {
  errorMsg?: string | undefined;
  trim?: boolean | undefined;
  ignoreWhitespace?: boolean | undefined;
};
