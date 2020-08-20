"use strict";
cc._RF.push(module, 'b6b4dcrVKZGkYFaEw6tiwLd', 'JumpPlayer');
// src/jump/JumpPlayer.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.power = 0;
        _this.initSpeed = 0;
        _this.jumpDistance = 0;
        _this.speed = 0;
        _this.isReadyJump = false;
        _this.direction = 1;
        return _this;
    }
    Player.prototype.readyJump = function () {
        this.node.runAction(cc.scaleTo(2, 1, 0.5));
        this.speed = this.initSpeed;
        this.isReadyJump = true;
    };
    Player.prototype.jumpTo = function (targetPos, cb, cbTarget) {
        var _this = this;
        this.node.stopAllActions();
        // let targetPos = this.node.parent.convertToNodeSpaceAR(worldPos);
        this.isReadyJump = false;
        var resetAction = cc.scaleTo(1, 1, 1);
        var jumpAction = cc.jumpTo(0.5, targetPos, 200, 1);
        // let rotateAction = cc.rotateBy(0.5,this.direction*360);
        var finished = cc.callFunc(function () {
            _this.speed = 0;
            _this.jumpDistance = 0;
            cb();
        }, cbTarget);
        this.node.runAction(resetAction);
        this.node.runAction(cc.sequence(jumpAction, finished));
    };
    Player.prototype.update = function (dt) {
        if (this.isReadyJump) {
            this.speed += dt * this.power;
            this.jumpDistance += this.speed * dt;
        }
    };
    __decorate([
        property(cc.Integer)
    ], Player.prototype, "power", void 0);
    __decorate([
        property(cc.Float)
    ], Player.prototype, "initSpeed", void 0);
    Player = __decorate([
        ccclass
    ], Player);
    return Player;
}(cc.Component));
exports.Player = Player;

cc._RF.pop();