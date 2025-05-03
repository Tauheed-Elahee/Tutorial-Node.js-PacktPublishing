import { IncomingMessage, ServerResponse } from "http";
import { TLSSocket } from "tls";
export const isHttps = (req: IncomingMessage) : boolean => {
  return req.socket instanceof TLSSocket && req.socket.encrypted;
}
export const redirectionHandler = (req: IncomingMessage, resp: ServerResponse) => {
  resp.writeHead(302, {
    "Location": "https://localhost:5500"
  });
  resp.end();
}
export const handler = async  (req: IncomingMessage, resp: ServerResponse) => {
console.log(`---HTTP Method: ${req.method}, URL: ${req.url}`);
//  Print IncomingMessage properties
//  console.log(`host: ${req.headers.host}`);
//  console.log(`accept: ${req.headers.accept}`);
//  console.log(`user-agent: ${req.headers["user-agent"]}`);

//  Parsing URLs
  const protocol = isHttps(req) ? "https" : "http";
  const parsedURL = new URL(req.url ?? "", `${protocol}://${req.headers.host}`);
  console.log(`protocol: ${parsedURL.protocol}`);
  console.log(`hostname: ${parsedURL.hostname}`);
  console.log(`port: ${parsedURL.port}`);
  console.log(`pathname: ${parsedURL.pathname}`);
  parsedURL.searchParams.forEach((val, key) => {
    console.log(`Search param: ${key}: ${val}`);
  });

//res.end("Hello, World");

//Write response head and body using methods.
  if(req.method !== "GET" || parsedURL.pathname == "/favicon.ico") {
    resp.writeHead(404, "Not Found");
    resp.end();
    return;
  } else {
    resp.writeHead(200, "OK");
    if (parsedURL.pathname == "/newurl") {
      resp.write("Hello, New URL");
    } else if (!parsedURL.searchParams.has("keyword")) {
      resp.write(`Hello, ${protocol.toUpperCase()}`);
    } else {
      resp.write(`Hello, ${parsedURL.searchParams.get("keyword")}`);
    }
    resp.end();
    return;
  }
};