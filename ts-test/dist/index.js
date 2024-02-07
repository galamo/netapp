"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var permissions_json_1 = require("./permissions.json");
var functions_1 = __importDefault(require("./functions"));
var interfaces2_1 = __importDefault(require("./interfaces2"));
var signatureCall_1 = __importDefault(require("./signatureCall"));
console.log(signatureCall_1.default);
console.log(interfaces2_1.default);
(0, functions_1.default)();
function getUserPermissions(user) {
    if (user.toLowerCase() === "shirley") {
        return permissions_json_1.permissions.find(function (item) { return item.id === 5; });
    }
    else {
        return permissions_json_1.permissions[0];
    }
}
var result = getUserPermissions("shirley");
var netApp = "This is Netapp course";
var obj = {
    company: "netApp",
    location: "Ehad Haam 9",
};
var buildingNumber = 9;
var users = ["Shirley", "dudu", "liron"];
users.push("Vova");
var usersArrayOption2 = ["Shirley", "dudu", "liron"];
var isHost = true;
var MAX_RECORDS = 50000;
var vLocation = "Dubai";
var fromDate = new Date();
var toDate = new Date().toISOString();
// console.log(vLocation, `toDate: ${fromDate}`, `toDate: ${toDate}`);
var salaries = [100, 222, 3300, 4400];
var highSalaries = salaries.reduce(function (accSalary, currentSalary) {
    if (currentSalary > 100) {
        return accSalary + currentSalary;
    }
    else
        return accSalary;
}, 0);
// highSalaries.toLowerCase();
// console.log(highSalaries);
