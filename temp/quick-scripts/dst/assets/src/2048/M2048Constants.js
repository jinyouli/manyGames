
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/2048/M2048Constants.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFwyMDQ4XFxNMjA0OENvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUErQjtBQUMvQixlQUFlO0FBQ2YsYUFBYTtBQUNiLGdCQUFnQjtBQUNoQixjQUFjO0FBQ2QsTUFBTTtBQUNOLElBQVksR0FLWDtBQUxELFdBQVksR0FBRztJQUNYLDZCQUFRLENBQUE7SUFDUix5QkFBTSxDQUFBO0lBQ04sK0JBQVMsQ0FBQTtJQUNULDZCQUFRLENBQUE7QUFDWixDQUFDLEVBTFcsR0FBRyxHQUFILFdBQUcsS0FBSCxXQUFHLFFBS2Q7QUFDRCxJQUFZLEtBSVg7QUFKRCxXQUFZLEtBQUs7SUFDYixpQ0FBUSxDQUFBO0lBQ1IsbUNBQVMsQ0FBQTtJQUNULGlDQUFRLENBQUE7QUFDWixDQUFDLEVBSlcsS0FBSyxHQUFMLGFBQUssS0FBTCxhQUFLLFFBSWhCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXhwb3J0IGNvbnN0IERJUiA9IGNjLkVudW0oe1xuLy8gICAgIExFRlQ6LTEsXG4vLyAgICAgVVA6LTEsXG4vLyAgICAgUklHSFQ6LTEsXG4vLyAgICAgRE9XTjotMVxuLy8gfSk7XG5leHBvcnQgZW51bSBESVJ7XG4gICAgTEVGVCA9IDEsXG4gICAgVVAgPSAyLFxuICAgIFJJR0hUID0gMyxcbiAgICBET1dOID0gNFxufVxuZXhwb3J0IGVudW0gU1RBVEV7XG4gICAgTk9ORSA9IDAsXG4gICAgU1RBUlQgPSAxLFxuICAgIE9WRVIgPSAyXG59Il19