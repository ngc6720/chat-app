# Cat the chat app

Talk with your cat ! This is an app for simple chat completions streaming with Mistral AI API (for learning purposes).

The project is build with [Next.js](https://nextjs.org). It leverages temporary http cookies to store a user provided Mistral API key. A chat interface allows to interact with a simple "cat" bot (thanks to the system prompt). The conversation is saved in the browser via localstorage (using Zustand for stores).

[Try the live version](https://chat-app-dun-xi-83.vercel.app/)

## Installation

```bash
git clone https://github.com/ngc6720/chat-app.git
cd chat-app
pnpm install
pnpm dev
```

## Development mode

Run the development server:

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production mode

Build the app:

```bash
pnpm build
```

Start the app

```bash
pnpm start
```

Visit [http://localhost:3000](http://localhost:3000).

## Linting

The project is using [Biome](https://biomejs.dev/) for linting and formating

To run linter:

```bash
pnpm lint
```

## Testing

The project uses Jest for unit testing

To run tests:

```bash
pnpm test
```

## Variables (optional)

You can use variables to ease developement by creating a file named ".env.local" at the root of the project.

Available variables (these are only relevant in development mode):

```shell
# .env.local

# (optional) When set to "1", will use a mock api for the chat completions stream (for ui development you may not want to use the real chat api). To use the production api, omit it or set it to "0".
NEXT_PUBLIC_USE_MOCK_API=1
# (optional) Will use YOUR_PUBLIC_API_KEY for the chat client instead of asking for it in the app front end (avoid expired cookie and redirects when you are working on the chat ui)
MISTRAL_API_KEY=YOUR_PUBLIC_API_KEY
```