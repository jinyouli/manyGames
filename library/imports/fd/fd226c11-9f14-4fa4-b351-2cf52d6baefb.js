"use strict";
cc._RF.push(module, 'fd226wRnxRPpLNRLPUta677', 'HallScene');
// src/hall/HallScene.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.HallScene = void 0;
var G_1 = require("../G");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var HallScene = /** @class */ (function (_super) {
    __extends(HallScene, _super);
    function HallScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HallScene.prototype.onBtnGobang = function () {
        G_1.G.enterGobang();
    };
    HallScene.prototype.onBtnReversi = function () {
        G_1.G.enterReversi();
    };
    HallScene.prototype.onBtn2048 = function () {
        G_1.G.enter2048();
    };
    HallScene.prototype.onBtnJump = function () {
        G_1.G.enterJump();
    };
    HallScene.prototype.onBtnPuzzle = function () {
        G_1.G.enterPuzzle();
    };
    HallScene.prototype.onBtnGet47 = function () {
        G_1.G.enterGet47();
    };
    HallScene.prototype.onBtnTetris = function () {
        G_1.G.enterTetris();
    };
    HallScene.prototype.onBtnMine = function () {
        G_1.G.enterMine();
    };
    HallScene.prototype.onBtnLink = function () {
        G_1.G.enterLink();
    };
    HallScene.prototype.onBtnSnake = function () {
        G_1.G.enterSnake();
    };
    HallScene.prototype.onBtnBrick = function () {
        G_1.G.enterBrick();
    };
    HallScene.prototype.onPinball = function () {
        G_1.G.enterPinball();
    };
    HallScene = __decorate([
        ccclass
    ], HallScene);
    return HallScene;
}(cc.Component));
exports.HallScene = HallScene;

cc._RF.pop();