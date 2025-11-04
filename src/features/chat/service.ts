import type { ChatMessage } from "./models/ChatMessage";
import * as config from "@/lib/config";

export const chatStream = (messages: ChatMessage[]) =>
  fetch(
    `/api/chat${
      process.env.NODE_ENV !== "production" &&
      config.bool(process.env.NEXT_PUBLIC_USE_MOCK_API)
        ? "/mock"
        : ""
    }`,
    {
      method: "POST",
      body: JSON.stringify(messages),
    },
  );
