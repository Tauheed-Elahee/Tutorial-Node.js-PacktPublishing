import { IncomingMessage, ServerResponse } from "http";
export const handler = async  (req: IncomingMessage, res: ServerResponse) => {
  res.end("Hello, World");
};