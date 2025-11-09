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
      <div className="md:grid md:grid-cols-[1fr_48rem_1fr] md:max-w-full">
        <div className="flex flex-col col-start-2 h-screen m-auto max-w-3xl py-2 md:py-16 md:px-4 px-2">
          <h1 className="text-0 flex justify-between mb-2">
            Cat the chat app / Chat <RepositoryLink />
          </h1>
          <Chat />
        </div>
        <div className="hidden xl:flex p-8 py-16 h-full w-full">
          <div className="border-muted-foreground border w-full p-6 font-secondary rounded-lg h-fit mt-auto">
            <p>
              Hey! I am working on another project about RAG and audio, you can{" "}
              <a
                href="https://github.com/ngc6720/rag-audio"
                title="Link to RAG-audio Github repository"
                className="underline"
              >
                check it here
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
