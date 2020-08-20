"use strict";
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