import { IncomingMessage, ServerResponse } from "http";
// import { readFile } from "fs";
import { readFile } from "fs/promises";
// export const handler = (req: IncomingMessage, res: ServerResponse) => {
//   // Use callbacks from the "fs" module
//   // readFile("data.json", (err: Error | null, data: Buffer) => {
//   //   if (err == null) {
//   //     res.end(data, () => console.log("File sent"));
//   //   } else {
//   //     console.log(`Error: ${err.message}`);
//   //     res.statusCode = 500;
//   //     res.end();
//   //   }
//   // });
// 
//   // Use Promises
//   // Use then and catch methods on promises
//   // const p: Promise<Buffer> = readFile("data.json")
//   //   .then((data: Buffer) => res.end(data, () => console.log("File sent")))
//   //   .catch((err: Error) => {
//   //     console.log(`Error: {err.message}`);
//   //     res.statusCode = 500;
//   //     res.end();
//   //   });
// 
//   // res.end("Hello World");
// };
export const handler = async (req: IncomingMessage, res: ServerResponse) => {
  try{
    const data: Buffer = await readFile("data.json");
    res.end(data, () => console.log("File sent"));
  } catch (err: any) {
    console.log(`Error: ${err?.message ?? err}`);
    res.statusCode = 500;
    res.end();
  }
};