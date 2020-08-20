
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/link/LinkPiece.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '484catbAbJCg4Ac4ycFbtOo', 'LinkPiece');
// src/link/LinkPiece.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Piece = void 0;
var LinkConstants_1 = require("./LinkConstants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Piece = /** @class */ (function (_super) {
    __extends(Piece, _super);
    function Piece() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sprite = null;
        _this.herosAtlas = null;
        _this.x = 0;
        _this.y = 0;
        _this.type = 0;
        _this.state = LinkConstants_1.PIECE_STATE.IDLE;
        return _this;
    }
    Piece.prototype.init = function (x, y, type, state) {
        if (state === void 0) { state = LinkConstants_1.PIECE_STATE.IDLE; }
        this.x = x;
        this.y = y;
        this.setType(type);
        this.setState(state);
    };
    Piece.prototype.setType = function (type) {
        this.type = type;
        if (type === 0) {
            this.sprite.spriteFrame = null;
        }
        else {
            this.sprite.spriteFrame = this.herosAtlas.getSpriteFrame("hero_" + type);
        }
    };
    Piece.prototype.setState = function (state) {
        if (state === this.state) {
            return;
        }
        this.state = state;
        if (state === LinkConstants_1.PIECE_STATE.IDLE) {
            this.node.color = cc.Color.WHITE;
        }
        else if (state === LinkConstants_1.PIECE_STATE.PRESS) {
            this.node.color = cc.Color.GRAY;
        }
    };
    __decorate([
        property(cc.Sprite)
    ], Piece.prototype, "sprite", void 0);
    __decorate([
        property(cc.SpriteAtlas)
    ], Piece.prototype, "herosAtlas", void 0);
    Piece = __decorate([
        ccclass
    ], Piece);
    return Piece;
}(cc.Component));
exports.Piece = Piece;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxsaW5rXFxMaW5rUGllY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMkIseUJBQVk7SUFBdkM7UUFBQSxxRUF3Q0M7UUFyQ1csWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixnQkFBVSxHQUFtQixJQUFJLENBQUM7UUFFbkMsT0FBQyxHQUFXLENBQUMsQ0FBQztRQUNkLE9BQUMsR0FBVyxDQUFDLENBQUM7UUFDZCxVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLFdBQUssR0FBZ0IsMkJBQVcsQ0FBQyxJQUFJLENBQUM7O0lBOEJqRCxDQUFDO0lBNUJVLG9CQUFJLEdBQVgsVUFBWSxDQUFTLEVBQUUsQ0FBUyxFQUFFLElBQVksRUFBRSxLQUF3QjtRQUF4QixzQkFBQSxFQUFBLFFBQVEsMkJBQVcsQ0FBQyxJQUFJO1FBQ3BFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVNLHVCQUFPLEdBQWQsVUFBZSxJQUFZO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUcsSUFBSSxLQUFLLENBQUMsRUFBRTtZQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUNsQzthQUFNO1lBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQzVFO0lBQ0wsQ0FBQztJQUVNLHdCQUFRLEdBQWYsVUFBZ0IsS0FBa0I7UUFDOUIsSUFBRyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNyQixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLEtBQUssS0FBSywyQkFBVyxDQUFDLElBQUksRUFBRTtZQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztTQUNwQzthQUFNLElBQUcsS0FBSyxLQUFLLDJCQUFXLENBQUMsS0FBSyxFQUFFO1lBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1NBQ25DO0lBQ0wsQ0FBQztJQW5DRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lDQUNhO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7NkNBQ2lCO0lBTGpDLEtBQUs7UUFEakIsT0FBTztPQUNLLEtBQUssQ0F3Q2pCO0lBQUQsWUFBQztDQXhDRCxBQXdDQyxDQXhDMEIsRUFBRSxDQUFDLFNBQVMsR0F3Q3RDO0FBeENZLHNCQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUElFQ0VfU1RBVEUgfSBmcm9tIFwiLi9MaW5rQ29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgUGllY2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBwcml2YXRlIHNwcml0ZTogY2MuU3ByaXRlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlQXRsYXMpXG4gICAgcHJpdmF0ZSBoZXJvc0F0bGFzOiBjYy5TcHJpdGVBdGxhcyA9IG51bGw7XG5cbiAgICBwdWJsaWMgeDogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgeTogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgdHlwZTogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgc3RhdGU6IFBJRUNFX1NUQVRFID0gUElFQ0VfU1RBVEUuSURMRTtcblxuICAgIHB1YmxpYyBpbml0KHg6IG51bWJlciwgeTogbnVtYmVyLCB0eXBlOiBudW1iZXIsIHN0YXRlID0gUElFQ0VfU1RBVEUuSURMRSkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnNldFR5cGUodHlwZSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgc2V0VHlwZSh0eXBlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgaWYodHlwZSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmhlcm9zQXRsYXMuZ2V0U3ByaXRlRnJhbWUoXCJoZXJvX1wiICsgdHlwZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0U3RhdGUoc3RhdGU6IFBJRUNFX1NUQVRFKSB7XG4gICAgICAgIGlmKHN0YXRlID09PSB0aGlzLnN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICBpZiAoc3RhdGUgPT09IFBJRUNFX1NUQVRFLklETEUpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xuICAgICAgICB9IGVsc2UgaWYoc3RhdGUgPT09IFBJRUNFX1NUQVRFLlBSRVNTKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuY29sb3IgPSBjYy5Db2xvci5HUkFZO1xuICAgICAgICB9XG4gICAgfVxuXG59Il19