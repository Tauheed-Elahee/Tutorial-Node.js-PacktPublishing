import { IncomingMessage, ServerResponse } from "http";
// import { readFile } from "fs";
// import { readFile } from "fs/promises";
import { endPromise, writePromise } from "./promises";
// import { Worker } from "worker_threads";
// import { Count } from "./count_cb";
import { Count } from "./count_promise";
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
//
//  JavaScript blocking code inside a async function promise that uses callbacks to put the next iteration into the callback queue thus interleaving work.
//  const iterate = async (iter: number = 0) => {
//    for (let count =0; count < total; count++) {
//      count++;
//    }
//    const msg = `Request: ${request}, Iterations: ${(iter)}`;
//    console.log(msg);
//    await writePromise.bind(res)(msg + "\n");
//    if (iter == iterations-1) {
//      await endPromise.bind(res)("Done");
//    } else {
//      setImmediate(() => iterate(++iter));
//    }
//  }
//  iterate();
//
//  Call the count worker defined in count_worker.ts to make a woker thread to count asynchronously
//  const worker = new Worker(__dirname + "/count_worker.js", {
//    workerData: {
//      iterations,
//      total,
//      request
//    }
//  });
//  worker.on("message", async (iter: number) => {
//    const msg = `Request: ${request}, Iteration: ${(iter)}`;
//    console.log(msg);
//    await writePromise.bind(res)(msg + "\n");
//  });
//  worker.on("exit", async (code: number) => {
//    if(code == 0) {
//      await endPromise.bind(res)("Done");
//    } else {
//      res.statusCode = 500;
//      await res.end();
//    }
//  })
//  worker.on("error", async (err: any) => {
//    console.log(err)
//    res.statusCode = 500;
//    await res.end();
//  });
  
//   Use callback function defined in a seperate file to create the worker thread. Now one only needs to pass the callback function called when an error occurs.
//  Count(request, iterations, total, async (err, update) => {
//    if (err !== null) {
//      console.log(err);
//      res.statusCode = 500;
//      await res.end();
//    } else if (update !== true) {
//      const msg = `Request: ${request}, Iterations: ${(update)}`;
//      console.log(msg);
//      await writePromise.bind(res)(msg + "\n");
//    } else {
//      await endPromise.bind(res)("Done");
//    }
//  });

  // Use promises to wrap worker thread to be more inline with Node.js API
  try {
    await Count(request, iterations, total);
    const msg = `Request: ${request}, Iterations: ${(iterations)}`;
    await writePromise.bind(res)(msg + "\n");
    await endPromise.bind(res)("Done");
  } catch (err: any) {
    console.log(err);
    res.statusCode = 500;
    res.end();
  }
};
