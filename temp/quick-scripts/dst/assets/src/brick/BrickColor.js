
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/brick/BrickColor.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fd659ijKY1FVbW2vtuTNQfM', 'BrickColor');
// src/brick/BrickColor.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.BrickColor = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BrickColor = /** @class */ (function (_super) {
    __extends(BrickColor, _super);
    function BrickColor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.brickSprite = null;
        _this.picList = [];
        return _this;
    }
    BrickColor.prototype.start = function () {
        var n = Math.random() * this.picList.length | 0;
        this.brickSprite.spriteFrame = this.picList[n];
    };
    __decorate([
        property(cc.Sprite)
    ], BrickColor.prototype, "brickSprite", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], BrickColor.prototype, "picList", void 0);
    BrickColor = __decorate([
        ccclass
    ], BrickColor);
    return BrickColor;
}(cc.Component));
exports.BrickColor = BrickColor;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxicmlja1xcQnJpY2tDb2xvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWdDLDhCQUFZO0lBQTVDO1FBQUEscUVBV0M7UUFSRyxpQkFBVyxHQUFjLElBQUksQ0FBQztRQUU5QixhQUFPLEdBQXFCLEVBQUUsQ0FBQzs7SUFNbkMsQ0FBQztJQUpHLDBCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQVBEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7bURBQ1U7SUFFOUI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7K0NBQ0k7SUFMdEIsVUFBVTtRQUR0QixPQUFPO09BQ0ssVUFBVSxDQVd0QjtJQUFELGlCQUFDO0NBWEQsQUFXQyxDQVgrQixFQUFFLENBQUMsU0FBUyxHQVczQztBQVhZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgQnJpY2tDb2xvciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIGJyaWNrU3ByaXRlOiBjYy5TcHJpdGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxuICAgIHBpY0xpc3Q6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcbiAgICBcbiAgICBzdGFydCgpIHtcbiAgICAgICAgbGV0IG4gPSBNYXRoLnJhbmRvbSgpICogdGhpcy5waWNMaXN0Lmxlbmd0aCB8IDA7XG4gICAgICAgIHRoaXMuYnJpY2tTcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLnBpY0xpc3Rbbl07XG4gICAgfVxufSJdfQ==