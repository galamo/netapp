import express, { Request, Response, NextFunction } from "express";

const app = express();

type HttpType = {
  statusCode: number;
  message: string;
};
declare global {
  module Express {
    export interface Request {
      reqId: string;
    }

    export interface Response {
      sendError: (httpResponseError: HttpType) => {};
    }
  }
}

app.use((req: Request, res, next) => {
  const request = (Date.now() * Math.random() * 9999).toString();
  req.reqId = request;
  next();
});

app.get("/", (req: Request, res: Response, next) => {
  //input validation error
  res.sendError({ statusCode: 400, message: "missing token" });
  res.send(req.reqId);
});

app.listen(4000);
