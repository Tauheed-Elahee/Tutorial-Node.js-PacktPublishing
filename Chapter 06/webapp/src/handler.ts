import { IncomingMessage, ServerResponse } from "http";

export const basicHandler = (req: IncomingMessage, resp: ServerResponse) => {
  resp.setHeader("Content-Type", "text/plain");
  let total     : number  = 10_000;
  let i         : number  = 0;
  let canWrite  : boolean = true;
  console.log("Start writing data.");
  const writeData = () => {
    do {
      canWrite = resp.write(`Message: ${i++}\n`);
    } while ((i < total) && canWrite);

    console.log("Buffer at capacity.");
    
    if (i < total) {
      resp.once("drain", () => {
        console.log("Buffer has been drained.");
        writeData();
      })
    } else {
      resp.end();
    }
  }
  writeData();
}