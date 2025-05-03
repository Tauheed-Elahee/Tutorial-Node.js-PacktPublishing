import { IncomingMessage, ServerResponse } from "http";
// import { TLSSocket } from "tls";
// import { URL } from "url";
import { Request, Response } from "express";

// export const isHttps = (req: IncomingMessage) : boolean => {
//   return req.socket instanceof TLSSocket && req.socket.encrypted;
// }

export const redirectionHandler = (req: IncomingMessage, resp: ServerResponse) => {
  resp.writeHead(302, {
    "Location": "https://localhost:5500"
  });
  resp.end();
}

// Monolithic handler function
// export const handler = async  (req: IncomingMessage, resp: ServerResponse) => {
// console.log(`---HTTP Method: ${req.method}, URL: ${req.url}`);
// //  Print IncomingMessage properties
// //  console.log(`host: ${req.headers.host}`);
// //  console.log(`accept: ${req.headers.accept}`);
// //  console.log(`user-agent: ${req.headers["user-agent"]}`);
// 
// //  Parsing URLs
//   const protocol = isHttps(req) ? "https" : "http";
//   const parsedURL = new URL(req.url ?? "", `${protocol}://${req.headers.host}`);
//   console.log(`protocol: ${parsedURL.protocol}`);
//   console.log(`hostname: ${parsedURL.hostname}`);
//   console.log(`port: ${parsedURL.port}`);
//   console.log(`pathname: ${parsedURL.pathname}`);
//   parsedURL.searchParams.forEach((val, key) => {
//     console.log(`Search param: ${key}: ${val}`);
//   });
// 
// //res.end("Hello, World");
// 
// //Write response head and body using methods.
//   if(req.method !== "GET" || parsedURL.pathname == "/favicon.ico") {
//     resp.writeHead(404, "Not Found");
//     resp.end();
//     return;
//   } else {
//     resp.writeHead(200, "OK");
//     if (parsedURL.pathname == "/newurl") {
//       resp.write("Hello, New URL");
//     } else if (!parsedURL.searchParams.has("keyword")) {
//       resp.write(`Hello, ${protocol.toUpperCase()}`);
//     } else {
//       resp.write(`Hello, ${parsedURL.searchParams.get("keyword")}`);
//     }
//     resp.end();
//     return;
//   }
// };

// Refactor the handler function into seperate functions with each responsible for generating responses, not handling requests.
// The Express router will be responsible for routing requests to the appropriate reponse.

// Uses Node.js API to write reponses
// export const notFoundHandler = (req: IncomingMessage, resp: ServerResponse) => {
//   resp.writeHead(404, "Not Found");
//   resp.end();
// }
// 
// export const newUrlHandler = (req: IncomingMessage, resp: ServerResponse) => {
//   resp.writeHead(200, "OK");
//   resp.write("Hello, New URL");
//   resp.end();
// }
// 
// export const defaultHandler = (req: IncomingMessage, resp: ServerResponse) => {
//   resp.writeHead(200, "OK");
//   const protocol = isHttps(req)? "https" : "http";
//   const parsedURL = new URL(req.url ?? "",
//     `${protocol}://${req.headers.url}`);
//   if (!parsedURL.searchParams.has("keyword")) {
//     resp.write(`Hello ${protocol.toUpperCase()}`);
//   } else {
//     resp.write(`Hello ${parsedURL.searchParams.get("keyword")}`);
//   }
//   resp.end();
// }

// Use Express App request and response enhancements
export const notFoundHandler = (req: Request, resp: Response) => {
  resp.sendStatus(404);
}

export const newUrlHandler = (req: Request, resp: Response) => {
  resp.send("Hello, New URL");
}

export const defaultHandler = (req: Request, resp: Response) => {
  if (req.query.keyword) {
    resp.send(`Hello ${req.query.keyword}`);
  } else {
    resp.send(`Hello ${req.protocol.toUpperCase()}`);
  }
}