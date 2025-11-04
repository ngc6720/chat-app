export async function* streamResponse(response: Response) {
  const reader = response.body?.getReader();
  if (reader) {
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        return;
      }
      yield new TextDecoder().decode(value);
    }
  }
}
export async function* streamResponseByChar(
  response: Response,
  delayMs?: number | (() => number),
) {
  const reader = response.body?.getReader();
  if (reader) {
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        return;
      }
      const str = new TextDecoder().decode(value);
      for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        yield new Promise((resolve) => {
          setTimeout(
            () => resolve(char),
            delayMs
              ? typeof delayMs === "number"
                ? delayMs
                : Math.floor(delayMs())
              : 0,
          );
        });
      }
    }
  }
}
