"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterUsers = exports.logPerson = exports.isUser = exports.isAdmin = exports.persons = void 0;
const user = {
    password: "1234",
    firstName: "gal",
    lastName: "amo",
    userName: "galamo88@gmail.com",
    roles: ["Admin", "User"],
};
const pu = {
    name: "",
    age: 1,
    role: "",
    lastVisit: "",
    type: "PowerUser",
};
exports.persons = [
    {
        type: "user",
        name: "Max Mustermann",
        age: 25,
        lastVisit: "Before 10 hours",
    },
    {
        type: "admin",
        name: "Jane Doe",
        age: 32,
        role: "Administrator",
    },
    {
        type: "user",
        name: "Kate Müller",
        age: 23,
        lastVisit: "Before 10 hours",
    },
    {
        type: "admin",
        name: "Bruce Willis",
        age: 64,
        role: "World saver",
    },
    {
        type: "user",
        name: "Wilson",
        age: 23,
        lastVisit: "Before 10 hours",
    },
    {
        type: "admin",
        name: "Agent Smith",
        age: 23,
        role: "Administrator",
    },
];
const isAdmin = (person) => person.type === "admin";
exports.isAdmin = isAdmin;
const isUser = (person) => person.type === "user";
exports.isUser = isUser;
function logPerson(person) {
    let additionalInformation = "";
    if ((0, exports.isAdmin)(person)) {
        additionalInformation = person.role;
    }
    if ((0, exports.isUser)(person)) {
        additionalInformation = person.lastVisit;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}
exports.logPerson = logPerson;
function filterUsers(persons, criteria) {
    return persons.filter(exports.isUser).filter((user) => {
        const criteriaKeys = Object.keys(criteria);
        return criteriaKeys.every((fieldName) => {
            return user[fieldName] === criteria[fieldName];
        });
    });
}
exports.filterUsers = filterUsers;
filterUsers(exports.persons, {
    name: "Wilson",
}).forEach(logPerson);
