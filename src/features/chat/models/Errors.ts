export const ChatError: {
  unknown: "unknown";
  badInput: "bad_input";
  tokenExpired: "token_expired";
  tokenMissing: "token_missing";
  rateLimited: "rate_limited";
} = {
  unknown: "unknown",
  badInput: "bad_input",
  tokenExpired: "token_expired",
  tokenMissing: "token_missing",
  rateLimited: "rate_limited",
};
export type ChatError = (typeof ChatError)[keyof typeof ChatError];

export const ChatErrorInlineMessage: { [Property in ChatError]: string } = {
  [ChatError.unknown]: "An unknown error has occured",
  [ChatError.badInput]: "Bad input",
  [ChatError.tokenExpired]: "Your API token is invalid",
  [ChatError.tokenMissing]: "Your API token is missing",
  [ChatError.rateLimited]: "Your request was rate limited",
};
