interface Fighter {
  attack: () => void;
}

class IDF {
  constructor(public rank: string) {
    this.rank = rank;
  }
}

const t = new IDF("This is rank");

class Commander extends IDF implements Fighter {
  constructor(public id: string) {
    super("officer");
    this.id = id;
  }
  getId() {
    return this.id.length;
  }
  attack() {
    console.log("Give orders and fire");
  }
  doSomething() {}
}
class Sniper extends IDF implements Fighter {
  public id: string;
  public distance: number;
  constructor(_id: string) {
    super("sergeant");
    this.id = _id;
    this.distance = 1000;
  }

  attack() {
    console.log("Shooting for long distance");
  }
  doSomething() {}
}

const fighters: Fighter[] = [new Commander(111), new Sniper("1222222")];

fighters.forEach((fighter) => {
  fighter.attack();
});
