
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/2048/M2048Scene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFwyMDQ4XFxNMjA0OFNjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTBDO0FBQzFDLDBCQUF5QjtBQUN6QixtREFBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBZ0MsOEJBQVk7SUFBNUM7UUFBQSxxRUEwREM7UUF4RFcsV0FBSyxHQUFlLElBQUksQ0FBQztRQUUxQixXQUFLLEdBQVUsc0JBQUssQ0FBQyxJQUFJLENBQUM7O0lBc0RyQyxDQUFDO0lBcERHLDBCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELDhCQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLHNCQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkIsS0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELDZCQUFRLEdBQVI7UUFDSSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLEtBQUMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFDMUIsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxjQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsS0FBSyxHQUFHLHNCQUFLLENBQUMsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFFRCxnQ0FBVyxHQUFYO1FBQ0ksS0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxpQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxnQ0FBVyxHQUFYLFVBQVksR0FBUTtRQUNoQixJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDbkIsUUFBUSxHQUFHLEVBQUU7WUFDVCxLQUFLLG9CQUFHLENBQUMsSUFBSTtnQkFDVCxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDaEMsTUFBTTtZQUNWLEtBQUssb0JBQUcsQ0FBQyxLQUFLO2dCQUNWLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNqQyxNQUFNO1lBQ1YsS0FBSyxvQkFBRyxDQUFDLEVBQUU7Z0JBQ1AsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQzlCLE1BQU07WUFDVixLQUFLLG9CQUFHLENBQUMsSUFBSTtnQkFDVCxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDaEMsTUFBTTtZQUNWO2dCQUNJLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2pCLE1BQU07U0FDYjtRQUNELElBQUksTUFBTSxFQUFFO1lBQ1IsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxFQUFFO2dCQUN4QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDbkI7U0FDSjtJQUNMLENBQUM7SUF0REQ7UUFEQyxRQUFRLENBQUMsdUJBQVUsQ0FBQzs2Q0FDWTtJQUZ4QixVQUFVO1FBRHRCLE9BQU87T0FDSyxVQUFVLENBMER0QjtJQUFELGlCQUFDO0NBMURELEFBMERDLENBMUQrQixFQUFFLENBQUMsU0FBUyxHQTBEM0M7QUExRFksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNMjA0OEJvYXJkIH0gZnJvbSBcIi4vTTIwNDhCb2FyZFwiO1xuaW1wb3J0IHsgRyB9IGZyb20gXCIuLi9HXCI7XG5pbXBvcnQgeyBESVIsIFNUQVRFIH0gZnJvbSBcIi4vTTIwNDhDb25zdGFudHNcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBNMjA0OFNjZW5lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoTTIwNDhCb2FyZClcbiAgICBwcml2YXRlIGJvYXJkOiBNMjA0OEJvYXJkID0gbnVsbDtcblxuICAgIHB1YmxpYyBzdGF0ZTogU1RBVEUgPSBTVEFURS5OT05FO1xuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQuaW5pdCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcbiAgICB9XG5cbiAgICBzdGFydEdhbWUoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBTVEFURS5TVEFSVDtcbiAgICAgICAgdGhpcy5ib2FyZC5yZXNldCgpO1xuICAgICAgICBHLmdhbWVSb290LnNob3dUaXAoXCLlm5vmlrnlkJHmiYvlir/mu5HliqhcIik7XG4gICAgfVxuXG4gICAgb3ZlckdhbWUoKSB7XG4gICAgICAgIGxldCBtYXggPSB0aGlzLmJvYXJkLmdldE1heE5MYWJlbCgpO1xuICAgICAgICBHLmdhbWVSb290LnNob3dNYXNrTWVzc2FnZShtYXgsXG4gICAgICAgICAgICB7IGxhYmVsOiBcIk9LXCIsIGNiOiAoKSA9PiB7IH0sIHRhcmdldDogdGhpcyB9KTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFNUQVRFLk9WRVI7XG4gICAgfVxuXG4gICAgb25CdG5SZXR1cm4oKSB7XG4gICAgICAgIEcucmV0dXJuSGFsbCgpO1xuICAgIH1cblxuICAgIG9uQnRuUmVzdGFydCgpIHtcbiAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcbiAgICB9XG5cbiAgICBvbkJvYXJkU2xpZChkaXI6IERJUikge1xuICAgICAgICBsZXQgaXNNb3ZlID0gZmFsc2U7XG4gICAgICAgIHN3aXRjaCAoZGlyKSB7XG4gICAgICAgICAgICBjYXNlIERJUi5MRUZUOlxuICAgICAgICAgICAgICAgIGlzTW92ZSA9IHRoaXMuYm9hcmQuc2xpZGVMZWZ0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERJUi5SSUdIVDpcbiAgICAgICAgICAgICAgICBpc01vdmUgPSB0aGlzLmJvYXJkLnNsaWRlUmlnaHQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRElSLlVQOlxuICAgICAgICAgICAgICAgIGlzTW92ZSA9IHRoaXMuYm9hcmQuc2xpZGVVcCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBESVIuRE9XTjpcbiAgICAgICAgICAgICAgICBpc01vdmUgPSB0aGlzLmJvYXJkLnNsaWRlRG93bigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihcIuaWueWQkemUmeivr1wiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNNb3ZlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZC5qdWRnZU92ZXIoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3ZlckdhbWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19