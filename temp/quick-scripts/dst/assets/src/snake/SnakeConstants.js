
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/snake/SnakeConstants.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzbmFrZVxcU25ha2VDb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFZLFNBS1g7QUFMRCxXQUFZLFNBQVM7SUFDakIsMENBQVMsQ0FBQTtJQUNULHNDQUFPLENBQUE7SUFDUCwyQ0FBUyxDQUFBO0lBQ1QseUNBQVEsQ0FBQTtBQUNaLENBQUMsRUFMVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUtwQjtBQUVELElBQVksVUFPWDtBQVBELFdBQVksVUFBVTtJQUNsQiw2Q0FBUyxDQUFBO0lBQ1QsMkNBQVEsQ0FBQTtJQUNSLHVEQUFjLENBQUE7SUFDZCx1REFBYyxDQUFBO0lBQ2QsbUJBQW1CO0lBQ25CLHVEQUFjLENBQUE7QUFDbEIsQ0FBQyxFQVBXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBT3JCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gRElSRUNUSU9OIHtcbiAgICBMRUZUID0gLTEsXG4gICAgVVAgPSAtMixcbiAgICBSSUdIVCA9IDEsXG4gICAgRE9XTiA9IDJcbn1cblxuZXhwb3J0IGVudW0gUElFQ0VfVFlQRSB7XG4gICAgQkxBTksgPSAwLFxuICAgIEZPT0QgPSAxLFxuICAgIFNOQUtFX0hFQUQgPSAyLFxuICAgIFNOQUtFX0JPRFkgPSAzLFxuICAgIC8vIFNOQUtFX0pPSU5UID0gNCxcbiAgICBTTkFLRV9UQUlMID0gNVxufVxuIl19