"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Playlist {
    constructor() {
        this.list = [];
    }
    add(someItem) {
        this.list.push(someItem);
    }
    play() {
        this.list.splice(0, 1);
    }
}
const playList = new Playlist();
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
function mergeFn(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
mergeFn({
    category: "rock",
    duration: 4,
}, {
    title: "sting",
    creator: "yuval",
    duration: 4,
});
playList.play();
playList.play();
class Stacki {
    constructor() {
        this.data = [];
    }
    pop() {
        return this.data.pop();
    }
    push(item) {
        this.data.push(item);
    }
}
function saveDataInDb(callback, itemToSave) {
    const res = callback(itemToSave);
    return Object.assign(Object.assign({}, itemToSave), { id: res });
}
// type UserKey = keyof User;
function getWhatEverByKey(arrayOfItems, key, search) {
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
