import { cookies } from "next/headers";
import Chat from "@/features/chat/components/Chat";
import { redirect, RedirectType } from "next/navigation";
import { ChatError } from "@/features/chat/models/Errors";
import * as token from "@/lib/token";
import type { Metadata } from "next";
import { RepositoryLink } from "@/ui/RepositoryLink";

export const metadata: Metadata = {
  title: "Cat the chat app | Chat",
  description: "Cat the chat app",
  robots: "none",
};

export default async function ChatPage() {
  "use server";
  const cookieStore = await cookies();
  if (!token.exists(cookieStore)) {
    redirect(`/?error=${ChatError.tokenMissing}`, RedirectType.replace);
  }

  return (
    <main className="h-screen bg-background">
      <div className="flex flex-col w-full h-full m-auto max-w-3xl p-2 sm:p-16 ">
        <h1 className="text-0 flex justify-between mb-2">
          Cat the chat app / Chat <RepositoryLink />
        </h1>
        <Chat />
      </div>
    </main>
  );
}
