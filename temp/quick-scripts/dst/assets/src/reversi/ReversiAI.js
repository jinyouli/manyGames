
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/reversi/ReversiAI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxyZXZlcnNpXFxSZXZlcnNpQUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx1REFBd0Q7QUFFeEQ7SUFDSSxtQkFBb0IsS0FBbUI7UUFBbkIsVUFBSyxHQUFMLEtBQUssQ0FBYztJQUFJLENBQUM7SUFFNUMsK0JBQVcsR0FBWDtRQUNJLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3BELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLHVCQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsd0JBQUssRUFBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNuRixPQUFPO29CQUNQLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO3dCQUN0RyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNyQjt5QkFBSTt3QkFDRCxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ2xDO2lCQUNKO2FBQ0o7U0FDSjtRQUNELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0RCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQXBCQSxBQW9CQyxJQUFBO0FBcEJZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmV2ZXJzaUJvYXJkIH0gZnJvbSBcIi4vUmV2ZXJzaUJvYXJkXCI7XG5pbXBvcnQgeyBOT05FLCBCTEFDSywgV0hJVEUgfSBmcm9tIFwiLi9SZXZlcnNpQ29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjbGFzcyBSZXZlcnNpQUkge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYm9hcmQ6IFJldmVyc2lCb2FyZCkgeyB9XG5cbiAgICBnZXROZXh0Q29vcigpOiBjYy5WZWMyIHtcbiAgICAgICAgbGV0IG1vdmVhYmxlTGlzdCA9IFtdO1xuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuYm9hcmQucGllY2VNYXAubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5ib2FyZC5waWVjZU1hcFt4XS5sZW5ndGg7IHkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkLnBpZWNlTWFwW3hdW3ldLmNvbG9yID09PSBOT05FICYmIHRoaXMuYm9hcmQuY2FuUGxhY2UoV0hJVEUsY2MudjIoeCx5KSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5LyY5YWI5Y2g6L65XG4gICAgICAgICAgICAgICAgICAgIGlmICh4ID09PSAwIHx8IHkgPT09IDAgfHwgeCA9PT0gdGhpcy5ib2FyZC5waWVjZU1hcC5sZW5ndGggLSAxIHx8IHkgPT09IHRoaXMuYm9hcmQucGllY2VNYXBbeF0ubGVuZ3RoIC0gMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2MudjIoeCx5KTtcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZlYWJsZUxpc3QucHVzaChjYy52Mih4LCB5KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqbW92ZWFibGVMaXN0Lmxlbmd0aCk7XG4gICAgICAgIHJldHVybiBtb3ZlYWJsZUxpc3Rbbl07XG4gICAgfVxufVxuIl19