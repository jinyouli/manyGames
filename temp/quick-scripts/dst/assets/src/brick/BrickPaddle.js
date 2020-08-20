
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/brick/BrickPaddle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxicmlja1xcQnJpY2tQYWRkbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFpQywrQkFBWTtJQUE3Qzs7SUFhQSxDQUFDO0lBWEcsNEJBQU0sR0FBTjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxVQUFDLEtBQTBCO1lBQ3pFLGNBQWM7WUFDZCxJQUFJLFVBQVUsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztZQUMxRSxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDBCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDdEIsQ0FBQztJQVpRLFdBQVc7UUFEdkIsT0FBTztPQUNLLFdBQVcsQ0FhdkI7SUFBRCxrQkFBQztDQWJELEFBYUMsQ0FiZ0MsRUFBRSxDQUFDLFNBQVMsR0FhNUM7QUFiWSxrQ0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIEJyaWNrUGFkZGxlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSA9PiB7XG4gICAgICAgICAgICAvL+WwhuS4lueVjOWdkOagh+i9rOWMluS4uuacrOWcsOWdkOagh1xuICAgICAgICAgICAgbGV0IHRvdWNoUG9pbnQgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZShldmVudC5nZXRMb2NhdGlvbigpKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS54ID0gdG91Y2hQb2ludC54O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0KCl7XG4gICAgICAgIHRoaXMubm9kZS54ID0gMzYwO1xuICAgIH1cbn0iXX0=