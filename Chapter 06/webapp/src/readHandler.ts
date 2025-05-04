import { IncomingMessage, ServerResponse } from "http";
import { Transform } from "stream";

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
//  export const readHandler = async (req: IncomingMessage, resp: ServerResponse) => {
//      req.pipe(resp);
//  }

// Use a transformer to transform the data as it is being piped from one stream to another.
/*
export const readHandler = async (req: IncomingMessage, resp: ServerResponse) => {
    req.pipe(createLowerTransform()).pipe(resp);
}
const createLowerTransform = () => new Transform({
    transform(data, encoding, callback) {
        callback(null, data.toString().toLowerCase());
    }
});
*/

// Use a transformer to transform the data from string or byte array to JSON object.
export const readHandler = async (req: IncomingMessage, resp: ServerResponse) => {
    if(req.headers["content-type"] == "application/json") {
        req.pipe(createFromJsonTransform()).on("data", (payload) => {
            if (payload instanceof Array) {
                resp.write(`Received an array with ${payload.length}`)
            } else {
                resp.write("Did not recieve an array");
            }
            resp.end();
        });
    } else {
        req.pipe(resp);
    }
}
const createFromJsonTransform = () => new Transform({
    readableObjectMode: true,
    transform(data, encoding, callback) {
        callback(null, JSON.parse(data));
    }
})