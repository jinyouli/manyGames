
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/link/LinkScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxsaW5rXFxMaW5rU2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBd0M7QUFDeEMsaURBQXdDO0FBQ3hDLDBCQUF5QjtBQUN6Qix5Q0FBd0M7QUFFbEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBK0IsNkJBQVk7SUFBM0M7UUFBQSxxRUFxQ0M7UUFsQ1csV0FBSyxHQUFjLElBQUksQ0FBQztRQUV4QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixXQUFLLEdBQVUsSUFBSSxDQUFDO1FBRXBCLFdBQUssR0FBRyxxQkFBSyxDQUFDLElBQUksQ0FBQzs7SUE0Qi9CLENBQUM7SUExQkcseUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRU8sNkJBQVMsR0FBakI7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLHFCQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRU0sNEJBQVEsR0FBZjtRQUFBLGlCQUlDO1FBSEcsSUFBSSxDQUFDLEtBQUssR0FBRyxxQkFBSyxDQUFDLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xCLEtBQUMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsY0FBSyxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUEsQ0FBQSxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ3BJLENBQUM7SUFFTywrQkFBVyxHQUFuQjtRQUNJLEtBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRU8sZ0NBQVksR0FBcEI7UUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQWpDRDtRQURDLFFBQVEsQ0FBQyxxQkFBUyxDQUFDOzRDQUNZO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ2lCO0lBRW5DO1FBREMsUUFBUSxDQUFDLGFBQUssQ0FBQzs0Q0FDWTtJQVBuQixTQUFTO1FBRHJCLE9BQU87T0FDSyxTQUFTLENBcUNyQjtJQUFELGdCQUFDO0NBckNELEFBcUNDLENBckM4QixFQUFFLENBQUMsU0FBUyxHQXFDMUM7QUFyQ1ksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaW5rQm9hcmQgfSBmcm9tIFwiLi9MaW5rQm9hcmRcIjtcbmltcG9ydCB7IFNUQVRFIH0gZnJvbSBcIi4vTGlua0NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRyB9IGZyb20gXCIuLi9HXCI7XG5pbXBvcnQgeyBUaW1lciB9IGZyb20gXCIuLi9zaGFyZWQvVGltZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBMaW5rU2NlbmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KExpbmtCb2FyZClcbiAgICBwcml2YXRlIGJvYXJkOiBMaW5rQm9hcmQgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgcmV3YXJkTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KFRpbWVyKVxuICAgIHByaXZhdGUgdGltZXI6IFRpbWVyID0gbnVsbDtcblxuICAgIHByaXZhdGUgc3RhdGUgPSBTVEFURS5OT05FO1xuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQuaW5pdCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXJ0R2FtZSgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFNUQVRFLlNUQVJUO1xuICAgICAgICB0aGlzLmJvYXJkLnJlc2V0KCk7XG4gICAgICAgIHRoaXMucmV3YXJkTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50aW1lci5yZXNldCgpO1xuICAgICAgICB0aGlzLnRpbWVyLnJ1bigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvdmVyR2FtZSgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFNUQVRFLk9WRVI7XG4gICAgICAgIHRoaXMudGltZXIuc3RvcCgpO1xuICAgICAgICBHLmdhbWVSb290LnNob3dNYXNrTWVzc2FnZShcIuS9oOeUqOS6hlwiICsgdGhpcy50aW1lci50aW1lLnRvRml4ZWQoMSkgKyBcIuenklwiLCB7IGxhYmVsOiBcIumihuWPluWlluWKsVwiLCBjYjogKCk9Pnt0aGlzLnJld2FyZE5vZGUuYWN0aXZlID0gdHJ1ZX19KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQnRuUmV0dXJuKCkge1xuICAgICAgICBHLnJldHVybkhhbGwoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQnRuUmVzdGFydCgpIHtcbiAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcbiAgICB9XG59XG4iXX0=