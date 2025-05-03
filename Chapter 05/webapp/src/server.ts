import { createServer } from "http";
import { createServer as createHttpsServer } from "https";
import { readFileSync } from "fs";
import { redirectionHandler, defaultHandler, newUrlHandler, notFoundHandler } from "./handler";
import express, { Express } from "express";

const port = 5000;
const https_port = 5500;
const server = createServer(redirectionHandler);
// server.on("request", handler);
server.listen(port,
  () => console.log(`(Event) Server listening on port ${port}`));
const httpsConfig = {
  key: readFileSync("key.pem"),
  cert: readFileSync("cert.pem")
};

// Create Express App
const expressApp = express();
expressApp.get("/favicon.ico", notFoundHandler);
expressApp.get("/newurl", newUrlHandler);
expressApp.get("*", defaultHandler);

// Use Express App as the handler for the HTTPS server
const httpsServer = createHttpsServer(httpsConfig, expressApp);
httpsServer.listen(https_port,
  () => console.log(`HTTPS Server listening on port ${https_port}`));
// server.on("listening", () => {
//   console.log(`(Event) Server listening on port ${port}`);
// });