export const bool = (v: string | undefined) =>
  !(v === undefined || v === "0" || v === "false");
