import { createServer } from "http";
import express, { Express } from "express";
// import { basicHandler } from "./handler";
import { readHandler } from "./readHandler";

const port = 5000;
const expressApp: Express = express();
//  Use basic handler
//  expressApp.get("/favicon.ico", (req, resp) => {
//    resp.statusCode = 404;
//    resp.end();
//  })
//  expressApp.get("*", basicHandler);
expressApp.post("/read", readHandler);
// Use the Express App static middleware with the .use method to route requests to serve static files from the static folder
expressApp.use(express.static("static"));
const server = createServer(expressApp);
server.listen(port,
  () => console.log(`HTTP Server listening on port: ${port}`));