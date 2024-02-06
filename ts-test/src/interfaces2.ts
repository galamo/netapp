interface User {
  name: string;
  age: number;
  permission: string;
  type: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
  type: string;
}

type Person = Admin | User;

const persons: Person[] = [
  {
    name: "Israel",
    age: 20,
    permission: "user",
    type: "User",
  },
  {
    name: "Snir",
    age: 20,
    role: "admin",
    type: "Admin",
  },
  {
    name: "Ronit",
    age: 20,
    role: "admin",
    type: "Admin",
  },
];

function extraInfo(p: Person) {
  let additionalInfo: string = "";
  if ("role" in p) {
    additionalInfo = p.role;
  } else if ("permission" in p) {
    additionalInfo = p.permission;
  }
  return additionalInfo;
}

function extraInfoBasedOnIsOperator(p: Person) {
  let additionalInfo: string = "";
  if (isAdmin(p)) {
    additionalInfo = p.role;
  } else if ("permission" in p) {
    additionalInfo = p.permission;
  }
  return additionalInfo;
}
function isAdmin(person: Person): person is Admin {
  return person?.type?.toLowerCase() === "admin";
}
function isAdmin2(person: Person): person is Admin {
  if ("role" in person) {
    return true;
  } else {
    return false;
  }
}
const extraInfoResult = persons.map(extraInfo);
interface SuperUser {
  name: string;
  lastName: string;
}

function getUsersByKey(
  users: Array<SuperUser>,
  key: keyof SuperUser,
  search: string
) {
  return users.filter((user) => user[key].toString().includes(search));
}

const result = getUsersByKey(
  [
    { name: "g", lastName: "am" },
    { name: "g", lastName: "am" },
    { name: "g", lastName: "am" },
    { name: "g", lastName: "am" },
    { name: "g", lastName: "am" },
    { name: "g", lastName: "am" },
    { name: "g", lastName: "aaaaa" },
    { name: "g", lastName: "aaaaa" },
    { name: "g", lastName: "aaaaa" },
    { name: "g", lastName: "aaaaa" },
    { name: "g", lastName: "aaaaa" },
    { name: "g", lastName: "aaaaa" },
  ],
  "lastName",
  "am"
);

// function doNothing(a?: number) {
//   if (typeof a === undefined) {
//     throw new Error("Something");
//   }
//   if (a === 1) {
//     return 1;
//   } else {
//     throw new Error("Something");
//   }
// }
// const s = doNothing();

call(1);

export default 1;
