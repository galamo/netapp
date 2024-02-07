class IDF {
    constructor(rank) {
        this.rank = rank;
        this.rank = rank;
    }
}
const t = new IDF("This is rank");
class Commander extends IDF {
    constructor(id) {
        super("officer");
        this.id = id;
        this.id = id;
    }
    getId() {
        return this.id.length;
    }
    attack() {
        console.log("Give orders and fire");
    }
    doSomething() { }
}
class Sniper extends IDF {
    constructor(_id) {
        super("sergeant");
        this.id = _id;
        this.distance = 1000;
    }
    attack() {
        console.log("Shooting for long distance");
    }
    doSomething() { }
}
const fighters = [new Commander(111), new Sniper("1222222")];
fighters.forEach((fighter) => {
    fighter.attack();
});
