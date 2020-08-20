"use strict";
cc._RF.push(module, 'd5dcaOV26xKp7PBWPzaeZRU', 'MnieBoard');
// src/mine/MnieBoard.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
var MinePiece_1 = require("./MinePiece");
var MineConstans_1 = require("./MineConstans");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var Board = /** @class */ (function (_super) {
    __extends(Board, _super);
    function Board() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.piecePrefab = null;
        _this.colNum = 9;
        _this.colSpace = 9;
        _this.pressTime = 1;
        _this.colWidth = 80;
        _this.touchingPiece = null;
        _this.touchStartTime = 0;
        _this.bombNum = 0;
        _this.flagNum = 0;
        _this.mineScene = null;
        return _this;
    }
    Board.prototype.onLoad = function () {
        var _this = this;
        this.colWidth = (this.node.width - this.colSpace * (this.colNum + 1)) / this.colNum;
        this.node.removeAllChildren();
        this.pieceMap = [];
        var _loop_1 = function (x) {
            this_1.pieceMap[x] = [];
            var _loop_2 = function (y) {
                var pieceNode = cc.instantiate(this_1.piecePrefab);
                this_1.node.addChild(pieceNode);
                pieceNode.x = x * (this_1.colWidth + this_1.colSpace) + this_1.colSpace;
                pieceNode.y = y * (this_1.colWidth + this_1.colSpace) + this_1.colSpace;
                pieceNode.width = this_1.colWidth;
                pieceNode.height = this_1.colWidth;
                this_1.pieceMap[x][y] = pieceNode.getComponent(MinePiece_1.Piece);
                this_1.pieceMap[x][y].init(x, y, MineConstans_1.PIECE_TYPE.OPEN0, MineConstans_1.PIECE_STATE.OPEN);
                pieceNode.on(cc.Node.EventType.TOUCH_START, function () {
                    _this.onPieceTouchStart(_this.pieceMap[x][y]);
                }, this_1);
                pieceNode.on(cc.Node.EventType.TOUCH_END, function () {
                    _this.onPieceTouchEnd(_this.pieceMap[x][y]);
                }, this_1);
            };
            for (var y = 0; y < this_1.colNum; y++) {
                _loop_2(y);
            }
        };
        var this_1 = this;
        for (var x = 0; x < this.colNum; x++) {
            _loop_1(x);
        }
    };
    Board.prototype.init = function (mineScene) {
        this.mineScene = mineScene;
    };
    Board.prototype.onPieceTouchStart = function (piece) {
        this.touchStartTime = new Date().getTime();
        this.touchingPiece = piece;
    };
    Board.prototype.onPieceTouchEnd = function (piece) {
        var touchEndTime = new Date().getTime();
        if (touchEndTime - this.touchStartTime > this.pressTime * 1000) {
            this.mineScene.onPressPiece(piece);
        }
        else {
            this.mineScene.onClickPiece(piece);
        }
    };
    Board.prototype.openPiece = function (piece) {
        if (piece.state === MineConstans_1.PIECE_STATE.PENDING) {
            if (piece.type === MineConstans_1.PIECE_TYPE.BOMB) {
                piece.state = MineConstans_1.PIECE_STATE.OPEN;
                this.showAll();
                this.mineScene.overGame(false);
            }
            else {
                this.showBlank(piece);
                this.judgeWin();
            }
        }
    };
    Board.prototype.flagPiece = function (piece) {
        if (piece.state === MineConstans_1.PIECE_STATE.PENDING) {
            piece.state = MineConstans_1.PIECE_STATE.FLAG;
            this.flagNum--;
            if (this.flagNum === 0) {
                var isWin = this.showRest();
                this.mineScene.overGame(isWin);
            }
        }
        else if (piece.state === MineConstans_1.PIECE_STATE.FLAG) {
            piece.state = MineConstans_1.PIECE_STATE.PENDING;
            this.flagNum++;
        }
    };
    Board.prototype.getBombNum = function () {
        return this.bombNum;
    };
    Board.prototype.getFlagNum = function () {
        return this.flagNum;
    };
    Board.prototype.getMaxLevel = function () {
        return this.colNum * this.colNum - 1;
    };
    Board.prototype.judgeWin = function () {
        var openNum = 0;
        for (var x = 0; x < this.colNum; x++) {
            for (var y = 0; y < this.colNum; y++) {
                if (this.pieceMap[x][y].state === MineConstans_1.PIECE_STATE.OPEN) {
                    openNum++;
                }
            }
        }
        if (openNum === Math.pow(this.colNum, 2) - this.bombNum) {
            this.mineScene.overGame(true);
        }
    };
    Board.prototype.reset = function (level) {
        this.resetBlank();
        this.resetBombs(level);
        this.resetHintsAndMask();
    };
    Board.prototype.resetBlank = function () {
        for (var x = 0; x < this.colNum; x++) {
            for (var y = 0; y < this.colNum; y++) {
                this.pieceMap[x][y].type = MineConstans_1.PIECE_TYPE.OPEN0;
            }
        }
    };
    Board.prototype.resetBombs = function (bombNum) {
        this.bombNum = bombNum;
        this.flagNum = bombNum;
        var pieceMapIndex = [];
        for (var x = 0; x < this.colNum; x++) {
            for (var y = 0; y < this.colNum; y++) {
                pieceMapIndex.push({ x: x, y: y });
            }
        }
        for (var n = 0; n < bombNum; n++) {
            var i = Math.random() * pieceMapIndex.length | 0;
            var piecePos = pieceMapIndex[i];
            cc.log(piecePos);
            this.pieceMap[piecePos.x][piecePos.y].type = MineConstans_1.PIECE_TYPE.BOMB;
            pieceMapIndex.splice(i, 1);
        }
    };
    Board.prototype.resetHintsAndMask = function () {
        for (var x = 0; x < this.colNum; x++) {
            var _loop_3 = function (y) {
                if (this_2.pieceMap[x][y].type !== MineConstans_1.PIECE_TYPE.BOMB) {
                    var roundPieces = this_2.getRoundPieces(x, y);
                    var roundBombs_1 = 0;
                    roundPieces.forEach(function (piece) {
                        if (piece.type === MineConstans_1.PIECE_TYPE.BOMB) {
                            roundBombs_1++;
                        }
                    });
                    this_2.pieceMap[x][y].type = roundBombs_1;
                }
                this_2.pieceMap[x][y].state = MineConstans_1.PIECE_STATE.PENDING;
            };
            var this_2 = this;
            for (var y = 0; y < this.colNum; y++) {
                _loop_3(y);
            }
        }
    };
    Board.prototype.getRoundPieces = function (x, y) {
        var roundPieces = [];
        // left
        if (x >= 1) {
            roundPieces.push(this.pieceMap[x - 1][y]);
        }
        // left top
        if (x >= 1 && y <= this.colNum - 2) {
            roundPieces.push(this.pieceMap[x - 1][y + 1]);
        }
        // top
        if (y <= this.colNum - 2) {
            roundPieces.push(this.pieceMap[x][y + 1]);
        }
        // right top
        if (x <= this.colNum - 2 && y <= this.colNum - 2) {
            roundPieces.push(this.pieceMap[x + 1][y + 1]);
        }
        // right
        if (x <= this.colNum - 2) {
            roundPieces.push(this.pieceMap[x + 1][y]);
        }
        // right bottom
        if (x <= this.colNum - 2 && y >= 1) {
            roundPieces.push(this.pieceMap[x + 1][y - 1]);
        }
        // bottom
        if (y >= 1) {
            roundPieces.push(this.pieceMap[x][y - 1]);
        }
        // left bottom
        if (x >= 1 && y >= 1) {
            roundPieces.push(this.pieceMap[x - 1][y - 1]);
        }
        return roundPieces;
    };
    Board.prototype.showBlank = function (piece) {
        var testPieces = [piece];
        while (testPieces.length > 0) {
            var testPiece = testPieces.pop();
            if (testPiece.type === MineConstans_1.PIECE_TYPE.OPEN0) {
                testPiece.state = MineConstans_1.PIECE_STATE.OPEN;
                var roundPieces = this.getRoundPieces(testPiece.x, testPiece.y);
                roundPieces.forEach(function (p) {
                    if (p.state === MineConstans_1.PIECE_STATE.PENDING) {
                        testPieces.push(p);
                    }
                });
            }
            else if (testPiece.type >= MineConstans_1.PIECE_TYPE.OPEN1 && testPiece.type <= MineConstans_1.PIECE_TYPE.OPEN8) {
                testPiece.state = MineConstans_1.PIECE_STATE.OPEN;
            }
        }
    };
    // 失败后显示全部格子
    Board.prototype.showAll = function () {
        for (var x = 0; x < this.colNum; x++) {
            for (var y = 0; y < this.colNum; y++) {
                this.pieceMap[x][y].state = MineConstans_1.PIECE_STATE.OPEN;
            }
        }
    };
    // 旗子插满后显示其他没有插旗的地方
    Board.prototype.showRest = function () {
        var isWin = true;
        for (var x = 0; x < this.colNum; x++) {
            for (var y = 0; y < this.colNum; y++) {
                if (this.pieceMap[x][y].state === MineConstans_1.PIECE_STATE.PENDING) {
                    this.pieceMap[x][y].state = MineConstans_1.PIECE_STATE.OPEN;
                    if (this.pieceMap[x][y].type === MineConstans_1.PIECE_TYPE.BOMB) {
                        isWin = false;
                    }
                }
            }
        }
        return isWin;
    };
    __decorate([
        property(cc.Prefab)
    ], Board.prototype, "piecePrefab", void 0);
    __decorate([
        property(cc.Integer)
    ], Board.prototype, "colNum", void 0);
    __decorate([
        property(cc.Integer)
    ], Board.prototype, "colSpace", void 0);
    __decorate([
        property(cc.Float)
    ], Board.prototype, "pressTime", void 0);
    Board = __decorate([
        ccclass,
        executeInEditMode
    ], Board);
    return Board;
}(cc.Component));
exports.Board = Board;

cc._RF.pop();