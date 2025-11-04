/*
A mock api for streamed completions, mainly useful for designing front-end views
(it does not replicate all of the real api characteristics like chat client errors)
*/

import * as token from "@/lib/token";
import type { CompletionEvent } from "@mistralai/mistralai/models/components";
import { type NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createMockChatResult } from "./mockData";
import { createChatStream, MessagesSchema } from "../route";
import { ChatError } from "@/features/chat/models/Errors";

export async function POST(request: NextRequest) {
  const cookieStore = await cookies();
  const apiKey = token.get(cookieStore);

  if (!apiKey) {
    return NextResponse.json(
      { error: ChatError.tokenExpired },
      { status: 401 },
    );
  }

  const messages = await request.json();
  const { data, error } = MessagesSchema.safeParse(messages);

  if (error) {
    console.error(error.message);
    return NextResponse.json({ error: ChatError.badInput }, { status: 400 });
  }

  if (data[data.length - 1].role === "assistant")
    return NextResponse.json({ error: ChatError.unknown }, { status: 400 });

  const mockChatResult = createMockChatResult({ data });

  const stream = createChatStream<CompletionEvent>(
    mockChatResult,
    (chunk) => chunk.data.choices[0].delta.content,
  );

  await new Promise((resolve) => setTimeout(resolve, 50));

  return new NextResponse(stream, {
    headers: { "Content-Type": "text/plain" },
  });
}
