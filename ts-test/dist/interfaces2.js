"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const persons = [
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
    let additionalInfo = "";
    if ("role" in p) {
        additionalInfo = p.role;
    }
    else if ("permission" in p) {
        additionalInfo = p.permission;
    }
    return additionalInfo;
}
function extraInfoBasedOnIsOperator(p) {
    let additionalInfo = "";
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
const extraInfoResult = persons.map(extraInfo);
function getUsersByKey(users, key, search) {
    return users.filter((user) => user[key].toString().includes(search));
}
const result = getUsersByKey([
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
console.log(result);
exports.default = 1;
