
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/puzzle/PuzzlePiece.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxwdXp6bGVcXFB1enpsZVBpZWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMkIseUJBQVk7SUFBdkM7UUFBQSxxRUE0Q0M7UUF2Q1csYUFBTyxHQUFpQixJQUFJLENBQUM7O0lBdUN6QyxDQUFDO0lBaENHLHNCQUFXLDBCQUFPO2FBQWxCO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3RFLENBQUM7OztPQUFBO0lBRU0sb0JBQUksR0FBWCxVQUFZLEdBQVcsRUFBRSxHQUFXLEVBQUUsTUFBYyxFQUFFLFFBQWdCO1FBQ2xFLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBRWxCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxtQkFBbUI7UUFDbkIseURBQXlEO1FBQ3pELDJDQUEyQztRQUMzQyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsRSxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUN2QyxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN6QyxJQUFJLFFBQVEsR0FBRyxHQUFHLEdBQUcsWUFBWSxDQUFDO1FBQ2xDLElBQUksUUFBUSxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUM7UUFDbEQsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxhQUFhLENBQUMsQ0FBQztRQUN2RSx1Q0FBdUM7UUFDdkMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUUvRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1FBRTVCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1FBQy9ELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUM1QjtJQUNMLENBQUM7SUFyQ0Q7UUFIQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVM7U0FDckIsQ0FBQzswQ0FDbUM7SUFMNUIsS0FBSztRQURqQixPQUFPO09BQ0ssS0FBSyxDQTRDakI7SUFBRCxZQUFDO0NBNUNELEFBNENDLENBNUMwQixFQUFFLENBQUMsU0FBUyxHQTRDdEM7QUE1Q1ksc0JBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIFBpZWNlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6IGNjLlRleHR1cmUyRFxuICAgIH0pXG4gICAgcHJpdmF0ZSB0ZXh0dXJlOiBjYy5UZXh0dXJlMkQgPSBudWxsO1xuXG4gICAgcHVibGljIG9yaUNvbDogbnVtYmVyO1xuICAgIHB1YmxpYyBvcmlSb3c6IG51bWJlcjtcbiAgICBwdWJsaWMgY3VyQ29sOiBudW1iZXI7XG4gICAgcHVibGljIGN1clJvdzogbnVtYmVyO1xuICAgIHB1YmxpYyBpc0JsYW5rOiBib29sZWFuO1xuICAgIHB1YmxpYyBnZXQgaXNSaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VyQ29sID09PSB0aGlzLm9yaUNvbCAmJiB0aGlzLmN1clJvdyA9PT0gdGhpcy5vcmlSb3c7XG4gICAgfVxuXG4gICAgcHVibGljIGluaXQoY29sOiBudW1iZXIsIHJvdzogbnVtYmVyLCBjb2xOdW06IG51bWJlciwgY29sV2lkdGg6IG51bWJlcikge1xuICAgICAgICB0aGlzLm9yaUNvbCA9IGNvbDtcbiAgICAgICAgdGhpcy5vcmlSb3cgPSByb3c7XG4gICAgICAgIHRoaXMuY3VyQ29sID0gY29sO1xuICAgICAgICB0aGlzLmN1clJvdyA9IHJvdztcblxuICAgICAgICBsZXQgc3ByaXRlID0gdGhpcy5ub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAvLyDljYfnuqcyLjDlkI5zZXRSZWN05aSx5pWIIFxuICAgICAgICAvLyBzcHJpdGUuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGhpcy50ZXh0dXJlKTtcbiAgICAgICAgLy8gbGV0IHJlY3QgPSBzcHJpdGUuc3ByaXRlRnJhbWUuZ2V0UmVjdCgpO1xuICAgICAgICBsZXQgcmVjdCA9IGNjLnJlY3QoMCwgMCwgdGhpcy50ZXh0dXJlLndpZHRoLCB0aGlzLnRleHR1cmUuaGVpZ2h0KTtcbiAgICAgICAgbGV0IG5ld1JlY3RXaWR0aCA9IHJlY3Qud2lkdGggLyBjb2xOdW07XG4gICAgICAgIGxldCBuZXdSZWN0SGVpZ2h0ID0gcmVjdC5oZWlnaHQgLyBjb2xOdW07XG4gICAgICAgIGxldCBuZXdSZWN0WCA9IGNvbCAqIG5ld1JlY3RXaWR0aDtcbiAgICAgICAgbGV0IG5ld1JlY3RZID0gKGNvbE51bSAtIHJvdyAtIDEpICogbmV3UmVjdEhlaWdodDtcbiAgICAgICAgbGV0IG5ld1JlY3QgPSBjYy5yZWN0KG5ld1JlY3RYLCBuZXdSZWN0WSwgbmV3UmVjdFdpZHRoLCBuZXdSZWN0SGVpZ2h0KTtcbiAgICAgICAgLy8gc3ByaXRlLnNwcml0ZUZyYW1lLnNldFJlY3QobmV3UmVjdCk7XG4gICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0aGlzLnRleHR1cmUsIG5ld1JlY3QpO1xuXG4gICAgICAgIHRoaXMubm9kZS53aWR0aCA9IGNvbFdpZHRoO1xuICAgICAgICB0aGlzLm5vZGUuaGVpZ2h0ID0gY29sV2lkdGg7XG5cbiAgICAgICAgdGhpcy5pc0JsYW5rID0gdGhpcy5vcmlDb2wgPT09IGNvbE51bSAtIDEgJiYgdGhpcy5vcmlSb3cgPT09IDA7XG4gICAgICAgIGlmICh0aGlzLmlzQmxhbmspIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxufSJdfQ==