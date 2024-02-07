"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = ["Gili", "Yuval", "Lior"];
function RunningSomeCode(fnCallback) {
    console.log(`domain is: ${fnCallback.defaultDomain} => ${fnCallback("Dudu")}`);
}
function extractEmail(userName) {
    return userName + extractEmail.defaultDomain;
}
extractEmail.defaultDomain = "@gmail.com";
RunningSomeCode(extractEmail);
extractEmail.defaultDomain = "@hotmail.com";
RunningSomeCode(extractEmail);
console.log(users.map(extractEmail));
exports.default = 1;
