
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/gobang/GobangBoard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0c537hphVJHQ529UlnH6eF9', 'GobangBoard');
// src/gobang/GobangBoard.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.GobangBoard = void 0;
var GobangConstants_1 = require("./GobangConstants");
var GobangPiece_1 = require("./GobangPiece");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GobangBoard = /** @class */ (function (_super) {
    __extends(GobangBoard, _super);
    function GobangBoard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.colsSum = 15;
        _this.rowsSum = 15;
        _this.graphics = null; // 用来画棋盘棋子
        _this.graphics2 = null; // 用来画上层UI
        _this.tileWidth = 0; // 一个方块的宽度
        _this.startX = 0; // 棋盘左下角
        _this.startY = 0;
        _this.boardWidth = 0; // 棋盘节点宽高
        _this.boardHeight = 0;
        _this.lastPiece = null;
        _this.gobangScene = null;
        return _this;
    }
    GobangBoard.prototype.init = function (gobangScene) {
        this.gobangScene = gobangScene;
        this.tileWidth = this.node.width / this.colsSum;
        this.startX = this.tileWidth / 2;
        this.startY = this.tileWidth / 2;
        this.boardWidth = this.tileWidth * (this.colsSum - 1);
        this.boardHeight = this.tileWidth * (this.rowsSum - 1);
        this.reset();
        this.addListeners();
    };
    GobangBoard.prototype.reset = function () {
        this.graphics.clear();
        this.graphics2.clear();
        // 画棋盘
        this.graphics.strokeColor = cc.Color.BLACK;
        for (var x = 0; x < this.colsSum; x++) {
            this.graphics.moveTo(this.startX + x * this.tileWidth, this.startY);
            this.graphics.lineTo(this.startX + x * this.tileWidth, this.startY + this.boardHeight);
            this.graphics.stroke();
        }
        for (var y = 0; y < this.rowsSum; y++) {
            this.graphics.moveTo(this.startX, this.startY + y * this.tileWidth);
            this.graphics.lineTo(this.startX + this.boardWidth, this.startY + y * this.tileWidth);
            this.graphics.stroke();
        }
        // 中心点
        this.graphics.strokeColor = cc.Color.RED;
        this.graphics.fillColor = cc.Color.RED;
        var centerCol = Math.floor(this.colsSum / 2);
        var centerRow = Math.floor(this.rowsSum / 2);
        this.graphics.circle(this.startX + centerCol * this.tileWidth, this.startY + centerRow * this.tileWidth, 5);
        this.graphics.fill();
        this.pieceMap = [];
        for (var y = 0; y < this.rowsSum; y++) {
            this.pieceMap[y] = [];
            for (var x = 0; x < this.colsSum; x++) {
                this.pieceMap[y][x] = new GobangPiece_1.GobangPiece(x, y, GobangConstants_1.NONE);
            }
        }
    };
    GobangBoard.prototype.drawLastPieceRect = function () {
        this.graphics2.clear();
        if (this.lastPiece) {
            this.graphics2.strokeColor = cc.Color.RED;
            this.graphics2.rect(this.startX + this.tileWidth * this.lastPiece.x - this.tileWidth / 2, this.startY + this.tileWidth * this.lastPiece.y - this.tileWidth / 2, this.tileWidth, this.tileWidth);
            this.graphics2.stroke();
        }
    };
    GobangBoard.prototype.placeBlack = function (coor) {
        this.graphics.strokeColor = cc.Color.BLACK;
        this.graphics.fillColor = cc.Color.BLACK;
        this.graphics.circle(this.startX + coor.x * this.tileWidth, this.startY + coor.y * this.tileWidth, this.tileWidth * 0.45);
        this.graphics.fill();
        this.pieceMap[coor.x][coor.y] = new GobangPiece_1.GobangPiece(coor.x, coor.y, GobangConstants_1.BLACK);
        this.lastPiece = this.pieceMap[coor.x][coor.y];
        this.drawLastPieceRect();
    };
    GobangBoard.prototype.placeWhite = function (coor) {
        this.graphics.strokeColor = cc.Color.WHITE;
        this.graphics.fillColor = cc.Color.WHITE;
        this.graphics.circle(this.startX + coor.x * this.tileWidth, this.startY + coor.y * this.tileWidth, this.tileWidth * 0.45);
        this.graphics.fill();
        this.pieceMap[coor.x][coor.y] = new GobangPiece_1.GobangPiece(coor.x, coor.y, GobangConstants_1.WHITE);
        this.lastPiece = this.pieceMap[coor.x][coor.y];
        this.drawLastPieceRect();
    };
    GobangBoard.prototype.getPieceByCoor = function (coor) {
        return this.pieceMap[coor.x][coor.y];
    };
    GobangBoard.prototype.onTouched = function (event) {
        var localPos = this.node.convertToNodeSpaceAR(event.getLocation());
        var coor = this.getCoorByPos(localPos);
        this.gobangScene.onBoardTouched(coor);
    };
    GobangBoard.prototype.getCoorByPos = function (pos) {
        var touchCol = Math.round((pos.x - this.startX) / this.tileWidth);
        var touchRow = Math.round((pos.y - this.startY) / this.tileWidth);
        return cc.v2(touchCol, touchRow);
    };
    GobangBoard.prototype.judgeWin = function () {
        //判断横向
        var fiveCount = 0;
        for (var x = 0; x < this.colsSum; x++) {
            if (this.pieceMap[x][this.lastPiece.y].color === this.lastPiece.color) {
                fiveCount++;
                if (fiveCount === 5) {
                    return true;
                }
            }
            else {
                fiveCount = 0;
            }
        }
        //判断纵向
        fiveCount = 0;
        for (var y = 0; y < this.rowsSum; y++) {
            if (this.pieceMap[this.lastPiece.x][y].color === this.lastPiece.color) {
                fiveCount++;
                if (fiveCount == 5) {
                    return true;
                }
            }
            else {
                fiveCount = 0;
            }
        }
        //判断右上斜向
        var f = this.lastPiece.y - this.lastPiece.x;
        fiveCount = 0;
        for (var x = 0; x < this.colsSum; x++) {
            if (f + x < 0 || f + x >= this.rowsSum) {
                continue;
            }
            if (this.pieceMap[x][f + x].color === this.lastPiece.color) {
                fiveCount++;
                if (fiveCount == 5) {
                    return true;
                }
            }
            else {
                fiveCount = 0;
            }
        }
        //判断右下斜向
        f = this.lastPiece.y + this.lastPiece.x;
        fiveCount = 0;
        for (var x = 0; x < 15; x++) {
            if (f - x < 0 || f - x >= this.rowsSum) {
                continue;
            }
            if (this.pieceMap[x][f - x].color === this.lastPiece.color) {
                fiveCount++;
                if (fiveCount == 5) {
                    return true;
                }
            }
            else {
                fiveCount = 0;
            }
        }
        return false;
    };
    GobangBoard.prototype.addListeners = function () {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouched, this);
    };
    GobangBoard.prototype.removeListeners = function () {
    };
    __decorate([
        property(cc.Integer)
    ], GobangBoard.prototype, "colsSum", void 0);
    __decorate([
        property(cc.Integer)
    ], GobangBoard.prototype, "rowsSum", void 0);
    __decorate([
        property(cc.Graphics)
    ], GobangBoard.prototype, "graphics", void 0);
    __decorate([
        property(cc.Graphics)
    ], GobangBoard.prototype, "graphics2", void 0);
    GobangBoard = __decorate([
        ccclass
    ], GobangBoard);
    return GobangBoard;
}(cc.Component));
exports.GobangBoard = GobangBoard;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxnb2JhbmdcXEdvYmFuZ0JvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EscURBQXVEO0FBQ3ZELDZDQUE0QztBQUV0QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFpQywrQkFBWTtJQUE3QztRQUFBLHFFQW9MQztRQWpMVyxhQUFPLEdBQVcsRUFBRSxDQUFDO1FBRXJCLGFBQU8sR0FBVyxFQUFFLENBQUM7UUFFckIsY0FBUSxHQUFnQixJQUFJLENBQUMsQ0FBQyxVQUFVO1FBRXhDLGVBQVMsR0FBZ0IsSUFBSSxDQUFDLENBQUMsVUFBVTtRQUV6QyxlQUFTLEdBQVcsQ0FBQyxDQUFDLENBQUMsVUFBVTtRQUNqQyxZQUFNLEdBQVcsQ0FBQyxDQUFDLENBQUMsUUFBUTtRQUM1QixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLGdCQUFVLEdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUztRQUNqQyxpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUV6QixlQUFTLEdBQWdCLElBQUksQ0FBQztRQUU3QixpQkFBVyxHQUFnQixJQUFJLENBQUM7O0lBaUs1QyxDQUFDO0lBL0pVLDBCQUFJLEdBQVgsVUFBWSxXQUF3QjtRQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUUvQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDaEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFYixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVNLDJCQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkIsTUFBTTtRQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzNDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDdkYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUMxQjtRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3BFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUMxQjtRQUNELE1BQU07UUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUN2QyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0MsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1RyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXJCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3RCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJ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LE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFTyxrQ0FBWSxHQUFwQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFTyxxQ0FBZSxHQUF2QjtJQUVBLENBQUM7SUFoTEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztnREFDUTtJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO2dEQUNRO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7aURBQ2U7SUFFckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztrREFDZ0I7SUFUN0IsV0FBVztRQUR2QixPQUFPO09BQ0ssV0FBVyxDQW9MdkI7SUFBRCxrQkFBQztDQXBMRCxBQW9MQyxDQXBMZ0MsRUFBRSxDQUFDLFNBQVMsR0FvTDVDO0FBcExZLGtDQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29iYW5nU2NlbmUgfSBmcm9tIFwiLi9Hb2JhbmdTY2VuZVwiO1xuaW1wb3J0IHsgTk9ORSwgQkxBQ0ssIFdISVRFIH0gZnJvbSBcIi4vR29iYW5nQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBHb2JhbmdQaWVjZSB9IGZyb20gXCIuL0dvYmFuZ1BpZWNlXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgR29iYW5nQm9hcmQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXG4gICAgcHJpdmF0ZSBjb2xzU3VtOiBudW1iZXIgPSAxNTtcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcbiAgICBwcml2YXRlIHJvd3NTdW06IG51bWJlciA9IDE1O1xuICAgIEBwcm9wZXJ0eShjYy5HcmFwaGljcylcbiAgICBwcml2YXRlIGdyYXBoaWNzOiBjYy5HcmFwaGljcyA9IG51bGw7IC8vIOeUqOadpeeUu+aji+ebmOaji+WtkFxuICAgIEBwcm9wZXJ0eShjYy5HcmFwaGljcylcbiAgICBwcml2YXRlIGdyYXBoaWNzMjogY2MuR3JhcGhpY3MgPSBudWxsOyAvLyDnlKjmnaXnlLvkuIrlsYJVSVxuXG4gICAgcHJpdmF0ZSB0aWxlV2lkdGg6IG51bWJlciA9IDA7IC8vIOS4gOS4quaWueWdl+eahOWuveW6plxuICAgIHByaXZhdGUgc3RhcnRYOiBudW1iZXIgPSAwOyAvLyDmo4vnm5jlt6bkuIvop5JcbiAgICBwcml2YXRlIHN0YXJ0WTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGJvYXJkV2lkdGg6IG51bWJlciA9IDA7IC8vIOaji+ebmOiKgueCueWuvemrmFxuICAgIHByaXZhdGUgYm9hcmRIZWlnaHQ6IG51bWJlciA9IDA7XG4gICAgcHVibGljIHBpZWNlTWFwOiBBcnJheTxBcnJheTxHb2JhbmdQaWVjZT4+O1xuICAgIHB1YmxpYyBsYXN0UGllY2U6IEdvYmFuZ1BpZWNlID0gbnVsbDtcblxuICAgIHByaXZhdGUgZ29iYW5nU2NlbmU6IEdvYmFuZ1NjZW5lID0gbnVsbDtcblxuICAgIHB1YmxpYyBpbml0KGdvYmFuZ1NjZW5lOiBHb2JhbmdTY2VuZSkge1xuICAgICAgICB0aGlzLmdvYmFuZ1NjZW5lID0gZ29iYW5nU2NlbmU7XG5cbiAgICAgICAgdGhpcy50aWxlV2lkdGggPSB0aGlzLm5vZGUud2lkdGggLyB0aGlzLmNvbHNTdW07XG4gICAgICAgIHRoaXMuc3RhcnRYID0gdGhpcy50aWxlV2lkdGggLyAyO1xuICAgICAgICB0aGlzLnN0YXJ0WSA9IHRoaXMudGlsZVdpZHRoIC8gMjtcbiAgICAgICAgdGhpcy5ib2FyZFdpZHRoID0gdGhpcy50aWxlV2lkdGggKiAodGhpcy5jb2xzU3VtIC0gMSk7XG4gICAgICAgIHRoaXMuYm9hcmRIZWlnaHQgPSB0aGlzLnRpbGVXaWR0aCAqICh0aGlzLnJvd3NTdW0gLSAxKTtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0KCkge1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MyLmNsZWFyKCk7XG4gICAgICAgIC8vIOeUu+aji+ebmFxuICAgICAgICB0aGlzLmdyYXBoaWNzLnN0cm9rZUNvbG9yID0gY2MuQ29sb3IuQkxBQ0s7XG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5jb2xzU3VtOyB4KyspIHtcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MubW92ZVRvKHRoaXMuc3RhcnRYICsgeCAqIHRoaXMudGlsZVdpZHRoLCB0aGlzLnN0YXJ0WSk7XG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVUbyh0aGlzLnN0YXJ0WCArIHggKiB0aGlzLnRpbGVXaWR0aCwgdGhpcy5zdGFydFkgKyB0aGlzLmJvYXJkSGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3Muc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnJvd3NTdW07IHkrKykge1xuICAgICAgICAgICAgdGhpcy5ncmFwaGljcy5tb3ZlVG8odGhpcy5zdGFydFgsIHRoaXMuc3RhcnRZICsgeSAqIHRoaXMudGlsZVdpZHRoKTtcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MubGluZVRvKHRoaXMuc3RhcnRYICsgdGhpcy5ib2FyZFdpZHRoLCB0aGlzLnN0YXJ0WSArIHkgKiB0aGlzLnRpbGVXaWR0aCk7XG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOS4reW/g+eCuVxuICAgICAgICB0aGlzLmdyYXBoaWNzLnN0cm9rZUNvbG9yID0gY2MuQ29sb3IuUkVEO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmZpbGxDb2xvciA9IGNjLkNvbG9yLlJFRDtcbiAgICAgICAgbGV0IGNlbnRlckNvbCA9IE1hdGguZmxvb3IodGhpcy5jb2xzU3VtIC8gMik7XG4gICAgICAgIGxldCBjZW50ZXJSb3cgPSBNYXRoLmZsb29yKHRoaXMucm93c1N1bSAvIDIpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmNpcmNsZSh0aGlzLnN0YXJ0WCArIGNlbnRlckNvbCAqIHRoaXMudGlsZVdpZHRoLCB0aGlzLnN0YXJ0WSArIGNlbnRlclJvdyAqIHRoaXMudGlsZVdpZHRoLCA1KTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5maWxsKCk7XG5cbiAgICAgICAgdGhpcy5waWVjZU1hcCA9IFtdO1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMucm93c1N1bTsgeSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBpZWNlTWFwW3ldID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuY29sc1N1bTsgeCsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5waWVjZU1hcFt5XVt4XSA9IG5ldyBHb2JhbmdQaWVjZSh4LCB5LCBOT05FKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZHJhd0xhc3RQaWVjZVJlY3QoKSB7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MyLmNsZWFyKCk7XG4gICAgICAgIGlmICh0aGlzLmxhc3RQaWVjZSkge1xuICAgICAgICAgICAgdGhpcy5ncmFwaGljczIuc3Ryb2tlQ29sb3IgPSBjYy5Db2xvci5SRUQ7XG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzMi5yZWN0KHRoaXMuc3RhcnRYICsgdGhpcy50aWxlV2lkdGggKiB0aGlzLmxhc3RQaWVjZS54IC0gdGhpcy50aWxlV2lkdGggLyAyLFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRZICsgdGhpcy50aWxlV2lkdGggKiB0aGlzLmxhc3RQaWVjZS55IC0gdGhpcy50aWxlV2lkdGggLyAyLFxuICAgICAgICAgICAgICAgIHRoaXMudGlsZVdpZHRoLCB0aGlzLnRpbGVXaWR0aCk7XG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzMi5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBwbGFjZUJsYWNrKGNvb3I6IGNjLlZlYzIpIHtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5zdHJva2VDb2xvciA9IGNjLkNvbG9yLkJMQUNLO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmZpbGxDb2xvciA9IGNjLkNvbG9yLkJMQUNLO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmNpcmNsZSh0aGlzLnN0YXJ0WCArIGNvb3IueCAqIHRoaXMudGlsZVdpZHRoLCB0aGlzLnN0YXJ0WSArIGNvb3IueSAqIHRoaXMudGlsZVdpZHRoLCB0aGlzLnRpbGVXaWR0aCAqIDAuNDUpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmZpbGwoKTtcbiAgICAgICAgdGhpcy5waWVjZU1hcFtjb29yLnhdW2Nvb3IueV0gPSBuZXcgR29iYW5nUGllY2UoY29vci54LCBjb29yLnksIEJMQUNLKTtcbiAgICAgICAgdGhpcy5sYXN0UGllY2UgPSB0aGlzLnBpZWNlTWFwW2Nvb3IueF1bY29vci55XTtcbiAgICAgICAgdGhpcy5kcmF3TGFzdFBpZWNlUmVjdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwbGFjZVdoaXRlKGNvb3I6IGNjLlZlYzIpIHtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5zdHJva2VDb2xvciA9IGNjLkNvbG9yLldISVRFO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmZpbGxDb2xvciA9IGNjLkNvbG9yLldISVRFO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmNpcmNsZSh0aGlzLnN0YXJ0WCArIGNvb3IueCAqIHRoaXMudGlsZVdpZHRoLCB0aGlzLnN0YXJ0WSArIGNvb3IueSAqIHRoaXMudGlsZVdpZHRoLCB0aGlzLnRpbGVXaWR0aCAqIDAuNDUpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmZpbGwoKTtcbiAgICAgICAgdGhpcy5waWVjZU1hcFtjb29yLnhdW2Nvb3IueV0gPSBuZXcgR29iYW5nUGllY2UoY29vci54LCBjb29yLnksIFdISVRFKTtcbiAgICAgICAgdGhpcy5sYXN0UGllY2UgPSB0aGlzLnBpZWNlTWFwW2Nvb3IueF1bY29vci55XTtcbiAgICAgICAgdGhpcy5kcmF3TGFzdFBpZWNlUmVjdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRQaWVjZUJ5Q29vcihjb29yOiBjYy5WZWMyKTogR29iYW5nUGllY2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5waWVjZU1hcFtjb29yLnhdW2Nvb3IueV07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblRvdWNoZWQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcbiAgICAgICAgbGV0IGxvY2FsUG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKGV2ZW50LmdldExvY2F0aW9uKCkpO1xuICAgICAgICBsZXQgY29vciA9IHRoaXMuZ2V0Q29vckJ5UG9zKGxvY2FsUG9zKTtcbiAgICAgICAgdGhpcy5nb2JhbmdTY2VuZS5vbkJvYXJkVG91Y2hlZChjb29yKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldENvb3JCeVBvcyhwb3M6IGNjLlZlYzIpOiBjYy5WZWMyIHtcbiAgICAgICAgbGV0IHRvdWNoQ29sID0gTWF0aC5yb3VuZCgocG9zLnggLSB0aGlzLnN0YXJ0WCkgLyB0aGlzLnRpbGVXaWR0aCk7XG4gICAgICAgIGxldCB0b3VjaFJvdyA9IE1hdGgucm91bmQoKHBvcy55IC0gdGhpcy5zdGFydFkpIC8gdGhpcy50aWxlV2lkdGgpO1xuICAgICAgICByZXR1cm4gY2MudjIodG91Y2hDb2wsIHRvdWNoUm93KTtcbiAgICB9XG5cbiAgICBwdWJsaWMganVkZ2VXaW4oKTogYm9vbGVhbiB7XG4gICAgICAgIC8v5Yik5pat5qiq5ZCRXG4gICAgICAgIGxldCBmaXZlQ291bnQgPSAwO1xuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuY29sc1N1bTsgeCsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5waWVjZU1hcFt4XVt0aGlzLmxhc3RQaWVjZS55XS5jb2xvciA9PT0gdGhpcy5sYXN0UGllY2UuY29sb3IpIHtcbiAgICAgICAgICAgICAgICBmaXZlQ291bnQrKztcbiAgICAgICAgICAgICAgICBpZiAoZml2ZUNvdW50ID09PSA1KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZml2ZUNvdW50ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL+WIpOaWree6teWQkVxuICAgICAgICBmaXZlQ291bnQgPSAwO1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMucm93c1N1bTsgeSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5waWVjZU1hcFt0aGlzLmxhc3RQaWVjZS54XVt5XS5jb2xvciA9PT0gdGhpcy5sYXN0UGllY2UuY29sb3IpIHtcbiAgICAgICAgICAgICAgICBmaXZlQ291bnQrKztcbiAgICAgICAgICAgICAgICBpZiAoZml2ZUNvdW50ID09IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaXZlQ291bnQgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8v5Yik5pat5Y+z5LiK5pac5ZCRXG4gICAgICAgIGxldCBmID0gdGhpcy5sYXN0UGllY2UueSAtIHRoaXMubGFzdFBpZWNlLng7XG4gICAgICAgIGZpdmVDb3VudCA9IDA7XG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5jb2xzU3VtOyB4KyspIHtcbiAgICAgICAgICAgIGlmIChmICsgeCA8IDAgfHwgZiArIHggPj0gdGhpcy5yb3dzU3VtKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5waWVjZU1hcFt4XVtmICsgeF0uY29sb3IgPT09IHRoaXMubGFzdFBpZWNlLmNvbG9yKSB7XG4gICAgICAgICAgICAgICAgZml2ZUNvdW50Kys7XG4gICAgICAgICAgICAgICAgaWYgKGZpdmVDb3VudCA9PSA1KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZml2ZUNvdW50ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL+WIpOaWreWPs+S4i+aWnOWQkVxuICAgICAgICBmID0gdGhpcy5sYXN0UGllY2UueSArIHRoaXMubGFzdFBpZWNlLng7XG4gICAgICAgIGZpdmVDb3VudCA9IDA7XG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgMTU7IHgrKykge1xuICAgICAgICAgICAgaWYgKGYgLSB4IDwgMCB8fCBmIC0geCA+PSB0aGlzLnJvd3NTdW0pIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnBpZWNlTWFwW3hdW2YgLSB4XS5jb2xvciA9PT0gdGhpcy5sYXN0UGllY2UuY29sb3IpIHtcbiAgICAgICAgICAgICAgICBmaXZlQ291bnQrKztcbiAgICAgICAgICAgICAgICBpZiAoZml2ZUNvdW50ID09IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaXZlQ291bnQgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoZWQsIHRoaXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVtb3ZlTGlzdGVuZXJzKCkge1xuXG4gICAgfVxufSJdfQ==