
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/get47/Get47Board.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4e746t6FElNd7L0fGocCm7k', 'Get47Board');
// src/get47/Get47Board.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Get47Board = void 0;
var Get47Piece_1 = require("./Get47Piece");
var Get47Constants_1 = require("./Get47Constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Get47Board = /** @class */ (function (_super) {
    __extends(Get47Board, _super);
    function Get47Board() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.colsNum = 7;
        _this.rowsNum = 7;
        _this.padding = 5;
        _this.spacing = 5;
        _this.piecePrefab = null;
        _this.get47Scene = null;
        _this.runningAction = false;
        _this.score = 0;
        _this.inputDir = 0; // 手机倾斜方向，1向右分数相加，-1向左分数相减
        return _this;
    }
    Get47Board.prototype.init = function (get47Scene) {
        this.get47Scene = get47Scene;
        this.pieceWidth = (this.node.width - this.padding * 2 - this.spacing * (this.colsNum - 1)) / this.colsNum;
    };
    Get47Board.prototype.reset = function () {
        this.node.removeAllChildren();
        this.pieceMap = [];
        for (var x = 0; x < this.colsNum; x++) {
            this.pieceMap[x] = [];
            for (var y = 0; y < this.rowsNum; y++) {
                var pieceNode = cc.instantiate(this.piecePrefab);
                this.node.addChild(pieceNode);
                pieceNode.width = this.pieceWidth;
                pieceNode.height = this.pieceWidth;
                pieceNode.position = cc.v2(this.padding + x * (this.pieceWidth + this.spacing), this.padding + y * (this.pieceWidth + this.spacing));
                var piece = pieceNode.getComponent(Get47Piece_1.Piece);
                piece.init(x, y);
                this.addTouchEvent(piece);
                this.pieceMap[x][y] = piece;
            }
        }
        this.deletePieces();
    };
    Get47Board.prototype.addTouchEvent = function (piece) {
        var _this = this;
        var f = function (e) {
            if (_this.runningAction) {
                return;
            }
            var p1 = e.getStartLocation();
            var p2 = e.getLocation();
            var dir;
            if (Math.abs(p2.x - p1.x) > Math.abs(p2.y - p1.y)) {
                if (p2.x > p1.x) {
                    dir = Get47Constants_1.DIR.RIGHT;
                }
                else {
                    dir = Get47Constants_1.DIR.LEFT;
                }
            }
            else {
                if (p2.y > p1.y) {
                    dir = Get47Constants_1.DIR.UP;
                }
                else {
                    dir = Get47Constants_1.DIR.DOWN;
                }
            }
            _this.inputDir = 0;
            _this.get47Scene.onPieceTouch(piece, dir);
        };
        piece.node.on(cc.Node.EventType.TOUCH_END, f, this);
        piece.node.on(cc.Node.EventType.TOUCH_CANCEL, f, this);
    };
    Get47Board.prototype.tryExchange = function (piece, dir) {
        var _this = this;
        var neighborPiece = this.getNeighborPiece(piece, dir);
        if (neighborPiece === null) {
            return;
        }
        this.runningAction = true;
        this.exchangeTwoPiecesState(piece, neighborPiece);
        var hLines = this.getHorizontalLines();
        var vLines = this.getVerticalLines();
        if (hLines.length + vLines.length > 0) {
            this.exchangeTwoPiecesPosIndex(piece, neighborPiece);
            var finished_1 = 0;
            var total_1 = 2;
            var self = this;
            var action1 = cc.sequence(cc.moveTo(0.15, piece.posIndex), cc.callFunc(function () {
                finished_1++;
                if (finished_1 === total_1) {
                    _this.runningAction = false;
                    _this.deletePieces();
                }
            }));
            var action2 = cc.sequence(cc.moveTo(0.15, neighborPiece.posIndex), cc.callFunc(function () {
                finished_1++;
                if (finished_1 === total_1) {
                    _this.runningAction = false;
                    _this.deletePieces();
                }
            }));
            piece.node.runAction(action1);
            neighborPiece.node.runAction(action2);
        }
        else {
            this.exchangeTwoPiecesState(piece, neighborPiece);
            var finished_2 = 0;
            var total_2 = 2;
            var tilePos = piece.node.position;
            var neighborTilePos = neighborPiece.node.position;
            var action1 = cc.sequence(cc.moveTo(0.1, neighborTilePos), cc.moveTo(0.1, tilePos), cc.callFunc(function () {
                finished_2++;
                if (finished_2 === total_2) {
                    _this.runningAction = false;
                }
            }));
            var action2 = cc.sequence(cc.moveTo(0.1, tilePos), cc.moveTo(0.1, neighborTilePos), cc.callFunc(function () {
                finished_2++;
                if (finished_2 === total_2) {
                    _this.runningAction = false;
                }
            }));
            piece.node.runAction(action1);
            neighborPiece.node.runAction(action2);
        }
    };
    Get47Board.prototype.exchangeTwoPiecesState = function (piece1, piece2) {
        var _a, _b;
        this.pieceMap[piece1.x][piece1.y] = piece2;
        this.pieceMap[piece2.x][piece2.y] = piece1;
        _a = [piece2.x, piece1.x], piece1.x = _a[0], piece2.x = _a[1];
        _b = [piece2.y, piece1.y], piece1.y = _b[0], piece2.y = _b[1];
    };
    Get47Board.prototype.exchangeTwoPiecesPosIndex = function (piece1, piece2) {
        var _a;
        _a = [piece2.posIndex, piece1.posIndex], piece1.posIndex = _a[0], piece2.posIndex = _a[1];
    };
    Get47Board.prototype.deletePieces = function () {
        var _this = this;
        this.runningAction = true;
        var hLines = this.getHorizontalLines();
        var vLines = this.getVerticalLines();
        if (hLines.length + vLines.length === 0) {
            this.runningAction = false;
            return;
        }
        var addNumber = 0; //横加竖减
        var minusNumber = 0;
        var lines = [];
        for (var _i = 0, hLines_1 = hLines; _i < hLines_1.length; _i++) {
            var piece = hLines_1[_i];
            addNumber += piece.type;
            lines.push(piece);
        }
        for (var _a = 0, vLines_1 = vLines; _a < vLines_1.length; _a++) {
            var vPiece = vLines_1[_a];
            minusNumber += vPiece.type;
            if (lines.indexOf(vPiece) === -1) {
                lines.push(vPiece);
            }
        }
        // TODO:
        if (this.inputDir > 0) {
            this.get47Scene.updateScore(addNumber + minusNumber);
        }
        else if (this.inputDir < 0) {
            this.get47Scene.updateScore(-addNumber - minusNumber);
        }
        else {
            this.get47Scene.updateScore(addNumber - minusNumber);
        }
        // this.score += (addNumber - minusNumber);
        var finished = 0;
        var total = lines.length;
        for (var i = 0; i < total; i++) {
            var action = cc.sequence(cc.scaleTo(0.15, 0, 0), cc.callFunc(function () {
                finished++;
                if (finished === total) {
                    _this.runningAction = false;
                    _this.fallPieces();
                }
            }));
            lines[i].isAlive = false;
            lines[i].node.runAction(action);
        }
    };
    Get47Board.prototype.fallPieces = function () {
        var _this = this;
        this.runningAction = true;
        //下落
        var isAllFall = false;
        while (!isAllFall) {
            isAllFall = true;
            for (var y = 1; y < this.rowsNum; y++) {
                for (var x = 0; x < this.colsNum; x++) {
                    if (this.pieceMap[x][y].isAlive && !this.pieceMap[x][y - 1].isAlive) {
                        this.exchangeTwoPiecesState(this.pieceMap[x][y], this.pieceMap[x][y - 1]);
                        this.exchangeTwoPiecesPosIndex(this.pieceMap[x][y], this.pieceMap[x][y - 1]);
                        isAllFall = false;
                    }
                }
            }
        }
        var fallingPieces = [];
        for (var x = 0; x < this.colsNum; x++) {
            for (var y = 0; y < this.rowsNum; y++) {
                if (this.pieceMap[x][y].posIndex !== this.pieceMap[x][y].node.position) {
                    fallingPieces.push(this.pieceMap[x][y]);
                }
            }
        }
        var finished = 0;
        var total = fallingPieces.length;
        for (var i = 0; i < total; i++) {
            var action = cc.sequence(cc.moveTo(0.3, fallingPieces[i].posIndex), cc.callFunc(function () {
                finished++;
                if (finished == total) {
                    _this.runningAction = false;
                    _this.addPieces();
                }
            }));
            fallingPieces[i].node.runAction(action);
        }
    };
    Get47Board.prototype.addPieces = function () {
        var _this = this;
        this.runningAction = true;
        //填补空白
        var addingPieces = [];
        for (var y = 0; y < this.rowsNum; y++) {
            for (var x = 0; x < this.colsNum; x++) {
                if (!this.pieceMap[x][y].isAlive) {
                    addingPieces.push(this.pieceMap[x][y]);
                }
            }
        }
        var finished = 0;
        var total = addingPieces.length;
        for (var i = 0; i < total; i++) {
            var action = cc.sequence(cc.scaleTo(0.15, 1, 1), cc.callFunc(function () {
                finished++;
                if (finished == total) {
                    _this.runningAction = false;
                    _this.deletePieces();
                }
            }));
            addingPieces[i].randomType();
            addingPieces[i].isAlive = true;
            addingPieces[i].node.runAction(action);
        }
    };
    Get47Board.prototype.getVerticalLines = function () {
        var linePieces = [];
        var count = 1;
        for (var x = 0; x < this.colsNum; x++) {
            for (var y = 0; y < this.rowsNum - 2; y = y + count) {
                var piece = this.pieceMap[x][y];
                count = 1;
                for (var n = y + 1; n < this.rowsNum; n++) {
                    if (this.pieceMap[x][n].type === piece.type) {
                        count++;
                    }
                    else {
                        break;
                    }
                }
                if (count >= 3) {
                    for (var i = 0; i < count; i++) {
                        linePieces.push(this.pieceMap[x][y + i]);
                    }
                }
            }
        }
        return linePieces;
    };
    Get47Board.prototype.getHorizontalLines = function () {
        var linePieces = [];
        var count = 1;
        for (var y = 0; y < this.rowsNum; y++) {
            for (var x = 0; x < this.colsNum - 2; x = x + count) {
                var piece = this.pieceMap[x][y];
                var pieceType = piece.type;
                count = 1;
                for (var n = x + 1; n < this.colsNum; n++) {
                    if (this.pieceMap[n][y].type === pieceType) {
                        count++;
                    }
                    else {
                        break;
                    }
                }
                if (count >= 3) {
                    for (var i = 0; i < count; i++) {
                        linePieces.push(this.pieceMap[x + i][y]);
                    }
                }
            }
        }
        return linePieces;
    };
    Get47Board.prototype.getNeighborPiece = function (piece, dir) {
        var x = piece.x;
        var y = piece.y;
        switch (dir) {
            case Get47Constants_1.DIR.LEFT:
                if (x > 0) {
                    return this.pieceMap[x - 1][y];
                }
                break;
            case Get47Constants_1.DIR.RIGHT:
                if (x < this.colsNum - 1) {
                    return this.pieceMap[x + 1][y];
                }
                break;
            case Get47Constants_1.DIR.UP:
                if (y < this.rowsNum - 1) {
                    return this.pieceMap[x][y + 1];
                }
                break;
            case Get47Constants_1.DIR.DOWN:
                if (y > 0) {
                    return this.pieceMap[x][y - 1];
                }
                break;
        }
        return null;
    };
    Get47Board.prototype.newView = function (input) {
        var _this = this;
        if (input === void 0) { input = 0; }
        this.inputDir = input;
        if (!this.runningAction) {
            this.runningAction = true;
            var finished_3 = 0;
            for (var x = 0; x < this.colsNum; x++) {
                for (var y = 0; y < this.rowsNum; y++) {
                    var action = cc.sequence(cc.scaleTo(0.3, 0, 0), cc.callFunc(function () {
                        finished_3++;
                        if (finished_3 === (_this.colsNum - 1) * (_this.rowsNum - 1)) {
                            _this.runningAction = false;
                            _this.addPieces();
                        }
                    }));
                    this.pieceMap[x][y].isAlive = false;
                    this.pieceMap[x][y].node.runAction(action);
                }
            }
        }
    };
    __decorate([
        property(cc.Integer)
    ], Get47Board.prototype, "colsNum", void 0);
    __decorate([
        property(cc.Integer)
    ], Get47Board.prototype, "rowsNum", void 0);
    __decorate([
        property(cc.Integer)
    ], Get47Board.prototype, "padding", void 0);
    __decorate([
        property(cc.Integer)
    ], Get47Board.prototype, "spacing", void 0);
    __decorate([
        property(cc.Prefab)
    ], Get47Board.prototype, "piecePrefab", void 0);
    Get47Board = __decorate([
        ccclass
    ], Get47Board);
    return Get47Board;
}(cc.Component));
exports.Get47Board = Get47Board;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxnZXQ0N1xcR2V0NDdCb2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDJDQUFxQztBQUNyQyxtREFBdUM7QUFFakMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBZ0MsOEJBQVk7SUFBNUM7UUFBQSxxRUFpWEM7UUE5V1csYUFBTyxHQUFXLENBQUMsQ0FBQztRQUVwQixhQUFPLEdBQVcsQ0FBQyxDQUFDO1FBRXBCLGFBQU8sR0FBVyxDQUFDLENBQUM7UUFFcEIsYUFBTyxHQUFXLENBQUMsQ0FBQztRQUVwQixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5QixnQkFBVSxHQUFlLElBQUksQ0FBQztRQUU5QixtQkFBYSxHQUFZLEtBQUssQ0FBQztRQUMvQixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLGNBQVEsR0FBVyxDQUFDLENBQUMsQ0FBQywwQkFBMEI7O0lBOFY1RCxDQUFDO0lBNVZVLHlCQUFJLEdBQVgsVUFBWSxVQUFzQjtRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQzlHLENBQUM7SUFFTSwwQkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxF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QUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzttREFDa0I7SUFYN0IsVUFBVTtRQUR0QixPQUFPO09BQ0ssVUFBVSxDQWlYdEI7SUFBRCxpQkFBQztDQWpYRCxBQWlYQyxDQWpYK0IsRUFBRSxDQUFDLFNBQVMsR0FpWDNDO0FBalhZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0NDdTY2VuZSB9IGZyb20gXCIuL0dldDQ3U2NlbmVcIjtcbmltcG9ydCB7IFBpZWNlIH0gZnJvbSBcIi4vR2V0NDdQaWVjZVwiO1xuaW1wb3J0IHsgRElSIH0gZnJvbSBcIi4vR2V0NDdDb25zdGFudHNcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBHZXQ0N0JvYXJkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxuICAgIHByaXZhdGUgY29sc051bTogbnVtYmVyID0gNztcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcbiAgICBwcml2YXRlIHJvd3NOdW06IG51bWJlciA9IDc7XG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXG4gICAgcHJpdmF0ZSBwYWRkaW5nOiBudW1iZXIgPSA1O1xuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxuICAgIHByaXZhdGUgc3BhY2luZzogbnVtYmVyID0gNTtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByaXZhdGUgcGllY2VQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBwcml2YXRlIHBpZWNlV2lkdGg6IG51bWJlcjtcbiAgICBwcml2YXRlIGdldDQ3U2NlbmU6IEdldDQ3U2NlbmUgPSBudWxsO1xuICAgIHByaXZhdGUgcGllY2VNYXA6IEFycmF5PEFycmF5PFBpZWNlPj47XG4gICAgcHJpdmF0ZSBydW5uaW5nQWN0aW9uOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBzY29yZTogbnVtYmVyID0gMDtcblxuICAgIHByaXZhdGUgaW5wdXREaXI6IG51bWJlciA9IDA7IC8vIOaJi+acuuWAvuaWnOaWueWQke+8jDHlkJHlj7PliIbmlbDnm7jliqDvvIwtMeWQkeW3puWIhuaVsOebuOWHj1xuXG4gICAgcHVibGljIGluaXQoZ2V0NDdTY2VuZTogR2V0NDdTY2VuZSkge1xuICAgICAgICB0aGlzLmdldDQ3U2NlbmUgPSBnZXQ0N1NjZW5lO1xuICAgICAgICB0aGlzLnBpZWNlV2lkdGggPSAodGhpcy5ub2RlLndpZHRoIC0gdGhpcy5wYWRkaW5nICogMiAtIHRoaXMuc3BhY2luZyAqICh0aGlzLmNvbHNOdW0gLSAxKSkgLyB0aGlzLmNvbHNOdW07XG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0KCkge1xuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgdGhpcy5waWVjZU1hcCA9IFtdO1xuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuY29sc051bTsgeCsrKSB7XG4gICAgICAgICAgICB0aGlzLnBpZWNlTWFwW3hdID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMucm93c051bTsgeSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBpZWNlTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGllY2VQcmVmYWIpO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChwaWVjZU5vZGUpO1xuICAgICAgICAgICAgICAgIHBpZWNlTm9kZS53aWR0aCA9IHRoaXMucGllY2VXaWR0aDtcbiAgICAgICAgICAgICAgICBwaWVjZU5vZGUuaGVpZ2h0ID0gdGhpcy5waWVjZVdpZHRoO1xuICAgICAgICAgICAgICAgIHBpZWNlTm9kZS5wb3NpdGlvbiA9IGNjLnYyKHRoaXMucGFkZGluZyArIHggKiAodGhpcy5waWVjZVdpZHRoICsgdGhpcy5zcGFjaW5nKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWRkaW5nICsgeSAqICh0aGlzLnBpZWNlV2lkdGggKyB0aGlzLnNwYWNpbmcpKTtcbiAgICAgICAgICAgICAgICBsZXQgcGllY2UgPSBwaWVjZU5vZGUuZ2V0Q29tcG9uZW50KFBpZWNlKTtcbiAgICAgICAgICAgICAgICBwaWVjZS5pbml0KHgsIHkpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkVG91Y2hFdmVudChwaWVjZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5waWVjZU1hcFt4XVt5XSA9IHBpZWNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVsZXRlUGllY2VzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRUb3VjaEV2ZW50KHBpZWNlOiBQaWVjZSkge1xuICAgICAgICBsZXQgZiA9IChlOiBjYy5FdmVudC5FdmVudFRvdWNoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5ydW5uaW5nQWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHAxID0gZS5nZXRTdGFydExvY2F0aW9uKCk7XG4gICAgICAgICAgICBsZXQgcDIgPSBlLmdldExvY2F0aW9uKCk7XG4gICAgICAgICAgICBsZXQgZGlyOiBESVI7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMocDIueCAtIHAxLngpID4gTWF0aC5hYnMocDIueSAtIHAxLnkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHAyLnggPiBwMS54KSB7XG4gICAgICAgICAgICAgICAgICAgIGRpciA9IERJUi5SSUdIVDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkaXIgPSBESVIuTEVGVDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChwMi55ID4gcDEueSkge1xuICAgICAgICAgICAgICAgICAgICBkaXIgPSBESVIuVVA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyID0gRElSLkRPV047XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pbnB1dERpciA9IDA7XG4gICAgICAgICAgICB0aGlzLmdldDQ3U2NlbmUub25QaWVjZVRvdWNoKHBpZWNlLCBkaXIpO1xuICAgICAgICB9O1xuICAgICAgICBwaWVjZS5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZiwgdGhpcyk7XG4gICAgICAgIHBpZWNlLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCBmLCB0aGlzKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyB0cnlFeGNoYW5nZShwaWVjZTogUGllY2UsIGRpcjogRElSKSB7XG4gICAgICAgIGxldCBuZWlnaGJvclBpZWNlID0gdGhpcy5nZXROZWlnaGJvclBpZWNlKHBpZWNlLCBkaXIpO1xuICAgICAgICBpZiAobmVpZ2hib3JQaWVjZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucnVubmluZ0FjdGlvbiA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5leGNoYW5nZVR3b1BpZWNlc1N0YXRlKHBpZWNlLCBuZWlnaGJvclBpZWNlKTtcbiAgICAgICAgbGV0IGhMaW5lcyA9IHRoaXMuZ2V0SG9yaXpvbnRhbExpbmVzKCk7XG4gICAgICAgIGxldCB2TGluZXMgPSB0aGlzLmdldFZlcnRpY2FsTGluZXMoKTtcbiAgICAgICAgaWYgKGhMaW5lcy5sZW5ndGggKyB2TGluZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5leGNoYW5nZVR3b1BpZWNlc1Bvc0luZGV4KHBpZWNlLCBuZWlnaGJvclBpZWNlKTtcbiAgICAgICAgICAgIGxldCBmaW5pc2hlZCA9IDA7XG4gICAgICAgICAgICBsZXQgdG90YWwgPSAyO1xuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgbGV0IGFjdGlvbjEgPSBjYy5zZXF1ZW5jZShjYy5tb3ZlVG8oMC4xNSwgcGllY2UucG9zSW5kZXgpLFxuICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZmluaXNoZWQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbmlzaGVkID09PSB0b3RhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ydW5uaW5nQWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVBpZWNlcygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBsZXQgYWN0aW9uMiA9IGNjLnNlcXVlbmNlKGNjLm1vdmVUbygwLjE1LCBuZWlnaGJvclBpZWNlLnBvc0luZGV4KSxcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbmlzaGVkKys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaW5pc2hlZCA9PT0gdG90YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucnVubmluZ0FjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVQaWVjZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcGllY2Uubm9kZS5ydW5BY3Rpb24oYWN0aW9uMSk7XG4gICAgICAgICAgICBuZWlnaGJvclBpZWNlLm5vZGUucnVuQWN0aW9uKGFjdGlvbjIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5leGNoYW5nZVR3b1BpZWNlc1N0YXRlKHBpZWNlLCBuZWlnaGJvclBpZWNlKTtcbiAgICAgICAgICAgIGxldCBmaW5pc2hlZCA9IDA7XG4gICAgICAgICAgICBsZXQgdG90YWwgPSAyO1xuICAgICAgICAgICAgbGV0IHRpbGVQb3MgPSBwaWVjZS5ub2RlLnBvc2l0aW9uO1xuICAgICAgICAgICAgbGV0IG5laWdoYm9yVGlsZVBvcyA9IG5laWdoYm9yUGllY2Uubm9kZS5wb3NpdGlvbjtcbiAgICAgICAgICAgIGxldCBhY3Rpb24xID0gY2Muc2VxdWVuY2UoY2MubW92ZVRvKDAuMSwgbmVpZ2hib3JUaWxlUG9zKSwgY2MubW92ZVRvKDAuMSwgdGlsZVBvcyksXG4gICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmaW5pc2hlZCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmluaXNoZWQgPT09IHRvdGFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJ1bm5pbmdBY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbGV0IGFjdGlvbjIgPSBjYy5zZXF1ZW5jZShjYy5tb3ZlVG8oMC4xLCB0aWxlUG9zKSwgY2MubW92ZVRvKDAuMSwgbmVpZ2hib3JUaWxlUG9zKSxcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbmlzaGVkKys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaW5pc2hlZCA9PT0gdG90YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucnVubmluZ0FjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBwaWVjZS5ub2RlLnJ1bkFjdGlvbihhY3Rpb24xKTtcbiAgICAgICAgICAgIG5laWdoYm9yUGllY2Uubm9kZS5ydW5BY3Rpb24oYWN0aW9uMik7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgZXhjaGFuZ2VUd29QaWVjZXNTdGF0ZShwaWVjZTE6IFBpZWNlLCBwaWVjZTI6IFBpZWNlKSB7XG4gICAgICAgIHRoaXMucGllY2VNYXBbcGllY2UxLnhdW3BpZWNlMS55XSA9IHBpZWNlMjtcbiAgICAgICAgdGhpcy5waWVjZU1hcFtwaWVjZTIueF1bcGllY2UyLnldID0gcGllY2UxO1xuICAgICAgICBbcGllY2UxLngsIHBpZWNlMi54XSA9IFtwaWVjZTIueCwgcGllY2UxLnhdO1xuICAgICAgICBbcGllY2UxLnksIHBpZWNlMi55XSA9IFtwaWVjZTIueSwgcGllY2UxLnldO1xuICAgIH1cblxuICAgIHByaXZhdGUgZXhjaGFuZ2VUd29QaWVjZXNQb3NJbmRleChwaWVjZTE6IFBpZWNlLCBwaWVjZTI6IFBpZWNlKSB7Ly/kuqTmjaLkvY3nva7kv6Hmga/vvIzlrp7pmYXkvY3nva7msqHmnInmlLnlj5hcbiAgICAgICAgW3BpZWNlMS5wb3NJbmRleCwgcGllY2UyLnBvc0luZGV4XSA9IFtwaWVjZTIucG9zSW5kZXgsIHBpZWNlMS5wb3NJbmRleF1cbiAgICB9XG5cbiAgICBwcml2YXRlIGRlbGV0ZVBpZWNlcygpIHtcbiAgICAgICAgdGhpcy5ydW5uaW5nQWN0aW9uID0gdHJ1ZTtcbiAgICAgICAgbGV0IGhMaW5lcyA9IHRoaXMuZ2V0SG9yaXpvbnRhbExpbmVzKCk7XG4gICAgICAgIGxldCB2TGluZXMgPSB0aGlzLmdldFZlcnRpY2FsTGluZXMoKTtcbiAgICAgICAgaWYgKGhMaW5lcy5sZW5ndGggKyB2TGluZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnJ1bm5pbmdBY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYWRkTnVtYmVyID0gMDsvL+aoquWKoOerluWHj1xuICAgICAgICBsZXQgbWludXNOdW1iZXIgPSAwO1xuICAgICAgICBsZXQgbGluZXM6IEFycmF5PFBpZWNlPiA9IFtdO1xuICAgICAgICBmb3IgKGxldCBwaWVjZSBvZiBoTGluZXMpIHtcbiAgICAgICAgICAgIGFkZE51bWJlciArPSBwaWVjZS50eXBlO1xuICAgICAgICAgICAgbGluZXMucHVzaChwaWVjZSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgdlBpZWNlIG9mIHZMaW5lcykge1xuICAgICAgICAgICAgbWludXNOdW1iZXIgKz0gdlBpZWNlLnR5cGU7XG4gICAgICAgICAgICBpZiAobGluZXMuaW5kZXhPZih2UGllY2UpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIGxpbmVzLnB1c2godlBpZWNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBUT0RPOlxuICAgICAgICBpZiAodGhpcy5pbnB1dERpciA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0NDdTY2VuZS51cGRhdGVTY29yZShhZGROdW1iZXIgKyBtaW51c051bWJlcik7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbnB1dERpciA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0NDdTY2VuZS51cGRhdGVTY29yZSgtYWRkTnVtYmVyIC0gbWludXNOdW1iZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nZXQ0N1NjZW5lLnVwZGF0ZVNjb3JlKGFkZE51bWJlciAtIG1pbnVzTnVtYmVyKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLnNjb3JlICs9IChhZGROdW1iZXIgLSBtaW51c051bWJlcik7XG5cbiAgICAgICAgbGV0IGZpbmlzaGVkID0gMDtcbiAgICAgICAgbGV0IHRvdGFsID0gbGluZXMubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhY3Rpb24gPSBjYy5zZXF1ZW5jZShjYy5zY2FsZVRvKDAuMTUsIDAsIDApLFxuICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZmluaXNoZWQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbmlzaGVkID09PSB0b3RhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ydW5uaW5nQWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZhbGxQaWVjZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbGluZXNbaV0uaXNBbGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgbGluZXNbaV0ubm9kZS5ydW5BY3Rpb24oYWN0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZmFsbFBpZWNlcygpIHtcbiAgICAgICAgdGhpcy5ydW5uaW5nQWN0aW9uID0gdHJ1ZTtcbiAgICAgICAgLy/kuIvokL1cbiAgICAgICAgbGV0IGlzQWxsRmFsbCA9IGZhbHNlO1xuICAgICAgICB3aGlsZSAoIWlzQWxsRmFsbCkge1xuICAgICAgICAgICAgaXNBbGxGYWxsID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAxOyB5IDwgdGhpcy5yb3dzTnVtOyB5KyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuY29sc051bTsgeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBpZWNlTWFwW3hdW3ldLmlzQWxpdmUgJiYgIXRoaXMucGllY2VNYXBbeF1beSAtIDFdLmlzQWxpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXhjaGFuZ2VUd29QaWVjZXNTdGF0ZSh0aGlzLnBpZWNlTWFwW3hdW3ldLCB0aGlzLnBpZWNlTWFwW3hdW3kgLSAxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4Y2hhbmdlVHdvUGllY2VzUG9zSW5kZXgodGhpcy5waWVjZU1hcFt4XVt5XSwgdGhpcy5waWVjZU1hcFt4XVt5IC0gMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNBbGxGYWxsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZhbGxpbmdQaWVjZXM6IEFycmF5PFBpZWNlPiA9IFtdO1xuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuY29sc051bTsgeCsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMucm93c051bTsgeSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGllY2VNYXBbeF1beV0ucG9zSW5kZXggIT09IHRoaXMucGllY2VNYXBbeF1beV0ubm9kZS5wb3NpdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBmYWxsaW5nUGllY2VzLnB1c2godGhpcy5waWVjZU1hcFt4XVt5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGZpbmlzaGVkID0gMDtcbiAgICAgICAgbGV0IHRvdGFsID0gZmFsbGluZ1BpZWNlcy5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWw7IGkrKykge1xuICAgICAgICAgICAgbGV0IGFjdGlvbiA9IGNjLnNlcXVlbmNlKGNjLm1vdmVUbygwLjMsIGZhbGxpbmdQaWVjZXNbaV0ucG9zSW5kZXgpLFxuICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZmluaXNoZWQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbmlzaGVkID09IHRvdGFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJ1bm5pbmdBY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkUGllY2VzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGZhbGxpbmdQaWVjZXNbaV0ubm9kZS5ydW5BY3Rpb24oYWN0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRQaWVjZXMoKSB7XG4gICAgICAgIHRoaXMucnVubmluZ0FjdGlvbiA9IHRydWU7XG4gICAgICAgIC8v5aGr6KGl56m655m9XG4gICAgICAgIGxldCBhZGRpbmdQaWVjZXM6IEFycmF5PFBpZWNlPiA9IFtdO1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMucm93c051bTsgeSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuY29sc051bTsgeCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnBpZWNlTWFwW3hdW3ldLmlzQWxpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkaW5nUGllY2VzLnB1c2godGhpcy5waWVjZU1hcFt4XVt5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGZpbmlzaGVkID0gMDtcbiAgICAgICAgbGV0IHRvdGFsID0gYWRkaW5nUGllY2VzLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYWN0aW9uID0gY2Muc2VxdWVuY2UoY2Muc2NhbGVUbygwLjE1LCAxLCAxKSxcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbmlzaGVkKys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaW5pc2hlZCA9PSB0b3RhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ydW5uaW5nQWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVBpZWNlcygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBhZGRpbmdQaWVjZXNbaV0ucmFuZG9tVHlwZSgpO1xuICAgICAgICAgICAgYWRkaW5nUGllY2VzW2ldLmlzQWxpdmUgPSB0cnVlO1xuICAgICAgICAgICAgYWRkaW5nUGllY2VzW2ldLm5vZGUucnVuQWN0aW9uKGFjdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFZlcnRpY2FsTGluZXMoKTogQXJyYXk8UGllY2U+IHtcbiAgICAgICAgbGV0IGxpbmVQaWVjZXM6IEFycmF5PFBpZWNlPiA9IFtdO1xuICAgICAgICBsZXQgY291bnQgPSAxO1xuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuY29sc051bTsgeCsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMucm93c051bSAtIDI7IHkgPSB5ICsgY291bnQpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGllY2UgPSB0aGlzLnBpZWNlTWFwW3hdW3ldO1xuICAgICAgICAgICAgICAgIGNvdW50ID0gMTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBuID0geSArIDE7IG4gPCB0aGlzLnJvd3NOdW07IG4rKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5waWVjZU1hcFt4XVtuXS50eXBlID09PSBwaWVjZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ID49IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lUGllY2VzLnB1c2godGhpcy5waWVjZU1hcFt4XVt5ICsgaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaW5lUGllY2VzO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0SG9yaXpvbnRhbExpbmVzKCk6IEFycmF5PFBpZWNlPiB7XG4gICAgICAgIGxldCBsaW5lUGllY2VzOiBBcnJheTxQaWVjZT4gPSBbXTtcbiAgICAgICAgbGV0IGNvdW50ID0gMTtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnJvd3NOdW07IHkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmNvbHNOdW0gLSAyOyB4ID0geCArIGNvdW50KSB7XG4gICAgICAgICAgICAgICAgbGV0IHBpZWNlID0gdGhpcy5waWVjZU1hcFt4XVt5XTtcbiAgICAgICAgICAgICAgICBsZXQgcGllY2VUeXBlID0gcGllY2UudHlwZTtcbiAgICAgICAgICAgICAgICBjb3VudCA9IDE7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbiA9IHggKyAxOyBuIDwgdGhpcy5jb2xzTnVtOyBuKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGllY2VNYXBbbl1beV0udHlwZSA9PT0gcGllY2VUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ID49IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lUGllY2VzLnB1c2godGhpcy5waWVjZU1hcFt4ICsgaV1beV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaW5lUGllY2VzO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0TmVpZ2hib3JQaWVjZShwaWVjZTogUGllY2UsIGRpcjogRElSKTogUGllY2Uge1xuICAgICAgICBsZXQgeCA9IHBpZWNlLng7XG4gICAgICAgIGxldCB5ID0gcGllY2UueTtcbiAgICAgICAgc3dpdGNoIChkaXIpIHtcbiAgICAgICAgICAgIGNhc2UgRElSLkxFRlQ6XG4gICAgICAgICAgICAgICAgaWYgKHggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBpZWNlTWFwW3ggLSAxXVt5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERJUi5SSUdIVDpcbiAgICAgICAgICAgICAgICBpZiAoeCA8IHRoaXMuY29sc051bSAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGllY2VNYXBbeCArIDFdW3ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRElSLlVQOlxuICAgICAgICAgICAgICAgIGlmICh5IDwgdGhpcy5yb3dzTnVtIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5waWVjZU1hcFt4XVt5ICsgMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBESVIuRE9XTjpcbiAgICAgICAgICAgICAgICBpZiAoeSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGllY2VNYXBbeF1beSAtIDFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmV3VmlldyhpbnB1dDogbnVtYmVyID0gMCkge1xuICAgICAgICB0aGlzLmlucHV0RGlyID0gaW5wdXQ7XG4gICAgICAgIGlmICghdGhpcy5ydW5uaW5nQWN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnJ1bm5pbmdBY3Rpb24gPSB0cnVlO1xuICAgICAgICAgICAgbGV0IGZpbmlzaGVkID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5jb2xzTnVtOyB4KyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMucm93c051bTsgeSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhY3Rpb24gPSBjYy5zZXF1ZW5jZShjYy5zY2FsZVRvKDAuMywgMCwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluaXNoZWQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmluaXNoZWQgPT09ICh0aGlzLmNvbHNOdW0gLSAxKSAqICh0aGlzLnJvd3NOdW0gLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJ1bm5pbmdBY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRQaWVjZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBpZWNlTWFwW3hdW3ldLmlzQWxpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5waWVjZU1hcFt4XVt5XS5ub2RlLnJ1bkFjdGlvbihhY3Rpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0=