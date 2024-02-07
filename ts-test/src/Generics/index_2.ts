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

playList.play();
playList.play();

// 0 extends number
// 2 extends number
// T extends string

type StringFromType<T> = T extends string ? string : number;
type usernameType = StringFromType<"This is string constraint">;
type idType = StringFromType<123456789>;


