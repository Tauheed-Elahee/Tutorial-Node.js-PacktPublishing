import path from "path"
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export default {
    mode: "development",
    entry: "./static/client.js",
    output: {
        path: path.resolve(__dirname, "dist/client"),
        filename: "bundle.js"
    },
    "devServer": {
        port: 5100,
        static: ["static", "node_modules/bootstrap/dist"],
        //  Proxy for webpack server to forward requests to Node.js backend
        //  "proxy": {
        //      "/read": "http://localhost:5000"
        //  }
        client: {
            webSocketURL: "http://localhost:5000/ws"
        }
    },
    devtool: "source-map"
};