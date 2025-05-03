import { IncomingMessage, ServerResponse } from "http";

//  Attach callback functions to events.
//  export const readHandler = (req: IncomingMessage, resp: ServerResponse) => {
//    req.setEncoding("utf-8");
//    req.on("data", (data: string) =>{
//        console.log(data);
//    });
//    req.on("end", () => {
//        console.log("End: all data read");
//        resp.end();
//    })
//  }

//  Use an iterator to read data from the stream
//  export const readHandler = async (req: IncomingMessage, resp: ServerResponse) => {
//      req.setEncoding("utf-8");
//      for await (const data of req) {
//          console.log(data);
//      }
//      console.log("End: all data read");
//      resp.end();
//  }

//  Pipe data from the readable stream to a writable strem
//  In this case it is a stream from the client then piped to a stream to the client
export const readHandler = async (req: IncomingMessage, resp: ServerResponse) => {
    req.pipe(resp);
}