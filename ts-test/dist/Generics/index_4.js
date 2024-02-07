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
// contactParams(1, "a"); // error
// contactParams("a", []); //error
// contactParams(1, 1); // ok
// contactParams("1, 1", "aaa"); // ok
// contactParams("a", 1); // error
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class StudentRecord {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class StudentGeneric {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
let student = new StudentGeneric(1, "John");
let studentRecord = new StudentGeneric("1", "John");
