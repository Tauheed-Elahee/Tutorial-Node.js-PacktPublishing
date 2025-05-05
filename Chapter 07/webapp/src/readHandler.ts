import { IncomingMessage, ServerResponse } from "http";
import { Express, Request, Response } from "express";

export const readHandler = (req: Request, resp: Response) => {
    resp.json({
        message: "Hello, World"
    });
}