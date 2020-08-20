"use strict";
cc._RF.push(module, 'a84adR6dohB5YJuAMwnUu08', 'SnakeBoard');
// src/snake/SnakeBoard.ts

Object.defineProperty(exports, "__esModule", { value: true });
var SnakeConstants_1 = require("./SnakeConstants");
var SnakePiece_1 = require("./SnakePiece");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Board = /** @class */ (function (_super) {
    __extends(Board, _super);
    function Board() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.frameTime = 0.5;
        _this.levelRatio = 0.05;
        _this.piecePrefab = null;
        _this.layout = null;
        _this.isStart = false;
        _this.pastTime = 0;
        _this.rowsNum = 16;
        _this.colsNum = 16;
        _this.gridWidth = 0;
        _this.moveDir = SnakeConstants_1.DIRECTION.RIGHT;
        _this.level = 0;
        _this.snakeScene = null;
        return _this;
        // update(dt: number) {
        //     if (this.isStart) {
        //         this.pastTime += dt;
        //         if (this.pastTime >= this.frameTime * (this.levelRatio**this.level)) {
        //             this.moveSnake();
        //             this.pastTime = 0;
        //         }
        //     }
        // }
    }
    Board.prototype.onLoad = function () {
        this.gridWidth = this.layout.width / this.colsNum;
        this.pieceMap = [];
        for (var x = 0; x < this.colsNum; x++) {
            this.pieceMap[x] = [];
            for (var y = 0; y < this.rowsNum; y++) {
                var pieceNode = cc.instantiate(this.piecePrefab);
                this.layout.addChild(pieceNode);
                pieceNode.width = this.gridWidth;
                pieceNode.height = this.gridWidth;
                pieceNode.x = x * this.gridWidth + pieceNode.width / 2;
                pieceNode.y = y * this.gridWidth + pieceNode.height / 2;
                this.pieceMap[x][y] = pieceNode.getComponent(SnakePiece_1.Piece);
                this.pieceMap[x][y].x = x;
                this.pieceMap[x][y].y = y;
            }
        }
    };
    Board.prototype.updateTick = function () {
        this.unschedule(this.tickHandler);
        var time = this.frameTime - (this.levelRatio * this.level);
        if (time < 0.1) {
            time = 0.1;
        }
        this.schedule(this.tickHandler, time);
    };
    Board.prototype.tickHandler = function () {
        if (this.isStart) {
            this.moveSnake();
        }
    };
    Board.prototype.init = function (snakeScene) {
        this.snakeScene = snakeScene;
    };
    Board.prototype.startGame = function () {
        this.reset();
        for (var i = 0; i < 10; i++) {
            this.addFood();
        }
        this.isStart = true;
        this.updateTick();
    };
    Board.prototype.reset = function () {
        this.clear();
        this.snake = [];
        this.pieceMap[9][9].init(SnakeConstants_1.PIECE_TYPE.SNAKE_HEAD, SnakeConstants_1.DIRECTION.RIGHT, SnakeConstants_1.DIRECTION.RIGHT);
        this.pieceMap[8][9].init(SnakeConstants_1.PIECE_TYPE.SNAKE_BODY, SnakeConstants_1.DIRECTION.RIGHT, SnakeConstants_1.DIRECTION.RIGHT);
        this.pieceMap[7][9].init(SnakeConstants_1.PIECE_TYPE.SNAKE_BODY, SnakeConstants_1.DIRECTION.RIGHT, SnakeConstants_1.DIRECTION.UP);
        this.pieceMap[7][8].init(SnakeConstants_1.PIECE_TYPE.SNAKE_TAIL, SnakeConstants_1.DIRECTION.UP, SnakeConstants_1.DIRECTION.UP);
        this.snake.push(this.pieceMap[9][9]);
        this.snake.push(this.pieceMap[8][9]);
        this.snake.push(this.pieceMap[7][9]);
        this.snake.push(this.pieceMap[7][8]);
        this.moveDir = SnakeConstants_1.DIRECTION.RIGHT;
        this.level = 0;
    };
    Board.prototype.addFood = function () {
        var blankList = [];
        for (var x = 0; x < this.colsNum; x++) {
            for (var y = 0; y < this.rowsNum; y++) {
                if (this.pieceMap[x][y].type === SnakeConstants_1.PIECE_TYPE.BLANK) {
                    blankList.push(this.pieceMap[x][y]);
                }
            }
        }
        var randomPiece = blankList[(Math.random() * blankList.length) | 0];
        randomPiece.type = SnakeConstants_1.PIECE_TYPE.FOOD;
    };
    Board.prototype.clear = function () {
        for (var x = 0; x < this.colsNum; x++) {
            for (var y = 0; y < this.rowsNum; y++) {
                this.pieceMap[x][y].type = SnakeConstants_1.PIECE_TYPE.BLANK;
            }
        }
    };
    Board.prototype.updateLevel = function (level) {
        if (level !== this.level) {
            this.level = level;
            this.updateTick();
        }
    };
    Board.prototype.turnSnake = function (dir) {
        if (this.snake[0].outDir !== -dir) {
            this.moveDir = dir;
        }
    };
    Board.prototype.moveSnake = function () {
        var head = this.snake[0];
        head.inDir = this.snake[1].outDir;
        head.outDir = this.moveDir;
        var nextPiece;
        switch (head.outDir) {
            case SnakeConstants_1.DIRECTION.UP:
                if (head.y === this.rowsNum - 1) {
                    nextPiece = this.pieceMap[head.x][0];
                }
                else {
                    nextPiece = this.pieceMap[head.x][head.y + 1];
                }
                break;
            case SnakeConstants_1.DIRECTION.RIGHT:
                if (head.x === this.colsNum - 1) {
                    nextPiece = this.pieceMap[0][head.y];
                }
                else {
                    nextPiece = this.pieceMap[head.x + 1][head.y];
                }
                break;
            case SnakeConstants_1.DIRECTION.DOWN:
                if (head.y === 0) {
                    nextPiece = this.pieceMap[head.x][this.rowsNum - 1];
                }
                else {
                    nextPiece = this.pieceMap[head.x][head.y - 1];
                }
                break;
            case SnakeConstants_1.DIRECTION.LEFT:
                if (head.x === 0) {
                    nextPiece = this.pieceMap[this.colsNum - 1][head.y];
                }
                else {
                    nextPiece = this.pieceMap[head.x - 1][head.y];
                }
                break;
        }
        this.moveSnakeToPiece(nextPiece);
    };
    Board.prototype.moveSnakeToPiece = function (nextPiece) {
        var head = this.snake[0];
        switch (nextPiece.type) {
            case SnakeConstants_1.PIECE_TYPE.SNAKE_BODY:
            case SnakeConstants_1.PIECE_TYPE.SNAKE_TAIL:
                this.isStart = false;
                this.snakeScene.overGame();
                break;
            case SnakeConstants_1.PIECE_TYPE.FOOD:
                nextPiece.init(SnakeConstants_1.PIECE_TYPE.SNAKE_HEAD, head.outDir, head.inDir);
                head.init(SnakeConstants_1.PIECE_TYPE.SNAKE_BODY, head.outDir, head.inDir);
                this.snake.unshift(nextPiece);
                this.snakeScene.onEatFood();
                break;
            case SnakeConstants_1.PIECE_TYPE.BLANK:
                var newSnake_1 = [];
                this.snake.forEach(function (piece, index) {
                    switch (piece.type) {
                        case SnakeConstants_1.PIECE_TYPE.SNAKE_HEAD:
                            nextPiece.init(SnakeConstants_1.PIECE_TYPE.SNAKE_HEAD, piece.outDir, piece.inDir);
                            break;
                        case SnakeConstants_1.PIECE_TYPE.SNAKE_BODY:
                            nextPiece.init(SnakeConstants_1.PIECE_TYPE.SNAKE_BODY, nextPiece.outDir, piece.outDir);
                            break;
                        case SnakeConstants_1.PIECE_TYPE.SNAKE_TAIL:
                            nextPiece.init(SnakeConstants_1.PIECE_TYPE.SNAKE_TAIL, nextPiece.outDir, piece.outDir);
                            piece.type = SnakeConstants_1.PIECE_TYPE.BLANK;
                            break;
                    }
                    newSnake_1.push(nextPiece);
                    nextPiece = piece;
                });
                // for (let piece of this.snake) {
                // }
                this.snake = newSnake_1;
        }
    };
    __decorate([
        property(cc.Float)
    ], Board.prototype, "frameTime", void 0);
    __decorate([
        property(cc.Float)
    ], Board.prototype, "levelRatio", void 0);
    __decorate([
        property(cc.Prefab)
    ], Board.prototype, "piecePrefab", void 0);
    __decorate([
        property(cc.Node)
    ], Board.prototype, "layout", void 0);
    Board = __decorate([
        ccclass
    ], Board);
    return Board;
}(cc.Component));
exports.default = Board;

cc._RF.pop();