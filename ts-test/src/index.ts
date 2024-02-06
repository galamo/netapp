import fileJson from "./settings.json";
import { permissions } from "./permissions.json";
import functions from "./functions";
import interfaces2 from "./interfaces2";
console.log(interfaces2);
functions();
type Permission = (typeof permissions)[0];

function getUserPermissions(user: string): Permission {
  if (user.toLowerCase() === "shirley") {
    return permissions.find((item) => item.id === 5);
  } else {
    return permissions[0];
  }
}

const result = getUserPermissions("shirley");
type SettingsType = typeof fileJson;

const netApp: string = "This is Netapp course";

const obj: { company: string; location: string } = {
  company: "netApp",
  location: "Ehad Haam 9",
};

const buildingNumber: number = 9;
const users: Array<string> = ["Shirley", "dudu", "liron"];
users.push("Vova");

const usersArrayOption2: string[] = ["Shirley", "dudu", "liron"];
const isHost: boolean = true;

let MAX_RECORDS: number = 50000;

const vLocation: string = "Dubai";
const fromDate: Date = new Date();
const toDate: string = new Date().toISOString();
// console.log(vLocation, `toDate: ${fromDate}`, `toDate: ${toDate}`);

const salaries = [100, 222, 3300, 4400];
const highSalaries = salaries.reduce(
  (accSalary: number, currentSalary: number) => {
    if (currentSalary > 100) {
      return accSalary + currentSalary;
    } else return accSalary;
  },
  0
);
// highSalaries.toLowerCase();
// console.log(highSalaries);
