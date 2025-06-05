import { createServer } from "http";
import express from "express"
import cors from "cors";

const port = 9999;

createServer(express().use(cors()).use(express.static("static"))
    .post("*", (req, resp) => {
        req.on("data", (data) => { console.log(data.toString())});
        req.on("end", () => resp.end());
    })).listen(port,
        () => console.log(`Bad Server listening on port ${port}`));