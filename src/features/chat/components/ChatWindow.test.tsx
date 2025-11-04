import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ChatWindow } from "./ChatWindow";

describe("ChatWindow", () => {
  it("renders user message and a thinking feedback", () => {
    render(
      <ChatWindow
        messages={[
          {
            id: 0,
            role: "user",
            content: "question",
          },
        ]}
        streamedMessage={null}
      />,
    );

    const message = screen.getByText("question");
    expect(message).toBeInTheDocument();
    const thinkingElement = screen.getByText("...");
    expect(thinkingElement).toBeInTheDocument();
  });
  it("renders streamed message when provided with one", () => {
    render(
      <ChatWindow
        messages={[
          {
            id: 0,
            role: "user",
            content: "question",
          },
        ]}
        streamedMessage={{
          id: 0,
          role: "assistant",
          content: "streamed",
        }}
      />,
    );
    const message = screen.getByText("streamed");
    expect(message).toBeInTheDocument();
    const thinkingElement = screen.queryByText("...");
    expect(thinkingElement).not.toBeInTheDocument();
  });
  it("renders assistant message", () => {
    render(
      <ChatWindow
        messages={[
          {
            id: 0,
            role: "user",
            content: "question",
          },
          {
            id: 1,
            role: "assistant",
            content: "answer",
          },
        ]}
        streamedMessage={null}
      />,
    );
    const message = screen.getByText("answer");
    expect(message).toBeInTheDocument();
    const thinkingElement = screen.queryByText("...");
    expect(thinkingElement).not.toBeInTheDocument();
  });
});
