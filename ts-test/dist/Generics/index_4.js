const chargeTesla = (kws) => {
    console.log("Charging Tesla");
};
const refillToyota = (type, listers) => {
    console.log("Refill Toyota");
};
function contactParams(a, b) {
    if (typeof a === "string") {
        return a + ":" + b;
    }
    else {
        return Number(a) + Number(b);
    }
}
contactParams(1, "a"); // error
contactParams("a", "a");
contactParams(1, 1);
contactParams("a", 1); // error
