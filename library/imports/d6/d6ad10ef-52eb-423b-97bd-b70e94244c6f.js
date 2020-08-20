"use strict";
cc._RF.push(module, 'd6ad1DvUutCO5e9tw6UJExv', 'M2048Scene');
// src/2048/M2048Scene.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.M2048Scene = void 0;
var M2048Board_1 = require("./M2048Board");
var G_1 = require("../G");
var M2048Constants_1 = require("./M2048Constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var M2048Scene = /** @class */ (function (_super) {
    __extends(M2048Scene, _super);
    function M2048Scene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.board = null;
        _this.state = M2048Constants_1.STATE.NONE;
        return _this;
    }
    M2048Scene.prototype.start = function () {
        this.board.init(this);
        this.startGame();
    };
    M2048Scene.prototype.startGame = function () {
        this.state = M2048Constants_1.STATE.START;
        this.board.reset();
        G_1.G.gameRoot.showTip("四方向手势滑动");
    };
    M2048Scene.prototype.overGame = function () {
        var max = this.board.getMaxNLabel();
        G_1.G.gameRoot.showMaskMessage(max, { label: "OK", cb: function () { }, target: this });
        this.state = M2048Constants_1.STATE.OVER;
    };
    M2048Scene.prototype.onBtnReturn = function () {
        G_1.G.returnHall();
    };
    M2048Scene.prototype.onBtnRestart = function () {
        this.startGame();
    };
    M2048Scene.prototype.onBoardSlid = function (dir) {
        var isMove = false;
        switch (dir) {
            case M2048Constants_1.DIR.LEFT:
                isMove = this.board.slideLeft();
                break;
            case M2048Constants_1.DIR.RIGHT:
                isMove = this.board.slideRight();
                break;
            case M2048Constants_1.DIR.UP:
                isMove = this.board.slideUp();
                break;
            case M2048Constants_1.DIR.DOWN:
                isMove = this.board.slideDown();
                break;
            default:
                cc.error("方向错误");
                break;
        }
        if (isMove) {
            if (this.board.judgeOver()) {
                this.overGame();
            }
        }
    };
    __decorate([
        property(M2048Board_1.M2048Board)
    ], M2048Scene.prototype, "board", void 0);
    M2048Scene = __decorate([
        ccclass
    ], M2048Scene);
    return M2048Scene;
}(cc.Component));
exports.M2048Scene = M2048Scene;

cc._RF.pop();