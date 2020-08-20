"use strict";
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