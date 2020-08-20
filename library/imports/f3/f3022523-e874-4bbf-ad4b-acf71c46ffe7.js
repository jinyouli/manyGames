"use strict";
cc._RF.push(module, 'f3022Uj6HRLv61LrPccRv/n', 'SnakeConstants');
// src/snake/SnakeConstants.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.PIECE_TYPE = exports.DIRECTION = void 0;
var DIRECTION;
(function (DIRECTION) {
    DIRECTION[DIRECTION["LEFT"] = -1] = "LEFT";
    DIRECTION[DIRECTION["UP"] = -2] = "UP";
    DIRECTION[DIRECTION["RIGHT"] = 1] = "RIGHT";
    DIRECTION[DIRECTION["DOWN"] = 2] = "DOWN";
})(DIRECTION = exports.DIRECTION || (exports.DIRECTION = {}));
var PIECE_TYPE;
(function (PIECE_TYPE) {
    PIECE_TYPE[PIECE_TYPE["BLANK"] = 0] = "BLANK";
    PIECE_TYPE[PIECE_TYPE["FOOD"] = 1] = "FOOD";
    PIECE_TYPE[PIECE_TYPE["SNAKE_HEAD"] = 2] = "SNAKE_HEAD";
    PIECE_TYPE[PIECE_TYPE["SNAKE_BODY"] = 3] = "SNAKE_BODY";
    // SNAKE_JOINT = 4,
    PIECE_TYPE[PIECE_TYPE["SNAKE_TAIL"] = 5] = "SNAKE_TAIL";
})(PIECE_TYPE = exports.PIECE_TYPE || (exports.PIECE_TYPE = {}));

cc._RF.pop();