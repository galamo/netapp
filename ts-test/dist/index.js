"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const permissions_json_1 = require("./permissions.json");
const functions_1 = __importDefault(require("./functions"));
const interfaces2_1 = __importDefault(require("./interfaces2"));
console.log(interfaces2_1.default);
(0, functions_1.default)();
function getUserPermissions(user) {
    if (user.toLowerCase() === "shirley") {
        return permissions_json_1.permissions.find((item) => item.id === 5);
    }
    else {
        return permissions_json_1.permissions[0];
    }
}
const result = getUserPermissions("shirley");
const netApp = "This is Netapp course";
const obj = {
    company: "netApp",
    location: "Ehad Haam 9",
};
const buildingNumber = 9;
const users = ["Shirley", "dudu", "liron"];
users.push("Vova");
const usersArrayOption2 = ["Shirley", "dudu", "liron"];
const isHost = true;
let MAX_RECORDS = 50000;
const vLocation = "Dubai";
const fromDate = new Date();
const toDate = new Date().toISOString();
// console.log(vLocation, `toDate: ${fromDate}`, `toDate: ${toDate}`);
const salaries = [100, 222, 3300, 4400];
const highSalaries = salaries.reduce((accSalary, currentSalary) => {
    if (currentSalary > 100) {
        return accSalary + currentSalary;
    }
    else
        return accSalary;
}, 0);
// highSalaries.toLowerCase();
// console.log(highSalaries);
