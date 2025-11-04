export const ChatStatus: {
  busy: "busy";
  error: "error";
  idle: "idle";
} = {
  busy: "busy",
  error: "error",
  idle: "idle",
};
export type ChatStatus = (typeof ChatStatus)[keyof typeof ChatStatus];
