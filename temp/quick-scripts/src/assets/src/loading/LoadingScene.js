"use strict";
cc._RF.push(module, '118a2LRWWBIKY9afEfjWW/h', 'LoadingScene');
// src/loading/LoadingScene.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingScene = void 0;
var G_1 = require("../G");
var GameRoot_1 = require("../shared/GameRoot");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoadingScene = /** @class */ (function (_super) {
    __extends(LoadingScene, _super);
    function LoadingScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tipLabel = null;
        _this.gameRoot = null;
        return _this;
    }
    LoadingScene.prototype.onLoad = function () {
        G_1.G.setResolutionPolicy();
        cc.game.addPersistRootNode(this.gameRoot);
        this.initGlobal();
    };
    LoadingScene.prototype.initGlobal = function () {
        G_1.G.gameRoot = this.gameRoot.getComponent(GameRoot_1.GameRoot);
    };
    LoadingScene.prototype.start = function () {
        var _this = this;
        // cc.director.setDisplayStats(false);
        var tip = "始终相信美好的事情不会发生";
        var i = 0;
        this.tipLabel.string = '';
        this.schedule(function () {
            i++;
            if (i === tip.length + 1) {
                _this.onLoadSuccess();
            }
            else {
                _this.tipLabel.string = tip.substring(0, i);
            }
        }, 0.3, tip.length + 1, 0.3);
    };
    LoadingScene.prototype.onLoadSuccess = function () {
        G_1.G.enterHall();
    };
    __decorate([
        property(cc.Label)
    ], LoadingScene.prototype, "tipLabel", void 0);
    __decorate([
        property(cc.Node)
    ], LoadingScene.prototype, "gameRoot", void 0);
    LoadingScene = __decorate([
        ccclass
    ], LoadingScene);
    return LoadingScene;
}(cc.Component));
exports.LoadingScene = LoadingScene;

cc._RF.pop();