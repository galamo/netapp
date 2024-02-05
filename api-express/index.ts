import express, { Request, Response, NextFunction } from "express";
import { RequestCustom } from "./interface";
const api = express();

// declare global {
//   namespace Express {
//     export interface Request {
//       reqId: string;
//       role: string;
//     }
//     export interface Response {
//       sendError: (error: string) => {};
//       // sendJson: (d: HTTPResponse) => {};
//     }
//   }
// }

interface A {
  a: number;
}

interface B {
  b: string;
}

// // interface LanguageRequest extends Express.Request {}
// interface LanguageRequest extends Express.Request {
//   requestId: number;
// }

const entryPointFunction = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const requestId = Math.ceil(Date.now() * Math.random() * 99999);

  //   req.requestId = requestId.toString();

  next();
};

api.use(entryPointFunction);
interface IRequest extends Request {
  requestId: string;
}
api.get("/", (req: Request, res, next: NextFunction) => {
  req.requestId = "1";
  res.send("This is a test");
});

api.listen(4000);
