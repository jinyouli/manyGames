"use strict";
cc._RF.push(module, '0c537hphVJHQ529UlnH6eF9', 'GobangBoard');
// src/gobang/GobangBoard.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.GobangBoard = void 0;
var GobangConstants_1 = require("./GobangConstants");
var GobangPiece_1 = require("./GobangPiece");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GobangBoard = /** @class */ (function (_super) {
    __extends(GobangBoard, _super);
    function GobangBoard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.colsSum = 15;
        _this.rowsSum = 15;
        _this.graphics = null; // 用来画棋盘棋子
        _this.graphics2 = null; // 用来画上层UI
        _this.tileWidth = 0; // 一个方块的宽度
        _this.startX = 0; // 棋盘左下角
        _this.startY = 0;
        _this.boardWidth = 0; // 棋盘节点宽高
        _this.boardHeight = 0;
        _this.lastPiece = null;
        _this.gobangScene = null;
        return _this;
    }
    GobangBoard.prototype.init = function (gobangScene) {
        this.gobangScene = gobangScene;
        this.tileWidth = this.node.width / this.colsSum;
        this.startX = this.tileWidth / 2;
        this.startY = this.tileWidth / 2;
        this.boardWidth = this.tileWidth * (this.colsSum - 1);
        this.boardHeight = this.tileWidth * (this.rowsSum - 1);
        this.reset();
        this.addListeners();
    };
    GobangBoard.prototype.reset = function () {
        this.graphics.clear();
        this.graphics2.clear();
        // 画棋盘
        this.graphics.strokeColor = cc.Color.BLACK;
        for (var x = 0; x < this.colsSum; x++) {
            this.graphics.moveTo(this.startX + x * this.tileWidth, this.startY);
            this.graphics.lineTo(this.startX + x * this.tileWidth, this.startY + this.boardHeight);
            this.graphics.stroke();
        }
        for (var y = 0; y < this.rowsSum; y++) {
            this.graphics.moveTo(this.startX, this.startY + y * this.tileWidth);
            this.graphics.lineTo(this.startX + this.boardWidth, this.startY + y * this.tileWidth);
            this.graphics.stroke();
        }
        // 中心点
        this.graphics.strokeColor = cc.Color.RED;
        this.graphics.fillColor = cc.Color.RED;
        var centerCol = Math.floor(this.colsSum / 2);
        var centerRow = Math.floor(this.rowsSum / 2);
        this.graphics.circle(this.startX + centerCol * this.tileWidth, this.startY + centerRow * this.tileWidth, 5);
        this.graphics.fill();
        this.pieceMap = [];
        for (var y = 0; y < this.rowsSum; y++) {
            this.pieceMap[y] = [];
            for (var x = 0; x < this.colsSum; x++) {
                this.pieceMap[y][x] = new GobangPiece_1.GobangPiece(x, y, GobangConstants_1.NONE);
            }
        }
    };
    GobangBoard.prototype.drawLastPieceRect = function () {
        this.graphics2.clear();
        if (this.lastPiece) {
            this.graphics2.strokeColor = cc.Color.RED;
            this.graphics2.rect(this.startX + this.tileWidth * this.lastPiece.x - this.tileWidth / 2, this.startY + this.tileWidth * this.lastPiece.y - this.tileWidth / 2, this.tileWidth, this.tileWidth);
            this.graphics2.stroke();
        }
    };
    GobangBoard.prototype.placeBlack = function (coor) {
        this.graphics.strokeColor = cc.Color.BLACK;
        this.graphics.fillColor = cc.Color.BLACK;
        this.graphics.circle(this.startX + coor.x * this.tileWidth, this.startY + coor.y * this.tileWidth, this.tileWidth * 0.45);
        this.graphics.fill();
        this.pieceMap[coor.x][coor.y] = new GobangPiece_1.GobangPiece(coor.x, coor.y, GobangConstants_1.BLACK);
        this.lastPiece = this.pieceMap[coor.x][coor.y];
        this.drawLastPieceRect();
    };
    GobangBoard.prototype.placeWhite = function (coor) {
        this.graphics.strokeColor = cc.Color.WHITE;
        this.graphics.fillColor = cc.Color.WHITE;
        this.graphics.circle(this.startX + coor.x * this.tileWidth, this.startY + coor.y * this.tileWidth, this.tileWidth * 0.45);
        this.graphics.fill();
        this.pieceMap[coor.x][coor.y] = new GobangPiece_1.GobangPiece(coor.x, coor.y, GobangConstants_1.WHITE);
        this.lastPiece = this.pieceMap[coor.x][coor.y];
        this.drawLastPieceRect();
    };
    GobangBoard.prototype.getPieceByCoor = function (coor) {
        return this.pieceMap[coor.x][coor.y];
    };
    GobangBoard.prototype.onTouched = function (event) {
        var localPos = this.node.convertToNodeSpaceAR(event.getLocation());
        var coor = this.getCoorByPos(localPos);
        this.gobangScene.onBoardTouched(coor);
    };
    GobangBoard.prototype.getCoorByPos = function (pos) {
        var touchCol = Math.round((pos.x - this.startX) / this.tileWidth);
        var touchRow = Math.round((pos.y - this.startY) / this.tileWidth);
        return cc.v2(touchCol, touchRow);
    };
    GobangBoard.prototype.judgeWin = function () {
        //判断横向
        var fiveCount = 0;
        for (var x = 0; x < this.colsSum; x++) {
            if (this.pieceMap[x][this.lastPiece.y].color === this.lastPiece.color) {
                fiveCount++;
                if (fiveCount === 5) {
                    return true;
                }
            }
            else {
                fiveCount = 0;
            }
        }
        //判断纵向
        fiveCount = 0;
        for (var y = 0; y < this.rowsSum; y++) {
            if (this.pieceMap[this.lastPiece.x][y].color === this.lastPiece.color) {
                fiveCount++;
                if (fiveCount == 5) {
                    return true;
                }
            }
            else {
                fiveCount = 0;
            }
        }
        //判断右上斜向
        var f = this.lastPiece.y - this.lastPiece.x;
        fiveCount = 0;
        for (var x = 0; x < this.colsSum; x++) {
            if (f + x < 0 || f + x >= this.rowsSum) {
                continue;
            }
            if (this.pieceMap[x][f + x].color === this.lastPiece.color) {
                fiveCount++;
                if (fiveCount == 5) {
                    return true;
                }
            }
            else {
                fiveCount = 0;
            }
        }
        //判断右下斜向
        f = this.lastPiece.y + this.lastPiece.x;
        fiveCount = 0;
        for (var x = 0; x < 15; x++) {
            if (f - x < 0 || f - x >= this.rowsSum) {
                continue;
            }
            if (this.pieceMap[x][f - x].color === this.lastPiece.color) {
                fiveCount++;
                if (fiveCount == 5) {
                    return true;
                }
            }
            else {
                fiveCount = 0;
            }
        }
        return false;
    };
    GobangBoard.prototype.addListeners = function () {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouched, this);
    };
    GobangBoard.prototype.removeListeners = function () {
    };
    __decorate([
        property(cc.Integer)
    ], GobangBoard.prototype, "colsSum", void 0);
    __decorate([
        property(cc.Integer)
    ], GobangBoard.prototype, "rowsSum", void 0);
    __decorate([
        property(cc.Graphics)
    ], GobangBoard.prototype, "graphics", void 0);
    __decorate([
        property(cc.Graphics)
    ], GobangBoard.prototype, "graphics2", void 0);
    GobangBoard = __decorate([
        ccclass
    ], GobangBoard);
    return GobangBoard;
}(cc.Component));
exports.GobangBoard = GobangBoard;

cc._RF.pop();