"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api = (0, express_1.default)();
// // interface LanguageRequest extends Express.Request {}
// interface LanguageRequest extends Express.Request {
//   requestId: number;
// }
const entryPointFunction = (req, res, next) => {
    const requestId = Math.ceil(Date.now() * Math.random() * 99999);
    req.requestId = requestId.toString();
    next();
};
api.use(entryPointFunction);
api.get("/", (req, res, next) => {
    res.send("This is a test");
});
api.listen(4000);
