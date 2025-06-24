type BaseOptions = {
  message?: string;
};

type RegexBaseOptions = BaseOptions & {
  regex?: RegExp;
};

export type NameOptions = RegexBaseOptions & {
  allowTitles?: boolean;
};

export type EmailOptions = RegexBaseOptions & {
  domainBlackList?: string[];
};

export type URLOptions = RegexBaseOptions & {
  allowedProtocols?: string[];
};

export type PhoneNumberOptions = RegexBaseOptions & {
  defaultCountry?: string;
};

export type MatchesOptions = BaseOptions;

export type MinOptions = BaseOptions;

export type MaxOptions = BaseOptions;

export type RangeOptions = BaseOptions;

export type StringValueOptions = BaseOptions & {
  trim?: boolean;
  ignoreWhitespace?: boolean;
};
