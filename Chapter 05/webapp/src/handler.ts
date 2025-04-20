import { IncomingMessage, ServerResponse } from "http";
export const handler = async  (req: IncomingMessage, resp: ServerResponse) => {
console.log(`---HTTP Method: ${req.method}, URL: ${req.url}`);
//  Print IncomingMessage properties
//  console.log(`host: ${req.headers.host}`);
//  console.log(`accept: ${req.headers.accept}`);
//  console.log(`user-agent: ${req.headers["user-agent"]}`);

//  Parsing URLs
  const parsedURL = new URL(req.url ?? "", `http://${req.headers.host}`);
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
    if (!parsedURL.searchParams.has("keyword")) {
      resp.write("Hello, HTTP");
    } else {
      resp.write(`Hello, ${parsedURL.searchParams.get("keyword")}`);
    }
    resp.end();
    return;
  }
};