import { IncomingMessage, ServerResponse } from "http";
import { Express, Request, Response } from "express";

//  Create simple Hello World message
//  export const readHandler = (req: Request, resp: Response) => {
//      resp.json({
//          message: "Hello, World"
//      });
//  }

//  Send response with cookie and user input
export const readHandler = (req: Request, resp: Response) => {
    resp.cookie("sessionID", "mysecretcode");
    req.pipe(resp);
}