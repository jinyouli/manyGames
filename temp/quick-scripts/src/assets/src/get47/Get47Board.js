"use strict";
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