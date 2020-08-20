"use strict";
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