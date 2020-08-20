"use strict";
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