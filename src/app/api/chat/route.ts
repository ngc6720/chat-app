import * as token from "@/lib/token";
import { Mistral } from "@mistralai/mistralai";
import type { CompletionEvent } from "@mistralai/mistralai/models/components";
import { type NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import z from "zod";
import { ChatError } from "@/features/chat/models/Errors";
import type { EventStream } from "@mistralai/mistralai/lib/event-streams";

export const MessagesSchema = z.array(
  z.object({ role: z.enum(["assistant", "user"]), content: z.string() }),
);

export function createChatStream<T>(
  streamable: AsyncIterable<T>,
  getDataFromChunk: (chunk: T) => string | unknown,
) {
  const encoder = new TextEncoder();
  return new ReadableStream<Uint8Array<ArrayBuffer>>({
    async start(controller) {
      for await (const chunk of streamable) {
        const streamText = getDataFromChunk(chunk);
        if (typeof streamText === "string") {
          controller.enqueue(encoder.encode(streamText));
        }
      }
      controller.close();
    },
  });
}

const SYSTEM_PROMPT =
  "You are an old and wise cat. You only answer in informal, conversational plain text sentences. De-llm-ize your answers, do not use rich syntax or markdown tags. You are polite but not overwhelmingly helpful, since you are a cat : for instance, you should hint that you know something helpful instead of plain asking 'how can i help ?'. You like food, recipes and cooking, you often make references of it in your answers.";

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

  const client = new Mistral({ apiKey: apiKey });

  let result: EventStream<CompletionEvent>;

  try {
    result = await client.chat.stream({
      model: "mistral-small-latest",
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT,
        },
        ...data,
      ],
      safePrompt: true,
    });
  } catch (e) {
    const status =
      z.object({ statusCode: z.number() }).safeParse(e).data?.statusCode ?? 500;
    switch (status) {
      case 401:
        token.remove(cookieStore);
        return NextResponse.json(
          { error: ChatError.tokenInvalid },
          { status: 401 },
        );
      case 429:
        return NextResponse.json(
          { error: ChatError.rateLimited },
          { status: 429 },
        );
      default:
        return NextResponse.json({ error: ChatError.unknown }, { status });
    }
  }

  const stream = createChatStream<CompletionEvent>(
    result,
    (chunk) => chunk.data.choices[0].delta.content,
  );

  return new NextResponse(stream, {
    headers: { "Content-Type": "text/plain" },
  });
}
