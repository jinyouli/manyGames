
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/get47/Get47Piece.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fc55f3NtT5G+KpukC6ZPkmK', 'Get47Piece');
// src/get47/Get47Piece.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Piece = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Piece = /** @class */ (function (_super) {
    __extends(Piece, _super);
    function Piece() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pics = [];
        _this.sprite = null;
        _this.x = 0;
        _this.y = 0;
        _this.posIndex = cc.v2();
        _this.isAlive = true;
        _this._n = 0;
        return _this;
    }
    Object.defineProperty(Piece.prototype, "type", {
        get: function () {
            return this._n;
        },
        set: function (value) {
            this._n = value;
            this.sprite.spriteFrame = this.pics[value - 1];
        },
        enumerable: false,
        configurable: true
    });
    Piece.prototype.init = function (x, y) {
        this.x = x;
        this.y = y;
        this.posIndex = this.node.position;
        this.randomType();
        this.isAlive = true;
    };
    Piece.prototype.randomType = function () {
        this.type = Math.floor(Math.random() * this.pics.length) + 1;
    };
    __decorate([
        property([cc.SpriteFrame])
    ], Piece.prototype, "pics", void 0);
    __decorate([
        property(cc.Sprite)
    ], Piece.prototype, "sprite", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxnZXQ0N1xcR2V0NDdQaWVjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJCLHlCQUFZO0lBQXZDO1FBQUEscUVBK0JDO1FBNUJXLFVBQUksR0FBMEIsRUFBRSxDQUFDO1FBRWpDLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFFMUIsT0FBQyxHQUFXLENBQUMsQ0FBQztRQUNkLE9BQUMsR0FBVyxDQUFDLENBQUM7UUFDZCxjQUFRLEdBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQzVCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFDdkIsUUFBRSxHQUFXLENBQUMsQ0FBQzs7SUFvQjNCLENBQUM7SUFuQkcsc0JBQVcsdUJBQUk7YUFBZjtZQUNJLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNuQixDQUFDO2FBQ0QsVUFBZ0IsS0FBYTtZQUN6QixJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztZQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNuRCxDQUFDOzs7T0FKQTtJQU1NLG9CQUFJLEdBQVgsVUFBWSxDQUFTLEVBQUUsQ0FBUztRQUM1QixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVELDBCQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFFO0lBQ2hFLENBQUM7SUEzQkQ7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7dUNBQ2M7SUFFekM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5Q0FDYTtJQUx4QixLQUFLO1FBRGpCLE9BQU87T0FDSyxLQUFLLENBK0JqQjtJQUFELFlBQUM7Q0EvQkQsQUErQkMsQ0EvQjBCLEVBQUUsQ0FBQyxTQUFTLEdBK0J0QztBQS9CWSxzQkFBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgUGllY2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXG4gICAgcHJpdmF0ZSBwaWNzOiBBcnJheTxjYy5TcHJpdGVGcmFtZT4gPSBbXTtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIHByaXZhdGUgc3ByaXRlOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgcHVibGljIHg6IG51bWJlciA9IDA7XG4gICAgcHVibGljIHk6IG51bWJlciA9IDA7XG4gICAgcHVibGljIHBvc0luZGV4OiBjYy5WZWMyID0gY2MudjIoKTtcbiAgICBwdWJsaWMgaXNBbGl2ZTogYm9vbGVhbiA9IHRydWU7XG4gICAgcHJpdmF0ZSBfbjogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgZ2V0IHR5cGUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX247XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgdHlwZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX24gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLnBpY3NbdmFsdWUgLSAxXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdCh4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnBvc0luZGV4ID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xuICAgICAgICB0aGlzLnJhbmRvbVR5cGUoKTtcbiAgICAgICAgdGhpcy5pc0FsaXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByYW5kb21UeXBlKCl7XG4gICAgICAgIHRoaXMudHlwZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSp0aGlzLnBpY3MubGVuZ3RoKSArIDEgO1xuICAgIH1cbn0iXX0=