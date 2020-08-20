"use strict";
cc._RF.push(module, 'f554edBfB9EGb5YaGb6mEq/', 'ReversiAI');
// src/reversi/ReversiAI.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ReversiAI = void 0;
var ReversiConstants_1 = require("./ReversiConstants");
var ReversiAI = /** @class */ (function () {
    function ReversiAI(board) {
        this.board = board;
    }
    ReversiAI.prototype.getNextCoor = function () {
        var moveableList = [];
        for (var x = 0; x < this.board.pieceMap.length; x++) {
            for (var y = 0; y < this.board.pieceMap[x].length; y++) {
                if (this.board.pieceMap[x][y].color === ReversiConstants_1.NONE && this.board.canPlace(ReversiConstants_1.WHITE, cc.v2(x, y))) {
                    // 优先占边
                    if (x === 0 || y === 0 || x === this.board.pieceMap.length - 1 || y === this.board.pieceMap[x].length - 1) {
                        return cc.v2(x, y);
                    }
                    else {
                        moveableList.push(cc.v2(x, y));
                    }
                }
            }
        }
        var n = Math.floor(Math.random() * moveableList.length);
        return moveableList[n];
    };
    return ReversiAI;
}());
exports.ReversiAI = ReversiAI;

cc._RF.pop();