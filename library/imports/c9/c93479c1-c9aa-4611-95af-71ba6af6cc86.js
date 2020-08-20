"use strict";
cc._RF.push(module, 'c9347nByapGEZWvcbpq9syG', 'LinkConstants');
// src/link/LinkConstants.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.PIECE_STATE = exports.STATE = void 0;
var STATE;
(function (STATE) {
    STATE[STATE["NONE"] = 0] = "NONE";
    STATE[STATE["START"] = 1] = "START";
    STATE[STATE["OVER"] = 2] = "OVER";
})(STATE = exports.STATE || (exports.STATE = {}));
var PIECE_STATE;
(function (PIECE_STATE) {
    PIECE_STATE[PIECE_STATE["IDLE"] = 0] = "IDLE";
    PIECE_STATE[PIECE_STATE["PRESS"] = 1] = "PRESS";
})(PIECE_STATE = exports.PIECE_STATE || (exports.PIECE_STATE = {}));

cc._RF.pop();