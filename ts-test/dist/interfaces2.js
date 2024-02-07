"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var persons = [
    {
        name: "Israel",
        age: 20,
        permission: "user",
        type: "User",
    },
    {
        name: "Snir",
        age: 20,
        role: "admin",
        type: "Admin",
    },
    {
        name: "Ronit",
        age: 20,
        role: "admin",
        type: "Admin",
    },
];
function extraInfo(p) {
    var additionalInfo = "";
    if ("role" in p) {
        additionalInfo = p.role;
    }
    else if ("permission" in p) {
        additionalInfo = p.permission;
    }
    return additionalInfo;
}
function extraInfoBasedOnIsOperator(p) {
    var additionalInfo = "";
    if (isAdmin(p)) {
        additionalInfo = p.role;
    }
    else if ("permission" in p) {
        additionalInfo = p.permission;
    }
    return additionalInfo;
}
function isAdmin(person) {
    var _a;
    return ((_a = person === null || person === void 0 ? void 0 : person.type) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === "admin";
}
function isAdmin2(person) {
    if ("role" in person) {
        return true;
    }
    else {
        return false;
    }
}
var extraInfoResult = persons.map(extraInfo);
function getUsersByKey(users, key, search) {
    return users.filter(function (user) { return user[key].toString().includes(search); });
}
function getUsersByKeyGen(users, key, search) {
    return users.filter(function (user) { return user[key].toString().includes(search); });
}
var result = getUsersByKey([
    { name: "g", lastName: "am" },
    { name: "g", lastName: "am" },
    { name: "g", lastName: "am" },
    { name: "g", lastName: "am" },
    { name: "g", lastName: "am" },
    { name: "g", lastName: "am" },
    { name: "g", lastName: "aaaaa" },
    { name: "g", lastName: "aaaaa" },
    { name: "g", lastName: "aaaaa" },
    { name: "g", lastName: "aaaaa" },
    { name: "g", lastName: "aaaaa" },
    { name: "g", lastName: "aaaaa" },
], "lastName", "am");
// function doNothing(a?: number) {
//   if (typeof a === undefined) {
//     throw new Error("Something");
//   }
//   if (a === 1) {
//     return 1;
//   } else {
//     throw new Error("Something");
//   }
// }
// const s = doNothing();
exports.default = 1;
