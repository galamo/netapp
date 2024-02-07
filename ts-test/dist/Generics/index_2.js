var Playlist = /** @class */ (function () {
    function Playlist() {
        this.list = [];
    }
    Playlist.prototype.add = function (someItem) {
        this.list.push(someItem);
    };
    Playlist.prototype.play = function () {
        this.list.splice(0, 1);
    };
    return Playlist;
}());
var playList = new Playlist();
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
