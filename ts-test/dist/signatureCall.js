"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users = ["Gili", "Yuval", "Lior"];
function RunningSomeCode(fnCallback) {
    console.log("domain is: ".concat(fnCallback.defaultDomain, " => ").concat(fnCallback("Dudu")));
}
function extractEmail(userName) {
    return userName + extractEmail.defaultDomain;
}
extractEmail.defaultDomain = "@gmail.com";
RunningSomeCode(extractEmail);
extractEmail.defaultDomain = "@hotmail.com";
RunningSomeCode(extractEmail);
console.log(users.map(extractEmail));
var numbers = [1, 4, 3, 2, 5, 6, 5, 4, 5, 2, 2, 3, 8, 9];
sortFn.sortKey = "asc";
function sortFn(a, b) {
    if (sortFn.sortKey === "asc")
        return a - b;
    else
        return b - a;
}
runSortMain(sortFn);
sortFn.sortKey = "desc";
runSortMain(sortFn);
function runSortMain(callBackSortFn) {
    console.log(numbers.sort(callBackSortFn));
}
exports.default = 1;
