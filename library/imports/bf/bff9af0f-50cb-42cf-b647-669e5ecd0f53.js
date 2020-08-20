"use strict";
cc._RF.push(module, 'bff9a8PUMtCz7ZHZp5ezQ9T', 'Get47Scene');
// src/get47/Get47Scene.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Get47Scene = void 0;
var Get47Board_1 = require("./Get47Board");
var Get47Constants_1 = require("./Get47Constants");
var G_1 = require("../G");
var Get47Score_1 = require("./Get47Score");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Get47Scene = /** @class */ (function (_super) {
    __extends(Get47Scene, _super);
    function Get47Scene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.board = null;
        _this.score = null;
        _this.target = 47;
        _this.state = Get47Constants_1.STATE.NONE;
        return _this;
    }
    Get47Scene.prototype.start = function () {
        this.board.init(this);
        this.startGame();
        this.addListeners();
    };
    Get47Scene.prototype.startGame = function () {
        this.state = Get47Constants_1.STATE.START;
        this.board.reset();
        this.score.reset(0);
    };
    Get47Scene.prototype.overGame = function () {
        this.state = Get47Constants_1.STATE.OVER;
        G_1.G.gameRoot.showMaskMessage("666", { label: "233", cb: function () { }, target: this });
    };
    Get47Scene.prototype.updateScore = function (score) {
        if (this.state !== Get47Constants_1.STATE.START) {
            return;
        }
        if (score > 0) {
            this.score.add(score);
        }
        else if (score < 0) {
            this.score.minus(-score);
        }
        if (this.score.num === this.target) {
            this.overGame();
        }
    };
    Get47Scene.prototype.onPieceTouch = function (piece, dir) {
        if (this.state === Get47Constants_1.STATE.START) {
            this.board.tryExchange(piece, dir);
        }
    };
    Get47Scene.prototype.onBtnReturn = function () {
        G_1.G.returnHall();
    };
    Get47Scene.prototype.onBtnRestart = function () {
        this.startGame();
    };
    Get47Scene.prototype.addListeners = function () {
        // (cc as any).inputManager.setAccelerometerEnabled(true);
        // cc.systemEvent.on(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);
    };
    Get47Scene.prototype.removeListeners = function () {
        cc.inputManager.setAccelerometerEnabled(false);
    };
    Get47Scene.prototype.onDeviceMotionEvent = function (event) {
        // if (Math.abs(event.acc.x) > 0.3 && Math.abs(event.acc.y) > 0.3) {
        //     this.board.newView();
        // }
        // 一个失败的创意
        // if(event.acc.x > 0.5){
        //     this.board.newView(1);
        // }
        // if(event.acc.x < -0.5) {
        //     this.board.newView(-1);
        // }
    };
    __decorate([
        property(Get47Board_1.Get47Board)
    ], Get47Scene.prototype, "board", void 0);
    __decorate([
        property(Get47Score_1.Score)
    ], Get47Scene.prototype, "score", void 0);
    __decorate([
        property(cc.Integer)
    ], Get47Scene.prototype, "target", void 0);
    Get47Scene = __decorate([
        ccclass
    ], Get47Scene);
    return Get47Scene;
}(cc.Component));
exports.Get47Scene = Get47Scene;

cc._RF.pop();