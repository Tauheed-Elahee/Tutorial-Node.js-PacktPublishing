import { createServer } from "http";
import express, { Express, Request, Response } from "express";
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

// Use Express file response enhancements
expressApp.get("/sendcity", (req: Request, resp: Response) => {
  resp.sendFile("city.png", {root: "static"});
});
expressApp.get("/downloadcity", (req: Request, resp: Response) => {
  resp.download("static/city.png");
});
expressApp.get("/json", (req: Request, resp: Response) => {
  resp.json("{name: Bob}");
})

// Use the Express App static middleware with the .use method to route requests to serve static files
expressApp.use(express.static("static"));
expressApp.use(express.static("node_modules/bootstrap/dist"));
const server = createServer(expressApp);
server.listen(port,
  () => console.log(`HTTP Server listening on port: ${port}`));