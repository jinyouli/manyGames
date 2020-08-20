"use strict";
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