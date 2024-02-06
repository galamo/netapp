function init() {
  console.log("Init is running");
}
export default init;

type Cords = {
  x: number;
  y: number;
};

type Point = {
  x: number;
  y: number;
};

type ObjLocation = Cords | Point;

function getGeolocation(location: ObjLocation, addXNum: number): ObjLocation {
  return { x: location.x + addXNum, y: location.y };
}

function convertGelocation(locations: number[]): ObjLocation {
  const [x, y] = locations;
  return { x, y };
}

type ServerResponseLong = { requestId: string; userToken: string };
type ServerResponseShort = { id: number };
type ServerResponseApi = ServerResponseShort | ServerResponseLong;

function getData(): ServerResponseApi {
  // async operation
  return { id: 123 };
}

function getData2(): ServerResponseApi {
  return { id: 1, userToken: "this is token" };
}

function calculateTax(tax: number, price: number | string): number {
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
const c = result[0] as number;
const b = result[0] as {
  time: boolean;
  title?: string;
};

type DaysOfWeek = "Sunday" | "Monday" | "Tue";

enum DaysOfWeekEnum {
  Sun = 1,
  Mon = 2,
  Tue = 3,
}

function getDayNum(day: DaysOfWeek): number {
  if (day === "Sunday") {
    console.log("Blablabla...");
    return 1;
  }
  return 2;
}

type AddFnType = (a: number, b: number) => number;
const AddFn: AddFnType = (a: number, b: number): number => {
  return a + b;
};
function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isLeapYear(2024));

type ColorFull = { primaryColor: string; secondaryColor: string | undefined };
type Circle = { radius: number; material: string };

type Car = ColorFull & Circle;
const car: Car = {
  primaryColor: "black",
  secondaryColor: "white",
  radius: 90,
  material: "bronze",
};

type CarUnion = ColorFull | Circle;
const car2: CarUnion = {
  primaryColor: "black",
  secondaryColor: undefined,
  material: "metal",
};
