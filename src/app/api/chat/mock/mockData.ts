/*
Hard coded randomized answers to mock chat completions
*/

import type { EventStream } from "@mistralai/mistralai/lib/event-streams";
import type {
  CompletionEvent,
  AssistantMessage,
  SystemMessage,
  ToolMessage,
  UserMessage,
} from "@mistralai/mistralai/models/components";

type MistralMessages = Array<
  | (SystemMessage & { role: "system" })
  | (ToolMessage & { role: "tool" })
  | (UserMessage & { role: "user" })
  | (AssistantMessage & { role: "assistant" })
>;

const mockChatChunksRaw = [
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " It" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "’s" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [
        { index: 0, delta: { content: " versatile" }, finishReason: null },
      ],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " and" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " pairs" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " well" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " with" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " wine" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: ".\n" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "4" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "." }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " **" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "B" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "rie" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " de" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " Me" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "aux" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " (" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "A" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "OP" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: ")**" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " –" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " The" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " king" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " of" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " Brie" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "," }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " with" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " a" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " vel" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "v" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "ety" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [
        { index: 0, delta: { content: " texture" }, finishReason: null },
      ],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " and" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " a" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " rich" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "," }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [
        { index: 0, delta: { content: " slightly" }, finishReason: null },
      ],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " funk" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "y" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [
        { index: 0, delta: { content: " flavor" }, finishReason: null },
      ],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "." }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " It" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "’s" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " often" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [
        { index: 0, delta: { content: " served" }, finishReason: null },
      ],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " at" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [
        { index: 0, delta: { content: " celebrations" }, finishReason: null },
      ],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: ".\n" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "5" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "." }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " **" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "Reb" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "lo" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "chon" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " (" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "A" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "OP" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: ")**" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " –" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " A" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " soft" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "," }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " cre" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "amy" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [
        { index: 0, delta: { content: " cheese" }, finishReason: null },
      ],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " from" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [
        { index: 0, delta: { content: " Savoie" }, finishReason: null },
      ],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "," }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " known" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " for" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " its" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " mild" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "," }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [
        { index: 0, delta: { content: " slightly" }, finishReason: null },
      ],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [
        {
          index: 0,
          delta: {
            content:
              " tangy taste. It’s a key ingredient in *tartiflette*.\n6. **Chèvre (Goat Cheese)** – Fresh or aged, French goat",
          },
          finishReason: null,
        },
      ],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [
        {
          index: 0,
          delta: {
            content:
              " cheese (like *Sainte-Maure de Touraine* or *Crottin de Chavignol*) is tangy, creamy, and versatile.\n7.",
          },
          finishReason: null,
        },
      ],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " **" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "M" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "un" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "ster" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " (" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "A" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "OP" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: ")**" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " –" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " A" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [
        { index: 0, delta: { content: " strong" }, finishReason: null },
      ],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "," }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " p" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "ung" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "ent" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [
        { index: 0, delta: { content: " cheese" }, finishReason: null },
      ],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " from" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " Als" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "ace" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " with" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " a" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [
        { index: 0, delta: { content: " washed" }, finishReason: null },
      ],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " r" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "ind" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "," }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " often" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " eaten" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " with" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " c" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "umin" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: ".\n" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "8" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "." }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " **" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "Be" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "auf" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "ort" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " (" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "A" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "OP" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: ")**" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " –" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " A" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " rich" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "," }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " nut" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "ty" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [
        { index: 0, delta: { content: " Alpine" }, finishReason: null },
      ],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [
        { index: 0, delta: { content: " cheese" }, finishReason: null },
      ],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [
        { index: 0, delta: { content: " similar" }, finishReason: null },
      ],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " to" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " Gru" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "y" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "ère" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "," }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " made" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " from" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " raw" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " cow" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "’s" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " milk" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: ".\n\n" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "###" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " **" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "Hon" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "orable" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " Ment" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "ions" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: ":**\n" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "-" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " **" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "É" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "po" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "isses" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "**" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " –" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " A" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " st" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "ink" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "y" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "," }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " o" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "oz" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "ing" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [
        { index: 0, delta: { content: " cheese" }, finishReason: null },
      ],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " from" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [
        { index: 0, delta: { content: " Burgund" }, finishReason: null },
      ],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "y" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "," }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [
        { index: 0, delta: { content: " washed" }, finishReason: null },
      ],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " in" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " brand" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "y" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: ".\n" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "-" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " **" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "Four" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "me" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " d" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "’Am" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "bert" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "**" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " –" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " A" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " mild" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "," }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " cre" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "amy" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " blue" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [
        { index: 0, delta: { content: " cheese" }, finishReason: null },
      ],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " from" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " Au" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "vergne" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: ".\n" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "-" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " **" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "Saint" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "-N" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "ect" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "aire" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " (" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "A" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "OP" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: ")**" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " –" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " A" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " semi" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "-" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "soft" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [
        { index: 0, delta: { content: " cheese" }, finishReason: null },
      ],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " with" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " a" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " but" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "tery" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "," }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [
        { index: 0, delta: { content: " mushroom" }, finishReason: null },
      ],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "y" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [
        { index: 0, delta: { content: " flavor" }, finishReason: null },
      ],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: ".\n\n" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "###" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " **" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "Which" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " One" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [
        { index: 0, delta: { content: " Should" }, finishReason: null },
      ],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " You" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " Try" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "?" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "**\n" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "-" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " **" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "For" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " beg" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "inners" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: ":**" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " Brie" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " or" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " Com" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "té" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " (" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "m" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "ild" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " and" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [
        { index: 0, delta: { content: " approach" }, finishReason: null },
      ],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "able" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: ").\n" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "-" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " **" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "For" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [
        { index: 0, delta: { content: " advent" }, finishReason: null },
      ],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "uro" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "us" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " eat" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "ers" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: ":**" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " Roque" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "fort" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " or" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " É" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "po" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "isses" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " (" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "strong" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " and" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " funk" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "y" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: ").\n" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "-" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " **" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "For" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [
        { index: 0, delta: { content: " pairing" }, finishReason: null },
      ],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " with" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " wine" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: ":**" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " Ch" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "èvre" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " or" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " Cam" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "ember" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "t" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: ".\n\n" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "Ultim" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "ately" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "," }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " the" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: ' "' }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "best" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: '"' }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [
        { index: 0, delta: { content: " cheese" }, finishReason: null },
      ],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [
        { index: 0, delta: { content: " depends" }, finishReason: null },
      ],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " on" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " your" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " taste" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [
        { index: 0, delta: { content: " preferences" }, finishReason: null },
      ],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "—" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [
        { index: 0, delta: { content: "whether" }, finishReason: null },
      ],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " you" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " love" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " cre" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "amy" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "," }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " tang" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "y" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "," }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " nut" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "ty" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "," }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " or" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " bold" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [
        { index: 0, delta: { content: " flavors" }, finishReason: null },
      ],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "." }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [
        { index: 0, delta: { content: " France" }, finishReason: null },
      ],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " has" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " over" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " **" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "1" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "," }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "0" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "0" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "0" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [
        { index: 0, delta: { content: " varieties" }, finishReason: null },
      ],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "**," }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " so" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " there" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "’s" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [
        { index: 0, delta: { content: " something" }, finishReason: null },
      ],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " for" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [
        { index: 0, delta: { content: " everyone" }, finishReason: null },
      ],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "!\n\n" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "Would" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " you" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " like" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [
        {
          index: 0,
          delta: { content: " recommendations" },
          finishReason: null,
        },
      ],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " based" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " on" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " a" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [
        { index: 0, delta: { content: " specific" }, finishReason: null },
      ],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " dish" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " or" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: " wine" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [
        { index: 0, delta: { content: " pairing" }, finishReason: null },
      ],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "?" }, finishReason: null }],
    },
  },
  {
    data: {
      id: "880d612fce1642e7ab9d5ce8ab741a11",
      object: "chat.completion.chunk",
      created: 1761302392,
      model: "mistral-small-latest",
      usage: { promptTokens: 10, completionTokens: 576, totalTokens: 586 },
      choices: [{ index: 0, delta: { content: "" }, finishReason: "stop" }],
    },
  },
];

export function createMockChatResult({
  data,
  streamingDelayMs = 20,
  tokensPerCompletion = 100,
}: {
  data: MistralMessages;
  streamingDelayMs?: number;
  tokensPerCompletion?: number;
}) {
  data;
  const lo = Math.floor(
    Math.random() * (mockChatChunksRaw.length - tokensPerCompletion),
  );
  const hi = lo + tokensPerCompletion - 1;
  return createReadableStreamFromList(
    mockChatChunksRaw.slice(lo, hi),
    streamingDelayMs,
  ) as EventStream<CompletionEvent>;
}

function createReadableStreamFromList<T>(
  list: T[],
  delay: number,
): ReadableStream<T> {
  return new ReadableStream({
    start(controller) {
      let index = 0;
      const push = () => {
        if (index < list.length) {
          try {
            controller.enqueue(list[index++]);
            setTimeout(push, delay);
          } catch (_) {}
        } else {
          controller.close();
        }
      };
      push();
    },
  });
}
