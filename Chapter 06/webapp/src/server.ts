import { createServer } from "http";
import express, { Express } from "express";
import { basicHandler } from "./handler";

const port = 5000;
const expressApp: Express = express();
expressApp.get("*", basicHandler);
const server = createServer(expressApp);
server.listen(port,
  () => console.log(`HTTP Server listening on port: ${port}`));