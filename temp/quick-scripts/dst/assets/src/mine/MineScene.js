
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/mine/MineScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '67198fHIXNKkbYuV6JCgYzA', 'MineScene');
// src/mine/MineScene.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.MineScene = void 0;
var MnieBoard_1 = require("./MnieBoard");
var G_1 = require("../G");
var MineConstans_1 = require("./MineConstans");
var MineLevelLabel_1 = require("./MineLevelLabel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MineScene = /** @class */ (function (_super) {
    __extends(MineScene, _super);
    function MineScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.board = null;
        _this.bombNumLabel = null;
        _this.flagNumLabel = null;
        _this.levelLabel = null;
        _this.state = MineConstans_1.STATE.NONE;
        _this.level = 1;
        _this.maxLevel = 20;
        return _this;
    }
    MineScene.prototype.start = function () {
        this.board.init(this);
        this.maxLevel = this.board.getMaxLevel();
        this.startGame(1);
    };
    MineScene.prototype.startGame = function (level) {
        this.level = level;
        this.state = MineConstans_1.STATE.START;
        this.board.reset(level);
        this.levelLabel.level = level;
        this.bombNumLabel.string = this.board.getBombNum() + "";
        this.flagNumLabel.string = this.board.getFlagNum() + "";
    };
    MineScene.prototype.overGame = function (isWin) {
        var _this = this;
        this.state = MineConstans_1.STATE.OVER;
        if (isWin) {
            if (this.level === this.maxLevel) {
                G_1.G.gameRoot.showMaskMessage("恭喜通关!\n获得雷公称号!", { label: "233", cb: function () { G_1.G.returnHall(); }, target: this });
            }
            else {
                G_1.G.gameRoot.showMaskMessage("恭喜通过第" + this.level + "关!", {
                    label: "下一关",
                    cb: function () {
                        _this.level++;
                        _this.startGame(_this.level);
                    },
                    target: this
                }, { label: "不玩了", cb: function () { G_1.G.returnHall(); }, target: this });
            }
        }
        else {
            G_1.G.gameRoot.showMaskMessage("你死在了第" + this.level + "关!", {
                label: "续命",
                cb: function () {
                    _this.startGame(_this.level);
                },
                target: this
            }, { label: "不玩了", cb: function () { G_1.G.returnHall(); }, target: this });
        }
    };
    MineScene.prototype.onClickPiece = function (piece) {
        if (this.state === MineConstans_1.STATE.START) {
            this.board.openPiece(piece);
            var bombNum = this.board.getBombNum();
            this.bombNumLabel.string = bombNum + "";
        }
    };
    MineScene.prototype.onPressPiece = function (piece) {
        if (this.state === MineConstans_1.STATE.START) {
            this.board.flagPiece(piece);
            var flagNum = this.board.getFlagNum();
            this.flagNumLabel.string = flagNum + "";
        }
    };
    MineScene.prototype.onBtnReturn = function () {
        G_1.G.returnHall();
    };
    MineScene.prototype.onBtnRestart = function () {
        this.startGame(this.level);
    };
    __decorate([
        property(MnieBoard_1.Board)
    ], MineScene.prototype, "board", void 0);
    __decorate([
        property(cc.Label)
    ], MineScene.prototype, "bombNumLabel", void 0);
    __decorate([
        property(cc.Label)
    ], MineScene.prototype, "flagNumLabel", void 0);
    __decorate([
        property(MineLevelLabel_1.MineLevelLabel)
    ], MineScene.prototype, "levelLabel", void 0);
    MineScene = __decorate([
        ccclass
    ], MineScene);
    return MineScene;
}(cc.Component));
exports.MineScene = MineScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxtaW5lXFxNaW5lU2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx5Q0FBb0M7QUFDcEMsMEJBQXlCO0FBQ3pCLCtDQUF1QztBQUN2QyxtREFBa0Q7QUFFNUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBK0IsNkJBQVk7SUFBM0M7UUFBQSxxRUFtRkM7UUFoRlcsV0FBSyxHQUFVLElBQUksQ0FBQztRQUVwQixrQkFBWSxHQUFhLElBQUksQ0FBQztRQUU5QixrQkFBWSxHQUFhLElBQUksQ0FBQztRQUU5QixnQkFBVSxHQUFtQixJQUFJLENBQUM7UUFFbEMsV0FBSyxHQUFVLG9CQUFLLENBQUMsSUFBSSxDQUFDO1FBQzFCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsY0FBUSxHQUFXLEVBQUUsQ0FBQzs7SUFzRWxDLENBQUM7SUFwRUcseUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCw2QkFBUyxHQUFULFVBQVUsS0FBYTtRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLG9CQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FB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QztJQS9FRDtRQURDLFFBQVEsQ0FBQyxpQkFBSyxDQUFDOzRDQUNZO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bURBQ21CO0lBRXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bURBQ21CO0lBRXRDO1FBREMsUUFBUSxDQUFDLCtCQUFjLENBQUM7aURBQ2lCO0lBVGpDLFNBQVM7UUFEckIsT0FBTztPQUNLLFNBQVMsQ0FtRnJCO0lBQUQsZ0JBQUM7Q0FuRkQsQUFtRkMsQ0FuRjhCLEVBQUUsQ0FBQyxTQUFTLEdBbUYxQztBQW5GWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpZWNlIH0gZnJvbSBcIi4vTWluZVBpZWNlXCI7XG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gXCIuL01uaWVCb2FyZFwiO1xuaW1wb3J0IHsgRyB9IGZyb20gXCIuLi9HXCI7XG5pbXBvcnQgeyBTVEFURSB9IGZyb20gXCIuL01pbmVDb25zdGFuc1wiO1xuaW1wb3J0IHsgTWluZUxldmVsTGFiZWwgfSBmcm9tIFwiLi9NaW5lTGV2ZWxMYWJlbFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIE1pbmVTY2VuZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoQm9hcmQpXG4gICAgcHJpdmF0ZSBib2FyZDogQm9hcmQgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwcml2YXRlIGJvbWJOdW1MYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwcml2YXRlIGZsYWdOdW1MYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShNaW5lTGV2ZWxMYWJlbClcbiAgICBwcml2YXRlIGxldmVsTGFiZWw6IE1pbmVMZXZlbExhYmVsID0gbnVsbDtcblxuICAgIHByaXZhdGUgc3RhdGU6IFNUQVRFID0gU1RBVEUuTk9ORTtcbiAgICBwcml2YXRlIGxldmVsOiBudW1iZXIgPSAxO1xuICAgIHByaXZhdGUgbWF4TGV2ZWw6IG51bWJlciA9IDIwO1xuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQuaW5pdCh0aGlzKTtcbiAgICAgICAgdGhpcy5tYXhMZXZlbCA9IHRoaXMuYm9hcmQuZ2V0TWF4TGV2ZWwoKTtcbiAgICAgICAgdGhpcy5zdGFydEdhbWUoMSk7XG4gICAgfVxuXG4gICAgc3RhcnRHYW1lKGxldmVsOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICAgICAgICB0aGlzLnN0YXRlID0gU1RBVEUuU1RBUlQ7XG4gICAgICAgIHRoaXMuYm9hcmQucmVzZXQobGV2ZWwpO1xuICAgICAgICB0aGlzLmxldmVsTGFiZWwubGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgdGhpcy5ib21iTnVtTGFiZWwuc3RyaW5nID0gdGhpcy5ib2FyZC5nZXRCb21iTnVtKCkgKyBcIlwiO1xuICAgICAgICB0aGlzLmZsYWdOdW1MYWJlbC5zdHJpbmcgPSB0aGlzLmJvYXJkLmdldEZsYWdOdW0oKSArIFwiXCI7XG4gICAgfVxuXG4gICAgb3ZlckdhbWUoaXNXaW46IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFNUQVRFLk9WRVI7XG4gICAgICAgIGlmIChpc1dpbikge1xuICAgICAgICAgICAgaWYgKHRoaXMubGV2ZWwgPT09IHRoaXMubWF4TGV2ZWwpIHtcbiAgICAgICAgICAgICAgICBHLmdhbWVSb290LnNob3dNYXNrTWVzc2FnZShcIuaBreWWnOmAmuWFsyFcXG7ojrflvpfpm7flhaznp7Dlj7chXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6IFwiMjMzXCIsIGNiOiAoKSA9PiB7IEcucmV0dXJuSGFsbCgpIH0sIHRhcmdldDogdGhpcyB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgRy5nYW1lUm9vdC5zaG93TWFza01lc3NhZ2UoXCLmga3llpzpgJrov4fnrKxcIiArIHRoaXMubGV2ZWwgKyBcIuWFsyFcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi5LiL5LiA5YWzXCIsIGNiOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXZlbCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRHYW1lKHRoaXMubGV2ZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGFyZ2V0OiB0aGlzXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6IFwi5LiN546p5LqGXCIsIGNiOiAoKSA9PiB7IEcucmV0dXJuSGFsbCgpIH0sIHRhcmdldDogdGhpcyB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIEcuZ2FtZVJvb3Quc2hvd01hc2tNZXNzYWdlKFwi5L2g5q275Zyo5LqG56ysXCIgKyB0aGlzLmxldmVsICsgXCLlhbMhXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLnu63lkb1cIiwgY2I6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRHYW1lKHRoaXMubGV2ZWwpO1xuICAgICAgICAgICAgICAgICAgICB9LCB0YXJnZXQ6IHRoaXNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHsgbGFiZWw6IFwi5LiN546p5LqGXCIsIGNiOiAoKSA9PiB7IEcucmV0dXJuSGFsbCgpIH0sIHRhcmdldDogdGhpcyB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DbGlja1BpZWNlKHBpZWNlOiBQaWVjZSkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gU1RBVEUuU1RBUlQpIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmQub3BlblBpZWNlKHBpZWNlKTtcbiAgICAgICAgICAgIGxldCBib21iTnVtID0gdGhpcy5ib2FyZC5nZXRCb21iTnVtKCk7XG4gICAgICAgICAgICB0aGlzLmJvbWJOdW1MYWJlbC5zdHJpbmcgPSBib21iTnVtICsgXCJcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUHJlc3NQaWVjZShwaWVjZTogUGllY2UpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFNUQVRFLlNUQVJUKSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkLmZsYWdQaWVjZShwaWVjZSk7XG4gICAgICAgICAgICBsZXQgZmxhZ051bSA9IHRoaXMuYm9hcmQuZ2V0RmxhZ051bSgpO1xuICAgICAgICAgICAgdGhpcy5mbGFnTnVtTGFiZWwuc3RyaW5nID0gZmxhZ051bSArIFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkJ0blJldHVybigpIHtcbiAgICAgICAgRy5yZXR1cm5IYWxsKCk7XG4gICAgfVxuXG4gICAgb25CdG5SZXN0YXJ0KCkge1xuICAgICAgICB0aGlzLnN0YXJ0R2FtZSh0aGlzLmxldmVsKTtcbiAgICB9XG59Il19