"use strict";
cc._RF.push(module, 'fd659ijKY1FVbW2vtuTNQfM', 'BrickColor');
// src/brick/BrickColor.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.BrickColor = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BrickColor = /** @class */ (function (_super) {
    __extends(BrickColor, _super);
    function BrickColor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.brickSprite = null;
        _this.picList = [];
        return _this;
    }
    BrickColor.prototype.start = function () {
        var n = Math.random() * this.picList.length | 0;
        this.brickSprite.spriteFrame = this.picList[n];
    };
    __decorate([
        property(cc.Sprite)
    ], BrickColor.prototype, "brickSprite", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], BrickColor.prototype, "picList", void 0);
    BrickColor = __decorate([
        ccclass
    ], BrickColor);
    return BrickColor;
}(cc.Component));
exports.BrickColor = BrickColor;

cc._RF.pop();