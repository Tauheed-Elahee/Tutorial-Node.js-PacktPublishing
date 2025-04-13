import { IncomingMessage, ServerResponse } from "http";
// import { readFile } from "fs";
// import { readFile } from "fs/promises";
import { endPromise, writePromise } from "./promises";
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

// Use promises to read files
//export const handler = async (req: IncomingMessage, res: ServerResponse) => {
//  try{
//    const data: Buffer = await readFile("data.json");
//     res.end is a callback function
//     res.end(data, () => console.log("File sent"));
//    await endPromise.bind(res)(data);
//    console.log("File sent");
//  } catch (err: any) {
//    console.log(`Error: ${err?.message ?? err}`);
//    res.statusCode = 500;
//    res.end();
//  }
//};

const total = 2_000_000_000;
const iterations = 5;
let shared_counter = 0;
export const handler = async (req: IncomingMessage, res: ServerResponse) => {
  const request = shared_counter++;
//  JavaScript blocking code inside a single async function
//  for (let iter = 0; iter < iterations; iter++) {
//    for (let count = 0; count < total; count++) {
//      count++;
//    }
//    const msg = `Request: ${request}, Iterations: ${(iter)}`;
//    console.log(msg);
//    await writePromise.bind(res)(msg + "\n");
//  }
//  await endPromise.bind(res)("Done");
  const iterate = async (iter: number = 0) => {
    for (let count =0; count < total; count++) {
      count++;
    }
    const msg = `Request: ${request}, Iterations: ${(iter)}`;
    console.log(msg);
    await writePromise.bind(res)(msg + "\n");
    if (iter == iterations-1) {
      await endPromise.bind(res)("Done");
    } else {
      setImmediate(() => iterate(++iter));
    }
  }
  iterate();
}