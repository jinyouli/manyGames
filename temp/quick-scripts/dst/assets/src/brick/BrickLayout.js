
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/brick/BrickLayout.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1b69bBWKdlMDpJ3ExSopM/4', 'BrickLayout');
// src/brick/BrickLayout.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.BrickLayout = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BrickLayout = /** @class */ (function (_super) {
    __extends(BrickLayout, _super);
    function BrickLayout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.padding = 0;
        _this.spacing = 0;
        _this.colNum = 0;
        _this.brickPrefab = null;
        _this.brickNum = 0;
        return _this;
    }
    BrickLayout.prototype.init = function (brickNum) {
        this.node.removeAllChildren();
        this.brickNum = brickNum;
        for (var i = 0; i < this.brickNum; i++) {
            var brickNode = cc.instantiate(this.brickPrefab);
            brickNode.parent = this.node;
            brickNode.x = this.padding + (i % this.colNum) * (brickNode.width + this.spacing) + brickNode.width / 2;
            brickNode.y = -this.padding - Math.floor(i / this.colNum) * (brickNode.height + this.spacing) - brickNode.height / 2;
        }
    };
    __decorate([
        property(cc.Float)
    ], BrickLayout.prototype, "padding", void 0);
    __decorate([
        property(cc.Float)
    ], BrickLayout.prototype, "spacing", void 0);
    __decorate([
        property(cc.Integer)
    ], BrickLayout.prototype, "colNum", void 0);
    __decorate([
        property(cc.Prefab)
    ], BrickLayout.prototype, "brickPrefab", void 0);
    __decorate([
        property(cc.Integer)
    ], BrickLayout.prototype, "brickNum", void 0);
    BrickLayout = __decorate([
        ccclass
    ], BrickLayout);
    return BrickLayout;
}(cc.Component));
exports.BrickLayout = BrickLayout;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxicmlja1xcQnJpY2tMYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFpQywrQkFBWTtJQUE3QztRQUFBLHFFQXVCQztRQXBCVyxhQUFPLEdBQVcsQ0FBQyxDQUFDO1FBRXBCLGFBQU8sR0FBVyxDQUFDLENBQUM7UUFFcEIsWUFBTSxHQUFXLENBQUMsQ0FBQztRQUVuQixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUU5QixjQUFRLEdBQVcsQ0FBQyxDQUFDOztJQVlqQyxDQUFDO0lBVkcsMEJBQUksR0FBSixVQUFLLFFBQVE7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEMsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDakQsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzdCLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUN4RyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUN4SDtJQUNMLENBQUM7SUFuQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFDUztJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dEQUNTO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7K0NBQ007SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvREFDa0I7SUFFdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztpREFDUTtJQVhwQixXQUFXO1FBRHZCLE9BQU87T0FDSyxXQUFXLENBdUJ2QjtJQUFELGtCQUFDO0NBdkJELEFBdUJDLENBdkJnQyxFQUFFLENBQUMsU0FBUyxHQXVCNUM7QUF2Qlksa0NBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBCcmlja0xheW91dCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gICAgcHJpdmF0ZSBwYWRkaW5nOiBudW1iZXIgPSAwO1xuICAgIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgICBwcml2YXRlIHNwYWNpbmc6IG51bWJlciA9IDA7XG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXG4gICAgcHJpdmF0ZSBjb2xOdW06IG51bWJlciA9IDA7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcml2YXRlIGJyaWNrUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxuICAgIHByaXZhdGUgYnJpY2tOdW06IG51bWJlciA9IDA7XG5cbiAgICBpbml0KGJyaWNrTnVtKSB7XG4gICAgICAgIHRoaXMubm9kZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICB0aGlzLmJyaWNrTnVtID0gYnJpY2tOdW07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5icmlja051bTsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYnJpY2tOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5icmlja1ByZWZhYik7XG4gICAgICAgICAgICBicmlja05vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgICAgICAgICAgYnJpY2tOb2RlLnggPSB0aGlzLnBhZGRpbmcgKyAoaSAlIHRoaXMuY29sTnVtKSAqIChicmlja05vZGUud2lkdGggKyB0aGlzLnNwYWNpbmcpICsgYnJpY2tOb2RlLndpZHRoIC8gMjtcbiAgICAgICAgICAgIGJyaWNrTm9kZS55ID0gLXRoaXMucGFkZGluZyAtIE1hdGguZmxvb3IoaSAvIHRoaXMuY29sTnVtKSAqIChicmlja05vZGUuaGVpZ2h0ICsgdGhpcy5zcGFjaW5nKSAtIGJyaWNrTm9kZS5oZWlnaHQgLyAyO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==