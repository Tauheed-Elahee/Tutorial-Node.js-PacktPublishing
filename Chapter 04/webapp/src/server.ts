import { createServer } from "http";
import { handler } from "./handler";

// Use Node.js API
// const port = 5000;
// const server = createServer(handler);
// server.listen(port, function () {
//   console.log(`Server listening on port ${port}`);
// });

const port = 5000;
const server = createServer();
server.on("request", (req, res) => {
  if (req.url?.endsWith("favicon.ico")) {
    res.statusCode = 404;
    res.end()
  } else {
    handler(req, res)
  }
});
server.listen(port);
server.on("listening", () => {
  console.log(`(Event) Server listening on port ${port}`);
})