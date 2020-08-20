"use strict";
cc._RF.push(module, 'c50e6LtA35NprKFbQ2Byit0', 'TetrisBoard');
// src/tetris/TetrisBoard.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
var TetrisPiece_1 = require("./TetrisPiece");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Board = /** @class */ (function (_super) {
    __extends(Board, _super);
    function Board() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.colsNum = 0;
        _this.piecePrefab = null;
        _this.frameTime = 1;
        _this.isStart = false;
        _this.pastTime = 0;
        _this.rowsNum = 0;
        _this.gridWidth = 0;
        _this.player = {
            pos: cc.v2(0, 0),
            matrix: null,
            score: 0,
        };
        _this.nextBlock = "囧";
        return _this;
    }
    Board.prototype.onLoad = function () {
        this.gridWidth = this.node.width / this.colsNum;
        // this.rowsNum = this.node.height / this.gridWidth | 0;
        this.rowsNum = cc.winSize.height / this.gridWidth | 0;
        this.pieceMap = [];
        for (var y = 0; y < this.rowsNum; y++) {
            this.pieceMap[y] = [];
            for (var x = 0; x < this.colsNum; x++) {
                var pieceNode = cc.instantiate(this.piecePrefab);
                this.node.addChild(pieceNode);
                pieceNode.width = this.gridWidth;
                pieceNode.height = this.gridWidth;
                pieceNode.x = x * this.gridWidth + pieceNode.width / 2;
                pieceNode.y = y * this.gridWidth + pieceNode.height / 2;
                this.pieceMap[y][x] = pieceNode.getComponent(TetrisPiece_1.Piece);
            }
        }
    };
    Board.prototype.init = function (tetrisScene) {
        this.tetrisScene = tetrisScene;
    };
    Board.prototype.reset = function () {
        this.arena = this.createMatrix(this.colsNum, this.rowsNum);
        this.playerReset();
        this.clear();
        this.draw();
        this.isStart = true;
    };
    Board.prototype.stop = function () {
        this.isStart = false;
    };
    Board.prototype.clear = function () {
        for (var y = 0; y < this.rowsNum; y++) {
            for (var x = 0; x < this.colsNum; x++) {
                this.pieceMap[y][x].hide();
            }
        }
    };
    Board.prototype.createMatrix = function (w, h) {
        var matrix = [];
        while (h--) {
            matrix.push(new Array(w).fill(0));
        }
        return matrix;
    };
    Board.prototype.drawMatrix = function (matrix, offset) {
        var _this = this;
        matrix.forEach(function (row, y) {
            row.forEach(function (value, x) {
                if (value !== 0) {
                    _this.pieceMap[y + offset.y][x + offset.x].show();
                }
            });
        });
    };
    Board.prototype.draw = function () {
        this.clear();
        this.drawMatrix(this.arena, cc.v2(0, 0));
        this.drawMatrix(this.player.matrix, this.player.pos);
    };
    Board.prototype.playerReset = function () {
        this.player.matrix = this.createBlock(this.nextBlock);
        this.player.pos.y = this.rowsNum - this.player.matrix.length;
        this.player.pos.x = (this.arena[0].length / 2 | 0) -
            (this.player.matrix[0].length / 2 | 0);
        if (this.collide()) {
            // this.arena.forEach(row => row.fill(0));
            this.tetrisScene.stopGame(this.player.score);
            // this.player.score = 0;
        }
        if (Math.random() < 0.01) {
            this.nextBlock = "囧";
        }
        else {
            var blocks = 'TJLOSZIX';
            this.nextBlock = blocks[blocks.length * Math.random() | 0];
        }
        this.tetrisScene.updateHint(this.nextBlock);
    };
    Board.prototype.playerDrop = function () {
        this.player.pos.y--;
        if (this.collide()) {
            this.player.pos.y++;
            this.merge();
            this.playerReset();
            this.arenaSweep();
            this.tetrisScene.updateScore(this.player.score);
        }
        this.draw();
    };
    Board.prototype.playerMove = function (offset) {
        this.player.pos.x += offset;
        if (this.collide()) {
            this.player.pos.x -= offset;
        }
        this.draw();
    };
    Board.prototype.playerRotate = function (dir) {
        var pos = this.player.pos.x;
        var offset = 1;
        this.rotate(this.player.matrix, -dir);
        while (this.collide()) {
            this.player.pos.x += offset;
            offset = -(offset + (offset > 0 ? 1 : -1));
            if (offset > this.player.matrix.length) {
                this.rotate(this.player.matrix, dir);
                this.player.pos.x = pos;
                return;
            }
        }
        this.draw();
    };
    Board.prototype.arenaSweep = function () {
        var rowCount = 1;
        outer: for (var y = 0; y < this.arena.length - 1; y++) {
            for (var x = 0; x < this.arena[y].length; x++) {
                if (this.arena[y][x] === 0) {
                    continue outer;
                }
            }
            var row = this.arena.splice(y, 1)[0].fill(0);
            this.arena.push(row);
            y--;
            this.player.score += rowCount * 10;
            rowCount *= 2;
        }
    };
    Board.prototype.collide = function () {
        var m = this.player.matrix;
        var o = this.player.pos;
        for (var y = 0; y < m.length; y++) {
            for (var x = 0; x < m[y].length; x++) {
                if (m[y][x] !== 0 &&
                    (this.arena[y + o.y] &&
                        this.arena[y + o.y][x + o.x]) !== 0) {
                    return true;
                }
            }
        }
        return false;
    };
    Board.prototype.merge = function () {
        var _this = this;
        this.player.matrix.forEach(function (row, y) {
            row.forEach(function (value, x) {
                if (value !== 0) {
                    _this.arena[y + _this.player.pos.y][x + _this.player.pos.x] = value;
                }
            });
        });
    };
    Board.prototype.rotate = function (matrix, dir) {
        var _a;
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < y; x++) {
                _a = [
                    matrix[y][x],
                    matrix[x][y]
                ], matrix[x][y] = _a[0], matrix[y][x] = _a[1];
            }
        }
        if (dir > 0) {
            matrix.forEach(function (row) { return row.reverse(); });
        }
        else {
            matrix.reverse();
        }
    };
    Board.prototype.createBlock = function (type) {
        if (type === 'I') {
            return [
                [0, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 1, 0, 0],
            ];
        }
        else if (type === 'L') {
            return [
                [0, 2, 0],
                [0, 2, 0],
                [0, 2, 2],
            ];
        }
        else if (type === 'J') {
            return [
                [0, 3, 0],
                [0, 3, 0],
                [3, 3, 0],
            ];
        }
        else if (type === 'O') {
            return [
                [4, 4],
                [4, 4],
            ];
        }
        else if (type === 'Z') {
            return [
                [5, 5, 0],
                [0, 5, 5],
                [0, 0, 0],
            ];
        }
        else if (type === 'S') {
            return [
                [0, 6, 6],
                [6, 6, 0],
                [0, 0, 0],
            ];
        }
        else if (type === 'T') {
            return [
                [0, 7, 0],
                [7, 7, 7],
                [0, 0, 0],
            ];
        }
        else if (type === 'X') {
            return [
                [1, 0, 1],
                [0, 1, 0],
                [1, 0, 1],
            ];
        }
        else if (type === '囧') {
            return [
                [1, 1, 1, 1, 1, 1, 1],
                [1, 0, 1, 0, 1, 0, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 1, 1, 1, 0, 1],
                [1, 0, 1, 0, 1, 0, 1],
                [1, 1, 1, 1, 1, 1, 1],
            ].reverse();
        }
    };
    Board.prototype.update = function (dt) {
        if (this.isStart) {
            this.pastTime += dt;
            if (this.pastTime >= this.frameTime) {
                this.playerDrop();
                this.pastTime = 0;
            }
        }
    };
    __decorate([
        property(cc.Integer)
    ], Board.prototype, "colsNum", void 0);
    __decorate([
        property(cc.Prefab)
    ], Board.prototype, "piecePrefab", void 0);
    __decorate([
        property(cc.Float)
    ], Board.prototype, "frameTime", void 0);
    Board = __decorate([
        ccclass
    ], Board);
    return Board;
}(cc.Component));
exports.Board = Board;

cc._RF.pop();