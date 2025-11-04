import type { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export const COOKIE_DURATION_SECONDS = 3600;
const COOKIE_NAME = "token";

export const exists = (cookieStore: ReadonlyRequestCookies): boolean =>
  cookieStore.has("token") ||
  (process.env.NODE_ENV === "development" &&
    typeof process.env.MISTRAL_API_KEY === "string");

export const get = (cookieStore: ReadonlyRequestCookies): string | null => {
  let apiKey: string | undefined;

  if (process.env.NODE_ENV === "development") {
    apiKey = process.env.MISTRAL_API_KEY;
  }

  if (apiKey) {
    console.log(
      "found MISTRAL_API_KEY in environment variables -> using it as token",
    );
  } else {
    const token = cookieStore.get("token");
    apiKey = token?.value;
  }
  return apiKey ?? null;
};

export const set = (cookieStore: ReadonlyRequestCookies, value: string) => {
  cookieStore.set({
    name: COOKIE_NAME,
    value,
    path: "/",
    maxAge: COOKIE_DURATION_SECONDS,
    httpOnly: true,
    secure: true,
  });
};
export const remove = (cookieStore: ReadonlyRequestCookies) =>
  cookieStore.delete(COOKIE_NAME);
