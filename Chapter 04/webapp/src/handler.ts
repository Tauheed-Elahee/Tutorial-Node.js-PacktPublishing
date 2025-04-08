import { IncomingMessage, ServerResponse } from "http";
// import { readFile } from "fs";
import { readFile } from "fs/promises";
export const handler = (req: IncomingMessage, res: ServerResponse) => {
  // Use callbacks from the "fs" module
  // readFile("data.json", (err: Error | null, data: Buffer) => {
  //   if (err == null) {
  //     res.end(data, () => console.log("File sent"));
  //   } else {
  //     console.log(`Error: ${err.message}`);
  //     res.statusCode = 500;
  //     res.end();
  //   }
  // });

  // Use Promises
  const p: Promise<Buffer> = readFile("data.json")
    .then((data: Buffer) => res.end(data, () => console.log("File sent")))
    .catch((err: Error) => {
      console.log(`Error: {err.message}`);
      res.statusCode = 500;
      res.end();
    });

  // res.end("Hello World");
};
