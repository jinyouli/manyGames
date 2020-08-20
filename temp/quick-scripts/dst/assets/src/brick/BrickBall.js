
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/brick/BrickBall.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '695b581X8JE+455NQwB9qyS', 'BrickBall');
// src/brick/BrickBall.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.BrickBall = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BrickBall = /** @class */ (function (_super) {
    __extends(BrickBall, _super);
    function BrickBall() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.brickScene = null;
        return _this;
    }
    BrickBall.prototype.init = function (brickScene) {
        this.brickScene = brickScene;
        this.node.position = cc.v2(360, 270); //初始化位置
        this.getComponent(cc.RigidBody).linearVelocity = cc.v2(800, 800); //初始化速度
    };
    BrickBall.prototype.onBeginContact = function (contact, self, other) {
        switch (other.tag) {
            case 1: //球碰到砖块
                this.brickScene.onBallContactBrick(self.node, other.node);
                break;
            case 2: //球碰到地面
                this.brickScene.onBallContactGround(self.node, other.node);
                break;
            case 3: //球碰到托盘
                this.brickScene.onBallContactPaddle(self.node, other.node);
                break;
            case 4: //球碰到墙
                this.brickScene.onBallContactWall(self.node, other.node);
                break;
        }
    };
    BrickBall = __decorate([
        ccclass
    ], BrickBall);
    return BrickBall;
}(cc.Component));
exports.BrickBall = BrickBall;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxicmlja1xcQnJpY2tCYWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBK0IsNkJBQVk7SUFBM0M7UUFBQSxxRUEwQkM7UUF4QlcsZ0JBQVUsR0FBZSxJQUFJLENBQUM7O0lBd0IxQyxDQUFDO0lBdEJHLHdCQUFJLEdBQUosVUFBSyxVQUFxQjtRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLE9BQU87UUFDM0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUEsT0FBTztJQUMzRSxDQUFDO0lBRUQsa0NBQWMsR0FBZCxVQUFlLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSztRQUMvQixRQUFRLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDZixLQUFLLENBQUMsRUFBQyxPQUFPO2dCQUNWLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzFELE1BQU07WUFDVixLQUFLLENBQUMsRUFBQyxPQUFPO2dCQUNWLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzNELE1BQU07WUFDVixLQUFLLENBQUMsRUFBQyxPQUFPO2dCQUNWLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzNELE1BQU07WUFDVixLQUFLLENBQUMsRUFBQyxNQUFNO2dCQUNULElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pELE1BQU07U0FDYjtJQUNMLENBQUM7SUF6QlEsU0FBUztRQURyQixPQUFPO09BQ0ssU0FBUyxDQTBCckI7SUFBRCxnQkFBQztDQTFCRCxBQTBCQyxDQTFCOEIsRUFBRSxDQUFDLFNBQVMsR0EwQjFDO0FBMUJZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnJpY2tTY2VuZSB9IGZyb20gXCIuL0JyaWNrU2NlbmVcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgQnJpY2tCYWxsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHByaXZhdGUgYnJpY2tTY2VuZTogQnJpY2tTY2VuZSA9IG51bGw7XG5cbiAgICBpbml0KGJyaWNrU2NlbmU6QnJpY2tTY2VuZSkge1xuICAgICAgICB0aGlzLmJyaWNrU2NlbmUgPSBicmlja1NjZW5lO1xuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBjYy52MigzNjAsMjcwKTsvL+WIneWni+WMluS9jee9rlxuICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoODAwLDgwMCk7Ly/liJ3lp4vljJbpgJ/luqZcbiAgICB9XG5cbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcikge1xuICAgICAgICBzd2l0Y2ggKG90aGVyLnRhZykge1xuICAgICAgICAgICAgY2FzZSAxOi8v55CD56Kw5Yiw56CW5Z2XXG4gICAgICAgICAgICAgICAgdGhpcy5icmlja1NjZW5lLm9uQmFsbENvbnRhY3RCcmljayhzZWxmLm5vZGUsIG90aGVyLm5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOi8v55CD56Kw5Yiw5Zyw6Z2iXG4gICAgICAgICAgICAgICAgdGhpcy5icmlja1NjZW5lLm9uQmFsbENvbnRhY3RHcm91bmQoc2VsZi5ub2RlLCBvdGhlci5ub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzovL+eQg+eisOWIsOaJmOebmFxuICAgICAgICAgICAgICAgIHRoaXMuYnJpY2tTY2VuZS5vbkJhbGxDb250YWN0UGFkZGxlKHNlbGYubm9kZSwgb3RoZXIubm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6Ly/nkIPnorDliLDloplcbiAgICAgICAgICAgICAgICB0aGlzLmJyaWNrU2NlbmUub25CYWxsQ29udGFjdFdhbGwoc2VsZi5ub2RlLCBvdGhlci5ub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=