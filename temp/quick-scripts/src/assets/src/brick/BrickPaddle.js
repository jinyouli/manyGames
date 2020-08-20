"use strict";
cc._RF.push(module, '21d56KpJ3FBQL2sth9PNm1+', 'BrickPaddle');
// src/brick/BrickPaddle.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.BrickPaddle = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BrickPaddle = /** @class */ (function (_super) {
    __extends(BrickPaddle, _super);
    function BrickPaddle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BrickPaddle.prototype.onLoad = function () {
        var _this = this;
        this.node.parent.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            //将世界坐标转化为本地坐标
            var touchPoint = _this.node.parent.convertToNodeSpace(event.getLocation());
            _this.node.x = touchPoint.x;
        });
    };
    BrickPaddle.prototype.init = function () {
        this.node.x = 360;
    };
    BrickPaddle = __decorate([
        ccclass
    ], BrickPaddle);
    return BrickPaddle;
}(cc.Component));
exports.BrickPaddle = BrickPaddle;

cc._RF.pop();