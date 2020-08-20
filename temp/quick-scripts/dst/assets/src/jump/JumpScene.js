
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/jump/JumpScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7df288Am4VDaoxBjM38OlOw', 'JumpScene');
// src/jump/JumpScene.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.JumpScene = void 0;
var JumpStage_1 = require("./JumpStage");
var JumpConstants_1 = require("./JumpConstants");
var JumpProgress_1 = require("./JumpProgress");
var G_1 = require("../G");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var JumpScene = /** @class */ (function (_super) {
    __extends(JumpScene, _super);
    function JumpScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.stage = null;
        _this.progress = null;
        _this.ignoreStoryButton = null;
        _this.state = JumpConstants_1.STATE.NONE;
        return _this;
    }
    JumpScene.prototype.start = function () {
        this.addListeners();
        this.startGame();
    };
    JumpScene.prototype.startGame = function () {
        var _this = this;
        this.state = JumpConstants_1.STATE.READY;
        this.stage.init(this);
        this.stage.showStartStory(function () {
            _this.ignoreStoryButton.active = false;
            _this.progress.init(200);
            _this.progress.show();
            _this.state = JumpConstants_1.STATE.START;
            _this.stage.startGame();
        }, this);
    };
    JumpScene.prototype.overGame = function (isSuccess) {
        var _this = this;
        if (isSuccess) {
            this.progress.hide();
            this.state = JumpConstants_1.STATE.OVER;
            this.stage.endGame(function () {
                G_1.G.gameRoot.showMaskMessage("原来我不是男主", {
                    label: "打扰了",
                    cb: function () {
                        G_1.G.returnHall();
                    },
                    target: _this
                });
            }, this);
        }
        else {
            this.state = JumpConstants_1.STATE.OVER;
            G_1.G.gameRoot.showMaskMessage("缘已至此", {
                label: "放不下",
                cb: function () {
                    _this.stage.startGame();
                    _this.state = JumpConstants_1.STATE.START;
                    _this.progress.updateProgress(0);
                },
                target: this
            }, {
                label: "算了吧",
                cb: function () {
                    G_1.G.returnHall();
                },
                target: this
            });
        }
    };
    JumpScene.prototype.onScreenTouchStart = function () {
        if (this.state === JumpConstants_1.STATE.START) {
            this.stage.playerReadyJump();
        }
    };
    JumpScene.prototype.onScreenTouchEnd = function () {
        var _this = this;
        if (this.state === JumpConstants_1.STATE.START) {
            this.stage.playerJump(function (playerIndex, needNewBlock) {
                if (playerIndex === -1) {
                    _this.state = JumpConstants_1.STATE.NONE;
                    _this.stage.playerDie(function () {
                        _this.overGame(false);
                    }, _this);
                }
                else {
                    var isSuccess = _this.progress.updateProgress(playerIndex);
                    if (isSuccess) {
                        _this.overGame(true);
                    }
                    else {
                        if (needNewBlock) {
                            _this.stage.addNewBlock();
                        }
                    }
                }
            }, this);
        }
    };
    JumpScene.prototype.ignoreStory = function () {
        this.stage.ignoreStory();
    };
    JumpScene.prototype.addListeners = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onScreenTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onScreenTouchEnd, this);
    };
    JumpScene.prototype.removeListeners = function () {
    };
    __decorate([
        property(JumpStage_1.Stage)
    ], JumpScene.prototype, "stage", void 0);
    __decorate([
        property(JumpProgress_1.Progress)
    ], JumpScene.prototype, "progress", void 0);
    __decorate([
        property(cc.Node)
    ], JumpScene.prototype, "ignoreStoryButton", void 0);
    JumpScene = __decorate([
        ccclass
    ], JumpScene);
    return JumpScene;
}(cc.Component));
exports.JumpScene = JumpScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxqdW1wXFxKdW1wU2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx5Q0FBb0M7QUFDcEMsaURBQXdDO0FBQ3hDLCtDQUEwQztBQUMxQywwQkFBeUI7QUFFbkIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBK0IsNkJBQVk7SUFBM0M7UUFBQSxxRUFvR0M7UUFqR1csV0FBSyxHQUFVLElBQUksQ0FBQztRQUVwQixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLHVCQUFpQixHQUFZLElBQUksQ0FBQztRQUVuQyxXQUFLLEdBQVUscUJBQUssQ0FBQyxJQUFJLENBQUM7O0lBMkZyQyxDQUFDO0lBekZHLHlCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTyw2QkFBUyxHQUFqQjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxDQUFDLEtBQUssR0FBRyxxQkFBSyxDQUFDLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQztZQUN0QixLQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN0QyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN4QixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxLQUFLLEdBQUcscUJBQUssQ0FBQyxLQUFLLENBQUM7WUFDekIsS0FBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMzQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixD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SSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFTyxtQ0FBZSxHQUF2QjtJQUVBLENBQUM7SUEvRkQ7UUFEQyxRQUFRLENBQUMsaUJBQUssQ0FBQzs0Q0FDWTtJQUU1QjtRQURDLFFBQVEsQ0FBQyx1QkFBUSxDQUFDOytDQUNlO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0RBQ3dCO0lBUGpDLFNBQVM7UUFEckIsT0FBTztPQUNLLFNBQVMsQ0FvR3JCO0lBQUQsZ0JBQUM7Q0FwR0QsQUFvR0MsQ0FwRzhCLEVBQUUsQ0FBQyxTQUFTLEdBb0cxQztBQXBHWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL0p1bXBQbGF5ZXJcIjtcbmltcG9ydCB7IFN0YWdlIH0gZnJvbSBcIi4vSnVtcFN0YWdlXCI7XG5pbXBvcnQgeyBTVEFURSB9IGZyb20gXCIuL0p1bXBDb25zdGFudHNcIjtcbmltcG9ydCB7IFByb2dyZXNzIH0gZnJvbSBcIi4vSnVtcFByb2dyZXNzXCI7XG5pbXBvcnQgeyBHIH0gZnJvbSBcIi4uL0dcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBKdW1wU2NlbmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KFN0YWdlKVxuICAgIHByaXZhdGUgc3RhZ2U6IFN0YWdlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoUHJvZ3Jlc3MpXG4gICAgcHJpdmF0ZSBwcm9ncmVzczogUHJvZ3Jlc3MgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgaWdub3JlU3RvcnlCdXR0b246IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgcHVibGljIHN0YXRlOiBTVEFURSA9IFNUQVRFLk5PTkU7XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXJ0R2FtZSgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFNUQVRFLlJFQURZO1xuICAgICAgICB0aGlzLnN0YWdlLmluaXQodGhpcyk7XG4gICAgICAgIHRoaXMuc3RhZ2Uuc2hvd1N0YXJ0U3RvcnkoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pZ25vcmVTdG9yeUJ1dHRvbi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MuaW5pdCgyMDApO1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzcy5zaG93KCk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gU1RBVEUuU1RBUlQ7XG4gICAgICAgICAgICB0aGlzLnN0YWdlLnN0YXJ0R2FtZSgpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG92ZXJHYW1lKGlzU3VjY2VzczogYm9vbGVhbikge1xuICAgICAgICBpZiAoaXNTdWNjZXNzKSB7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzLmhpZGUoKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBTVEFURS5PVkVSO1xuICAgICAgICAgICAgdGhpcy5zdGFnZS5lbmRHYW1lKCgpPT57XG4gICAgICAgICAgICAgICAgRy5nYW1lUm9vdC5zaG93TWFza01lc3NhZ2UoXCLljp/mnaXmiJHkuI3mmK/nlLfkuLtcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIuaJk+aJsOS6hlwiLCBjYjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgRy5yZXR1cm5IYWxsKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIHRhcmdldDogdGhpc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSx0aGlzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBTVEFURS5PVkVSO1xuICAgICAgICAgICAgRy5nYW1lUm9vdC5zaG93TWFza01lc3NhZ2UoXCLnvJjlt7Loh7PmraRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIuaUvuS4jeS4i1wiLCBjYjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFnZS5zdGFydEdhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBTVEFURS5TVEFSVDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MudXBkYXRlUHJvZ3Jlc3MoMCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIHRhcmdldDogdGhpc1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLnrpfkuoblkKdcIiwgY2I6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEcucmV0dXJuSGFsbCgpO1xuICAgICAgICAgICAgICAgICAgICB9LCB0YXJnZXQ6IHRoaXNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblNjcmVlblRvdWNoU3RhcnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBTVEFURS5TVEFSVCkge1xuICAgICAgICAgICAgdGhpcy5zdGFnZS5wbGF5ZXJSZWFkeUp1bXAoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25TY3JlZW5Ub3VjaEVuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFNUQVRFLlNUQVJUKSB7XG4gICAgICAgICAgICB0aGlzLnN0YWdlLnBsYXllckp1bXAoKHBsYXllckluZGV4OiBudW1iZXIsIG5lZWROZXdCbG9jazogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFNUQVRFLk5PTkU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhZ2UucGxheWVyRGllKCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm92ZXJHYW1lKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSx0aGlzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaXNTdWNjZXNzID0gdGhpcy5wcm9ncmVzcy51cGRhdGVQcm9ncmVzcyhwbGF5ZXJJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1N1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3ZlckdhbWUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmVlZE5ld0Jsb2NrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFnZS5hZGROZXdCbG9jaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGlnbm9yZVN0b3J5KCkge1xuICAgICAgICB0aGlzLnN0YWdlLmlnbm9yZVN0b3J5KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblNjcmVlblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uU2NyZWVuVG91Y2hFbmQsIHRoaXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVtb3ZlTGlzdGVuZXJzKCkge1xuXG4gICAgfVxuXG59XG4iXX0=