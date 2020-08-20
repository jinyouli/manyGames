
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/reversi/ReversiScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '05ff4fnZAdCwZScbk1f0GpO', 'ReversiScene');
// src/reversi/ReversiScene.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ReversiScene = void 0;
var ReversiBoard_1 = require("./ReversiBoard");
var ReversiAI_1 = require("./ReversiAI");
var ReversiConstants_1 = require("./ReversiConstants");
var G_1 = require("../G");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ReversiScene = /** @class */ (function (_super) {
    __extends(ReversiScene, _super);
    function ReversiScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.board = null;
        _this.blackScoreLabel = null;
        _this.whiteScoreLabel = null;
        _this.ai = null;
        _this.state = ReversiConstants_1.NONE;
        return _this;
    }
    ReversiScene.prototype.start = function () {
        this.board.init(this);
        this.ai = new ReversiAI_1.ReversiAI(this.board);
        this.startGame();
    };
    ReversiScene.prototype.startGame = function () {
        this.state = ReversiConstants_1.BLACK;
        this.board.reset();
        this.blackScoreLabel.string = "2";
        this.whiteScoreLabel.string = "2";
        G_1.G.gameRoot.showTip("你是黑棋你先走");
    };
    ReversiScene.prototype.overGame = function () {
        var _a = this.board.getPieceCount(), blackPieceSum = _a.blackPieceSum, whitePieceSum = _a.whitePieceSum;
        if (blackPieceSum > whitePieceSum) {
            cc.log("白棋胜");
            G_1.G.gameRoot.showMaskMessage("你赢了阿尔法二狗！", { label: "朕知道了", cb: function () { }, target: this });
        }
        else if (blackPieceSum < whitePieceSum) {
            cc.log("黑棋胜");
            G_1.G.gameRoot.showMaskMessage("你输给了阿尔法二狗！", { label: "服了", cb: function () { }, target: this }, { label: "不服", cb: function () { }, target: this });
        }
        else {
            cc.log("平局");
            G_1.G.gameRoot.showMaskMessage("你和阿尔法二狗五五开!", { label: "朕知道了", cb: function () { }, target: this });
        }
        this.state = ReversiConstants_1.NONE;
    };
    ReversiScene.prototype.updateScore = function () {
        var _a = this.board.getPieceCount(), blackPieceSum = _a.blackPieceSum, whitePieceSum = _a.whitePieceSum;
        this.blackScoreLabel.string = blackPieceSum + "";
        this.whiteScoreLabel.string = whitePieceSum + "";
    };
    ReversiScene.prototype.onBtnReturn = function () {
        G_1.G.returnHall();
    };
    ReversiScene.prototype.onBtnRestart = function () {
        this.startGame();
    };
    ReversiScene.prototype.runAi = function () {
        var _this = this;
        this.scheduleOnce(function () {
            var coor = _this.ai.getNextCoor();
            _this.board.placeWhite(coor);
            var piece = _this.board.getPieceByCoor(coor);
            for (var dir = 1; dir <= 8; dir++) {
                if (_this.board.judgePass(ReversiConstants_1.WHITE, piece, dir)) {
                    _this.board.changePass(piece, dir);
                }
            }
            _this.updateScore();
            if (_this.board.judgeWin()) {
                _this.overGame();
            }
            else {
                if (_this.board.judgeMoveable(ReversiConstants_1.BLACK)) {
                    _this.state = ReversiConstants_1.BLACK;
                }
                else {
                    G_1.G.gameRoot.showTip("黑棋无地可下，白棋继续");
                    _this.runAi();
                }
            }
        }, 1);
    };
    ReversiScene.prototype.onBoardTouched = function (coor) {
        switch (this.state) {
            case ReversiConstants_1.NONE:
                break;
            case ReversiConstants_1.BLACK:
                var piece = this.board.getPieceByCoor(coor);
                if (piece.color !== ReversiConstants_1.NONE) {
                    G_1.G.gameRoot.showTip("这里有子了，你是不是傻");
                    return;
                }
                if (!this.board.canPlace(this.state, coor)) {
                    G_1.G.gameRoot.showTip("不符合规则");
                    return;
                }
                this.board.placeBlack(coor);
                piece = this.board.getPieceByCoor(coor);
                for (var dir = 1; dir <= 8; dir++) {
                    if (this.board.judgePass(ReversiConstants_1.BLACK, piece, dir)) {
                        this.board.changePass(piece, dir);
                    }
                }
                this.updateScore();
                if (this.board.judgeWin()) {
                    this.overGame();
                }
                else {
                    if (this.board.judgeMoveable(ReversiConstants_1.WHITE)) {
                        this.state = ReversiConstants_1.WHITE;
                        this.runAi();
                    }
                    else {
                        G_1.G.gameRoot.showTip("白棋无地可下，黑棋继续");
                    }
                }
                break;
            case ReversiConstants_1.WHITE:
                break;
            default: break;
        }
    };
    __decorate([
        property(ReversiBoard_1.ReversiBoard)
    ], ReversiScene.prototype, "board", void 0);
    __decorate([
        property(cc.Label)
    ], ReversiScene.prototype, "blackScoreLabel", void 0);
    __decorate([
        property(cc.Label)
    ], ReversiScene.prototype, "whiteScoreLabel", void 0);
    ReversiScene = __decorate([
        ccclass
    ], ReversiScene);
    return ReversiScene;
}(cc.Component));
exports.ReversiScene = ReversiScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxyZXZlcnNpXFxSZXZlcnNpU2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMseUNBQXdDO0FBQ3hDLHVEQUF3RDtBQUN4RCwwQkFBeUI7QUFFbkIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0MsZ0NBQVk7SUFBOUM7UUFBQSxxRUEySEM7UUF6SFcsV0FBSyxHQUFpQixJQUFJLENBQUM7UUFFM0IscUJBQWUsR0FBYSxJQUFJLENBQUM7UUFFakMscUJBQWUsR0FBYSxJQUFJLENBQUM7UUFFakMsUUFBRSxHQUFjLElBQUksQ0FBQztRQUN0QixXQUFLLEdBQUcsdUJBQUksQ0FBQzs7SUFrSHhCLENBQUM7SUFoSEcsNEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxxQkFBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELGdDQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLHdCQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDbEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2xDLEtBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQ1EsSUFBQSxLQUFtQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxFQUEzRCxh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LElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUU7b0JBQ3ZCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDbkI7cUJBQU07b0JBQ0gsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyx3QkFBSyxDQUFDLEVBQUU7d0JBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsd0JBQUssQ0FBQzt3QkFDbkIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO3FCQUNoQjt5QkFBTTt3QkFDSCxLQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztxQkFDckM7aUJBQ0o7Z0JBQ0QsTUFBTTtZQUNWLEtBQUssd0JBQUs7Z0JBRU4sTUFBTTtZQUNWLE9BQU8sQ0FBQyxDQUFDLE1BQU07U0FDbEI7SUFDTCxDQUFDO0lBdkhEO1FBREMsUUFBUSxDQUFDLDJCQUFZLENBQUM7K0NBQ1k7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt5REFDc0I7SUFFekM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt5REFDc0I7SUFOaEMsWUFBWTtRQUR4QixPQUFPO09BQ0ssWUFBWSxDQTJIeEI7SUFBRCxtQkFBQztDQTNIRCxBQTJIQyxDQTNIaUMsRUFBRSxDQUFDLFNBQVMsR0EySDdDO0FBM0hZLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmV2ZXJzaUJvYXJkIH0gZnJvbSBcIi4vUmV2ZXJzaUJvYXJkXCI7XG5pbXBvcnQgeyBSZXZlcnNpQUkgfSBmcm9tIFwiLi9SZXZlcnNpQUlcIjtcbmltcG9ydCB7IE5PTkUsIEJMQUNLLCBXSElURSB9IGZyb20gXCIuL1JldmVyc2lDb25zdGFudHNcIjtcbmltcG9ydCB7IEcgfSBmcm9tIFwiLi4vR1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIFJldmVyc2lTY2VuZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KFJldmVyc2lCb2FyZClcbiAgICBwcml2YXRlIGJvYXJkOiBSZXZlcnNpQm9hcmQgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwcml2YXRlIGJsYWNrU2NvcmVMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwcml2YXRlIHdoaXRlU2NvcmVMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBhaTogUmV2ZXJzaUFJID0gbnVsbDtcbiAgICBwdWJsaWMgc3RhdGUgPSBOT05FO1xuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQuaW5pdCh0aGlzKTtcbiAgICAgICAgdGhpcy5haSA9IG5ldyBSZXZlcnNpQUkodGhpcy5ib2FyZCk7XG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XG4gICAgfVxuXG4gICAgc3RhcnRHYW1lKCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gQkxBQ0s7XG4gICAgICAgIHRoaXMuYm9hcmQucmVzZXQoKTtcbiAgICAgICAgdGhpcy5ibGFja1Njb3JlTGFiZWwuc3RyaW5nID0gXCIyXCI7XG4gICAgICAgIHRoaXMud2hpdGVTY29yZUxhYmVsLnN0cmluZyA9IFwiMlwiO1xuICAgICAgICBHLmdhbWVSb290LnNob3dUaXAoXCLkvaDmmK/pu5Hmo4vkvaDlhYjotbBcIik7XG4gICAgfVxuXG4gICAgb3ZlckdhbWUoKSB7XG4gICAgICAgIGxldCB7IGJsYWNrUGllY2VTdW0sIHdoaXRlUGllY2VTdW0gfSA9IHRoaXMuYm9hcmQuZ2V0UGllY2VDb3VudCgpO1xuICAgICAgICBpZiAoYmxhY2tQaWVjZVN1bSA+IHdoaXRlUGllY2VTdW0pIHtcbiAgICAgICAgICAgIGNjLmxvZyhcIueZveaji+iDnFwiKTtcbiAgICAgICAgICAgIEcuZ2FtZVJvb3Quc2hvd01hc2tNZXNzYWdlKFwi5L2g6LWi5LqG6Zi/5bCU5rOV5LqM54uX77yBXCIsXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogXCLmnJXnn6XpgZPkuoZcIiwgY2I6ICgpID0+IHsgfSwgdGFyZ2V0OiB0aGlzIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGJsYWNrUGllY2VTdW0gPCB3aGl0ZVBpZWNlU3VtKSB7XG4gICAgICAgICAgICBjYy5sb2coXCLpu5Hmo4vog5xcIik7XG4gICAgICAgICAgICBHLmdhbWVSb290LnNob3dNYXNrTWVzc2FnZShcIuS9oOi+k+e7meS6humYv+WwlOazleS6jOeLl++8gVwiLFxuICAgICAgICAgICAgICAgIHsgbGFiZWw6IFwi5pyN5LqGXCIsIGNiOiAoKSA9PiB7IH0sIHRhcmdldDogdGhpcyB9LFxuICAgICAgICAgICAgICAgIHsgbGFiZWw6IFwi5LiN5pyNXCIsIGNiOiAoKSA9PiB7IH0sIHRhcmdldDogdGhpcyB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLmxvZyhcIuW5s+WxgFwiKTtcbiAgICAgICAgICAgIEcuZ2FtZVJvb3Quc2hvd01hc2tNZXNzYWdlKFwi5L2g5ZKM6Zi/5bCU5rOV5LqM54uX5LqU5LqU5byAIVwiLFxuICAgICAgICAgICAgICAgIHsgbGFiZWw6IFwi5pyV55+l6YGT5LqGXCIsIGNiOiAoKSA9PiB7IH0sIHRhcmdldDogdGhpcyB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0YXRlID0gTk9ORTtcbiAgICB9XG5cbiAgICB1cGRhdGVTY29yZSgpIHtcbiAgICAgICAgbGV0IHsgYmxhY2tQaWVjZVN1bSwgd2hpdGVQaWVjZVN1bSB9ID0gdGhpcy5ib2FyZC5nZXRQaWVjZUNvdW50KCk7XG4gICAgICAgIHRoaXMuYmxhY2tTY29yZUxhYmVsLnN0cmluZyA9IGJsYWNrUGllY2VTdW0gKyBcIlwiO1xuICAgICAgICB0aGlzLndoaXRlU2NvcmVMYWJlbC5zdHJpbmcgPSB3aGl0ZVBpZWNlU3VtICsgXCJcIjtcbiAgICB9XG5cbiAgICBvbkJ0blJldHVybigpIHtcbiAgICAgICAgRy5yZXR1cm5IYWxsKCk7XG4gICAgfVxuXG4gICAgb25CdG5SZXN0YXJ0KCkge1xuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xuICAgIH1cblxuICAgIHJ1bkFpKCkge1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgY29vciA9IHRoaXMuYWkuZ2V0TmV4dENvb3IoKTtcbiAgICAgICAgICAgIHRoaXMuYm9hcmQucGxhY2VXaGl0ZShjb29yKTtcbiAgICAgICAgICAgIGxldCBwaWVjZSA9IHRoaXMuYm9hcmQuZ2V0UGllY2VCeUNvb3IoY29vcik7XG4gICAgICAgICAgICBmb3IgKGxldCBkaXIgPSAxOyBkaXIgPD0gODsgZGlyKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZC5qdWRnZVBhc3MoV0hJVEUsIHBpZWNlLCBkaXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmQuY2hhbmdlUGFzcyhwaWVjZSwgZGlyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZC5qdWRnZVdpbigpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vdmVyR2FtZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZC5qdWRnZU1vdmVhYmxlKEJMQUNLKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gQkxBQ0s7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgRy5nYW1lUm9vdC5zaG93VGlwKFwi6buR5qOL5peg5Zyw5Y+v5LiL77yM55m95qOL57un57utXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJ1bkFpKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxKTtcbiAgICB9XG5cbiAgICBvbkJvYXJkVG91Y2hlZChjb29yOiBjYy5WZWMyKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSBOT05FOlxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEJMQUNLOlxuICAgICAgICAgICAgICAgIGxldCBwaWVjZSA9IHRoaXMuYm9hcmQuZ2V0UGllY2VCeUNvb3IoY29vcik7XG4gICAgICAgICAgICAgICAgaWYgKHBpZWNlLmNvbG9yICE9PSBOT05FKSB7XG4gICAgICAgICAgICAgICAgICAgIEcuZ2FtZVJvb3Quc2hvd1RpcChcIui/memHjOacieWtkOS6hu+8jOS9oOaYr+S4jeaYr+WCu1wiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYm9hcmQuY2FuUGxhY2UodGhpcy5zdGF0ZSwgY29vcikpIHtcbiAgICAgICAgICAgICAgICAgICAgRy5nYW1lUm9vdC5zaG93VGlwKFwi5LiN56ym5ZCI6KeE5YiZXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmQucGxhY2VCbGFjayhjb29yKTtcbiAgICAgICAgICAgICAgICBwaWVjZSA9IHRoaXMuYm9hcmQuZ2V0UGllY2VCeUNvb3IoY29vcik7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZGlyID0gMTsgZGlyIDw9IDg7IGRpcisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkLmp1ZGdlUGFzcyhCTEFDSywgcGllY2UsIGRpcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmQuY2hhbmdlUGFzcyhwaWVjZSwgZGlyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmQuanVkZ2VXaW4oKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm92ZXJHYW1lKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmQuanVkZ2VNb3ZlYWJsZShXSElURSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBXSElURTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucnVuQWkoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEcuZ2FtZVJvb3Quc2hvd1RpcChcIueZveaji+aXoOWcsOWPr+S4i++8jOm7keaji+e7p+e7rVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgV0hJVEU6XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6IGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=