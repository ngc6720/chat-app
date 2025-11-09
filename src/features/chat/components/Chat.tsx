"use client";

import React from "react";
import type { ChatMessage } from "../models/ChatMessage";
import { ChatWindow } from "./ChatWindow";
import { ChatForm } from "./ChatForm";
import type { ChatStatus } from "../models/ChatStatus";
import { streamResponseByChar } from "@/lib/stream";
import { useChatStore } from "../stores/chat";
import * as service from "../service";
import { ChatError, ChatErrorInlineMessage } from "../models/Errors";
import { useRouter } from "next/navigation";

export default function Chat() {
  const store = useChatStore(); // Persistant store
  const [streamedMessage, setStreamedMessage] =
    React.useState<ChatMessage | null>(null); // Local state for streamed completions
  const [chatStatus, setChatStatus] = React.useState<ChatStatus>("idle");
  const [error, setError] = React.useState<string | null>(null);
  const router = useRouter();
  const needCancelStreaming = React.useRef(false); // Flag to stop streaming if needed

  /*
  Update the local state streamed completion, then return the full message
  */
  const streamAssistantMessage = React.useCallback(
    async (response: Response): Promise<ChatMessage | null> => {
      const message: ChatMessage = {
        id: Date.now(),
        role: "assistant",
        content: "",
      };
      setStreamedMessage(message);
      needCancelStreaming.current = false as boolean;

      for await (const token of streamResponseByChar(response, () =>
        Math.min(Math.max(Math.exp(Math.random() * 7 - 3), 5), 400),
      )) {
        // Short circuit if user has clicked on reset chat
        if (needCancelStreaming.current === true) {
          return null;
        }
        message.content += token;
        setStreamedMessage({ ...message });
      }
      return message;
    },
    [],
  );

  const submitMessage = React.useCallback(async () => {
    if (!store.input || chatStatus === "busy") {
      return;
    }
    setChatStatus("busy");

    const userMsg: ChatMessage = {
      id: Date.now(),
      role: "user",
      content: store.input,
    };
    /*
    Optimistic state updates.
    Since it is persistant state, the message can then be used to revert state in case of exception during chat completion
    */
    store.addMessage(userMsg);
    store.setInput("");
    /*
    Use the block scoped message for fetching because the state we just set has not updated yet
    */
    const response = await service.chatStream(store.messages.concat(userMsg));

    if (!response.ok) {
      const error: ChatError = (await response.json()).error;
      const shouldRedirect =
        error === ChatError.tokenExpired ||
        ChatError.tokenMissing ||
        ChatError.tokenExpired;
      shouldRedirect
        ? router.replace(`/?error=${error}`)
        : setError(ChatErrorInlineMessage[error]);
      /*
      Revert back to before optimistic state updates
      */
      store.revert();
      setChatStatus("idle");
      return;
    }

    const completedAssistantMessage = await streamAssistantMessage(response);
    setStreamedMessage(null);
    if (completedAssistantMessage) store.addMessage(completedAssistantMessage);
    setChatStatus("idle");
    setError(null);
  }, [store, chatStatus, streamAssistantMessage, router]);

  const resetChat = React.useCallback(() => {
    needCancelStreaming.current = true;
    setStreamedMessage(null);
    store.reset();
  }, [store.reset]);

  return (
    <div className="flex flex-col h-full min-h-[350px]">
      <ChatWindow messages={store.messages} streamedMessage={streamedMessage} />
      {error ? <ErrorMessage message={error} /> : null}
      <ChatForm
        input={store.input}
        setInput={(text) => store.setInput(text)}
        submitMessage={submitMessage}
        status={chatStatus}
        reset={resetChat}
      />
    </div>
  );
}

const ErrorMessage = ({ message }: { message: string }) => (
  <div className="p-3 decoration-wavy underline underline-offset-3">
    /!\ {message}
  </div>
);
