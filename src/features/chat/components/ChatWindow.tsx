import React from "react";
import type { ChatMessage } from "../models/ChatMessage";
import { ArrowTop } from "@/ui/ArrowTop";
import { AssistantIcon } from "@/ui/AssistantIcon";

export const ChatWindow = ({
  messages,
  streamedMessage,
}: {
  messages: ChatMessage[];
  streamedMessage: ChatMessage | null;
}) => {
  const [userHasScrolled, setUserHasScrolled] = React.useState(false);
  const chatWindowRef = React.useRef<HTMLDivElement>(null);
  const isThinking =
    !streamedMessage && messages[messages.length - 1]?.role === "user";
  const scrollToBottom = () => {
    chatWindowRef.current?.scrollTo?.(0, chatWindowRef.current.scrollHeight);
  };
  const resetScroll = () => {
    scrollToBottom();
    setUserHasScrolled(false);
  };

  /*
  automatic scroll
  */
  // biome-ignore lint/correctness/useExhaustiveDependencies: <no rerender needed, only scroll to bottom of chat window messages changes>
  React.useEffect(() => {
    if (!userHasScrolled) {
      scrollToBottom();
    }
  }, [streamedMessage, messages]);

  /*
  user scroll
  */
  React.useEffect(() => {
    const onScroll = () => {
      if (!chatWindowRef?.current) return;
      if (
        chatWindowRef.current.scrollHeight -
        chatWindowRef.current.scrollTop -
        chatWindowRef.current.clientHeight
      ) {
        setUserHasScrolled(true);
      }
    };
    chatWindowRef.current?.addEventListener("scroll", onScroll);
    return () => chatWindowRef.current?.removeEventListener("scroll", onScroll);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <only at component mount>
  React.useEffect(() => {
    setTimeout(scrollToBottom, 0);
  }, []);

  return (
    <div className="relative overflow-hidden w-full h-full border p-3 pr-0 mb-3">
      <div ref={chatWindowRef} className="overflow-y-scroll h-full pr-3">
        <ol className="flex flex-col gap-4 mb-16 mt-3">
          {messages.map((msg: ChatMessage) => (
            <li key={msg.id}>
              {msg.role === "assistant" ? (
                <AssistantMessage text={msg.content} />
              ) : msg.role === "user" ? (
                <UserMessage text={msg.content} timestamp={msg.id} />
              ) : null}
            </li>
          ))}
          {isThinking ? <AssistantMessage text="..." /> : null}
          <StreamedAssistantMessage streamedMessage={streamedMessage} />
        </ol>
      </div>
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        {userHasScrolled ? (
          <button
            title="Auto scroll"
            type="button"
            onClick={resetScroll}
            className="block mx-auto cursor-pointer pointer-events-auto bg-translucent fill-surface-front rotate-180 p-1 m-4 rounded-full border border-surface-front backdrop-blur-sm"
          >
            <ArrowTop />
          </button>
        ) : null}
      </div>
    </div>
  );
};

const UserMessage = ({
  text,
  timestamp,
}: {
  text: string;
  timestamp: number;
}) => {
  const now = new Date();
  const messageDate = new Date(timestamp);

  const isSameYear = now.getFullYear() === messageDate.getFullYear();
  const isSameDate =
    now.getFullYear() === messageDate.getFullYear() &&
    now.getMonth() === messageDate.getMonth() &&
    now.getDate() === messageDate.getDate();

  const formatDateOptions: Intl.DateTimeFormatOptions = {
    weekday: isSameDate ? undefined : "short",
    year: isSameYear ? undefined : "numeric",
    month: isSameDate ? undefined : "short",
    day: isSameDate ? undefined : "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  let date = new Intl.DateTimeFormat("en-US", formatDateOptions).format(
    timestamp,
  );
  date = date.replace(",", "").toLocaleLowerCase();

  return (
    <div className="userMessage group">
      <div className="gap-2 bg-surface rounded-lg p-4 w-fit ml-auto word-break-word">
        <p>{text}</p>
      </div>
      <div className="h-8 flex justify-end opacity-0 transition-opacity group-hover:opacity-100 font-secondary text-sm">
        <p className="text-muted-foreground text-sm opacity-0 transition-opacity group-hover:opacity-100 mt-2">
          {date}
        </p>
      </div>
    </div>
  );
};

const AssistantMessage = ({ text }: { text: string }) => {
  return (
    <div className="assistantMessage grid grid-cols-[2rem_1fr] gap-2 mb-4">
      <AssistantIcon />
      <p>{text}</p>
    </div>
  );
};

const StreamedAssistantMessage = ({
  streamedMessage,
}: {
  streamedMessage: ChatMessage | null;
}) => {
  return streamedMessage ? (
    <li>
      <AssistantMessage text={streamedMessage.content} />
    </li>
  ) : null;
};
