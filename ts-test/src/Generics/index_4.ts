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

function contactParams(a: number | string, b: number | string) {
  if (typeof a === "string") {
    return a + ":" + b;
  } else {
    return Number(a) + Number(b);
  }
}
contactParams(1, "a"); // error
contactParams("a", "a");
contactParams(1, 1);
contactParams("a", 1); // error
