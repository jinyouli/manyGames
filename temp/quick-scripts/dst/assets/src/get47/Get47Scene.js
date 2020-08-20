
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/get47/Get47Scene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxnZXQ0N1xcR2V0NDdTY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUEwQztBQUUxQyxtREFBOEM7QUFDOUMsMEJBQXlCO0FBQ3pCLDJDQUFxQztBQUUvQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFnQyw4QkFBWTtJQUE1QztRQUFBLHFFQStFQztRQTVFVyxXQUFLLEdBQWUsSUFBSSxDQUFDO1FBRXpCLFdBQUssR0FBVSxJQUFJLENBQUM7UUFFcEIsWUFBTSxHQUFXLEVBQUUsQ0FBQztRQUVwQixXQUFLLEdBQVUsc0JBQUssQ0FBQyxJQUFJLENBQUM7O0lBc0V0QyxDQUFDO0lBcEVHLDBCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFTyw4QkFBUyxHQUFqQjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsc0JBQUssQ0FBQyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRU8sNkJBQVEsR0FBaEI7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLHNCQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3hCLEtBQUMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLEtBQUssRUFDNUIsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxjQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRU0sZ0NBQVcsR0FBbEIsVUFBbUIsS0FBYTtRQUM1QixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssc0JBQUssQ0FBQyxLQUFLLEVBQUU7WUFDNUIsT0FBTztTQUNWO1FBQ0QsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekI7YUFBTSxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1QjtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkI7SUFDTCxDQUFDO0lBRU0saUNBQVksR0FBbkIsVUFBb0IsS0FBWSxFQUFFLEdBQVE7UUFDdEMsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLHNCQUFLLENBQUMsS0FBSyxFQUFFO1lBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN0QztJQUNMLENBQUM7SUFFTyxnQ0FBVyxHQUFuQjtRQUNJLEtBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRU8saUNBQVksR0FBcEI7UUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVPLGlDQUFZLEdBQXBCO1FBQ0ksMERBQTBEO1FBQzFELDRGQUE0RjtJQUNoRyxDQUFDO0lBRU8sb0NBQWUsR0FBdkI7UUFDSyxFQUFVLENBQUMsWUFBWSxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFTyx3Q0FBbUIsR0FBM0IsVUFBNEIsS0FBSztRQUM3QixvRUFBb0U7UUFDcEUsNEJBQTRCO1FBQzVCLElBQUk7UUFDSixVQUFVO1FBQ1YseUJBQXlCO1FBQ3pCLDZCQUE2QjtRQUM3QixJQUFJO1FBQ0osMkJBQTJCO1FBQzNCLDhCQUE4QjtRQUM5QixJQUFJO0lBQ1IsQ0FBQztJQTFFRDtRQURDLFFBQVEsQ0FBQyx1QkFBVSxDQUFDOzZDQUNZO0lBRWpDO1FBREMsUUFBUSxDQUFDLGtCQUFLLENBQUM7NkNBQ1k7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzs4Q0FDTztJQVBuQixVQUFVO1FBRHRCLE9BQU87T0FDSyxVQUFVLENBK0V0QjtJQUFELGlCQUFDO0NBL0VELEFBK0VDLENBL0UrQixFQUFFLENBQUMsU0FBUyxHQStFM0M7QUEvRVksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXQ0N0JvYXJkIH0gZnJvbSBcIi4vR2V0NDdCb2FyZFwiO1xuaW1wb3J0IHsgUGllY2UgfSBmcm9tIFwiLi9HZXQ0N1BpZWNlXCI7XG5pbXBvcnQgeyBESVIsIFNUQVRFIH0gZnJvbSBcIi4vR2V0NDdDb25zdGFudHNcIjtcbmltcG9ydCB7IEcgfSBmcm9tIFwiLi4vR1wiO1xuaW1wb3J0IHsgU2NvcmUgfSBmcm9tIFwiLi9HZXQ0N1Njb3JlXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgR2V0NDdTY2VuZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoR2V0NDdCb2FyZClcbiAgICBwcml2YXRlIGJvYXJkOiBHZXQ0N0JvYXJkID0gbnVsbDtcbiAgICBAcHJvcGVydHkoU2NvcmUpXG4gICAgcHJpdmF0ZSBzY29yZTogU2NvcmUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxuICAgIHByaXZhdGUgdGFyZ2V0OiBudW1iZXIgPSA0NztcblxuICAgIHByaXZhdGUgc3RhdGU6IFNUQVRFID0gU1RBVEUuTk9ORTtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmJvYXJkLmluaXQodGhpcyk7XG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGFydEdhbWUoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBTVEFURS5TVEFSVDtcbiAgICAgICAgdGhpcy5ib2FyZC5yZXNldCgpO1xuICAgICAgICB0aGlzLnNjb3JlLnJlc2V0KDApO1xuICAgIH1cblxuICAgIHByaXZhdGUgb3ZlckdhbWUoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBTVEFURS5PVkVSO1xuICAgICAgICBHLmdhbWVSb290LnNob3dNYXNrTWVzc2FnZShcIjY2NlwiLFxuICAgICAgICAgICAgeyBsYWJlbDogXCIyMzNcIiwgY2I6ICgpID0+IHsgfSwgdGFyZ2V0OiB0aGlzIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVTY29yZShzY29yZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBTVEFURS5TVEFSVCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzY29yZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2NvcmUuYWRkKHNjb3JlKTtcbiAgICAgICAgfSBlbHNlIGlmIChzY29yZSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2NvcmUubWludXMoLXNjb3JlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zY29yZS5udW0gPT09IHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLm92ZXJHYW1lKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25QaWVjZVRvdWNoKHBpZWNlOiBQaWVjZSwgZGlyOiBESVIpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFNUQVRFLlNUQVJUKSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkLnRyeUV4Y2hhbmdlKHBpZWNlLCBkaXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkJ0blJldHVybigpIHtcbiAgICAgICAgRy5yZXR1cm5IYWxsKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkJ0blJlc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIC8vIChjYyBhcyBhbnkpLmlucHV0TWFuYWdlci5zZXRBY2NlbGVyb21ldGVyRW5hYmxlZCh0cnVlKTtcbiAgICAgICAgLy8gY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLkRFVklDRU1PVElPTiwgdGhpcy5vbkRldmljZU1vdGlvbkV2ZW50LCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbW92ZUxpc3RlbmVycygpIHtcbiAgICAgICAgKGNjIGFzIGFueSkuaW5wdXRNYW5hZ2VyLnNldEFjY2VsZXJvbWV0ZXJFbmFibGVkKGZhbHNlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRGV2aWNlTW90aW9uRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgLy8gaWYgKE1hdGguYWJzKGV2ZW50LmFjYy54KSA+IDAuMyAmJiBNYXRoLmFicyhldmVudC5hY2MueSkgPiAwLjMpIHtcbiAgICAgICAgLy8gICAgIHRoaXMuYm9hcmQubmV3VmlldygpO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIOS4gOS4quWksei0peeahOWIm+aEj1xuICAgICAgICAvLyBpZihldmVudC5hY2MueCA+IDAuNSl7XG4gICAgICAgIC8vICAgICB0aGlzLmJvYXJkLm5ld1ZpZXcoMSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gaWYoZXZlbnQuYWNjLnggPCAtMC41KSB7XG4gICAgICAgIC8vICAgICB0aGlzLmJvYXJkLm5ld1ZpZXcoLTEpO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG59XG4iXX0=