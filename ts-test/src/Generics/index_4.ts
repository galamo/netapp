type Car = "Electric" | "Fuel";
type charge = (kws: string) => void;
type FuelPetrol = (type: string, liters: number) => void;
type RefillHandler<C extends Car> = C extends "Electric" ? charge : FuelPetrol;
const chargeTesla: RefillHandler<"Electric"> = (kws: string) => {
  console.log("Charging Tesla");
};
const refillToyota: RefillHandler<"Fuel"> = (type: string, listers: number) => {
  console.log("Refill Toyota");
};

function contactParams<T extends string | number>(a: T, b: T) {
  if (typeof a === "string") {
    return a + ":" + b;
  } else {
    return Number(a) + Number(b);
  }
}

// contactParams(1, "a"); // error
// contactParams("a", []); //error
// contactParams(1, 1); // ok
// contactParams("1, 1", "aaa"); // ok
// contactParams("a", 1); // error

class Student {
  constructor(public id: number, public name: string) {}
}
class StudentRecord {
  constructor(public id: string, public name: string) {}
}

class StudentGeneric<T extends string | number> {
  constructor(public id: T, public name: string) {}
}

let student = new StudentGeneric(1, "John");
let studentRecord = new StudentGeneric("1", "John");
