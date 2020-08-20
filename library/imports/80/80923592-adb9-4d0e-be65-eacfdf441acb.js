"use strict";
cc._RF.push(module, '80923WSrblNDr5l6s/fRBrL', 'ReversiBoard');
// src/reversi/ReversiBoard.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ReversiBoard = void 0;
var ReversiPiece_1 = require("./ReversiPiece");
var ReversiConstants_1 = require("./ReversiConstants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ReversiBoard = /** @class */ (function (_super) {
    __extends(ReversiBoard, _super);
    function ReversiBoard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.colsSum = 8;
        _this.rowsSum = 8;
        _this.graphics = null; // 用来画棋盘
        _this.graphics2 = null; // 用来画棋子
        _this.tileWidth = 0; // 一个方块的宽度
        _this.startX = 0; // 棋盘左下角
        _this.startY = 0;
        _this.boardWidth = 0; // 棋盘节点宽高
        _this.boardHeight = 0;
        _this.lastPiece = null;
        _this.reversiScene = null;
        return _this;
    }
    ReversiBoard.prototype.init = function (reversiScene) {
        this.reversiScene = reversiScene;
        this.tileWidth = this.node.width / (this.colsSum + 1);
        this.startX = this.tileWidth / 2;
        this.startY = this.tileWidth / 2;
        this.boardWidth = this.tileWidth * this.colsSum;
        this.boardHeight = this.tileWidth * this.rowsSum;
        this.reset();
        this.addListeners();
    };
    ReversiBoard.prototype.reset = function () {
        this.graphics.clear();
        this.graphics2.clear();
        // 画棋盘
        this.graphics.strokeColor = cc.Color.BLACK;
        for (var x = 0; x < this.colsSum + 1; x++) {
            this.graphics.moveTo(this.startX + x * this.tileWidth, this.startY);
            this.graphics.lineTo(this.startX + x * this.tileWidth, this.startY + this.boardHeight);
            this.graphics.stroke();
        }
        for (var y = 0; y < this.rowsSum + 1; y++) {
            this.graphics.moveTo(this.startX, this.startY + y * this.tileWidth);
            this.graphics.lineTo(this.startX + this.boardWidth, this.startY + y * this.tileWidth);
            this.graphics.stroke();
        }
        this.pieceMap = [];
        for (var x = 0; x < this.colsSum; x++) {
            this.pieceMap[x] = [];
            for (var y = 0; y < this.rowsSum; y++) {
                this.pieceMap[x][y] = new ReversiPiece_1.ReversiPiece(x, y, ReversiConstants_1.NONE);
            }
        }
        this.placeBlack(cc.v2(Math.floor(this.colsSum / 2) - 1, Math.floor(this.rowsSum / 2) - 1));
        this.placeBlack(cc.v2(Math.floor(this.colsSum / 2), Math.floor(this.rowsSum / 2)));
        this.placeWhite(cc.v2(cc.v2(Math.floor(this.colsSum / 2) - 1, Math.floor(this.rowsSum / 2))));
        this.placeWhite(cc.v2(cc.v2(Math.floor(this.colsSum / 2), Math.floor(this.rowsSum / 2) - 1)));
    };
    ReversiBoard.prototype.refresh = function () {
        this.graphics2.clear();
        for (var x = 0; x < this.colsSum; x++) {
            for (var y = 0; y < this.rowsSum; y++) {
                if (this.pieceMap[x][y].color === ReversiConstants_1.BLACK) {
                    this.graphics2.strokeColor = cc.Color.BLACK;
                    this.graphics2.fillColor = cc.Color.BLACK;
                    this.graphics2.circle(this.startX + x * this.tileWidth + this.tileWidth / 2, this.startY + y * this.tileWidth + this.tileWidth / 2, this.tileWidth * 0.45);
                    this.graphics2.fill();
                }
                else if (this.pieceMap[x][y].color === ReversiConstants_1.WHITE) {
                    this.graphics2.strokeColor = cc.Color.WHITE;
                    this.graphics2.fillColor = cc.Color.WHITE;
                    this.graphics2.circle(this.startX + x * this.tileWidth + this.tileWidth / 2, this.startY + y * this.tileWidth + this.tileWidth / 2, this.tileWidth * 0.45);
                    this.graphics2.fill();
                }
            }
        }
    };
    ReversiBoard.prototype.placeBlack = function (coor) {
        this.pieceMap[coor.x][coor.y] = new ReversiPiece_1.ReversiPiece(coor.x, coor.y, ReversiConstants_1.BLACK);
        this.lastPiece = this.pieceMap[coor.x][coor.y];
        this.refresh();
    };
    ReversiBoard.prototype.placeWhite = function (coor) {
        this.pieceMap[coor.x][coor.y] = new ReversiPiece_1.ReversiPiece(coor.x, coor.y, ReversiConstants_1.WHITE);
        this.lastPiece = this.pieceMap[coor.x][coor.y];
        this.refresh();
    };
    ReversiBoard.prototype.getPieceByCoor = function (coor) {
        return this.pieceMap[coor.x][coor.y];
    };
    ReversiBoard.prototype.onTouched = function (event) {
        var localPos = this.node.convertToNodeSpaceAR(event.getLocation());
        if (localPos.x < this.startX || localPos.y < this.startY
            || localPos.x > this.startX + this.boardWidth
            || localPos.y > this.startY + this.boardHeight) {
            return;
        }
        var coor = this.getCoorByPos(localPos);
        this.reversiScene.onBoardTouched(coor);
    };
    ReversiBoard.prototype.getCoorByPos = function (pos) {
        var touchCol = Math.round((pos.x - this.startX - this.tileWidth / 2) / this.tileWidth);
        var touchRow = Math.round((pos.y - this.startY - this.tileWidth / 2) / this.tileWidth);
        return cc.v2(touchCol, touchRow);
    };
    ReversiBoard.prototype.nearPiece = function (piece, dir) {
        switch (dir) {
            case 1: //left
                if (piece.x !== 0) {
                    return this.pieceMap[piece.x - 1][piece.y];
                }
                break;
            case 2: //left up
                if (piece.x !== 0 && piece.y !== this.rowsSum - 1) {
                    return this.pieceMap[piece.x - 1][piece.y + 1];
                }
                break;
            case 3: //up
                if (piece.y !== this.rowsSum - 1) {
                    return this.pieceMap[piece.x][piece.y + 1];
                }
                break;
            case 4: //right up
                if (piece.x !== this.colsSum - 1 && piece.y !== this.rowsSum - 1) {
                    return this.pieceMap[piece.x + 1][piece.y + 1];
                }
                break;
            case 5: //right
                if (piece.x !== this.colsSum - 1) {
                    return this.pieceMap[piece.x + 1][piece.y];
                }
                break;
            case 6: //right down
                if (piece.x !== this.colsSum - 1 && piece.y !== 0) {
                    return this.pieceMap[piece.x + 1][piece.y - 1];
                }
                break;
            case 7: //down
                if (piece.y !== 0) {
                    return this.pieceMap[piece.x][piece.y - 1];
                }
                break;
            case 8: //left down
                if (piece.x !== 0 && piece.y !== 0) {
                    return this.pieceMap[piece.x - 1][piece.y - 1];
                }
                break;
            default:
                break;
        }
        return null;
    };
    ReversiBoard.prototype.judgePass = function (stand, piece, dir) {
        var tempPiece = piece;
        tempPiece = this.nearPiece(piece, dir);
        if (tempPiece === null) {
            return false;
        }
        while (tempPiece.color === -stand) {
            tempPiece = this.nearPiece(tempPiece, dir);
            if (tempPiece === null) {
                return false;
            }
            if (tempPiece.color === stand) {
                return true;
            }
        }
        return false;
    };
    ReversiBoard.prototype.changePass = function (piece, dir) {
        var tempPiece = this.nearPiece(piece, dir);
        while (tempPiece.color === -this.reversiScene.state) {
            tempPiece.color = piece.color;
            tempPiece = this.nearPiece(tempPiece, dir);
        }
        this.refresh();
    };
    ReversiBoard.prototype.canPlace = function (color, coor) {
        for (var dir = 1; dir <= 8; dir++) {
            if (this.judgePass(color, this.getPieceByCoor(coor), dir)) {
                return true;
            }
            if (dir === 8) {
                return false;
            }
        }
    };
    ReversiBoard.prototype.judgeMoveable = function (stand) {
        var tryPiece = null;
        for (var x = 0; x < this.colsSum; x++) {
            for (var y = 0; y < this.rowsSum; y++) {
                tryPiece = this.pieceMap[x][y];
                if (tryPiece.color === ReversiConstants_1.NONE) {
                    for (var dir = 1; dir <= 8; dir++) {
                        if (this.judgePass(stand, tryPiece, dir)) {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    };
    ReversiBoard.prototype.judgeWin = function () {
        var selfMoveAble = this.judgeMoveable(this.lastPiece.color);
        var oppoMoveAble = this.judgeMoveable(-this.lastPiece.color);
        if (!selfMoveAble && !oppoMoveAble) {
            return true;
        }
        else {
            return false;
        }
    };
    ReversiBoard.prototype.getPieceCount = function () {
        var blackPieceSum = 0;
        var whitePieceSum = 0;
        for (var x = 0; x < this.pieceMap.length; x++) {
            for (var y = 0; y < this.pieceMap[x].length; y++) {
                if (this.pieceMap[x][y].color === ReversiConstants_1.BLACK) {
                    blackPieceSum++;
                }
                else if (this.pieceMap[x][y].color === ReversiConstants_1.WHITE) {
                    whitePieceSum++;
                }
            }
        }
        return { blackPieceSum: blackPieceSum, whitePieceSum: whitePieceSum };
    };
    ReversiBoard.prototype.addListeners = function () {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouched, this);
    };
    ReversiBoard.prototype.removeListeners = function () {
    };
    __decorate([
        property(cc.Integer)
    ], ReversiBoard.prototype, "colsSum", void 0);
    __decorate([
        property(cc.Integer)
    ], ReversiBoard.prototype, "rowsSum", void 0);
    __decorate([
        property(cc.Graphics)
    ], ReversiBoard.prototype, "graphics", void 0);
    __decorate([
        property(cc.Graphics)
    ], ReversiBoard.prototype, "graphics2", void 0);
    ReversiBoard = __decorate([
        ccclass
    ], ReversiBoard);
    return ReversiBoard;
}(cc.Component));
exports.ReversiBoard = ReversiBoard;

cc._RF.pop();