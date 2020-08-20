"use strict";
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