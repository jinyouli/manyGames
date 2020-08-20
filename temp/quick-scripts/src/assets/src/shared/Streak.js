"use strict";
cc._RF.push(module, '7d2a9UGfIdOHJj/cCvXlEIj', 'Streak');
// src/shared/Streak.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Streak = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Streak = /** @class */ (function (_super) {
    __extends(Streak, _super);
    function Streak() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.g = null;
        return _this;
    }
    Streak.prototype.start = function () {
        this.node.parent.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.parent.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.parent.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.parent.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        this.node.parent.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    };
    Streak.prototype.onTouchStart = function (event) {
        var localPos = this.node.parent.convertToNodeSpaceAR(event.getLocation());
        this.g.circle(localPos.x, localPos.y, 5);
        this.g.fill();
        this.g.moveTo(localPos.x, localPos.y);
    };
    Streak.prototype.onTouchMove = function (event) {
        var localPos = this.node.parent.convertToNodeSpaceAR(event.getLocation());
        this.g.lineTo(localPos.x, localPos.y);
        this.g.stroke();
        this.g.moveTo(localPos.x, localPos.y);
    };
    Streak.prototype.onTouchEnd = function (event) {
        // this.node.position = this.node.parent.convertToNodeSpaceAR(event.getStartLocation());
        // let moveAction = cc.moveTo(0.3, this.node.parent.convertToNodeSpaceAR(event.getLocation()));
        // this.node.runAction(moveAction);
        var localPos = this.node.parent.convertToNodeSpaceAR(event.getLocation());
        this.g.circle(localPos.x, localPos.y, 5);
        this.g.fill();
        this.g.clear();
    };
    __decorate([
        property(cc.Graphics)
    ], Streak.prototype, "g", void 0);
    Streak = __decorate([
        ccclass
    ], Streak);
    return Streak;
}(cc.Component));
exports.Streak = Streak;

cc._RF.pop();