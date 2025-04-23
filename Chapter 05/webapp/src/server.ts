import { createServer } from "http";
import { createServer as createHttpsServer } from "https";
import { readFileSync } from "fs";
import { handler } from "./handler";

const port = 5000;
const https_port = 5500;
const server = createServer(handler);
// server.on("request", handler);
server.listen(port,
  () => console.log(`(Event) Server listening on port ${port}`));
const httpsConfig = {
  key: readFileSync("key.pem"),
  cert: readFileSync("cert.pem")
};
const httpsServer = createHttpsServer(httpsConfig, handler);
httpsServer.listen(https_port,
  () => console.log(`HTTPS Server listening on port ${https_port}`));
// server.on("listening", () => {
//   console.log(`(Event) Server listening on port ${port}`);
// });