type SuperUser = {
  password: string;
  firstName: string;
  lastName: string;
  userName: string;
  roles: ("Admin" | "User" | "Configurator")[];
};

const user: SuperUser = {
  password: "1234",
  firstName: "gal",
  lastName: "amo",
  userName: "galamo88@gmail.com",
  roles: ["Admin", "User"],
};

type Subscriber = Omit<SuperUser, "roles" | "firstName" | "lastName">;

type AutneticatedSubscriber = Pick<SuperUser, "roles" | "userName">;

interface User {
  type: "user";
  name: string;
  age: number;
  lastVisit: string;
}

interface Admin {
  type: "admin";
  name: string;
  age: number;
  role: string;
}

type PowerUser = Omit<User, "type"> &
  Omit<Admin, "type"> & { type: "PowerUser" };
const pu: PowerUser = {
  name: "",
  age: 1,
  role: "",
  lastVisit: "",
  type: "PowerUser",
};

interface User {
  type: "user";
  name: string;
  age: number;
  lastVisit: string;
}

interface Admin {
  type: "admin";
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
  {
    type: "user",
    name: "Max Mustermann",
    age: 25,
    lastVisit: "Before 10 hours",
  },
  {
    type: "admin",
    name: "Jane Doe",
    age: 32,
    role: "Administrator",
  },
  {
    type: "user",
    name: "Kate Müller",
    age: 23,
    lastVisit: "Before 10 hours",
  },
  {
    type: "admin",
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
  },
  {
    type: "user",
    name: "Wilson",
    age: 23,
    lastVisit: "Before 10 hours",
  },
  {
    type: "admin",
    name: "Agent Smith",
    age: 23,
    role: "Administrator",
  },
];

export const isAdmin = (person: Person): person is Admin =>
  person.type === "admin";
export const isUser = (person: Person): person is User =>
  person.type === "user";

export function logPerson(person: Person) {
  let additionalInformation = "";
  if (isAdmin(person)) {
    additionalInformation = person.role;
  }
  if (isUser(person)) {
    additionalInformation = person.lastVisit;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}
type SearchCriteria = Partial<Pick<User, "name" | "age">>;

export function filterUsers(
  persons: Person[],
  criteria: SearchCriteria
): User[] {
  return persons.filter(isUser).filter((user) => {
    const criteriaKeys = Object.keys(criteria) as (keyof SearchCriteria)[];
    return criteriaKeys.every((fieldName) => {
      return user[fieldName] === criteria[fieldName];
    });
  });
}

filterUsers(persons, {
  name: "Wilson",
}).forEach(logPerson);
