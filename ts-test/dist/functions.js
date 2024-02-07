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
    var x = locations[0], y = locations[1];
    return { x: x, y: y };
}
function getData() {
    // async operation
    return { id: 123 };
}
function getData2() {
    return { id: 1, userToken: "this is token" };
}
function calculateTax(tax, price) {
    if (typeof price === "string") {
        // price
        return Math.ceil(Number(price.replace("$", "")) * tax);
    }
    return Math.ceil(price * tax);
}
console.log("Tax 1 : ".concat(calculateTax(0.17, 500)));
console.log("Tax 1 : ".concat(calculateTax(0.17, "$600")));
function getSettings() {
    return { time: true, title: "string" };
}
var _a = getSettings(), time = _a.time, title = _a.title;
function getSettingsArray() {
    return [1, getSettings()];
}
var result = getSettingsArray();
var c = result[0];
var b = result[0];
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
var AddFn = function (a, b) {
    return a + b;
};
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isLeapYear(2024));
var car = {
    primaryColor: "black",
    secondaryColor: "white",
    radius: 90,
    material: "bronze",
};
var car2 = {
    primaryColor: "black",
    secondaryColor: undefined,
    material: "metal",
};
