
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/get47/Get47Score.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxnZXQ0N1xcR2V0NDdTY29yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJCLHlCQUFZO0lBQXZDO1FBQUEscUVBZ0NDO1FBN0JXLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRTVCLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFFMUIsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFNUIsVUFBSSxHQUFpQixJQUFJLENBQUM7UUFFM0IsU0FBRyxHQUFXLENBQUMsQ0FBQzs7SUFxQjNCLENBQUM7SUFuQlUscUJBQUssR0FBWixVQUFhLENBQVM7UUFDbEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFTSxtQkFBRyxHQUFWLFVBQVcsQ0FBUztRQUNoQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLHFCQUFLLEdBQVosVUFBYSxDQUFTO1FBQ2xCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBM0JEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkNBQ2lCO0lBRXBDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ2U7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs2Q0FDaUI7SUFFcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzt1Q0FDVztJQVR6QixLQUFLO1FBRGpCLE9BQU87T0FDSyxLQUFLLENBZ0NqQjtJQUFELFlBQUM7Q0FoQ0QsQUFnQ0MsQ0FoQzBCLEVBQUUsQ0FBQyxTQUFTLEdBZ0N0QztBQWhDWSxzQkFBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgU2NvcmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHByaXZhdGUgc2NvcmVMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwcml2YXRlIGFkZExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHByaXZhdGUgbWludXNMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BbmltYXRpb24pXG4gICAgcHJpdmF0ZSBhbmltOiBjYy5BbmltYXRpb24gPSBudWxsO1xuXG4gICAgcHVibGljIG51bTogbnVtYmVyID0gMDtcblxuICAgIHB1YmxpYyByZXNldChuOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5udW0gPSBuO1xuICAgICAgICB0aGlzLnNjb3JlTGFiZWwuc3RyaW5nID0gbiArIFwiXCI7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZChuOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5udW0gKz0gbjtcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IHRoaXMubnVtICsgXCJcIjtcbiAgICAgICAgdGhpcy5hZGRMYWJlbC5zdHJpbmcgPSBcIitcIiArIG47XG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiYWRkXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBtaW51cyhuOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5udW0gLT0gbjtcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IHRoaXMubnVtICsgXCJcIjtcbiAgICAgICAgdGhpcy5taW51c0xhYmVsLnN0cmluZyA9IFwiLVwiICsgbjtcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJtaW51c1wiKTtcbiAgICB9XG5cbn0iXX0=