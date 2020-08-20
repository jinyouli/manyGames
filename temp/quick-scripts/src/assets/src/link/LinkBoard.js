"use strict";
cc._RF.push(module, '2905cdKUxxBqrUAlqcuwUGI', 'LinkBoard');
// src/link/LinkBoard.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkBoard = void 0;
var LinkPiece_1 = require("./LinkPiece");
var LinkConstants_1 = require("./LinkConstants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var LinkBoard = /** @class */ (function (_super) {
    __extends(LinkBoard, _super);
    function LinkBoard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.piecePrefab = null;
        _this.colNum = 10;
        _this.colSpace = 5;
        _this.pen = null;
        _this.pictureNum = 8;
        _this.colWidth = 0;
        _this.lastPiece = null;
        _this.linkScene = null;
        return _this;
    }
    LinkBoard.prototype.onLoad = function () {
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
                pieceNode.width = this.colWidth;
                pieceNode.height = this.colWidth;
                var piece = pieceNode.getComponent(LinkPiece_1.Piece);
                this.pieceMap[x][y] = piece;
                // 最外一圈当作墙
                this.pieceMap[x][y].init(x, y, 0);
                this.addTouchEvent(piece);
            }
        }
    };
    LinkBoard.prototype.init = function (linkScene) {
        this.linkScene = linkScene;
    };
    LinkBoard.prototype.reset = function () {
        this.shuffle();
    };
    LinkBoard.prototype.addTouchEvent = function (piece) {
        var _this = this;
        piece.node.on(cc.Node.EventType.TOUCH_END, function () {
            if (piece.type === 0) {
                return;
            }
            if (piece.state === LinkConstants_1.PIECE_STATE.IDLE) {
                if (_this.lastPiece === null) {
                    piece.setState(LinkConstants_1.PIECE_STATE.PRESS);
                    _this.lastPiece = piece;
                }
                else {
                    if (_this.link(_this.lastPiece, piece)) {
                        _this.lastPiece = null;
                        _this.judgeWin();
                    }
                    else {
                        _this.lastPiece.setState(LinkConstants_1.PIECE_STATE.IDLE);
                        piece.setState(LinkConstants_1.PIECE_STATE.PRESS);
                        _this.lastPiece = piece;
                    }
                }
            }
            else if (piece.state === LinkConstants_1.PIECE_STATE.PRESS) {
                piece.setState(LinkConstants_1.PIECE_STATE.IDLE);
                _this.lastPiece = null;
            }
        }, this);
    };
    LinkBoard.prototype.canDirectLink = function (piece1, piece2) {
        if (piece1.x === piece2.x) {
            var minY = Math.min(piece1.y, piece2.y);
            var maxY = Math.max(piece1.y, piece2.y);
            for (var y = minY + 1; y < maxY; y++) {
                if (this.pieceMap[piece1.x][y].type !== 0) {
                    return false;
                }
            }
            return true;
        }
        if (piece1.y === piece2.y) {
            var minX = Math.min(piece1.x, piece2.x);
            var maxX = Math.max(piece1.x, piece2.x);
            for (var x = minX + 1; x < maxX; x++) {
                if (this.pieceMap[x][piece1.y].type !== 0) {
                    return false;
                }
            }
            return true;
        }
        return false;
    };
    LinkBoard.prototype.findCorner = function (piece1, piece2) {
        var c1, c2;
        // 0折
        if (this.canDirectLink(piece1, piece2)) {
            return [true, []];
        }
        // 1折 找一个点
        c1 = this.pieceMap[piece1.x][piece2.y];
        if (c1.type === 0 && this.canDirectLink(c1, piece1) && this.canDirectLink(c1, piece2)) {
            return [true, [c1]];
        }
        c1 = this.pieceMap[piece2.x][piece1.y];
        if (c1.type === 0 && this.canDirectLink(c1, piece1) && this.canDirectLink(c1, piece2)) {
            return [true, [c1]];
        }
        // 2折 找一条线
        for (var x = 0; x < this.colNum; x++) {
            if (x === piece1.x || x === piece2.x) {
                continue;
            }
            c1 = this.pieceMap[x][piece1.y];
            c2 = this.pieceMap[x][piece2.y];
            if (c1.type === 0 && c2.type === 0
                && this.canDirectLink(c1, c2)
                && this.canDirectLink(c1, piece1)
                && this.canDirectLink(c2, piece2)) {
                return [true, [c1, c2]];
            }
        }
        for (var y = 0; y < this.colNum; y++) {
            if (y === piece1.y || y === piece2.y) {
                continue;
            }
            c1 = this.pieceMap[piece1.x][y];
            c2 = this.pieceMap[piece2.x][y];
            if (c1.type === 0 && c2.type === 0
                && this.canDirectLink(c1, c2)
                && this.canDirectLink(c1, piece1)
                && this.canDirectLink(c2, piece2)) {
                return [true, [c1, c2]];
            }
        }
        return [false, null];
    };
    LinkBoard.prototype.link = function (piece1, piece2) {
        if (piece1.type !== piece2.type) {
            return false;
        }
        var _a = this.findCorner(piece1, piece2), pass = _a[0], corners = _a[1];
        if (pass) {
            this.drawLine([piece1].concat(corners).concat(piece2));
            piece1.setType(0);
            piece2.setType(0);
            return true;
        }
        else {
            return false;
        }
    };
    LinkBoard.prototype.drawLine = function (path) {
        var _this = this;
        var pos = this.getPieceCenterPosition(path[0]);
        this.pen.moveTo(pos.x, pos.y);
        for (var i = 1; i < path.length; i++) {
            pos = this.getPieceCenterPosition(path[i]);
            this.pen.lineTo(pos.x, pos.y);
        }
        this.pen.stroke();
        setTimeout(function () {
            _this.clearLine();
        }, 500);
    };
    LinkBoard.prototype.clearLine = function () {
        this.pen.clear();
    };
    LinkBoard.prototype.getPieceCenterPosition = function (piece) {
        var x = piece.x * (this.colWidth + this.colSpace) + this.colSpace + this.colWidth / 2;
        var y = piece.y * (this.colWidth + this.colSpace) + this.colSpace + this.colWidth / 2;
        return cc.v2(x, y);
    };
    LinkBoard.prototype.shuffle = function () {
        var pictureList = [];
        for (var i = 1; i <= 78; i++) {
            pictureList.push(i);
        }
        var pending = [];
        for (var x = 1; x < this.colNum - 1; x++) {
            for (var y = 1; y < this.colNum - 1; y++) {
                pending.push(this.pieceMap[x][y]);
            }
        }
        var p1, p2;
        var pieceNum = Math.pow((this.colNum - 2), 2);
        var rem = pieceNum / 2 % this.pictureNum; // 余数，重复的几对
        var coupleNum = (pieceNum / 2 - rem) / this.pictureNum; // 相同的图片有多少对
        for (var i = 0; i < this.pictureNum; i++) {
            var picture = this.randomPop(pictureList);
            for (var j = 0; j < coupleNum * 2; j++) {
                var p = this.randomPop(pending);
                p.setType(picture);
                p.setState(LinkConstants_1.PIECE_STATE.IDLE);
            }
            if (i < rem) {
                for (var k = 0; k < 2; k++) {
                    var p = this.randomPop(pending);
                    p.setType(picture);
                    p.setState(LinkConstants_1.PIECE_STATE.IDLE);
                }
            }
        }
    };
    LinkBoard.prototype.randomPop = function (arr) {
        var n = Math.random() * arr.length | 0;
        return arr.splice(n, 1)[0];
    };
    LinkBoard.prototype.judgeWin = function () {
        for (var x = 0; x < this.colNum; x++) {
            for (var y = 0; y < this.colNum; y++) {
                if (this.pieceMap[x][y].type !== 0) {
                    return false;
                }
            }
        }
        this.linkScene.overGame();
        return true;
    };
    __decorate([
        property(cc.Prefab)
    ], LinkBoard.prototype, "piecePrefab", void 0);
    __decorate([
        property(cc.Integer)
    ], LinkBoard.prototype, "colNum", void 0);
    __decorate([
        property(cc.Integer)
    ], LinkBoard.prototype, "colSpace", void 0);
    __decorate([
        property(cc.Graphics)
    ], LinkBoard.prototype, "pen", void 0);
    __decorate([
        property(cc.Integer)
    ], LinkBoard.prototype, "pictureNum", void 0);
    LinkBoard = __decorate([
        ccclass,
        executeInEditMode
    ], LinkBoard);
    return LinkBoard;
}(cc.Component));
exports.LinkBoard = LinkBoard;

cc._RF.pop();