
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/tetris/TetrisScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f98a8vySGJO/rrzqvUD1fRq', 'TetrisScene');
// src/tetris/TetrisScene.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TetrisScene = void 0;
var TetrisBoard_1 = require("./TetrisBoard");
var TetrisConstants_1 = require("./TetrisConstants");
var G_1 = require("../G");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TetrisScene = /** @class */ (function (_super) {
    __extends(TetrisScene, _super);
    function TetrisScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.board = null;
        _this.scoreLabel = null;
        _this.nextLabel = null;
        _this.state = TetrisConstants_1.STATE.NONE;
        return _this;
    }
    TetrisScene.prototype.start = function () {
        this.addListeners();
        this.board.init(this);
        this.startGame();
    };
    TetrisScene.prototype.startGame = function () {
        this.state = TetrisConstants_1.STATE.START;
        this.board.reset();
        this.updateScore(0);
    };
    TetrisScene.prototype.stopGame = function (score) {
        var _this = this;
        this.state = TetrisConstants_1.STATE.OVER;
        this.board.stop();
        G_1.G.gameRoot.showMaskMessage("无聊指数：" + score, {
            label: "再来",
            cb: function () {
                _this.startGame();
            },
            target: this
        }, {
            label: "溜了",
            cb: function () {
                G_1.G.returnHall();
            },
            target: this
        });
    };
    TetrisScene.prototype.updateScore = function (score) {
        this.scoreLabel.string = score + "";
    };
    TetrisScene.prototype.updateHint = function (hint) {
        this.nextLabel.string = hint;
    };
    TetrisScene.prototype.onBtnExit = function () {
        this.board.stop();
        G_1.G.returnHall();
    };
    TetrisScene.prototype.onBtnLeft = function () {
        if (this.state === TetrisConstants_1.STATE.START) {
            this.board.playerMove(-1);
        }
    };
    TetrisScene.prototype.onBtnRight = function () {
        if (this.state === TetrisConstants_1.STATE.START) {
            this.board.playerMove(1);
        }
    };
    TetrisScene.prototype.onBtnRotate = function () {
        if (this.state === TetrisConstants_1.STATE.START) {
            this.board.playerRotate(1);
        }
    };
    TetrisScene.prototype.onBtnDrop = function () {
        if (this.state === TetrisConstants_1.STATE.START) {
            this.board.playerDrop();
        }
    };
    TetrisScene.prototype.addListeners = function () {
        var _this = this;
        this.board.node.on(cc.Node.EventType.TOUCH_END, function (event) {
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
                    _this.onBtnRotate();
                }
                else {
                    _this.onBtnDrop();
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
                    _this.onBtnRotate();
                    break;
                case cc.KEY.down:
                case cc.KEY.s:
                    _this.onBtnDrop();
                    break;
            }
        }, this);
    };
    __decorate([
        property(TetrisBoard_1.Board)
    ], TetrisScene.prototype, "board", void 0);
    __decorate([
        property(cc.Label)
    ], TetrisScene.prototype, "scoreLabel", void 0);
    __decorate([
        property(cc.Label)
    ], TetrisScene.prototype, "nextLabel", void 0);
    TetrisScene = __decorate([
        ccclass
    ], TetrisScene);
    return TetrisScene;
}(cc.Component));
exports.TetrisScene = TetrisScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFx0ZXRyaXNcXFRldHJpc1NjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXNDO0FBQ3RDLHFEQUEwQztBQUMxQywwQkFBeUI7QUFFbkIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBaUMsK0JBQVk7SUFBN0M7UUFBQSxxRUFxSEM7UUFsSFcsV0FBSyxHQUFVLElBQUksQ0FBQztRQUVwQixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUU1QixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRTNCLFdBQUssR0FBUyx1QkFBSyxDQUFDLElBQUksQ0FBQzs7SUE0R3JDLENBQUM7SUExR0csMkJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELCtCQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLHVCQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsOEJBQVEsR0FBUixVQUFTLEtBQWE7UUFBdEIsaUJBY0M7UUFiRyxJQUFJLENBQUMsS0FBSyxHQUFHLHVCQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEIsS0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsT0FBTyxHQUFDLEtBQUssRUFDeEM7WUFDSSxLQUFLLEVBQUUsSUFBSTtZQUFFLEVBQUUsRUFBRTtnQkFDYixLQUFJLENB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QkFDNUIsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDakIsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUNqQixNQUFNO2dCQUNWLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7Z0JBQ2xCLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNULEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDbEIsTUFBTTtnQkFDVixLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUNmLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNULEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDbkIsTUFBTTtnQkFDVixLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUNqQixLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDVCxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ2pCLE1BQU07YUFDYjtRQUNMLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFqSEQ7UUFEQyxRQUFRLENBQUMsbUJBQUssQ0FBQzs4Q0FDWTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO21EQUNpQjtJQUVwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2tEQUNnQjtJQVAxQixXQUFXO1FBRHZCLE9BQU87T0FDSyxXQUFXLENBcUh2QjtJQUFELGtCQUFDO0NBckhELEFBcUhDLENBckhnQyxFQUFFLENBQUMsU0FBUyxHQXFINUM7QUFySFksa0NBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb2FyZCB9IGZyb20gXCIuL1RldHJpc0JvYXJkXCI7XG5pbXBvcnQgeyBTVEFURSB9IGZyb20gXCIuL1RldHJpc0NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRyB9IGZyb20gXCIuLi9HXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgVGV0cmlzU2NlbmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KEJvYXJkKVxuICAgIHByaXZhdGUgYm9hcmQ6IEJvYXJkID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHJpdmF0ZSBzY29yZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHByaXZhdGUgbmV4dExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBwcml2YXRlIHN0YXRlOlNUQVRFID0gU1RBVEUuTk9ORTtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICAgICAgICB0aGlzLmJvYXJkLmluaXQodGhpcyk7XG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XG4gICAgfVxuXG4gICAgc3RhcnRHYW1lKCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gU1RBVEUuU1RBUlQ7XG4gICAgICAgIHRoaXMuYm9hcmQucmVzZXQoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTY29yZSgwKTtcbiAgICB9XG5cbiAgICBzdG9wR2FtZShzY29yZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBTVEFURS5PVkVSO1xuICAgICAgICB0aGlzLmJvYXJkLnN0b3AoKTtcbiAgICAgICAgRy5nYW1lUm9vdC5zaG93TWFza01lc3NhZ2UoXCLml6DogYrmjIfmlbDvvJpcIitzY29yZSxcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwi5YaN5p2lXCIsIGNiOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcbiAgICAgICAgICAgIH0sIHRhcmdldDogdGhpc1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCLmupzkuoZcIiwgY2I6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBHLnJldHVybkhhbGwoKTtcbiAgICAgICAgICAgIH0sIHRhcmdldDogdGhpc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGVTY29yZShzY29yZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSBzY29yZSArIFwiXCI7XG4gICAgfVxuXG4gICAgdXBkYXRlSGludChoaW50OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5uZXh0TGFiZWwuc3RyaW5nID0gaGludDtcbiAgICB9XG5cbiAgICBvbkJ0bkV4aXQoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQuc3RvcCgpO1xuICAgICAgICBHLnJldHVybkhhbGwoKTtcbiAgICB9XG5cbiAgICBvbkJ0bkxlZnQoKSB7XG4gICAgICAgIGlmKHRoaXMuc3RhdGUgPT09IFNUQVRFLlNUQVJUKSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkLnBsYXllck1vdmUoLTEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25CdG5SaWdodCgpIHtcbiAgICAgICAgaWYodGhpcy5zdGF0ZSA9PT0gU1RBVEUuU1RBUlQpIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmQucGxheWVyTW92ZSgxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQnRuUm90YXRlKCkge1xuICAgICAgICBpZih0aGlzLnN0YXRlID09PSBTVEFURS5TVEFSVCkge1xuICAgICAgICAgICAgdGhpcy5ib2FyZC5wbGF5ZXJSb3RhdGUoMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkJ0bkRyb3AoKSB7XG4gICAgICAgIGlmKHRoaXMuc3RhdGUgPT09IFNUQVRFLlNUQVJUKSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkLnBsYXllckRyb3AoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYWRkTGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLmJvYXJkLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoZXZlbnQ6IGNjLlRvdWNoKSA9PiB7XG4gICAgICAgICAgICBsZXQgc3RhcnRQb3MgPSBldmVudC5nZXRTdGFydExvY2F0aW9uKCk7XG4gICAgICAgICAgICBsZXQgZW5kUG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgICAgIGxldCBvZmZzZXRYID0gZW5kUG9zLnggLSBzdGFydFBvcy54O1xuICAgICAgICAgICAgbGV0IG9mZnNldFkgPSBlbmRQb3MueSAtIHN0YXJ0UG9zLnk7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMob2Zmc2V0WCkgPiBNYXRoLmFicyhvZmZzZXRZKSkge1xuICAgICAgICAgICAgICAgIGlmIChvZmZzZXRYID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQnRuUmlnaHQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQnRuTGVmdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKG9mZnNldFkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25CdG5Sb3RhdGUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQnRuRHJvcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKChldmVudCBhcyBhbnkpLmtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS5sZWZ0OlxuICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLmE6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25CdG5MZWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLnJpZ2h0OlxuICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLmQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25CdG5SaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS51cDpcbiAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS53OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQnRuUm90YXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLmRvd246XG4gICAgICAgICAgICAgICAgY2FzZSBjYy5LRVkuczpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkJ0bkRyb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH1cbn0iXX0=