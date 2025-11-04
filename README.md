# Cat the chat app

Talk with your cat ! This is an app for simple chat completions streaming with Mistral AI API (for learning purposes).

The project is build with [Next.js](https://nextjs.org) and bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Development mode

#### Variables (optional)

You can use variables to ease developement by creating a file named ".env.local" at the root of the project.
Variables (only relevant in development mode):

```shell
# .env.local

# When set to "1" or "true", will use a mock api for the chat completions stream (for ui development you may not want to use the real chat api). To use the production api, omit it or set it to "0".
NEXT_PUBLIC_USE_MOCK_API=1
# Will use YOUR_PUBLIC_API_TOKEN for the chat client instead of asking for it in the app front end (avoid expired cookie and redirects when you are working on the chat ui)
MISTRAL_API_KEY=YOUR_PUBLIC_API_TOKEN
```

#### Develop

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

The project is using [https://biomejs.dev/](Biome) for linting and formating

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