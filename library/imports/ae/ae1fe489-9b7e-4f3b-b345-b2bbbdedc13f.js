"use strict";
cc._RF.push(module, 'ae1feSJm35PO7NFsru97cE/', 'M2048Constants');
// src/2048/M2048Constants.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.STATE = exports.DIR = void 0;
// export const DIR = cc.Enum({
//     LEFT:-1,
//     UP:-1,
//     RIGHT:-1,
//     DOWN:-1
// });
var DIR;
(function (DIR) {
    DIR[DIR["LEFT"] = 1] = "LEFT";
    DIR[DIR["UP"] = 2] = "UP";
    DIR[DIR["RIGHT"] = 3] = "RIGHT";
    DIR[DIR["DOWN"] = 4] = "DOWN";
})(DIR = exports.DIR || (exports.DIR = {}));
var STATE;
(function (STATE) {
    STATE[STATE["NONE"] = 0] = "NONE";
    STATE[STATE["START"] = 1] = "START";
    STATE[STATE["OVER"] = 2] = "OVER";
})(STATE = exports.STATE || (exports.STATE = {}));

cc._RF.pop();