
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/puzzle/PuzzleBoard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f9b13Qa7CZHRZEtlGELlUrB', 'PuzzleBoard');
// src/puzzle/PuzzleBoard.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.PuzzleBoard = void 0;
var PuzzlePiece_1 = require("./PuzzlePiece");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var PuzzleBoard = /** @class */ (function (_super) {
    __extends(PuzzleBoard, _super);
    // @executeInEditMode
    function PuzzleBoard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.piecePrefab = null;
        _this.colNum = 5;
        _this.colSpace = 5;
        _this.colWidth = 0;
        _this.blankPiece = null;
        _this.puzzleScene = null;
        return _this;
    }
    PuzzleBoard.prototype.init = function (puzzleScene) {
        this.puzzleScene = puzzleScene;
        this.addListeners();
    };
    PuzzleBoard.prototype.reset = function (colNum) {
        this.colNum = colNum;
        this.colWidth = (this.node.width - this.colSpace * (this.colNum + 1)) / this.colNum;
        this.node.removeAllChildren();
        this.pieceMap = [];
        for (var x = 0; x < this.colNum; x++) {
            this.pieceMap[x] = [];
            for (var y = 0; y < this.colNum; y++) {
                var pieceNode = cc.instantiate(this.piecePrefab);
                this.node.addChild(pieceNode);
                pieceNode.x = x * (this.colWidth + this.colSpace) + this.colSpace;
                pieceNode.y = y * (this.colWidth + this.colSpace) + this.colSpace;
                this.pieceMap[x][y] = pieceNode.getComponent(PuzzlePiece_1.Piece);
                this.pieceMap[x][y].init(x, y, this.colNum, this.colWidth);
                if (this.pieceMap[x][y].isBlank) {
                    this.blankPiece = this.pieceMap[x][y];
                }
            }
        }
        this.shuffle();
    };
    PuzzleBoard.prototype.shuffle = function () {
        for (var i = 0; i < 1000; i++) {
            var nearPieces = this.getNearPieces(this.blankPiece);
            var n = Math.floor(Math.random() * nearPieces.length);
            this.exchangeTwoPiece(this.blankPiece, nearPieces[n]);
        }
    };
    PuzzleBoard.prototype.onBoadTouch = function (event) {
        var worldPos = event.getLocation();
        var localPos = this.node.convertToNodeSpaceAR(worldPos);
        var x = Math.floor((localPos.x - this.colSpace) / (this.colWidth + this.colSpace));
        var y = Math.floor((localPos.y - this.colSpace) / (this.colWidth + this.colSpace));
        this.puzzleScene.onBoardTouch(x, y);
    };
    PuzzleBoard.prototype.movePiece = function (x, y) {
        var piece = this.pieceMap[x][y];
        var nearPieces = this.getNearPieces(piece);
        for (var _i = 0, nearPieces_1 = nearPieces; _i < nearPieces_1.length; _i++) {
            var nearPiece = nearPieces_1[_i];
            if (nearPiece.isBlank) {
                this.exchangeTwoPiece(piece, nearPiece);
                return true;
            }
        }
        return false;
    };
    PuzzleBoard.prototype.judgeWin = function () {
        for (var x = 0; x < this.colNum; x++) {
            for (var y = 0; y < this.colNum; y++) {
                if (!this.pieceMap[x][y].isRight) {
                    return false;
                }
            }
        }
        this.blankPiece.node.active = true;
        return true;
    };
    PuzzleBoard.prototype.getNearPieces = function (piece) {
        var nearPieces = [];
        if (piece.curCol > 0) { // left
            nearPieces.push(this.pieceMap[piece.curCol - 1][piece.curRow]);
        }
        if (piece.curCol < this.colNum - 1) { // right
            nearPieces.push(this.pieceMap[piece.curCol + 1][piece.curRow]);
        }
        if (piece.curRow > 0) { // bottom
            nearPieces.push(this.pieceMap[piece.curCol][piece.curRow - 1]);
        }
        if (piece.curRow < this.colNum - 1) { // top
            nearPieces.push(this.pieceMap[piece.curCol][piece.curRow + 1]);
        }
        return nearPieces;
    };
    PuzzleBoard.prototype.exchangeTwoPiece = function (piece1, piece2) {
        var _a, _b, _c;
        this.pieceMap[piece2.curCol][piece2.curRow] = piece1;
        this.pieceMap[piece1.curCol][piece1.curRow] = piece2;
        _a = [piece2.curCol, piece1.curCol], piece1.curCol = _a[0], piece2.curCol = _a[1];
        _b = [piece2.curRow, piece1.curRow], piece1.curRow = _b[0], piece2.curRow = _b[1];
        _c = [piece2.node.position, piece1.node.position], piece1.node.position = _c[0], piece2.node.position = _c[1];
    };
    PuzzleBoard.prototype.addListeners = function () {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onBoadTouch, this);
    };
    PuzzleBoard.prototype.removeListeners = function () {
    };
    __decorate([
        property(cc.Prefab)
    ], PuzzleBoard.prototype, "piecePrefab", void 0);
    __decorate([
        property(cc.Integer)
    ], PuzzleBoard.prototype, "colNum", void 0);
    __decorate([
        property(cc.Integer)
    ], PuzzleBoard.prototype, "colSpace", void 0);
    PuzzleBoard = __decorate([
        ccclass
        // @executeInEditMode
    ], PuzzleBoard);
    return PuzzleBoard;
}(cc.Component));
exports.PuzzleBoard = PuzzleBoard;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxwdXp6bGVcXFB1enpsZUJvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXNDO0FBR2hDLElBQUEsS0FBMkMsRUFBRSxDQUFDLFVBQVUsRUFBdEQsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsaUJBQWlCLHVCQUFrQixDQUFDO0FBSS9EO0lBQWlDLCtCQUFZO0lBRDdDLHFCQUFxQjtJQUNyQjtRQUFBLHFFQXFIQztRQWxIVyxpQkFBVyxHQUFjLElBQUksQ0FBQztRQUU5QixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBRW5CLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFFckIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUVyQixnQkFBVSxHQUFVLElBQUksQ0FBQztRQUV6QixpQkFBVyxHQUFnQixJQUFJLENBQUM7O0lBd0c1QyxDQUFDO0lBdEdHLDBCQUFJLEdBQUosVUFBSyxXQUF3QjtRQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVNLDJCQUFLLEdBQVosVUFBYSxNQUFlO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDcEYsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lB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LEVBQUUsTUFBTSxDQUFDLE1BQU0sUUFBQSxDQUFtQztRQUNoRSxLQUFpQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUE5RCxNQUFNLENBQUMsTUFBTSxRQUFBLEVBQUUsTUFBTSxDQUFDLE1BQU0sUUFBQSxDQUFtQztRQUVoRSxLQUErQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQTFGLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxRQUFBLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLFFBQUEsQ0FBaUQ7SUFDaEcsQ0FBQztJQUVPLGtDQUFZLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVPLHFDQUFlLEdBQXZCO0lBRUEsQ0FBQztJQWhIRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO29EQUNrQjtJQUV0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOytDQUNNO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7aURBQ1E7SUFQcEIsV0FBVztRQUZ2QixPQUFPO1FBQ1IscUJBQXFCO09BQ1IsV0FBVyxDQXFIdkI7SUFBRCxrQkFBQztDQXJIRCxBQXFIQyxDQXJIZ0MsRUFBRSxDQUFDLFNBQVMsR0FxSDVDO0FBckhZLGtDQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGllY2UgfSBmcm9tIFwiLi9QdXp6bGVQaWVjZVwiO1xuaW1wb3J0IHsgUHV6emxlU2NlbmUgfSBmcm9tIFwiLi9QdXp6bGVTY2VuZVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBleGVjdXRlSW5FZGl0TW9kZSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3Ncbi8vIEBleGVjdXRlSW5FZGl0TW9kZVxuZXhwb3J0IGNsYXNzIFB1enpsZUJvYXJkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJpdmF0ZSBwaWVjZVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcbiAgICBwcml2YXRlIGNvbE51bTogbnVtYmVyID0gNTtcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcbiAgICBwcml2YXRlIGNvbFNwYWNlOiBudW1iZXIgPSA1O1xuXG4gICAgcHJpdmF0ZSBjb2xXaWR0aDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHBpZWNlTWFwOiBBcnJheTxBcnJheTxQaWVjZT4+O1xuICAgIHByaXZhdGUgYmxhbmtQaWVjZTogUGllY2UgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBwdXp6bGVTY2VuZTogUHV6emxlU2NlbmUgPSBudWxsO1xuXG4gICAgaW5pdChwdXp6bGVTY2VuZTogUHV6emxlU2NlbmUpIHtcbiAgICAgICAgdGhpcy5wdXp6bGVTY2VuZSA9IHB1enpsZVNjZW5lO1xuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZXNldChjb2xOdW0/OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5jb2xOdW0gPSBjb2xOdW07XG4gICAgICAgIHRoaXMuY29sV2lkdGggPSAodGhpcy5ub2RlLndpZHRoIC0gdGhpcy5jb2xTcGFjZSAqICh0aGlzLmNvbE51bSArIDEpKSAvIHRoaXMuY29sTnVtO1xuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgdGhpcy5waWVjZU1hcCA9IFtdO1xuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuY29sTnVtOyB4KyspIHtcbiAgICAgICAgICAgIHRoaXMucGllY2VNYXBbeF0gPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5jb2xOdW07IHkrKykge1xuICAgICAgICAgICAgICAgIGxldCBwaWVjZU5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBpZWNlUHJlZmFiKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQocGllY2VOb2RlKTtcbiAgICAgICAgICAgICAgICBwaWVjZU5vZGUueCA9IHggKiAodGhpcy5jb2xXaWR0aCArIHRoaXMuY29sU3BhY2UpICsgdGhpcy5jb2xTcGFjZTtcbiAgICAgICAgICAgICAgICBwaWVjZU5vZGUueSA9IHkgKiAodGhpcy5jb2xXaWR0aCArIHRoaXMuY29sU3BhY2UpICsgdGhpcy5jb2xTcGFjZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBpZWNlTWFwW3hdW3ldID0gcGllY2VOb2RlLmdldENvbXBvbmVudChQaWVjZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5waWVjZU1hcFt4XVt5XS5pbml0KHgsIHksIHRoaXMuY29sTnVtLCB0aGlzLmNvbFdpZHRoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5waWVjZU1hcFt4XVt5XS5pc0JsYW5rKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmxhbmtQaWVjZSA9IHRoaXMucGllY2VNYXBbeF1beV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2h1ZmZsZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2h1ZmZsZSgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDAwOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBuZWFyUGllY2VzID0gdGhpcy5nZXROZWFyUGllY2VzKHRoaXMuYmxhbmtQaWVjZSk7XG4gICAgICAgICAgICBsZXQgbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5lYXJQaWVjZXMubGVuZ3RoKTtcbiAgICAgICAgICAgIHRoaXMuZXhjaGFuZ2VUd29QaWVjZSh0aGlzLmJsYW5rUGllY2UsIG5lYXJQaWVjZXNbbl0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkJvYWRUb3VjaChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xuICAgICAgICBsZXQgd29ybGRQb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xuICAgICAgICBsZXQgbG9jYWxQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xuICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoKGxvY2FsUG9zLnggLSB0aGlzLmNvbFNwYWNlKSAvICh0aGlzLmNvbFdpZHRoICsgdGhpcy5jb2xTcGFjZSkpO1xuICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoKGxvY2FsUG9zLnkgLSB0aGlzLmNvbFNwYWNlKSAvICh0aGlzLmNvbFdpZHRoICsgdGhpcy5jb2xTcGFjZSkpO1xuICAgICAgICB0aGlzLnB1enpsZVNjZW5lLm9uQm9hcmRUb3VjaCh4LCB5KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbW92ZVBpZWNlKHgsIHkpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IHBpZWNlID0gdGhpcy5waWVjZU1hcFt4XVt5XTtcbiAgICAgICAgbGV0IG5lYXJQaWVjZXMgPSB0aGlzLmdldE5lYXJQaWVjZXMocGllY2UpO1xuICAgICAgICBmb3IgKGxldCBuZWFyUGllY2Ugb2YgbmVhclBpZWNlcykge1xuICAgICAgICAgICAgaWYgKG5lYXJQaWVjZS5pc0JsYW5rKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leGNoYW5nZVR3b1BpZWNlKHBpZWNlLCBuZWFyUGllY2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMganVkZ2VXaW4oKTogYm9vbGVhbiB7XG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5jb2xOdW07IHgrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmNvbE51bTsgeSsrKSB7XG4gICAgICAgICAgICAgICAgaWYoIXRoaXMucGllY2VNYXBbeF1beV0uaXNSaWdodCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmxhbmtQaWVjZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0TmVhclBpZWNlcyhwaWVjZTogUGllY2UpOiBBcnJheTxQaWVjZT4ge1xuICAgICAgICBsZXQgbmVhclBpZWNlcyA9IFtdO1xuICAgICAgICBpZiAocGllY2UuY3VyQ29sID4gMCkgeyAvLyBsZWZ0XG4gICAgICAgICAgICBuZWFyUGllY2VzLnB1c2godGhpcy5waWVjZU1hcFtwaWVjZS5jdXJDb2wgLSAxXVtwaWVjZS5jdXJSb3ddKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGllY2UuY3VyQ29sIDwgdGhpcy5jb2xOdW0gLSAxKSB7IC8vIHJpZ2h0XG4gICAgICAgICAgICBuZWFyUGllY2VzLnB1c2godGhpcy5waWVjZU1hcFtwaWVjZS5jdXJDb2wgKyAxXVtwaWVjZS5jdXJSb3ddKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGllY2UuY3VyUm93ID4gMCkgeyAvLyBib3R0b21cbiAgICAgICAgICAgIG5lYXJQaWVjZXMucHVzaCh0aGlzLnBpZWNlTWFwW3BpZWNlLmN1ckNvbF1bcGllY2UuY3VyUm93IC0gMV0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwaWVjZS5jdXJSb3cgPCB0aGlzLmNvbE51bSAtIDEpIHsgLy8gdG9wXG4gICAgICAgICAgICBuZWFyUGllY2VzLnB1c2godGhpcy5waWVjZU1hcFtwaWVjZS5jdXJDb2xdW3BpZWNlLmN1clJvdyArIDFdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmVhclBpZWNlcztcbiAgICB9XG5cbiAgICBwdWJsaWMgZXhjaGFuZ2VUd29QaWVjZShwaWVjZTE6IFBpZWNlLCBwaWVjZTI6IFBpZWNlKSB7XG4gICAgICAgIHRoaXMucGllY2VNYXBbcGllY2UyLmN1ckNvbF1bcGllY2UyLmN1clJvd10gPSBwaWVjZTE7XG4gICAgICAgIHRoaXMucGllY2VNYXBbcGllY2UxLmN1ckNvbF1bcGllY2UxLmN1clJvd10gPSBwaWVjZTI7XG5cbiAgICAgICAgW3BpZWNlMS5jdXJDb2wsIHBpZWNlMi5jdXJDb2xdID0gW3BpZWNlMi5jdXJDb2wsIHBpZWNlMS5jdXJDb2xdO1xuICAgICAgICBbcGllY2UxLmN1clJvdywgcGllY2UyLmN1clJvd10gPSBbcGllY2UyLmN1clJvdywgcGllY2UxLmN1clJvd107XG5cbiAgICAgICAgW3BpZWNlMS5ub2RlLnBvc2l0aW9uLCBwaWVjZTIubm9kZS5wb3NpdGlvbl0gPSBbcGllY2UyLm5vZGUucG9zaXRpb24sIHBpZWNlMS5ub2RlLnBvc2l0aW9uXTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkJvYWRUb3VjaCwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW1vdmVMaXN0ZW5lcnMoKSB7XG5cbiAgICB9XG5cbn0iXX0=