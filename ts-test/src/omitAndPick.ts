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
