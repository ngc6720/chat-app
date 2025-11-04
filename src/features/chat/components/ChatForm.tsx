"use client";

import { ArrowTop } from "@/ui/ArrowTop";
import React from "react";
import type { ChatInput } from "../models/ChatInput";
import { ChatStatus } from "../models/ChatStatus";
import { MessageSquareX } from "lucide-react";

type ChatFormProps = {
  status: ChatStatus;
  input: ChatInput;
  setInput: (arg0: ChatInput) => void;
  submitMessage: () => Promise<void>;
  reset: () => void;
};

export const ChatForm = ({
  status,
  input,
  setInput,
  submitMessage,
  reset,
}: ChatFormProps) => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);

  React.useEffect(() => {
    const onKeydown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault(); // no line breaks
        formRef.current?.requestSubmit();
      }
    };
    textAreaRef?.current?.addEventListener("keydown", onKeydown);
    return () => {
      textAreaRef?.current?.removeEventListener("keydown", onKeydown);
    };
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitMessage();
  };

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <clicks on form background also focus input (irrelevant on kb)>
    <form
      ref={formRef}
      onSubmit={onSubmit}
      onClick={() => textAreaRef.current?.focus()}
      className="relative flex flex-col gap-2 w-full bg-surface rounded-lg p-3 cursor-text"
    >
      <div className="max-h-68 flex min-h-16 p-2">
        <div
          /*
          can't auto resize textArea from content so we replicate it in parent div
          invisible :after which will resize instead
          */
          data-replicated-value={input}
          className="word-break-word grid max-w-full after:content-[attr(data-replicated-value)] after:whitespace-pre-wrap after:invisible after:p-2 after:grid-area-1-1 test-grow-wrap w-full text-lg h-full outline-none overflow-auto"
        >
          <textarea
            ref={textAreaRef}
            name="textInput"
            id="textInput"
            value={input}
            placeholder="Meow?"
            onChange={(e) => setInput(e.target.value)}
            className="w-full max-w-full text-lg h-full overflow-x-hidden p-2 grid-area-1-1 caret-accent outline-none resize-none overflow-hidden placeholder:text-muted-foreground"
          ></textarea>
        </div>
      </div>

      <div className="flex w-full pointer-events-none p-2">
        <div>
          <button type="button" onClick={reset} className="u-button-secondary">
            <div>
              <MessageSquareX />
              Erase chat
            </div>
          </button>
        </div>
        <div className="ml-auto">
          <button
            title="Send message"
            type="submit"
            disabled={status === ChatStatus.busy}
            className="u-button-primary u-button-square u-button-push"
          >
            <ArrowTop />
          </button>
        </div>
      </div>
    </form>
  );
};
