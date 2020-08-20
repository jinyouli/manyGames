
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/mine/MineLevelLabel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxtaW5lXFxNaW5lTGV2ZWxMYWJlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLGtDQUFZO0lBQWhEO1FBQUEscUVBcUJDO1FBbEJXLFFBQUUsR0FBYyxJQUFJLENBQUM7UUFFckIsUUFBRSxHQUFjLElBQUksQ0FBQztRQUVyQixVQUFJLEdBQXFCLEVBQUUsQ0FBQztRQUU1QixZQUFNLEdBQVUsQ0FBQyxDQUFDOztJQVk5QixDQUFDO0lBVkcsc0JBQVcsaUNBQUs7YUFBaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzthQUNELFVBQWlCLEtBQWE7WUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxFQUFFLEdBQUcsS0FBSyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDeEIsSUFBSSxFQUFFLEdBQUcsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEMsQ0FBQzs7O09BUEE7SUFWRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhDQUNTO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OENBQ1M7SUFFN0I7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7Z0RBQ1M7SUFQM0IsY0FBYztRQUQxQixPQUFPO09BQ0ssY0FBYyxDQXFCMUI7SUFBRCxxQkFBQztDQXJCRCxBQXFCQyxDQXJCbUMsRUFBRSxDQUFDLFNBQVMsR0FxQi9DO0FBckJZLHdDQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBNaW5lTGV2ZWxMYWJlbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBwcml2YXRlIHMxOiBjYy5TcHJpdGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgcHJpdmF0ZSBzMjogY2MuU3ByaXRlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICBwcml2YXRlIG51bXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcblxuICAgIHByaXZhdGUgX2xldmVsOm51bWJlciA9IDA7XG4gICAgXG4gICAgcHVibGljIGdldCBsZXZlbCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGV2ZWw7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgbGV2ZWwodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9sZXZlbCA9IHZhbHVlO1xuICAgICAgICBsZXQgbjEgPSB2YWx1ZSAvIDEwIHwgMDtcbiAgICAgICAgbGV0IG4yID0gdmFsdWUgJSAxMDtcbiAgICAgICAgdGhpcy5zMS5zcHJpdGVGcmFtZSA9IHRoaXMubnVtc1tuMV07XG4gICAgICAgIHRoaXMuczIuc3ByaXRlRnJhbWUgPSB0aGlzLm51bXNbbjJdO1xuICAgIH1cbn0iXX0=