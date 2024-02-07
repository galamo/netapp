type User = {
  userName: string;
  address: Address;
  phone?: string;
};
type Address = {
  street: string;
  city?: string;
};

type RUser = Required<User>;

const user: RUser = {
  userName: "galamo@gmail.com",
  phone: "0503434833;",
  address: {
    street: "Dekel",
    city: "ashdod",
  },
};
