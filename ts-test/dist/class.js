var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var IDF = /** @class */ (function () {
    function IDF(rank) {
        this.rank = rank;
        this.rank = rank;
    }
    return IDF;
}());
var t = new IDF("This is rank");
var Commander = /** @class */ (function (_super) {
    __extends(Commander, _super);
    function Commander(id) {
        var _this = _super.call(this, "officer") || this;
        _this.id = id;
        _this.id = id;
        return _this;
    }
    Commander.prototype.getId = function () {
        return this.id.length;
    };
    Commander.prototype.attack = function () {
        console.log("Give orders and fire");
    };
    Commander.prototype.doSomething = function () { };
    return Commander;
}(IDF));
var Sniper = /** @class */ (function (_super) {
    __extends(Sniper, _super);
    function Sniper(_id) {
        var _this = _super.call(this, "sergeant") || this;
        _this.id = _id;
        _this.distance = 1000;
        return _this;
    }
    Sniper.prototype.attack = function () {
        console.log("Shooting for long distance");
    };
    Sniper.prototype.doSomething = function () { };
    return Sniper;
}(IDF));
var fighters = [new Commander(111), new Sniper("1222222")];
fighters.forEach(function (fighter) {
    fighter.attack();
});
