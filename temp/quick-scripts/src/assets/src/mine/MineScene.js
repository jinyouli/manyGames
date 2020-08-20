"use strict";
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