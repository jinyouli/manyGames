
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/jump/JumpPlayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxqdW1wXFxKdW1wUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNEIsMEJBQVk7SUFBeEM7UUFBQSxxRUE2Q0M7UUF6Q1UsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVsQixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBRXRCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBRXpCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsaUJBQVcsR0FBWSxLQUFLLENBQUM7UUFFN0IsZUFBUyxHQUFXLENBQUMsQ0FBQzs7SUErQmpDLENBQUM7SUE3QlUsMEJBQVMsR0FBaEI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUVNLHVCQUFNLEdBQWIsVUFBYyxTQUFpQixFQUFDLEVBQVcsRUFBQyxRQUFhO1FBQXpELGlCQWNDO1FBYkcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMzQixtRUFBbUU7UUFDbkUsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFDLFNBQVMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEQsMERBQTBEO1FBQzFELElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDdkIsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDZixLQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztZQUN0QixFQUFFLEVBQUUsQ0FBQztRQUNULENBQUMsRUFBQyxRQUFRLENBQUMsQ0FBQztRQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7SUFDekQsQ0FBQztJQUVNLHVCQUFNLEdBQWIsVUFBYyxFQUFFO1FBQ1osSUFBRyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDOUIsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUN4QztJQUNMLENBQUM7SUF2Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzt5Q0FDSTtJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZDQUNVO0lBTnBCLE1BQU07UUFEbEIsT0FBTztPQUNLLE1BQU0sQ0E2Q2xCO0lBQUQsYUFBQztDQTdDRCxBQTZDQyxDQTdDMkIsRUFBRSxDQUFDLFNBQVMsR0E2Q3ZDO0FBN0NZLHdCQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIFxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxuICAgIHB1YmxpYyBwb3dlcjogbnVtYmVyID0gMDtcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gICAgcHVibGljIGluaXRTcGVlZDogbnVtYmVyID0gMDtcblxuICAgIHB1YmxpYyBqdW1wRGlzdGFuY2U6IG51bWJlciA9IDA7XG5cbiAgICBwdWJsaWMgc3BlZWQ6IG51bWJlciA9IDA7XG5cbiAgICBwdWJsaWMgaXNSZWFkeUp1bXA6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHB1YmxpYyBkaXJlY3Rpb246IG51bWJlciA9IDE7XG5cbiAgICBwdWJsaWMgcmVhZHlKdW1wKCkge1xuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNjYWxlVG8oMiwxLDAuNSkpO1xuICAgICAgICB0aGlzLnNwZWVkID0gdGhpcy5pbml0U3BlZWQ7XG4gICAgICAgIHRoaXMuaXNSZWFkeUp1bXAgPSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBqdW1wVG8odGFyZ2V0UG9zOmNjLlZlYzIsY2I6RnVuY3Rpb24sY2JUYXJnZXQ/OmFueSkge1xuICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgLy8gbGV0IHRhcmdldFBvcyA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xuICAgICAgICB0aGlzLmlzUmVhZHlKdW1wID0gZmFsc2U7XG4gICAgICAgIGxldCByZXNldEFjdGlvbiA9IGNjLnNjYWxlVG8oMSwxLDEpO1xuICAgICAgICBsZXQganVtcEFjdGlvbiA9IGNjLmp1bXBUbygwLjUsdGFyZ2V0UG9zLDIwMCwxKTtcbiAgICAgICAgLy8gbGV0IHJvdGF0ZUFjdGlvbiA9IGNjLnJvdGF0ZUJ5KDAuNSx0aGlzLmRpcmVjdGlvbiozNjApO1xuICAgICAgICBsZXQgZmluaXNoZWQgPSBjYy5jYWxsRnVuYygoKT0+e1xuICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgICAgICAgICB0aGlzLmp1bXBEaXN0YW5jZSA9IDA7XG4gICAgICAgICAgICBjYigpO1xuICAgICAgICB9LGNiVGFyZ2V0KTtcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihyZXNldEFjdGlvbik7XG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoanVtcEFjdGlvbixmaW5pc2hlZCkpXG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZShkdCkge1xuICAgICAgICBpZih0aGlzLmlzUmVhZHlKdW1wKSB7XG4gICAgICAgICAgICB0aGlzLnNwZWVkICs9IGR0ICogdGhpcy5wb3dlcjtcbiAgICAgICAgICAgIHRoaXMuanVtcERpc3RhbmNlICs9IHRoaXMuc3BlZWQgKiBkdDtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19