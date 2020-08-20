"use strict";
cc._RF.push(module, 'fc55f3NtT5G+KpukC6ZPkmK', 'Get47Piece');
// src/get47/Get47Piece.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Piece = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Piece = /** @class */ (function (_super) {
    __extends(Piece, _super);
    function Piece() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pics = [];
        _this.sprite = null;
        _this.x = 0;
        _this.y = 0;
        _this.posIndex = cc.v2();
        _this.isAlive = true;
        _this._n = 0;
        return _this;
    }
    Object.defineProperty(Piece.prototype, "type", {
        get: function () {
            return this._n;
        },
        set: function (value) {
            this._n = value;
            this.sprite.spriteFrame = this.pics[value - 1];
        },
        enumerable: false,
        configurable: true
    });
    Piece.prototype.init = function (x, y) {
        this.x = x;
        this.y = y;
        this.posIndex = this.node.position;
        this.randomType();
        this.isAlive = true;
    };
    Piece.prototype.randomType = function () {
        this.type = Math.floor(Math.random() * this.pics.length) + 1;
    };
    __decorate([
        property([cc.SpriteFrame])
    ], Piece.prototype, "pics", void 0);
    __decorate([
        property(cc.Sprite)
    ], Piece.prototype, "sprite", void 0);
    Piece = __decorate([
        ccclass
    ], Piece);
    return Piece;
}(cc.Component));
exports.Piece = Piece;

cc._RF.pop();