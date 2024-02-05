// Type aliases

type HttpError = string;

// will not work
// interface IHttpError = string | number

// UNION
type HttpErrorType = string | number;
const serverStatus: HttpErrorType = 200;
const serverStatus2: HttpErrorType = "200";

console.log(serverStatus);

type ComplexType = {
  status: string;
};

type ComplexType2 = {
  status: string;
};

type Transport = "Bus" | "Car" | "Bike" | "Walk";

// interface UNION ON TYPE
interface CarBattery {
  power: number;
}
interface Engine {
  type: string;
}
type HybridCar = Engine | CarBattery;

//  MERGE

//  will not work
// type Type1 = { a: number };
// type Type1 = { b: number };
//  interface merge

interface ApiRequest {
  headers: { [key: string]: string };
}

interface ApiRequest {
  responseStatus: number;
}

//  Function Type
type AddFn = (num1: number, num2: number) => number;
interface IAdd {
  (num1: number, num2: number): number;
}

// Complex scenario

type Car = "Electric" | "Fuel" | never;
type Charge = (kws: number) => void;
type FillPetrol = (type: string, liters: number) => void;
type RefillHandler<A extends Car> = A extends "Fuel"
  ? FillPetrol
  : A extends "Electric"
  ? Charge
  : never;

const chargeTesla: RefillHandler<"Electric"> = (power) => {
  // Implementation for charging electric cars (EV)
};
const refillToyota: RefillHandler<"Fuel"> = (fuelType, amount) => {
  // Implementation for refilling internal combustion engine cars (ICE)
};

// extends & intersect

interface Client {
  user: string;
}
interface VIPClient extends Client {
  benefits: string[];
}

type VIPClientType = Client & { benefits: string[] };
const client: VIPClientType = { benefits: [], user: "aa" };

// interface union
type Jobs = "salary worker" | "retired";

interface MoreJobs extends Jobs {
  description: string;
}

// Class

interface Person {
  name: string;
  greet(): void;
}

class Student implements Person {
  name: string;
  greet() {
    console.log("hello");
  }
}

type Pet = {
  name: string;
  run(): void;
};

class Cat implements Pet {
  name: string;
  run() {
    console.log("run");
  }
}

// Complex scenario

type Product = {
  type: string;
  price: number;
};
type GeeterFunctions<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};
type productType = GeeterFunctions<Product>;
