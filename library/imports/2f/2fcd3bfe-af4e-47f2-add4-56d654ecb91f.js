"use strict";
cc._RF.push(module, '2fcd3v+r05H8q3UVtZU7Lkf', 'GobangScene');
// src/gobang/GobangScene.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.GobangScene = void 0;
var GobangBoard_1 = require("./GobangBoard");
var GobangConstants_1 = require("./GobangConstants");
var GobangAI_1 = require("./GobangAI");
var G_1 = require("../G");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GobangScene = /** @class */ (function (_super) {
    __extends(GobangScene, _super);
    function GobangScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.board = null;
        _this.ai = null;
        _this.state = GobangConstants_1.NONE;
        return _this;
    }
    GobangScene.prototype.start = function () {
        this.board.init(this);
        this.ai = new GobangAI_1.GobangAI(this.board);
        this.startGame();
    };
    GobangScene.prototype.startGame = function () {
        this.state = GobangConstants_1.BLACK;
        this.board.reset();
        G_1.G.gameRoot.showTip("你是黑棋你先走");
    };
    GobangScene.prototype.overGame = function () {
        if (this.state === GobangConstants_1.BLACK) {
            cc.log("黑棋胜");
            this.state = GobangConstants_1.NONE;
            G_1.G.gameRoot.showMaskMessage("你赢了阿尔法二狗！", { label: "朕知道了", cb: function () { }, target: this });
        }
        else if (this.state === GobangConstants_1.WHITE) {
            cc.log("白旗胜");
            G_1.G.gameRoot.showMaskMessage("你输给了阿尔法二狗！", { label: "服了", cb: function () { }, target: this }, { label: "不服", cb: function () { }, target: this });
            this.state = GobangConstants_1.NONE;
        }
    };
    GobangScene.prototype.onBtnReturn = function () {
        G_1.G.returnHall();
    };
    GobangScene.prototype.onBtnRestart = function () {
        this.startGame();
    };
    GobangScene.prototype.onBoardTouched = function (coor) {
        var _this = this;
        switch (this.state) {
            case GobangConstants_1.NONE:
                break;
            case GobangConstants_1.BLACK:
                var piece = this.board.getPieceByCoor(coor);
                if (piece.color !== GobangConstants_1.NONE) {
                    G_1.G.gameRoot.showTip("这里有子了，你是不是傻");
                    return;
                }
                this.board.placeBlack(coor);
                if (this.board.judgeWin()) {
                    this.overGame();
                }
                else {
                    this.state = GobangConstants_1.WHITE;
                    this.scheduleOnce(function () {
                        _this.board.placeWhite(_this.ai.getNextCoor());
                        if (_this.board.judgeWin()) {
                            _this.overGame();
                        }
                        else {
                            _this.state = GobangConstants_1.BLACK;
                        }
                    }, 1);
                }
                break;
            case GobangConstants_1.WHITE:
                // this.board.placeWhite(coor);
                // if(this.board.judgeWin()) {
                //     cc.log("白棋胜");
                // }else {
                //     this.state = BLACK;
                // }
                break;
            default: break;
        }
    };
    __decorate([
        property(GobangBoard_1.GobangBoard)
    ], GobangScene.prototype, "board", void 0);
    GobangScene = __decorate([
        ccclass
    ], GobangScene);
    return GobangScene;
}(cc.Component));
exports.GobangScene = GobangScene;

cc._RF.pop();