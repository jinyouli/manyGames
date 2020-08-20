"use strict";
cc._RF.push(module, '8daa0Je3Z9NaKuqNJt/x5E8', 'M2048Board');
// src/2048/M2048Board.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.M2048Board = void 0;
var M2048Piece_1 = require("./M2048Piece");
var M2048Constants_1 = require("./M2048Constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var M2048Board = /** @class */ (function (_super) {
    __extends(M2048Board, _super);
    function M2048Board() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.colsSum = 4;
        _this.rowsSum = 4;
        _this.graphics = null; // 用来画棋盘
        _this.piecePrefab = null; // 画不了文字，只能用prefab了
        _this.pieceLayer = null;
        _this.tileWidth = 0; // 一个方块的宽度
        _this.startX = 0; // 棋盘左下角
        _this.startY = 0;
        _this.boardWidth = 0; // 棋盘节点宽高
        _this.boardHeight = 0;
        _this.m2048Scene = null;
        return _this;
    }
    M2048Board.prototype.onLoad = function () {
        this.tileWidth = this.node.width / (this.colsSum + 1);
        this.startX = this.tileWidth / 2;
        this.startY = this.tileWidth / 2;
        this.boardWidth = this.tileWidth * this.colsSum;
        this.boardHeight = this.tileWidth * this.rowsSum;
        this.graphics.clear();
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
        // 初始化数字位置
        this.pieceLayer.removeAllChildren();
        this.pieceMap = [];
        for (var x = 0; x < this.colsSum; x++) {
            this.pieceMap[x] = [];
            for (var y = 0; y < this.rowsSum; y++) {
                var piece = cc.instantiate(this.piecePrefab).getComponent(M2048Piece_1.M2048Piece);
                piece.node.parent = this.pieceLayer;
                piece.node.x = this.startX + x * this.tileWidth + this.tileWidth / 2;
                piece.node.y = this.startY + y * this.tileWidth + this.tileWidth / 2;
                this.pieceMap[x][y] = piece;
                piece.init(x, x, 0);
            }
        }
    };
    M2048Board.prototype.init = function (m2048Scene) {
        this.m2048Scene = m2048Scene;
        this.reset();
        this.addListeners();
    };
    M2048Board.prototype.reset = function () {
        for (var x = 0; x < this.colsSum; x++) {
            for (var y = 0; y < this.rowsSum; y++) {
                this.pieceMap[x][y].n = 0;
            }
        }
        for (var i = 0; i < 2; i++) {
            this.newPiece();
        }
    };
    M2048Board.prototype.newPiece = function () {
        var zeroPieces = [];
        for (var x = 0; x < this.colsSum; x++) {
            for (var y = 0; y < this.rowsSum; y++) {
                if (this.pieceMap[x][y].n === 0) {
                    zeroPieces.push(this.pieceMap[x][y]);
                }
            }
        }
        var n = Math.floor(Math.random() * zeroPieces.length);
        zeroPieces[n].randomNumber();
    };
    M2048Board.prototype.judgeOver = function () {
        for (var y = 0; y < this.rowsSum; y++) {
            for (var x = 0; x < this.colsSum; x++) {
                if (this.pieceMap[x][y].n === 0) {
                    return false;
                }
                if (x <= this.colsSum - 2 && this.pieceMap[x][y].n === this.pieceMap[x + 1][y].n) {
                    return false;
                }
                if (y <= this.rowsSum - 2 && this.pieceMap[x][y].n === this.pieceMap[x][y + 1].n) {
                    return false;
                }
            }
        }
        return true;
    };
    M2048Board.prototype.getMaxNLabel = function () {
        var max = 2;
        var str = "2";
        for (var x = 0; x < this.colsSum; x++) {
            for (var y = 0; y < this.rowsSum; y++) {
                if (this.pieceMap[x][y].n > max) {
                    max = this.pieceMap[x][y].n;
                    str = this.pieceMap[x][y].nLabel.string;
                }
            }
        }
        return str;
    };
    M2048Board.prototype.slideLeft = function () {
        //左滑F
        //合并
        var isMove = false;
        for (var y = 0; y < this.rowsSum; y++) {
            for (var x = 0; x < this.colsSum; x++) {
                if (this.pieceMap[x][y].n === 0) {
                    continue;
                }
                for (var x0 = x + 1; x0 < this.colsSum; x0++) {
                    if (this.pieceMap[x0][y].n === 0) {
                        continue;
                    }
                    else if (this.pieceMap[x][y].n === this.pieceMap[x0][y].n) {
                        this.pieceMap[x][y].n *= 2;
                        this.pieceMap[x0][y].n = 0;
                        isMove = true;
                        break;
                    }
                    else {
                        break;
                    }
                }
            }
        }
        //移动
        for (var y = 0; y < this.rowsSum; y++) {
            for (var x = 0; x < this.colsSum; x++) {
                if (this.pieceMap[x][y].n !== 0) {
                    continue;
                }
                for (var x0 = x + 1; x0 < this.rowsSum; x0++) {
                    if (this.pieceMap[x0][y].n === 0) {
                        continue;
                    }
                    else {
                        this.pieceMap[x][y].n = this.pieceMap[x0][y].n;
                        this.pieceMap[x0][y].n = 0;
                        isMove = true;
                        break;
                    }
                }
            }
        }
        if (isMove) {
            this.newPiece();
        }
        return isMove;
    };
    M2048Board.prototype.slideRight = function () {
        //右滑
        //合并
        var isMove = false; //判断是否有tile移动
        for (var y = 0; y < this.rowsSum; y++) {
            for (var x = this.colsSum - 1; x >= 0; x--) {
                if (this.pieceMap[x][y].n === 0) {
                    continue;
                }
                for (var x0 = x - 1; x0 >= 0; x0--) {
                    if (this.pieceMap[x0][y].n === 0) {
                        continue;
                    }
                    else if (this.pieceMap[x][y].n === this.pieceMap[x0][y].n) {
                        this.pieceMap[x][y].n = this.pieceMap[x][y].n * 2;
                        this.pieceMap[x0][y].n = 0;
                        isMove = true;
                        break;
                    }
                    else {
                        break;
                    }
                }
            }
        }
        //移动
        for (var y = 0; y < this.rowsSum; y++) {
            for (var x = this.colsSum - 1; x >= 0; x--) {
                if (this.pieceMap[x][y].n !== 0) {
                    continue;
                }
                for (var x0 = x - 1; x0 >= 0; x0--) {
                    if (this.pieceMap[x0][y].n === 0) {
                        continue;
                    }
                    else {
                        this.pieceMap[x][y].n = this.pieceMap[x0][y].n;
                        this.pieceMap[x0][y].n = 0;
                        isMove = true;
                        break;
                    }
                }
            }
        }
        //有tile移动才添加新的tile
        if (isMove) {
            this.newPiece();
        }
        return isMove;
    };
    M2048Board.prototype.slideDown = function () {
        //下滑
        //合并
        var isMove = false;
        for (var x = 0; x < this.colsSum; x++) {
            for (var y = 0; y < this.rowsSum; y++) {
                if (this.pieceMap[x][y].n === 0) {
                    continue;
                }
                for (var y0 = y + 1; y0 < 4; y0++) {
                    if (this.pieceMap[x][y0].n === 0) {
                        continue;
                    }
                    else if (this.pieceMap[x][y].n === this.pieceMap[x][y0].n) {
                        this.pieceMap[x][y].n = this.pieceMap[x][y].n * 2;
                        this.pieceMap[x][y0].n = 0;
                        isMove = true;
                        break;
                    }
                    else {
                        break;
                    }
                }
            }
        }
        //移动
        for (var x = 0; x < this.colsSum; x++) {
            for (var y = 0; y < this.rowsSum; y++) {
                if (this.pieceMap[x][y].n !== 0) {
                    continue;
                }
                for (var y0 = y + 1; y0 < this.rowsSum; y0++) {
                    if (this.pieceMap[x][y0].n === 0) {
                        continue;
                    }
                    else {
                        this.pieceMap[x][y].n = this.pieceMap[x][y0].n;
                        this.pieceMap[x][y0].n = 0;
                        isMove = true;
                        break;
                    }
                }
            }
        }
        if (isMove) {
            this.newPiece();
        }
        return isMove;
    };
    M2048Board.prototype.slideUp = function () {
        //上滑
        //合并
        var isMove = false;
        for (var x = 0; x < this.colsSum; x++) {
            for (var y = this.rowsSum - 1; y >= 0; y--) {
                if (this.pieceMap[x][y].n === 0) {
                    continue;
                }
                for (var y0 = y - 1; y0 >= 0; y0--) {
                    if (this.pieceMap[x][y0].n === 0) {
                        continue;
                    }
                    else if (this.pieceMap[x][y].n === this.pieceMap[x][y0].n) {
                        this.pieceMap[x][y].n = this.pieceMap[x][y].n * 2;
                        this.pieceMap[x][y0].n = 0;
                        isMove = true;
                        break;
                    }
                    else {
                        break;
                    }
                }
            }
        }
        //移动
        for (var x = 0; x < this.colsSum; x++) {
            for (var y = this.rowsSum - 1; y >= 0; y--) {
                if (this.pieceMap[x][y].n != 0) {
                    continue;
                }
                for (var y0 = y - 1; y0 >= 0; y0--) {
                    if (this.pieceMap[x][y0].n == 0) {
                        continue;
                    }
                    else {
                        this.pieceMap[x][y].n = this.pieceMap[x][y0].n;
                        this.pieceMap[x][y0].n = 0;
                        isMove = true;
                        break;
                    }
                }
            }
        }
        if (isMove) {
            this.newPiece();
        }
        return isMove;
    };
    M2048Board.prototype.onTouched = function (event) {
        var startPos = event.getStartLocation();
        var endPos = event.getLocation();
        var offsetX = endPos.x - startPos.x;
        var offsetY = endPos.y - startPos.y;
        if (Math.abs(offsetX) > Math.abs(offsetY)) {
            if (offsetX > 40) {
                this.m2048Scene.onBoardSlid(M2048Constants_1.DIR.RIGHT);
            }
            else if (offsetX < -40) {
                this.m2048Scene.onBoardSlid(M2048Constants_1.DIR.LEFT);
            }
        }
        else {
            if (offsetY > 40) {
                this.m2048Scene.onBoardSlid(M2048Constants_1.DIR.UP);
            }
            else if (offsetY < -40) {
                this.m2048Scene.onBoardSlid(M2048Constants_1.DIR.DOWN);
            }
        }
    };
    M2048Board.prototype.onKey = function (event) {
        switch (event.keyCode) {
            case cc.KEY.up:
            case cc.KEY.w:
                this.m2048Scene.onBoardSlid(M2048Constants_1.DIR.UP);
                break;
            case cc.KEY.down:
            case cc.KEY.s:
                this.m2048Scene.onBoardSlid(M2048Constants_1.DIR.DOWN);
                break;
            case cc.KEY.left:
            case cc.KEY.a:
                this.m2048Scene.onBoardSlid(M2048Constants_1.DIR.LEFT);
                break;
            case cc.KEY.right:
            case cc.KEY.d:
                this.m2048Scene.onBoardSlid(M2048Constants_1.DIR.RIGHT);
                break;
        }
    };
    M2048Board.prototype.addListeners = function () {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouched, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKey, this);
    };
    M2048Board.prototype.removeListeners = function () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKey, this);
    };
    __decorate([
        property(cc.Integer)
    ], M2048Board.prototype, "colsSum", void 0);
    __decorate([
        property(cc.Integer)
    ], M2048Board.prototype, "rowsSum", void 0);
    __decorate([
        property(cc.Graphics)
    ], M2048Board.prototype, "graphics", void 0);
    __decorate([
        property(cc.Prefab)
    ], M2048Board.prototype, "piecePrefab", void 0);
    __decorate([
        property(cc.Node)
    ], M2048Board.prototype, "pieceLayer", void 0);
    M2048Board = __decorate([
        ccclass,
        executeInEditMode
    ], M2048Board);
    return M2048Board;
}(cc.Component));
exports.M2048Board = M2048Board;

cc._RF.pop();