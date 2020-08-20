
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/2048/M2048Piece.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cb9b4J96u9N86ZDPdyznPbw', 'M2048Piece');
// src/2048/M2048Piece.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.M2048Piece = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var M2048Piece = /** @class */ (function (_super) {
    __extends(M2048Piece, _super);
    function M2048Piece() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nLabel = null;
        _this._n = 0;
        return _this;
    }
    Object.defineProperty(M2048Piece.prototype, "n", {
        get: function () {
            return this._n;
        },
        set: function (value) {
            this._n = value;
            var color;
            var str;
            switch (value) {
                case 0:
                    str = "";
                    color = cc.Color.BLACK;
                    break;
                case 2:
                    str = "幼儿园";
                    color = new cc.Color().fromHEX("#784212");
                    break;
                case 4:
                    str = "小学生";
                    color = new cc.Color().fromHEX("#784212");
                    break;
                case 8:
                    str = "初中生";
                    color = new cc.Color().fromHEX("#7E5109");
                    break;
                case 16:
                    str = "高中生";
                    color = new cc.Color().fromHEX("#7D6608");
                    break;
                case 32:
                    str = "大学生";
                    color = new cc.Color().fromHEX("#186A3B");
                    break;
                case 64:
                    str = "研究生";
                    color = new cc.Color().fromHEX("#145A32");
                    break;
                case 128:
                    str = "硕士生";
                    color = new cc.Color().fromHEX("#0B5345");
                    break;
                case 256:
                    str = "博士生";
                    color = new cc.Color().fromHEX("#0E6251");
                    break;
                case 512:
                    str = "实习生";
                    color = new cc.Color().fromHEX("#1B4F72");
                    break;
                case 1024:
                    str = "码农";
                    color = new cc.Color().fromHEX("#154360");
                    break;
                case 2048:
                    str = "码神";
                    color = new cc.Color().fromHEX("#4A235A");
                    break;
                case 4096:
                    str = "女装大佬";
                    color = new cc.Color().fromHEX("#512E5F");
                    break;
                case 8192:
                    str = "众生平等";
                    color = new cc.Color().fromHEX("#78281F");
                    break;
                default:
                    str = "开挂吧你";
                    color = new cc.Color().fromHEX("#641E16");
                    break;
            }
            this.nLabel.string = str;
            this.nLabel.node.color = color;
            // this.nLabel.node.color = this.getHcolor(Math.random(),1);
        },
        enumerable: false,
        configurable: true
    });
    M2048Piece.prototype.init = function (x, y, n) {
        this.x = x;
        this.y = y;
        this.n = n;
    };
    M2048Piece.prototype.randomNumber = function () {
        this.n = Math.random() < 0.9 ? 2 : 4;
    };
    M2048Piece.prototype.getHcolor = function (top, height) {
        var oneHeight = height / 6;
        var d = 0, rgbStr;
        var r = 0, g = 0, b = 0;
        if (top < oneHeight * 1) {
            d = (top / oneHeight) * 255;
            r = 255;
            g = 0;
            b = Math.round(d);
        }
        else if (top >= oneHeight && top < 2 * oneHeight) {
            d = 255 - ((top - oneHeight) / oneHeight) * 255;
            r = Math.round(d);
            g = 0;
            b = 255;
        }
        else if (top >= 2 * oneHeight && top < 3 * oneHeight) {
            d = ((top - 2 * oneHeight) / oneHeight) * 255;
            r = 0;
            g = Math.round(d);
            b = 255;
        }
        else if (top >= 3 * oneHeight && top < 4 * oneHeight) {
            d = 255 - ((top - 3 * oneHeight) / oneHeight) * 255;
            r = 0;
            g = 255;
            b = Math.round(d);
        }
        else if (top >= 4 * oneHeight && top < oneHeight * 5) {
            d = ((top - oneHeight * 4) / oneHeight) * 255;
            r = Math.round(d);
            g = 255;
            b = 0;
        }
        else {
            d = 255 - ((top - oneHeight * 5) / oneHeight) * 255;
            r = 255;
            g = Math.round(d);
            b = 0;
        }
        return cc.color(r, g, b);
    };
    __decorate([
        property(cc.Label)
    ], M2048Piece.prototype, "nLabel", void 0);
    M2048Piece = __decorate([
        ccclass
    ], M2048Piece);
    return M2048Piece;
}(cc.Component));
exports.M2048Piece = M2048Piece;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFwyMDQ4XFxNMjA0OFBpZWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBZ0MsOEJBQVk7SUFBNUM7UUFBQSxxRUFpSUM7UUE5SFUsWUFBTSxHQUFhLElBQUksQ0FBQztRQUl2QixRQUFFLEdBQVcsQ0FBQyxDQUFDOztJQTBIM0IsQ0FBQztJQXpIRyxzQkFBVyx5QkFBQzthQUFaO1lBQ0ksT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ25CLENBQUM7YUFDRCxVQUFhLEtBQWE7WUFDdEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7WUFDaEIsSUFBSSxLQUFlLENBQUM7WUFDcEIsSUFBSSxHQUFXLENBQUM7WUFDaEIsUUFBUSxLQUFLLEVBQUU7Z0JBQ1gsS0FBSyxDQUFDO29CQUNGLEdBQUcsR0FBRyxFQUFFLENBQUM7b0JBQ1QsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO29CQUN2QixNQUFNO2dCQUNWLEtBQUssQ0FBQztvQkFDRixHQUFHLEdBQUcsS0FBSyxDQUFDO29CQUNaLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzFDLE1BQU07Z0JBQ1YsS0FBSyxDQUFDO29CQUNGLEdBQUcsR0FBRyxLQUFLLENBQUM7b0JBQ1osS0FBSyxHQUFHLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDMUMsTUFBTTtnQkFDVixLQUFLLENBQUM7b0JBQ0YsR0FBRyxHQUFHLEtBQUssQ0FBQztvQkFDWixLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUMxQyxNQUFNO2dCQUNWLEtBQUssRUFBRTtvQkFDSCxHQUFHLEdBQUcsS0FBSyxDQUFDO29CQUNaLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzFDLE1BQU07Z0JBQ1YsS0FBSyxFQUFFO29CQUNILEdBQUcsR0FBRyxLQUFLLENBQUM7b0JBQ1osS0FBSyxHQUFHLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDMUMsTUFBTTtnQkFDVixLQUFLLEVBQUU7b0JBQ0gsR0FBRyxHQUFHLEtBQUssQ0FBQztvQkFDWixLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUMxQyxNQUFNO2dCQUNWLEtBQUssR0FBRztvQkFDSixHQUFHLEdBQUcsS0FBSyxDQUFDO29CQUNaLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzFDLE1BQU07Z0JBQ1YsS0FBSyxHQUFHO29CQUNKLEdBQUcsR0FBRyxLQUFLLENBQUM7b0JBQ1osS0FBSyxHQUFHLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDMUMsTUFBTTtnQkFDVixLQUFLLEdBQUc7b0JBQ0osR0FBRyxHQUFHLEtBQUssQ0FBQztvQkFDWixLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUMxQyxNQUFNO2dCQUNWLEtBQUssSUFBSTtvQkFDTCxHQUFHLEdBQUcsSUFBSSxDQUFDO29CQUNYLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzFDLE1BQU07Z0JBQ1YsS0FBSyxJQUFJO29CQUNMLEdBQUcsR0FBRyxJQUFJLENBQUM7b0JBQ1gsS0FBSyxHQUFHLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDMUMsTUFBTTtnQkFDVixLQUFLLElBQUk7b0JBQ0wsR0FBRyxHQUFHLE1BQU0sQ0FBQztvQkFDYixLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUMxQyxNQUFNO2dCQUNWLEtBQUssSUFBSTtvQkFDTCxHQUFHLEdBQUcsTUFBTSxDQUFDO29CQUNiLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzFDLE1BQU07Z0JBQ1Y7b0JBQ0ksR0FBRyxHQUFHLE1BQU0sQ0FBQztvQkFDYixLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUMxQyxNQUFNO2FBQ2I7WUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUMvQiw0REFBNEQ7UUFDaEUsQ0FBQzs7O09BdEVBO0lBd0VNLHlCQUFJLEdBQVgsVUFBWSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVM7UUFDdkMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUVNLGlDQUFZLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU8sOEJBQVMsR0FBakIsVUFBa0IsR0FBVyxFQUFFLE1BQWM7UUFDekMsSUFBSSxTQUFTLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxHQUFHLEdBQUcsU0FBUyxHQUFHLENBQUMsRUFBRTtZQUNyQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQzVCLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDUixDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ04sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckI7YUFBTSxJQUFJLEdBQUcsSUFBSSxTQUFTLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxTQUFTLEVBQUU7WUFDaEQsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUNoRCxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ04sQ0FBQyxHQUFHLEdBQUcsQ0FBQztTQUNYO2FBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLFNBQVMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLFNBQVMsRUFBRTtZQUNwRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQzlDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDTixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQixDQUFDLEdBQUcsR0FBRyxDQUFDO1NBQ1g7YUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsU0FBUyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsU0FBUyxFQUFFO1lBQ3BELENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ3BELENBQUMsR0FBRyxDQUFDLENBQUM7WUFDTixDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ1IsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckI7YUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsU0FBUyxJQUFJLEdBQUcsR0FBRyxTQUFTLEdBQUcsQ0FBQyxFQUFFO1lBQ3BELENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDOUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUNSLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDVDthQUFNO1lBQ0gsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDcEQsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUNSLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDVDtRQUNELE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUE3SEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs4Q0FDWTtJQUh0QixVQUFVO1FBRHRCLE9BQU87T0FDSyxVQUFVLENBaUl0QjtJQUFELGlCQUFDO0NBaklELEFBaUlDLENBakkrQixFQUFFLENBQUMsU0FBUyxHQWlJM0M7QUFqSVksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIE0yMDQ4UGllY2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHB1YmxpYyBuTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIHB1YmxpYyB4OiBudW1iZXI7XG4gICAgcHVibGljIHk6IG51bWJlcjtcbiAgICBwcml2YXRlIF9uOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBnZXQgbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX247XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX24gPSB2YWx1ZTtcbiAgICAgICAgbGV0IGNvbG9yOiBjYy5Db2xvcjtcbiAgICAgICAgbGV0IHN0cjogc3RyaW5nO1xuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgc3RyID0gXCJcIjtcbiAgICAgICAgICAgICAgICBjb2xvciA9IGNjLkNvbG9yLkJMQUNLO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHN0ciA9IFwi5bm85YS/5ZutXCI7XG4gICAgICAgICAgICAgICAgY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiIzc4NDIxMlwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBzdHIgPSBcIuWwj+WtpueUn1wiO1xuICAgICAgICAgICAgICAgIGNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiM3ODQyMTJcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgc3RyID0gXCLliJ3kuK3nlJ9cIjtcbiAgICAgICAgICAgICAgICBjb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjN0U1MTA5XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgICAgICBzdHIgPSBcIumrmOS4reeUn1wiO1xuICAgICAgICAgICAgICAgIGNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiM3RDY2MDhcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgICAgIHN0ciA9IFwi5aSn5a2m55SfXCI7XG4gICAgICAgICAgICAgICAgY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiIzE4NkEzQlwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNjQ6XG4gICAgICAgICAgICAgICAgc3RyID0gXCLnoJTnqbbnlJ9cIjtcbiAgICAgICAgICAgICAgICBjb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjMTQ1QTMyXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxMjg6XG4gICAgICAgICAgICAgICAgc3RyID0gXCLnoZXlo6vnlJ9cIjtcbiAgICAgICAgICAgICAgICBjb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjMEI1MzQ1XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyNTY6XG4gICAgICAgICAgICAgICAgc3RyID0gXCLljZrlo6vnlJ9cIjtcbiAgICAgICAgICAgICAgICBjb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjMEU2MjUxXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA1MTI6XG4gICAgICAgICAgICAgICAgc3RyID0gXCLlrp7kuaDnlJ9cIjtcbiAgICAgICAgICAgICAgICBjb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjMUI0RjcyXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxMDI0OlxuICAgICAgICAgICAgICAgIHN0ciA9IFwi56CB5YacXCI7XG4gICAgICAgICAgICAgICAgY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiIzE1NDM2MFwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjA0ODpcbiAgICAgICAgICAgICAgICBzdHIgPSBcIueggeelnlwiO1xuICAgICAgICAgICAgICAgIGNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiM0QTIzNUFcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQwOTY6XG4gICAgICAgICAgICAgICAgc3RyID0gXCLlpbPoo4XlpKfkvaxcIjtcbiAgICAgICAgICAgICAgICBjb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjNTEyRTVGXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA4MTkyOlxuICAgICAgICAgICAgICAgIHN0ciA9IFwi5LyX55Sf5bmz562JXCI7XG4gICAgICAgICAgICAgICAgY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiIzc4MjgxRlwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgc3RyID0gXCLlvIDmjILlkKfkvaBcIjtcbiAgICAgICAgICAgICAgICBjb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjNjQxRTE2XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubkxhYmVsLnN0cmluZyA9IHN0cjtcbiAgICAgICAgdGhpcy5uTGFiZWwubm9kZS5jb2xvciA9IGNvbG9yO1xuICAgICAgICAvLyB0aGlzLm5MYWJlbC5ub2RlLmNvbG9yID0gdGhpcy5nZXRIY29sb3IoTWF0aC5yYW5kb20oKSwxKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdCh4OiBudW1iZXIsIHk6IG51bWJlciwgbjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMubiA9IG47XG4gICAgfVxuXG4gICAgcHVibGljIHJhbmRvbU51bWJlcigpIHtcbiAgICAgICAgdGhpcy5uID0gTWF0aC5yYW5kb20oKSA8IDAuOSA/IDIgOiA0O1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0SGNvbG9yKHRvcDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xuICAgICAgICBsZXQgb25lSGVpZ2h0ID0gaGVpZ2h0IC8gNjtcbiAgICAgICAgbGV0IGQgPSAwLCByZ2JTdHI7XG4gICAgICAgIGxldCByID0gMCwgZyA9IDAsIGIgPSAwO1xuICAgICAgICBpZiAodG9wIDwgb25lSGVpZ2h0ICogMSkge1xuICAgICAgICAgICAgZCA9ICh0b3AgLyBvbmVIZWlnaHQpICogMjU1O1xuICAgICAgICAgICAgciA9IDI1NTtcbiAgICAgICAgICAgIGcgPSAwO1xuICAgICAgICAgICAgYiA9IE1hdGgucm91bmQoZCk7XG4gICAgICAgIH0gZWxzZSBpZiAodG9wID49IG9uZUhlaWdodCAmJiB0b3AgPCAyICogb25lSGVpZ2h0KSB7XG4gICAgICAgICAgICBkID0gMjU1IC0gKCh0b3AgLSBvbmVIZWlnaHQpIC8gb25lSGVpZ2h0KSAqIDI1NTtcbiAgICAgICAgICAgIHIgPSBNYXRoLnJvdW5kKGQpO1xuICAgICAgICAgICAgZyA9IDA7XG4gICAgICAgICAgICBiID0gMjU1O1xuICAgICAgICB9IGVsc2UgaWYgKHRvcCA+PSAyICogb25lSGVpZ2h0ICYmIHRvcCA8IDMgKiBvbmVIZWlnaHQpIHtcbiAgICAgICAgICAgIGQgPSAoKHRvcCAtIDIgKiBvbmVIZWlnaHQpIC8gb25lSGVpZ2h0KSAqIDI1NTtcbiAgICAgICAgICAgIHIgPSAwO1xuICAgICAgICAgICAgZyA9IE1hdGgucm91bmQoZCk7XG4gICAgICAgICAgICBiID0gMjU1O1xuICAgICAgICB9IGVsc2UgaWYgKHRvcCA+PSAzICogb25lSGVpZ2h0ICYmIHRvcCA8IDQgKiBvbmVIZWlnaHQpIHtcbiAgICAgICAgICAgIGQgPSAyNTUgLSAoKHRvcCAtIDMgKiBvbmVIZWlnaHQpIC8gb25lSGVpZ2h0KSAqIDI1NTtcbiAgICAgICAgICAgIHIgPSAwO1xuICAgICAgICAgICAgZyA9IDI1NTtcbiAgICAgICAgICAgIGIgPSBNYXRoLnJvdW5kKGQpO1xuICAgICAgICB9IGVsc2UgaWYgKHRvcCA+PSA0ICogb25lSGVpZ2h0ICYmIHRvcCA8IG9uZUhlaWdodCAqIDUpIHtcbiAgICAgICAgICAgIGQgPSAoKHRvcCAtIG9uZUhlaWdodCAqIDQpIC8gb25lSGVpZ2h0KSAqIDI1NTtcbiAgICAgICAgICAgIHIgPSBNYXRoLnJvdW5kKGQpO1xuICAgICAgICAgICAgZyA9IDI1NTtcbiAgICAgICAgICAgIGIgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZCA9IDI1NSAtICgodG9wIC0gb25lSGVpZ2h0ICogNSkgLyBvbmVIZWlnaHQpICogMjU1O1xuICAgICAgICAgICAgciA9IDI1NTtcbiAgICAgICAgICAgIGcgPSBNYXRoLnJvdW5kKGQpO1xuICAgICAgICAgICAgYiA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNjLmNvbG9yKHIsIGcsIGIpO1xuICAgIH1cbn0iXX0=