"use strict";
cc._RF.push(module, 'dc931w3hAtIsYZIL9HDvPQN', 'LinkScene');
// src/link/LinkScene.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkScene = void 0;
var LinkBoard_1 = require("./LinkBoard");
var LinkConstants_1 = require("./LinkConstants");
var G_1 = require("../G");
var Timer_1 = require("../shared/Timer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LinkScene = /** @class */ (function (_super) {
    __extends(LinkScene, _super);
    function LinkScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.board = null;
        _this.rewardNode = null;
        _this.timer = null;
        _this.state = LinkConstants_1.STATE.NONE;
        return _this;
    }
    LinkScene.prototype.start = function () {
        this.board.init(this);
        this.startGame();
    };
    LinkScene.prototype.startGame = function () {
        this.state = LinkConstants_1.STATE.START;
        this.board.reset();
        this.rewardNode.active = false;
        this.timer.reset();
        this.timer.run();
    };
    LinkScene.prototype.overGame = function () {
        var _this = this;
        this.state = LinkConstants_1.STATE.OVER;
        this.timer.stop();
        G_1.G.gameRoot.showMaskMessage("你用了" + this.timer.time.toFixed(1) + "秒", { label: "领取奖励", cb: function () { _this.rewardNode.active = true; } });
    };
    LinkScene.prototype.onBtnReturn = function () {
        G_1.G.returnHall();
    };
    LinkScene.prototype.onBtnRestart = function () {
        this.startGame();
    };
    __decorate([
        property(LinkBoard_1.LinkBoard)
    ], LinkScene.prototype, "board", void 0);
    __decorate([
        property(cc.Node)
    ], LinkScene.prototype, "rewardNode", void 0);
    __decorate([
        property(Timer_1.Timer)
    ], LinkScene.prototype, "timer", void 0);
    LinkScene = __decorate([
        ccclass
    ], LinkScene);
    return LinkScene;
}(cc.Component));
exports.LinkScene = LinkScene;

cc._RF.pop();