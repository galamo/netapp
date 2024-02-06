"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function init() {
    console.log("Init is running");
}
exports.default = init;
function getGeolocation(location, addXNum) {
    return { x: location.x + addXNum, y: location.y };
}
function convertGelocation(locations) {
    const [x, y] = locations;
    return { x, y };
}
function getData() {
    // async operation
    return { id: 123 };
}
function getData2() {
    return { requestId: "123", userToken: "this is token" };
}
function calculateTax(tax, price) {
    if (typeof price === "string") {
        // price
        return Math.ceil(Number(price.replace("$", "")) * tax);
    }
    return Math.ceil(price * tax);
}
console.log(`Tax 1 : ${calculateTax(0.17, 500)}`);
console.log(`Tax 1 : ${calculateTax(0.17, "$600")}`);
function getSettings() {
    return { time: true, title: "string" };
}
const { time, title } = getSettings();
function getSettingsArray() {
    return [1, getSettings()];
}
let result = getSettingsArray();
const c = result[0];
const b = result[0];
var DaysOfWeekEnum;
(function (DaysOfWeekEnum) {
    DaysOfWeekEnum[DaysOfWeekEnum["Sun"] = 1] = "Sun";
    DaysOfWeekEnum[DaysOfWeekEnum["Mon"] = 2] = "Mon";
    DaysOfWeekEnum[DaysOfWeekEnum["Tue"] = 3] = "Tue";
})(DaysOfWeekEnum || (DaysOfWeekEnum = {}));
function getDayNum(day) {
    if (day === "Sunday") {
        console.log("Blablabla...");
        return 1;
    }
    return 2;
}
