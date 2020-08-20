"use strict";
cc._RF.push(module, '51bd5D4aHJO/be6iKwDn88G', 'Get47Score');
// src/get47/Get47Score.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Score = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Score = /** @class */ (function (_super) {
    __extends(Score, _super);
    function Score() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scoreLabel = null;
        _this.addLabel = null;
        _this.minusLabel = null;
        _this.anim = null;
        _this.num = 0;
        return _this;
    }
    Score.prototype.reset = function (n) {
        this.num = n;
        this.scoreLabel.string = n + "";
    };
    Score.prototype.add = function (n) {
        this.num += n;
        this.scoreLabel.string = this.num + "";
        this.addLabel.string = "+" + n;
        this.anim.play("add");
    };
    Score.prototype.minus = function (n) {
        this.num -= n;
        this.scoreLabel.string = this.num + "";
        this.minusLabel.string = "-" + n;
        this.anim.play("minus");
    };
    __decorate([
        property(cc.Label)
    ], Score.prototype, "scoreLabel", void 0);
    __decorate([
        property(cc.Label)
    ], Score.prototype, "addLabel", void 0);
    __decorate([
        property(cc.Label)
    ], Score.prototype, "minusLabel", void 0);
    __decorate([
        property(cc.Animation)
    ], Score.prototype, "anim", void 0);
    Score = __decorate([
        ccclass
    ], Score);
    return Score;
}(cc.Component));
exports.Score = Score;

cc._RF.pop();