"use strict";
cc._RF.push(module, '377f1wDS+ZNiK34Bo00vs8d', 'MineConstans');
// src/mine/MineConstans.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.PIECE_STATE = exports.PIECE_TYPE = exports.STATE = void 0;
var STATE;
(function (STATE) {
    STATE[STATE["NONE"] = 0] = "NONE";
    STATE[STATE["START"] = 1] = "START";
    STATE[STATE["OVER"] = 2] = "OVER";
})(STATE = exports.STATE || (exports.STATE = {}));
var PIECE_TYPE;
(function (PIECE_TYPE) {
    PIECE_TYPE[PIECE_TYPE["OPEN0"] = 0] = "OPEN0";
    PIECE_TYPE[PIECE_TYPE["OPEN1"] = 1] = "OPEN1";
    PIECE_TYPE[PIECE_TYPE["OPEN2"] = 2] = "OPEN2";
    PIECE_TYPE[PIECE_TYPE["OPEN3"] = 3] = "OPEN3";
    PIECE_TYPE[PIECE_TYPE["OPEN4"] = 4] = "OPEN4";
    PIECE_TYPE[PIECE_TYPE["OPEN5"] = 5] = "OPEN5";
    PIECE_TYPE[PIECE_TYPE["OPEN6"] = 6] = "OPEN6";
    PIECE_TYPE[PIECE_TYPE["OPEN7"] = 7] = "OPEN7";
    PIECE_TYPE[PIECE_TYPE["OPEN8"] = 8] = "OPEN8";
    PIECE_TYPE[PIECE_TYPE["BOMB"] = 9] = "BOMB";
})(PIECE_TYPE = exports.PIECE_TYPE || (exports.PIECE_TYPE = {}));
var PIECE_STATE;
(function (PIECE_STATE) {
    PIECE_STATE[PIECE_STATE["PENDING"] = 1] = "PENDING";
    PIECE_STATE[PIECE_STATE["FLAG"] = 2] = "FLAG";
    PIECE_STATE[PIECE_STATE["OPEN"] = 3] = "OPEN";
})(PIECE_STATE = exports.PIECE_STATE || (exports.PIECE_STATE = {}));

cc._RF.pop();