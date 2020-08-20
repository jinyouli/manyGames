
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/snake/SnakeScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2b466sS/aBAA5gHjzWJtbJX', 'SnakeScene');
// src/snake/SnakeScene.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.SnakeScene = void 0;
var SnakeBoard_1 = require("./SnakeBoard");
var SnakeConstants_1 = require("./SnakeConstants");
var G_1 = require("../G");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SnakeScene = /** @class */ (function (_super) {
    __extends(SnakeScene, _super);
    function SnakeScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scoreLabel = null;
        _this.board = null;
        _this.score = 0;
        return _this;
    }
    SnakeScene.prototype.start = function () {
        var _this = this;
        this.board.init(this);
        G_1.G.gameRoot.showTip("四方向手势滑动");
        this.startGame();
        /**
         * 手势，键盘，按钮操作
         */
        this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            var startPos = event.getStartLocation();
            var endPos = event.getLocation();
            var offsetX = endPos.x - startPos.x;
            var offsetY = endPos.y - startPos.y;
            if (Math.abs(offsetX) > Math.abs(offsetY)) {
                if (offsetX > 0) {
                    _this.onBtnRight();
                }
                else {
                    _this.onBtnLeft();
                }
            }
            else {
                if (offsetY > 0) {
                    _this.onBtnUp();
                }
                else {
                    _this.onBtnDown();
                }
            }
        }, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function (event) {
            switch (event.keyCode) {
                case cc.KEY.left:
                case cc.KEY.a:
                    _this.onBtnLeft();
                    break;
                case cc.KEY.right:
                case cc.KEY.d:
                    _this.onBtnRight();
                    break;
                case cc.KEY.up:
                case cc.KEY.w:
                    _this.onBtnUp();
                    break;
                case cc.KEY.down:
                case cc.KEY.s:
                    _this.onBtnDown();
                    break;
            }
        }, this);
    };
    SnakeScene.prototype.startGame = function () {
        this.score = 0;
        this.scoreLabel.string = this.score + "";
        this.board.startGame();
    };
    SnakeScene.prototype.overGame = function () {
        G_1.G.gameRoot.showMaskMessage("你吃了" + this.score + "坨", { label: "厉害了" });
    };
    SnakeScene.prototype.onEatFood = function () {
        this.score += 1;
        this.scoreLabel.string = this.score + "";
        this.board.addFood();
        var level = this.score / 10 | 0;
        this.board.updateLevel(level);
    };
    SnakeScene.prototype.onBtnLeft = function () {
        this.board.turnSnake(SnakeConstants_1.DIRECTION.LEFT);
    };
    SnakeScene.prototype.onBtnRight = function () {
        this.board.turnSnake(SnakeConstants_1.DIRECTION.RIGHT);
    };
    SnakeScene.prototype.onBtnUp = function () {
        this.board.turnSnake(SnakeConstants_1.DIRECTION.UP);
    };
    SnakeScene.prototype.onBtnDown = function () {
        this.board.turnSnake(SnakeConstants_1.DIRECTION.DOWN);
    };
    SnakeScene.prototype.onBtnReturn = function () {
        G_1.G.returnHall();
    };
    SnakeScene.prototype.onBtnRestart = function () {
        this.startGame();
    };
    __decorate([
        property(cc.Label)
    ], SnakeScene.prototype, "scoreLabel", void 0);
    __decorate([
        property(SnakeBoard_1.default)
    ], SnakeScene.prototype, "board", void 0);
    SnakeScene = __decorate([
        ccclass
    ], SnakeScene);
    return SnakeScene;
}(cc.Component));
exports.SnakeScene = SnakeScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzbmFrZVxcU25ha2VTY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFpQztBQUNqQyxtREFBNkM7QUFDN0MsMEJBQXlCO0FBRW5CLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWdDLDhCQUFZO0lBQTVDO1FBQUEscUVBbUdDO1FBaEdHLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRTVCLFdBQUssR0FBVSxJQUFJLENBQUM7UUFFWixXQUFLLEdBQUcsQ0FBQyxDQUFDOztJQTRGdEIsQ0FBQztJQTFGRywwQkFBSyxHQUFMO1FBQUEsaUJBOENDO1FBN0NHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLEtBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQjs7V0FFRztRQUNILElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxVQUFDLEtBQWU7WUFDdEQsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDeEMsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ2pDLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDcEMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ3ZDLElB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QVMsQ0FBQywwQkFBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTyxnQ0FBVyxHQUFuQjtRQUNJLEtBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRU8saUNBQVksR0FBcEI7UUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQTlGRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2tEQUNTO0lBRTVCO1FBREMsUUFBUSxDQUFDLG9CQUFLLENBQUM7NkNBQ0k7SUFMWCxVQUFVO1FBRHRCLE9BQU87T0FDSyxVQUFVLENBbUd0QjtJQUFELGlCQUFDO0NBbkdELEFBbUdDLENBbkcrQixFQUFFLENBQUMsU0FBUyxHQW1HM0M7QUFuR1ksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQm9hcmQgZnJvbSBcIi4vU25ha2VCb2FyZFwiO1xuaW1wb3J0IHsgRElSRUNUSU9OIH0gZnJvbSBcIi4vU25ha2VDb25zdGFudHNcIjtcbmltcG9ydCB7IEcgfSBmcm9tIFwiLi4vR1wiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBTbmFrZVNjZW5lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBzY29yZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KEJvYXJkKVxuICAgIGJvYXJkOiBCb2FyZCA9IG51bGw7XG5cbiAgICBwcml2YXRlIHNjb3JlID0gMDtcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy5ib2FyZC5pbml0KHRoaXMpO1xuICAgICAgICBHLmdhbWVSb290LnNob3dUaXAoXCLlm5vmlrnlkJHmiYvlir/mu5HliqhcIik7XG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmiYvlir/vvIzplK7nm5jvvIzmjInpkq7mk43kvZxcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIChldmVudDogY2MuVG91Y2gpID0+IHtcbiAgICAgICAgICAgIGxldCBzdGFydFBvcyA9IGV2ZW50LmdldFN0YXJ0TG9jYXRpb24oKTtcbiAgICAgICAgICAgIGxldCBlbmRQb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xuICAgICAgICAgICAgbGV0IG9mZnNldFggPSBlbmRQb3MueCAtIHN0YXJ0UG9zLng7XG4gICAgICAgICAgICBsZXQgb2Zmc2V0WSA9IGVuZFBvcy55IC0gc3RhcnRQb3MueTtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhvZmZzZXRYKSA+IE1hdGguYWJzKG9mZnNldFkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9mZnNldFggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25CdG5SaWdodCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25CdG5MZWZ0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAob2Zmc2V0WSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkJ0blVwKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkJ0bkRvd24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIChldmVudCkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoICgoZXZlbnQgYXMgYW55KS5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBjYy5LRVkubGVmdDpcbiAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS5hOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQnRuTGVmdCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS5yaWdodDpcbiAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS5kOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQnRuUmlnaHQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjYy5LRVkudXA6XG4gICAgICAgICAgICAgICAgY2FzZSBjYy5LRVkudzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkJ0blVwKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLmRvd246XG4gICAgICAgICAgICAgICAgY2FzZSBjYy5LRVkuczpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkJ0bkRvd24oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXJ0R2FtZSgpIHtcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSB0aGlzLnNjb3JlICsgXCJcIjtcbiAgICAgICAgdGhpcy5ib2FyZC5zdGFydEdhbWUoKTtcbiAgICB9XG5cbiAgICBvdmVyR2FtZSgpIHtcbiAgICAgICAgRy5nYW1lUm9vdC5zaG93TWFza01lc3NhZ2UoXCLkvaDlkIPkuoZcIiArIHRoaXMuc2NvcmUgKyBcIuWdqFwiLCB7IGxhYmVsOiBcIuWOieWus+S6hlwifSk7XG4gICAgfVxuXG4gICAgb25FYXRGb29kKCkge1xuICAgICAgICB0aGlzLnNjb3JlKz0xO1xuICAgICAgICB0aGlzLnNjb3JlTGFiZWwuc3RyaW5nID0gdGhpcy5zY29yZSArIFwiXCI7XG4gICAgICAgIHRoaXMuYm9hcmQuYWRkRm9vZCgpO1xuICAgICAgICBsZXQgbGV2ZWwgPSB0aGlzLnNjb3JlIC8gMTAgfCAwO1xuICAgICAgICB0aGlzLmJvYXJkLnVwZGF0ZUxldmVsKGxldmVsKTtcbiAgICB9XG5cbiAgICBvbkJ0bkxlZnQoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQudHVyblNuYWtlKERJUkVDVElPTi5MRUZUKTtcbiAgICB9XG5cbiAgICBvbkJ0blJpZ2h0KCkge1xuICAgICAgICB0aGlzLmJvYXJkLnR1cm5TbmFrZShESVJFQ1RJT04uUklHSFQpO1xuICAgIH1cblxuICAgIG9uQnRuVXAoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQudHVyblNuYWtlKERJUkVDVElPTi5VUCk7XG4gICAgfVxuXG4gICAgb25CdG5Eb3duKCkge1xuICAgICAgICB0aGlzLmJvYXJkLnR1cm5TbmFrZShESVJFQ1RJT04uRE9XTik7ICAgIFxuICAgIH1cblxuICAgIHByaXZhdGUgb25CdG5SZXR1cm4oKSB7XG4gICAgICAgIEcucmV0dXJuSGFsbCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25CdG5SZXN0YXJ0KCkge1xuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xuICAgIH1cblxufVxuIl19