
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/shared/Timer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0e5087jnptHobsyq50wncmT', 'Timer');
// src/shared/Timer.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Timer = /** @class */ (function (_super) {
    __extends(Timer, _super);
    function Timer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.timerLabel = null;
        _this.time = null;
        return _this;
    }
    Timer.prototype.run = function () {
        this.time = 0;
        this.schedule(this.tick, 0.1);
    };
    Timer.prototype.tick = function () {
        this.time += 0.1;
        this.timerLabel.string = this.time.toFixed(1) + " s";
    };
    Timer.prototype.stop = function () {
        this.unschedule(this.tick);
    };
    Timer.prototype.reset = function () {
        this.time = 0;
        this.timerLabel.string = "0.0 s";
    };
    __decorate([
        property(cc.Label)
    ], Timer.prototype, "timerLabel", void 0);
    Timer = __decorate([
        ccclass
    ], Timer);
    return Timer;
}(cc.Component));
exports.Timer = Timer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzaGFyZWRcXFRpbWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFxQixFQUFFLENBQUMsVUFBVSxFQUFqQyxPQUFPLGFBQUEsRUFBQyxRQUFRLGNBQWlCLENBQUM7QUFHekM7SUFBMkIseUJBQVk7SUFBdkM7UUFBQSxxRUF5QkM7UUF0QlcsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFN0IsVUFBSSxHQUFVLElBQUksQ0FBQzs7SUFvQjlCLENBQUM7SUFsQlUsbUJBQUcsR0FBVjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTyxvQkFBSSxHQUFaO1FBQ0ksSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLENBQUM7UUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3pELENBQUM7SUFFTSxvQkFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVNLHFCQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztJQUNyQyxDQUFDO0lBckJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkNBQ2lCO0lBSDNCLEtBQUs7UUFEakIsT0FBTztPQUNLLEtBQUssQ0F5QmpCO0lBQUQsWUFBQztDQXpCRCxBQXlCQyxDQXpCMEIsRUFBRSxDQUFDLFNBQVMsR0F5QnRDO0FBekJZLHNCQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MscHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBUaW1lciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHJpdmF0ZSB0aW1lckxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgXG4gICAgcHVibGljIHRpbWU6bnVtYmVyID0gbnVsbDtcblxuICAgIHB1YmxpYyBydW4oKSB7XG4gICAgICAgIHRoaXMudGltZSA9IDA7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy50aWNrLDAuMSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0aWNrKCkge1xuICAgICAgICB0aGlzLnRpbWUgKz0gMC4xO1xuICAgICAgICB0aGlzLnRpbWVyTGFiZWwuc3RyaW5nID0gdGhpcy50aW1lLnRvRml4ZWQoMSkgKyBcIiBzXCI7XG4gICAgfVxuXG4gICAgcHVibGljIHN0b3AoKSB7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnRpY2spO1xuICAgIH1cblxuICAgIHB1YmxpYyByZXNldCgpIHtcbiAgICAgICAgdGhpcy50aW1lID0gMDtcbiAgICAgICAgdGhpcy50aW1lckxhYmVsLnN0cmluZyA9IFwiMC4wIHNcIjtcbiAgICB9XG59Il19