"use strict";
cc._RF.push(module, '05ff4fnZAdCwZScbk1f0GpO', 'ReversiScene');
// src/reversi/ReversiScene.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ReversiScene = void 0;
var ReversiBoard_1 = require("./ReversiBoard");
var ReversiAI_1 = require("./ReversiAI");
var ReversiConstants_1 = require("./ReversiConstants");
var G_1 = require("../G");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ReversiScene = /** @class */ (function (_super) {
    __extends(ReversiScene, _super);
    function ReversiScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.board = null;
        _this.blackScoreLabel = null;
        _this.whiteScoreLabel = null;
        _this.ai = null;
        _this.state = ReversiConstants_1.NONE;
        return _this;
    }
    ReversiScene.prototype.start = function () {
        this.board.init(this);
        this.ai = new ReversiAI_1.ReversiAI(this.board);
        this.startGame();
    };
    ReversiScene.prototype.startGame = function () {
        this.state = ReversiConstants_1.BLACK;
        this.board.reset();
        this.blackScoreLabel.string = "2";
        this.whiteScoreLabel.string = "2";
        G_1.G.gameRoot.showTip("你是黑棋你先走");
    };
    ReversiScene.prototype.overGame = function () {
        var _a = this.board.getPieceCount(), blackPieceSum = _a.blackPieceSum, whitePieceSum = _a.whitePieceSum;
        if (blackPieceSum > whitePieceSum) {
            cc.log("白棋胜");
            G_1.G.gameRoot.showMaskMessage("你赢了阿尔法二狗！", { label: "朕知道了", cb: function () { }, target: this });
        }
        else if (blackPieceSum < whitePieceSum) {
            cc.log("黑棋胜");
            G_1.G.gameRoot.showMaskMessage("你输给了阿尔法二狗！", { label: "服了", cb: function () { }, target: this }, { label: "不服", cb: function () { }, target: this });
        }
        else {
            cc.log("平局");
            G_1.G.gameRoot.showMaskMessage("你和阿尔法二狗五五开!", { label: "朕知道了", cb: function () { }, target: this });
        }
        this.state = ReversiConstants_1.NONE;
    };
    ReversiScene.prototype.updateScore = function () {
        var _a = this.board.getPieceCount(), blackPieceSum = _a.blackPieceSum, whitePieceSum = _a.whitePieceSum;
        this.blackScoreLabel.string = blackPieceSum + "";
        this.whiteScoreLabel.string = whitePieceSum + "";
    };
    ReversiScene.prototype.onBtnReturn = function () {
        G_1.G.returnHall();
    };
    ReversiScene.prototype.onBtnRestart = function () {
        this.startGame();
    };
    ReversiScene.prototype.runAi = function () {
        var _this = this;
        this.scheduleOnce(function () {
            var coor = _this.ai.getNextCoor();
            _this.board.placeWhite(coor);
            var piece = _this.board.getPieceByCoor(coor);
            for (var dir = 1; dir <= 8; dir++) {
                if (_this.board.judgePass(ReversiConstants_1.WHITE, piece, dir)) {
                    _this.board.changePass(piece, dir);
                }
            }
            _this.updateScore();
            if (_this.board.judgeWin()) {
                _this.overGame();
            }
            else {
                if (_this.board.judgeMoveable(ReversiConstants_1.BLACK)) {
                    _this.state = ReversiConstants_1.BLACK;
                }
                else {
                    G_1.G.gameRoot.showTip("黑棋无地可下，白棋继续");
                    _this.runAi();
                }
            }
        }, 1);
    };
    ReversiScene.prototype.onBoardTouched = function (coor) {
        switch (this.state) {
            case ReversiConstants_1.NONE:
                break;
            case ReversiConstants_1.BLACK:
                var piece = this.board.getPieceByCoor(coor);
                if (piece.color !== ReversiConstants_1.NONE) {
                    G_1.G.gameRoot.showTip("这里有子了，你是不是傻");
                    return;
                }
                if (!this.board.canPlace(this.state, coor)) {
                    G_1.G.gameRoot.showTip("不符合规则");
                    return;
                }
                this.board.placeBlack(coor);
                piece = this.board.getPieceByCoor(coor);
                for (var dir = 1; dir <= 8; dir++) {
                    if (this.board.judgePass(ReversiConstants_1.BLACK, piece, dir)) {
                        this.board.changePass(piece, dir);
                    }
                }
                this.updateScore();
                if (this.board.judgeWin()) {
                    this.overGame();
                }
                else {
                    if (this.board.judgeMoveable(ReversiConstants_1.WHITE)) {
                        this.state = ReversiConstants_1.WHITE;
                        this.runAi();
                    }
                    else {
                        G_1.G.gameRoot.showTip("白棋无地可下，黑棋继续");
                    }
                }
                break;
            case ReversiConstants_1.WHITE:
                break;
            default: break;
        }
    };
    __decorate([
        property(ReversiBoard_1.ReversiBoard)
    ], ReversiScene.prototype, "board", void 0);
    __decorate([
        property(cc.Label)
    ], ReversiScene.prototype, "blackScoreLabel", void 0);
    __decorate([
        property(cc.Label)
    ], ReversiScene.prototype, "whiteScoreLabel", void 0);
    ReversiScene = __decorate([
        ccclass
    ], ReversiScene);
    return ReversiScene;
}(cc.Component));
exports.ReversiScene = ReversiScene;

cc._RF.pop();