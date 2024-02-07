import { SuperUser } from "../interfaces2";

interface Video {
  title: string;
  creator: string;
  duration: number;
}

interface Song {
  artist: string;
  singer: string;
  category: string;
  duration: number;
}

class Playlist<T> {
  private list: T[];
  constructor() {
    this.list = [];
  }
  add(someItem: T) {
    this.list.push(someItem);
  }
  play() {
    this.list.splice(0, 1);
  }
}

const playList = new Playlist<Song | Video>();
playList.add({
  artist: "sting",
  singer: "sting",
  category: "rock",
  duration: 4,
});

playList.add({
  title: "sting",
  creator: "yuval",
  duration: 4,
});

function mergeFn<S extends Partial<Song>, V extends Video>(
  obj1: S,
  obj2: V
): S & V {
  return { ...obj1, ...obj2 };
}

mergeFn(
  {
    category: "rock",
    duration: 4,
  },
  {
    title: "sting",
    creator: "yuval",
    duration: 4,
  }
);

playList.play();
playList.play();

// 0 extends number
// 2 extends number
// T extends string

type StringFromType<T> = T extends string ? string : number;
type usernameType = StringFromType<"This is string constraint">;
type idType = StringFromType<123456789>;

class Stacki<STACK_ITEM> {
  private data: STACK_ITEM[];
  constructor() {
    this.data = [];
  }
  pop(): STACK_ITEM {
    return this.data.pop();
  }
  push(item: STACK_ITEM) {
    this.data.push(item);
  }
}

function saveDataInDb<T>(
  callback: (item: T) => string,
  itemToSave: T
): T & { id: string } {
  const res = callback(itemToSave);
  return { ...itemToSave, id: res };
}

// type UserKey = keyof User;

function getWhatEverByKey<T, K extends keyof T>(
  arrayOfItems: Array<T>,
  key: K,
  search: string
): T[] {
  return arrayOfItems.filter((item) => item[key].toString().includes(search));
}
const customers = [
  { name: "US", sId: "abc123" },
  { name: "Apple", sId: "abc1234567" },
];

const cars = [
  { type: "toyota", engine: 2000 },
  { type: "skoda", engine: 3000 },
];
getWhatEverByKey(customers, "name", "Apple");
getWhatEverByKey(cars, "type", "Apple");
