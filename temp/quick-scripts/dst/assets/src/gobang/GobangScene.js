
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/gobang/GobangScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2fcd3v+r05H8q3UVtZU7Lkf', 'GobangScene');
// src/gobang/GobangScene.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.GobangScene = void 0;
var GobangBoard_1 = require("./GobangBoard");
var GobangConstants_1 = require("./GobangConstants");
var GobangAI_1 = require("./GobangAI");
var G_1 = require("../G");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GobangScene = /** @class */ (function (_super) {
    __extends(GobangScene, _super);
    function GobangScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.board = null;
        _this.ai = null;
        _this.state = GobangConstants_1.NONE;
        return _this;
    }
    GobangScene.prototype.start = function () {
        this.board.init(this);
        this.ai = new GobangAI_1.GobangAI(this.board);
        this.startGame();
    };
    GobangScene.prototype.startGame = function () {
        this.state = GobangConstants_1.BLACK;
        this.board.reset();
        G_1.G.gameRoot.showTip("你是黑棋你先走");
    };
    GobangScene.prototype.overGame = function () {
        if (this.state === GobangConstants_1.BLACK) {
            cc.log("黑棋胜");
            this.state = GobangConstants_1.NONE;
            G_1.G.gameRoot.showMaskMessage("你赢了阿尔法二狗！", { label: "朕知道了", cb: function () { }, target: this });
        }
        else if (this.state === GobangConstants_1.WHITE) {
            cc.log("白旗胜");
            G_1.G.gameRoot.showMaskMessage("你输给了阿尔法二狗！", { label: "服了", cb: function () { }, target: this }, { label: "不服", cb: function () { }, target: this });
            this.state = GobangConstants_1.NONE;
        }
    };
    GobangScene.prototype.onBtnReturn = function () {
        G_1.G.returnHall();
    };
    GobangScene.prototype.onBtnRestart = function () {
        this.startGame();
    };
    GobangScene.prototype.onBoardTouched = function (coor) {
        var _this = this;
        switch (this.state) {
            case GobangConstants_1.NONE:
                break;
            case GobangConstants_1.BLACK:
                var piece = this.board.getPieceByCoor(coor);
                if (piece.color !== GobangConstants_1.NONE) {
                    G_1.G.gameRoot.showTip("这里有子了，你是不是傻");
                    return;
                }
                this.board.placeBlack(coor);
                if (this.board.judgeWin()) {
                    this.overGame();
                }
                else {
                    this.state = GobangConstants_1.WHITE;
                    this.scheduleOnce(function () {
                        _this.board.placeWhite(_this.ai.getNextCoor());
                        if (_this.board.judgeWin()) {
                            _this.overGame();
                        }
                        else {
                            _this.state = GobangConstants_1.BLACK;
                        }
                    }, 1);
                }
                break;
            case GobangConstants_1.WHITE:
                // this.board.placeWhite(coor);
                // if(this.board.judgeWin()) {
                //     cc.log("白棋胜");
                // }else {
                //     this.state = BLACK;
                // }
                break;
            default: break;
        }
    };
    __decorate([
        property(GobangBoard_1.GobangBoard)
    ], GobangScene.prototype, "board", void 0);
    GobangScene = __decorate([
        ccclass
    ], GobangScene);
    return GobangScene;
}(cc.Component));
exports.GobangScene = GobangScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxnb2JhbmdcXEdvYmFuZ1NjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQTRDO0FBQzVDLHFEQUF1RDtBQUN2RCx1Q0FBc0M7QUFDdEMsMEJBQXlCO0FBQ25CLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWlDLCtCQUFZO0lBQTdDO1FBQUEscUVBaUZDO1FBOUVXLFdBQUssR0FBZ0IsSUFBSSxDQUFDO1FBRTFCLFFBQUUsR0FBYSxJQUFJLENBQUM7UUFDcEIsV0FBSyxHQUFHLHNCQUFJLENBQUM7O0lBMkV6QixDQUFDO0lBekVHLDJCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksbUJBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCwrQkFBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyx1QkFBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkIsS0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELDhCQUFRLEdBQVI7UUFDSSxJQUFHLElBQUksQ0FBQyxLQUFLLEtBQUssdUJBQUssRUFBRTtZQUNyQixFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxzQkFBSSxDQUFDO1lBQ2xCLEtBQUMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFDbEMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxjQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUN2RDthQUFLLElBQUcsSUFBSSxDQUFDLEtBQUssS0FBSyx1QkFBSyxFQUFFO1lBQzNCLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDZCxLQUFDLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQ3ZDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsY0FBUSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxFQUM1QyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLGNBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxLQUFLLEdBQUcsc0JBQUksQ0FBQztTQUNyQjtJQUNMLENBQUM7SUFFRCxpQ0FBVyxHQUFYO1FBQ0ksS0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxrQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxvQ0FBYyxHQUFkLFVBQWUsSUFBYTtRQUE1QixpQkFvQ0M7UUFuQ0csUUFBUSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2hCLEtBQUssc0JBQUk7Z0JBRVQsTUFBTTtZQUNOLEtBQUssdUJBQUs7Z0JBQ04sSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzVDLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxzQkFBSSxFQUFFO29CQUN0QixLQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDbEMsT0FBTztpQkFDVjtnQkFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFO29CQUN2QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQ25CO3FCQUFNO29CQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsdUJBQUssQ0FBQztvQkFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQzt3QkFDZCxLQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7d0JBQzdDLElBQUksS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRTs0QkFDdkIsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO3lCQUNuQjs2QkFBTTs0QkFDSCxLQUFJLENBQUMsS0FBSyxHQUFHLHVCQUFLLENBQUM7eUJBQ3RCO29CQUNMLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDVDtnQkFDRCxNQUFNO1lBQ1YsS0FBSyx1QkFBSztnQkFDTiwrQkFBK0I7Z0JBQy9CLDhCQUE4QjtnQkFDOUIscUJBQXFCO2dCQUNyQixVQUFVO2dCQUNWLDBCQUEwQjtnQkFDMUIsSUFBSTtnQkFDSixNQUFNO1lBQ1YsT0FBTyxDQUFDLENBQUMsTUFBTTtTQUNsQjtJQUNMLENBQUM7SUE1RUQ7UUFEQyxRQUFRLENBQUMseUJBQVcsQ0FBQzs4Q0FDWTtJQUh6QixXQUFXO1FBRHZCLE9BQU87T0FDSyxXQUFXLENBaUZ2QjtJQUFELGtCQUFDO0NBakZELEFBaUZDLENBakZnQyxFQUFFLENBQUMsU0FBUyxHQWlGNUM7QUFqRlksa0NBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb2JhbmdCb2FyZCB9IGZyb20gXCIuL0dvYmFuZ0JvYXJkXCI7XG5pbXBvcnQgeyBOT05FLCBCTEFDSywgV0hJVEUgfSBmcm9tIFwiLi9Hb2JhbmdDb25zdGFudHNcIjtcbmltcG9ydCB7IEdvYmFuZ0FJIH0gZnJvbSBcIi4vR29iYW5nQUlcIjtcbmltcG9ydCB7IEcgfSBmcm9tIFwiLi4vR1wiO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBHb2JhbmdTY2VuZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoR29iYW5nQm9hcmQpXG4gICAgcHJpdmF0ZSBib2FyZDogR29iYW5nQm9hcmQgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBhaTogR29iYW5nQUkgPSBudWxsO1xuICAgIHByaXZhdGUgc3RhdGUgPSBOT05FO1xuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQuaW5pdCh0aGlzKTtcbiAgICAgICAgdGhpcy5haSA9IG5ldyBHb2JhbmdBSSh0aGlzLmJvYXJkKTtcbiAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcbiAgICB9XG5cbiAgICBzdGFydEdhbWUoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBCTEFDSztcbiAgICAgICAgdGhpcy5ib2FyZC5yZXNldCgpO1xuICAgICAgICBHLmdhbWVSb290LnNob3dUaXAoXCLkvaDmmK/pu5Hmo4vkvaDlhYjotbBcIik7XG4gICAgfVxuXG4gICAgb3ZlckdhbWUoKSB7XG4gICAgICAgIGlmKHRoaXMuc3RhdGUgPT09IEJMQUNLKSB7XG4gICAgICAgICAgICBjYy5sb2coXCLpu5Hmo4vog5xcIik7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gTk9ORTtcbiAgICAgICAgICAgIEcuZ2FtZVJvb3Quc2hvd01hc2tNZXNzYWdlKFwi5L2g6LWi5LqG6Zi/5bCU5rOV5LqM54uX77yBXCIsXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogXCLmnJXnn6XpgZPkuoZcIiwgY2I6ICgpID0+IHsgfSwgdGFyZ2V0OiB0aGlzIH0pO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLnN0YXRlID09PSBXSElURSkge1xuICAgICAgICAgICAgY2MubG9nKFwi55m95peX6IOcXCIpO1xuICAgICAgICAgICAgRy5nYW1lUm9vdC5zaG93TWFza01lc3NhZ2UoXCLkvaDovpPnu5nkuobpmL/lsJTms5Xkuozni5fvvIFcIixcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5pyN5LqGXCIsIGNiOiAoKSA9PiB7IH0sIHRhcmdldDogdGhpcyB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLkuI3mnI1cIiwgY2I6ICgpID0+IHsgfSwgdGFyZ2V0OiB0aGlzIH0pO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IE5PTkU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkJ0blJldHVybigpIHtcbiAgICAgICAgRy5yZXR1cm5IYWxsKCk7XG4gICAgfVxuXG4gICAgb25CdG5SZXN0YXJ0KCkge1xuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xuICAgIH1cblxuICAgIG9uQm9hcmRUb3VjaGVkKGNvb3I6IGNjLlZlYzIpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIE5PTkU6XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBCTEFDSzpcbiAgICAgICAgICAgICAgICBsZXQgcGllY2UgPSB0aGlzLmJvYXJkLmdldFBpZWNlQnlDb29yKGNvb3IpO1xuICAgICAgICAgICAgICAgIGlmIChwaWVjZS5jb2xvciAhPT0gTk9ORSkge1xuICAgICAgICAgICAgICAgICAgICBHLmdhbWVSb290LnNob3dUaXAoXCLov5nph4zmnInlrZDkuobvvIzkvaDmmK/kuI3mmK/lgrtcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZC5wbGFjZUJsYWNrKGNvb3IpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkLmp1ZGdlV2luKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdmVyR2FtZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBXSElURTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZC5wbGFjZVdoaXRlKHRoaXMuYWkuZ2V0TmV4dENvb3IoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZC5qdWRnZVdpbigpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vdmVyR2FtZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gQkxBQ0s7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgV0hJVEU6XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5ib2FyZC5wbGFjZVdoaXRlKGNvb3IpO1xuICAgICAgICAgICAgICAgIC8vIGlmKHRoaXMuYm9hcmQuanVkZ2VXaW4oKSkge1xuICAgICAgICAgICAgICAgIC8vICAgICBjYy5sb2coXCLnmb3mo4vog5xcIik7XG4gICAgICAgICAgICAgICAgLy8gfWVsc2Uge1xuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLnN0YXRlID0gQkxBQ0s7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDogYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==