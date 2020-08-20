"use strict";
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