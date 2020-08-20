"use strict";
cc._RF.push(module, '4b1b5qWuY9FS6vyp1qWoUJ4', 'PuzzlePiece');
// src/puzzle/PuzzlePiece.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Piece = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Piece = /** @class */ (function (_super) {
    __extends(Piece, _super);
    function Piece() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.texture = null;
        return _this;
    }
    Object.defineProperty(Piece.prototype, "isRight", {
        get: function () {
            return this.curCol === this.oriCol && this.curRow === this.oriRow;
        },
        enumerable: false,
        configurable: true
    });
    Piece.prototype.init = function (col, row, colNum, colWidth) {
        this.oriCol = col;
        this.oriRow = row;
        this.curCol = col;
        this.curRow = row;
        var sprite = this.node.addComponent(cc.Sprite);
        // 升级2.0后setRect失效 
        // sprite.spriteFrame = new cc.SpriteFrame(this.texture);
        // let rect = sprite.spriteFrame.getRect();
        var rect = cc.rect(0, 0, this.texture.width, this.texture.height);
        var newRectWidth = rect.width / colNum;
        var newRectHeight = rect.height / colNum;
        var newRectX = col * newRectWidth;
        var newRectY = (colNum - row - 1) * newRectHeight;
        var newRect = cc.rect(newRectX, newRectY, newRectWidth, newRectHeight);
        // sprite.spriteFrame.setRect(newRect);
        sprite.spriteFrame = new cc.SpriteFrame(this.texture, newRect);
        this.node.width = colWidth;
        this.node.height = colWidth;
        this.isBlank = this.oriCol === colNum - 1 && this.oriRow === 0;
        if (this.isBlank) {
            this.node.active = false;
        }
    };
    __decorate([
        property({
            type: cc.Texture2D
        })
    ], Piece.prototype, "texture", void 0);
    Piece = __decorate([
        ccclass
    ], Piece);
    return Piece;
}(cc.Component));
exports.Piece = Piece;

cc._RF.pop();