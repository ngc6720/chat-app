"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { produce } from "immer";
import type { ChatMessage } from "../models/ChatMessage";
import type { ChatInput } from "../models/ChatInput";

interface ChatState {
  input: ChatInput;
  messages: ChatMessage[];
  setInput: (by: ChatInput) => void;
  addMessage: (by: ChatMessage) => void;
  deleteMessage: (id: number) => void;
  reset: () => void;
  revert: () => void;
}

const initialMessages: ChatMessage[] = [];

export const useChatStore = create<ChatState>()(
  persist(
    (set) => ({
      input: "",
      messages: initialMessages,
      setInput: (by) =>
        set(
          produce((state) => {
            state.input = by;
          }),
        ),
      addMessage: (by) =>
        set(
          produce((state) => {
            state.messages.push(by);
          }),
        ),
      deleteMessage: (id) =>
        set(
          produce((state) => {
            state.messages.splice(
              state.messages.findIndex((m: ChatMessage) => m.id === id),
              1,
            );
          }),
        ),
      reset: () =>
        set(
          produce((state) => {
            state.messages = initialMessages;
          }),
        ),
      /*
      Revert state back to last completion, before submitting the user message.
      Used for exceptions that happen during a completion (to persist user input),
      i.e. when token expires while chatting or when user leaves the page and the answer has not finished streaming
      */
      revert: () =>
        set(
          produce((state) => {
            for (let i = state.messages.length - 1; i >= 0; i--) {
              const lastMessage = state.messages[i];
              if (lastMessage.role === "assistant") {
                break;
              }
              if (lastMessage.role === "user") {
                state.input = state.messages[state.messages.length - 1].content;
                state.messages.splice(-1);
              }
            }
          }),
        ),
    }),
    {
      name: "chat-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ input: state.input, messages: state.messages }),
      onRehydrateStorage: () => {
        return (state, error) => {
          if (!error) {
            state?.revert();
          }
        };
      },
    },
  ),
);
