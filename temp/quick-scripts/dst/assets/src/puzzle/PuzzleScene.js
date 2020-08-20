
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/puzzle/PuzzleScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c06b53OK21HfoqRmsnlNUNX', 'PuzzleScene');
// src/puzzle/PuzzleScene.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.PuzzleScene = void 0;
var PuzzleConstants_1 = require("./PuzzleConstants");
var PuzzleBoard_1 = require("./PuzzleBoard");
var G_1 = require("../G");
var Timer_1 = require("../shared/Timer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PuzzleScene = /** @class */ (function (_super) {
    __extends(PuzzleScene, _super);
    function PuzzleScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.board = null;
        _this.timer = null;
        _this.winPanel = null;
        _this.level = 3;
        _this.state = PuzzleConstants_1.STATE.NONE;
        return _this;
    }
    PuzzleScene.prototype.start = function () {
        this.addListeners();
        this.board.init(this);
        this.startGame();
    };
    PuzzleScene.prototype.startGame = function () {
        this.winPanel.active = false;
        this.state = PuzzleConstants_1.STATE.START;
        this.board.reset(this.level);
        this.timer.reset();
        this.timer.run();
    };
    PuzzleScene.prototype.overGame = function () {
        this.winPanel.active = true;
        this.state = PuzzleConstants_1.STATE.OVER;
        this.timer.stop();
        G_1.G.gameRoot.showMaskMessage("你坚持了" + this.timer.time.toFixed(1) + "秒", { label: "呵呵" });
    };
    PuzzleScene.prototype.onBoardTouch = function (x, y) {
        if (this.state = PuzzleConstants_1.STATE.START) {
            var isMove = this.board.movePiece(x, y);
            if (!isMove) {
                G_1.G.gameRoot.showTip("不符合规则");
            }
            else {
                if (this.board.judgeWin()) {
                    this.overGame();
                }
            }
        }
    };
    PuzzleScene.prototype.onBtnLevelEasy = function () {
        this.level = 3;
        this.startGame();
    };
    PuzzleScene.prototype.onBtnLevelNormal = function () {
        this.level = 5;
        this.startGame();
    };
    PuzzleScene.prototype.onBtnLevelHard = function () {
        this.level = 10;
        this.startGame();
    };
    PuzzleScene.prototype.onBtnReturn = function () {
        G_1.G.returnHall();
    };
    PuzzleScene.prototype.onBtnRestart = function () {
        this.startGame();
    };
    PuzzleScene.prototype.addListeners = function () {
    };
    PuzzleScene.prototype.removeListeners = function () {
    };
    __decorate([
        property(PuzzleBoard_1.PuzzleBoard)
    ], PuzzleScene.prototype, "board", void 0);
    __decorate([
        property(Timer_1.Timer)
    ], PuzzleScene.prototype, "timer", void 0);
    __decorate([
        property(cc.Node)
    ], PuzzleScene.prototype, "winPanel", void 0);
    PuzzleScene = __decorate([
        ccclass
    ], PuzzleScene);
    return PuzzleScene;
}(cc.Component));
exports.PuzzleScene = PuzzleScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxwdXp6bGVcXFB1enpsZVNjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscURBQTBDO0FBQzFDLDZDQUE0QztBQUM1QywwQkFBeUI7QUFDekIseUNBQXdDO0FBRWxDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWlDLCtCQUFZO0lBQTdDO1FBQUEscUVBNkVDO1FBMUVXLFdBQUssR0FBZ0IsSUFBSSxDQUFDO1FBRTFCLFdBQUssR0FBVSxJQUFJLENBQUM7UUFFcEIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLFdBQUssR0FBVSx1QkFBSyxDQUFDLElBQUksQ0FBQzs7SUFtRXJDLENBQUM7SUFqRUcsMkJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVPLCtCQUFTLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsdUJBQUssQ0FBQyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRU8sOEJBQVEsR0FBaEI7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyx1QkFBSyxDQUFDLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xCLEtBQUMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUVNLGtDQUFZLEdBQW5CLFVBQW9CLENBQVMsRUFBRSxDQUFTO1FBQ3BDLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyx1QkFBSyxDQUFDLEtBQUssRUFBRTtZQUMxQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDVCxLQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMvQjtpQkFBTTtnQkFDSCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUU7b0JBQ3ZCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDbkI7YUFDSjtTQUNKO0lBQ0wsQ0FBQztJQUVNLG9DQUFjLEdBQXJCO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVNLHNDQUFnQixHQUF2QjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTSxvQ0FBYyxHQUFyQjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsaUNBQVcsR0FBWDtRQUNJLEtBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsa0NBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRU8sa0NBQVksR0FBcEI7SUFFQSxDQUFDO0lBRU8scUNBQWUsR0FBdkI7SUFFQSxDQUFDO0lBeEVEO1FBREMsUUFBUSxDQUFDLHlCQUFXLENBQUM7OENBQ1k7SUFFbEM7UUFEQyxRQUFRLENBQUMsYUFBSyxDQUFDOzhDQUNZO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ2U7SUFQeEIsV0FBVztRQUR2QixPQUFPO09BQ0ssV0FBVyxDQTZFdkI7SUFBRCxrQkFBQztDQTdFRCxBQTZFQyxDQTdFZ0MsRUFBRSxDQUFDLFNBQVMsR0E2RTVDO0FBN0VZLGtDQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU1RBVEUgfSBmcm9tIFwiLi9QdXp6bGVDb25zdGFudHNcIjtcbmltcG9ydCB7IFB1enpsZUJvYXJkIH0gZnJvbSBcIi4vUHV6emxlQm9hcmRcIjtcbmltcG9ydCB7IEcgfSBmcm9tIFwiLi4vR1wiO1xuaW1wb3J0IHsgVGltZXIgfSBmcm9tIFwiLi4vc2hhcmVkL1RpbWVyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgUHV6emxlU2NlbmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KFB1enpsZUJvYXJkKVxuICAgIHByaXZhdGUgYm9hcmQ6IFB1enpsZUJvYXJkID0gbnVsbDtcbiAgICBAcHJvcGVydHkoVGltZXIpXG4gICAgcHJpdmF0ZSB0aW1lcjogVGltZXIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgd2luUGFuZWw6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBsZXZlbDogbnVtYmVyID0gMztcbiAgICBwdWJsaWMgc3RhdGU6IFNUQVRFID0gU1RBVEUuTk9ORTtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICAgICAgICB0aGlzLmJvYXJkLmluaXQodGhpcyk7XG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGFydEdhbWUoKSB7XG4gICAgICAgIHRoaXMud2luUGFuZWwuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBTVEFURS5TVEFSVDtcbiAgICAgICAgdGhpcy5ib2FyZC5yZXNldCh0aGlzLmxldmVsKTtcbiAgICAgICAgdGhpcy50aW1lci5yZXNldCgpO1xuICAgICAgICB0aGlzLnRpbWVyLnJ1bigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb3ZlckdhbWUoKSB7XG4gICAgICAgIHRoaXMud2luUGFuZWwuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFNUQVRFLk9WRVI7XG4gICAgICAgIHRoaXMudGltZXIuc3RvcCgpO1xuICAgICAgICBHLmdhbWVSb290LnNob3dNYXNrTWVzc2FnZShcIuS9oOWdmuaMgeS6hlwiICsgdGhpcy50aW1lci50aW1lLnRvRml4ZWQoMSkgKyBcIuenklwiLCB7IGxhYmVsOiBcIuWRteWRtVwiIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkJvYXJkVG91Y2goeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPSBTVEFURS5TVEFSVCkge1xuICAgICAgICAgICAgbGV0IGlzTW92ZSA9IHRoaXMuYm9hcmQubW92ZVBpZWNlKHgsIHkpO1xuICAgICAgICAgICAgaWYgKCFpc01vdmUpIHtcbiAgICAgICAgICAgICAgICBHLmdhbWVSb290LnNob3dUaXAoXCLkuI3nrKblkIjop4TliJlcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkLmp1ZGdlV2luKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdmVyR2FtZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvbkJ0bkxldmVsRWFzeSgpIHtcbiAgICAgICAgdGhpcy5sZXZlbCA9IDM7XG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uQnRuTGV2ZWxOb3JtYWwoKSB7XG4gICAgICAgIHRoaXMubGV2ZWwgPSA1O1xuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkJ0bkxldmVsSGFyZCgpIHtcbiAgICAgICAgdGhpcy5sZXZlbCA9IDEwO1xuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xuICAgIH1cblxuICAgIG9uQnRuUmV0dXJuKCkge1xuICAgICAgICBHLnJldHVybkhhbGwoKTtcbiAgICB9XG5cbiAgICBvbkJ0blJlc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRMaXN0ZW5lcnMoKSB7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbW92ZUxpc3RlbmVycygpIHtcblxuICAgIH1cblxufVxuIl19