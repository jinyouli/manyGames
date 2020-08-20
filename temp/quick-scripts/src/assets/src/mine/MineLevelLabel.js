"use strict";
cc._RF.push(module, '4079avk3fFC/530/cecMnYc', 'MineLevelLabel');
// src/mine/MineLevelLabel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.MineLevelLabel = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MineLevelLabel = /** @class */ (function (_super) {
    __extends(MineLevelLabel, _super);
    function MineLevelLabel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.s1 = null;
        _this.s2 = null;
        _this.nums = [];
        _this._level = 0;
        return _this;
    }
    Object.defineProperty(MineLevelLabel.prototype, "level", {
        get: function () {
            return this._level;
        },
        set: function (value) {
            this._level = value;
            var n1 = value / 10 | 0;
            var n2 = value % 10;
            this.s1.spriteFrame = this.nums[n1];
            this.s2.spriteFrame = this.nums[n2];
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        property(cc.Sprite)
    ], MineLevelLabel.prototype, "s1", void 0);
    __decorate([
        property(cc.Sprite)
    ], MineLevelLabel.prototype, "s2", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], MineLevelLabel.prototype, "nums", void 0);
    MineLevelLabel = __decorate([
        ccclass
    ], MineLevelLabel);
    return MineLevelLabel;
}(cc.Component));
exports.MineLevelLabel = MineLevelLabel;

cc._RF.pop();