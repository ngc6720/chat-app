import { ChatError } from "@/features/chat/models/Errors";
import * as token from "@/lib/token";
import { RepositoryLink } from "@/ui/RepositoryLink";
import { LockKeyhole } from "lucide-react";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";

const formDataName = { token: "token" };

export const metadata: Metadata = {
  title: "Cat the chat app | Home",
  description: "Cat the chat app",
  robots: "none",
};

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}) {
  "use server";
  const cookieStore = await cookies();
  if (token.exists(cookieStore)) {
    redirect("/chat");
  }

  async function postToken(formData: FormData) {
    "use server";

    const value = formData.get(formDataName.token);
    if (typeof value === "string") {
      const cookieStore = await cookies();
      token.set(cookieStore, value);
    }
    redirect("/chat", RedirectType.replace);
  }

  const { error } = (await searchParams) as { error: ChatError };

  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <div className="min-h-screen h-screen w-full max-w-3xl px-2 py-2 sm:py-16 sm:px-4 overflow-hidden my-auto">
        <noscript>
          Sorry, this app needs javascript to function. Please activate
          javascript to use the app properly.
        </noscript>

        <h1 className="mb-16 flex justify-between">
          Cat the chat app
          <RepositoryLink />
        </h1>
        <form action={postToken} className="flex flex-col gap-3">
          <label className="flex flex-col gap-3 font-secondary">
            <span>
              {error ? errorMessage[error] : "Hi!"} This app uses Mistral AI.
              Please enter your temporary key for the Mistral public API. It
              will will be stored in your browser and expire after{" "}
              {token.COOKIE_DURATION_SECONDS / 60} minutes.
            </span>
            <span>
              To create a key, connect to your Mistral account, got to{" "}
              <a
                className="inline-block underline"
                href="https://admin.mistral.ai/organization/api-keys"
              >
                Mistral's settings - API Keys
              </a>{" "}
              and click on "Create new key". It is recommended to select an
              expiration date for the key.
            </span>
            <input
              name={formDataName.token}
              type="text"
              className="p-3 bg-surface font-primary"
              placeholder="Your Mistral public API key"
              required
            />
          </label>
          <button type="submit" className="u-button-primary">
            <LockKeyhole />
            <div>Save token</div>
          </button>
        </form>
      </div>
    </main>
  );
}

const errorMessage = {
  [ChatError.tokenMissing]: "Not so faaast! You are missing an API token.",
  [ChatError.tokenExpired]:
    "Ooops! Your token has expired. No worries, your conversation is saved locally in your browser.",
  [ChatError.badInput]: "",
  [ChatError.unknown]: "",
  [ChatError.rateLimited]: "",
} satisfies Record<ChatError, string>;
